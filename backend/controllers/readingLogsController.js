import pool from '../db/index.js';

// GET /api/reading-logs
export const getReadingLogs = async (req, res) => {
  try {
    // For now, use user_id = 1 (default user)
    // Later, this will come from authentication
    const userId = 1;
    
    const result = await pool.query(
      'SELECT * FROM reading_logs WHERE user_id = $1 ORDER BY date DESC, created_at DESC',
      [userId]
    );
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching reading logs:', error);
    res.status(500).json({ error: 'Failed to fetch reading logs' });
  }
};

// POST /api/reading-logs
export const createReadingLog = async (req, res) => {
  try {
    const { bookTitle, minutes, pages, date, finished } = req.body;
    const userId = 1; // Default user for now
    
    // Insert reading log
    const result = await pool.query(
      `INSERT INTO reading_logs (user_id, book_title, minutes_read, pages_read, date, finished)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [userId, bookTitle || 'Untitled Book', minutes || 0, pages || 0, date || new Date().toISOString().split('T')[0], finished || false]
    );
    
    const newLog = result.rows[0];
    
    // TODO: Update goal progress and streak
    // This will be implemented in the next iteration
    
    res.status(201).json(newLog);
  } catch (error) {
    console.error('Error creating reading log:', error);
    res.status(500).json({ error: 'Failed to create reading log' });
  }
};
