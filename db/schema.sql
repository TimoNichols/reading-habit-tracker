-- Reading Habit Tracker Database Schema
-- Run this file to create all tables

-- Drop tables if they exist (for development)
DROP TABLE IF EXISTS user_accessories CASCADE;
DROP TABLE IF EXISTS user_avatars CASCADE;
DROP TABLE IF EXISTS user_goal_progress CASCADE;
DROP TABLE IF EXISTS reading_logs CASCADE;
DROP TABLE IF EXISTS friendships CASCADE;
DROP TABLE IF EXISTS goals CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(100) UNIQUE,
  current_streak INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create goals table (fixed goals)
CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'minutes', 'pages', 'books_started', 'books_finished'
  target INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reading_logs table
CREATE TABLE reading_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_title VARCHAR(255),
  minutes_read INTEGER DEFAULT 0,
  pages_read INTEGER DEFAULT 0,
  date DATE NOT NULL,
  finished BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_goal_progress table (tracks user progress on each goal)
CREATE TABLE user_goal_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
  current_progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, goal_id)
);

-- Create user_avatars table
CREATE TABLE user_avatars (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  animal_id VARCHAR(50) DEFAULT 'lion',
  background_id VARCHAR(50) DEFAULT 'bg_default',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_accessories table (many-to-many relationship)
CREATE TABLE user_accessories (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  accessory_id VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, accessory_id)
);

-- Create friendships table (for future friend system)
CREATE TABLE friendships (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  friend_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'accepted'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, friend_id),
  CHECK (user_id != friend_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_reading_logs_user_id ON reading_logs(user_id);
CREATE INDEX idx_reading_logs_date ON reading_logs(date);
CREATE INDEX idx_user_goal_progress_user_id ON user_goal_progress(user_id);
CREATE INDEX idx_user_goal_progress_goal_id ON user_goal_progress(goal_id);
