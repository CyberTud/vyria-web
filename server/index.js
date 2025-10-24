const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Create tables on startup
async function initDatabase() {
  try {
    // Waitlist table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Feedback table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Database initialized');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initDatabase();

// Helper functions
async function addToWaitlist(email) {
  try {
    const result = await pool.query(
      'INSERT INTO waitlist (email) VALUES ($1) RETURNING id',
      [email]
    );
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    if (error.code === '23505') { // Unique violation
      return { success: false, error: 'Email already registered' };
    }
    console.error('Database error:', error);
    return { success: false, error: 'Failed to add to waitlist' };
  }
}

async function getWaitlistCount() {
  const result = await pool.query('SELECT COUNT(*) FROM waitlist');
  return parseInt(result.rows[0].count);
}

async function getAllWaitlistEntries() {
  const result = await pool.query('SELECT * FROM waitlist ORDER BY created_at DESC');
  return result.rows;
}

// Feedback helper functions
async function addFeedback(name, email, category, message) {
  try {
    const result = await pool.query(
      'INSERT INTO feedback (name, email, category, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, category, message]
    );
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, error: 'Failed to submit feedback' };
  }
}

async function getFeedbackCount() {
  const result = await pool.query('SELECT COUNT(*) as count FROM feedback');
  return parseInt(result.rows[0].count);
}

async function getAllFeedback() {
  const result = await pool.query('SELECT * FROM feedback ORDER BY created_at DESC');
  return result.rows;
}

async function updateFeedbackStatus(id, status) {
  try {
    await pool.query(
      'UPDATE feedback SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
      [status, id]
    );
    return { success: true };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, error: 'Failed to update feedback status' };
  }
}

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Add to waitlist
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Please provide a valid email' });
    }

    const result = await addToWaitlist(email);

    if (result.success) {
      const count = await getWaitlistCount();
      return res.json({
        success: true,
        message: 'Successfully added to waitlist!',
        position: count
      });
    } else {
      return res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get waitlist count
app.get('/api/waitlist', async (req, res) => {
  try {
    const count = await getWaitlistCount();
    res.json({ count });
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    res.status(500).json({ error: 'Failed to get waitlist count' });
  }
});

// Get all waitlist entries (protected)
app.post('/api/waitlist/all', async (req, res) => {
  try {
    const { password } = req.body;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'tudorregele';

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const entries = await getAllWaitlistEntries();
    res.json({ entries });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ error: 'Failed to fetch waitlist' });
  }
});

// Submit feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, category, message } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Please provide a valid email' });
    }

    if (!category || !message) {
      return res.status(400).json({ error: 'Category and message are required' });
    }

    const result = await addFeedback(name, email, category, message);

    if (result.success) {
      const count = await getFeedbackCount();
      return res.json({
        success: true,
        message: 'Thank you for your feedback! We\'ll review it and may feature it on our site.',
        id: result.id,
        totalFeedback: count
      });
    } else {
      return res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get feedback count
app.get('/api/feedback/count', async (req, res) => {
  try {
    const count = await getFeedbackCount();
    res.json({ count });
  } catch (error) {
    console.error('Error getting feedback count:', error);
    res.status(500).json({ error: 'Failed to get feedback count' });
  }
});

// Get all feedback (protected)
app.post('/api/feedback/all', async (req, res) => {
  try {
    const { password } = req.body;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'tudorregele';

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const feedback = await getAllFeedback();
    res.json({ feedback });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

// Update feedback status (protected)
app.post('/api/feedback/status', async (req, res) => {
  try {
    const { password, id, status } = req.body;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'tudorregele';

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    if (!id || !status) {
      return res.status(400).json({ error: 'ID and status are required' });
    }

    const result = await updateFeedbackStatus(id, status);

    if (result.success) {
      res.json({ success: true, message: 'Feedback status updated' });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error updating feedback status:', error);
    res.status(500).json({ error: 'Failed to update feedback status' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});