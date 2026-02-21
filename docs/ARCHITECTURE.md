# System Architecture

## Overview

Three-tier architecture: React Frontend → Express Backend → PostgreSQL Database

## Data Flow

1. User interacts with React frontend
2. Frontend sends HTTP request to Express API
3. Backend queries PostgreSQL database
4. Database returns data
5. Backend sends JSON response to frontend
6. Frontend updates UI

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/reading-logs` - Get reading logs
- `POST /api/reading-logs` - Create reading log

## Database Tables

- users
- reading_logs
- goals
- user_goal_progress
- user_avatars
- user_accessories
- friendships
