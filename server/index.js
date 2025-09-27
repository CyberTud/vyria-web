const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.join(__dirname, 'waitlist.db');
const db = new Database(dbPath);

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Helper functions
function addToWaitlist(email) {
  try {
    const stmt = db.prepare('INSERT INTO waitlist (email) VALUES (?)');
    const result = stmt.run(email);
    return { success: true, id: result.lastInsertRowid };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return { success: false, error: 'Email already registered' };
    }
    return { success: false, error: 'Failed to add to waitlist' };
  }
}

function getWaitlistCount() {
  const stmt = db.prepare('SELECT COUNT(*) as count FROM waitlist');
  const result = stmt.get();
  return result.count;
}

function getAllWaitlistEntries() {
  const stmt = db.prepare('SELECT * FROM waitlist ORDER BY created_at DESC');
  return stmt.all();
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

    const result = addToWaitlist(email);

    if (result.success) {
      const count = getWaitlistCount();
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
    const count = getWaitlistCount();
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

    const entries = getAllWaitlistEntries();
    res.json({ entries });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ error: 'Failed to fetch waitlist' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});