import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'waitlist.db')
const db = new Database(dbPath)

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export function addToWaitlist(email: string) {
  try {
    const stmt = db.prepare('INSERT INTO waitlist (email) VALUES (?)')
    const result = stmt.run(email)
    return { success: true, id: result.lastInsertRowid }
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return { success: false, error: 'Email already registered' }
    }
    return { success: false, error: 'Failed to add to waitlist' }
  }
}

export function getWaitlistCount() {
  const stmt = db.prepare('SELECT COUNT(*) as count FROM waitlist')
  const result = stmt.get() as { count: number }
  return result.count
}

export function getAllWaitlistEntries() {
  const stmt = db.prepare('SELECT * FROM waitlist ORDER BY created_at DESC')
  return stmt.all() as Array<{
    id: number
    email: string
    created_at: string
  }>
}

export default db