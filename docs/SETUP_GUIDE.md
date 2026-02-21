# Quick Setup

## First Time

1. Clone repo: `git clone https://github.com/garettwoolley/reading-habit-tracker.git`
2. Install: `npm run install:all`
3. Create database: `createdb reading_habit_tracker` (or use `psql -U postgres` then `CREATE DATABASE reading_habit_tracker;`)
4. Run schema: `psql -U postgres -d reading_habit_tracker -f db/schema.sql`
5. Run seed: `psql -U postgres -d reading_habit_tracker -f db/seed.sql`
6. Create `backend/.env` with: `DATABASE_URL=postgresql://username:password@localhost:5432/reading_habit_tracker` and `PORT=3001`
7. Start: `npm run dev`

## Daily

1. `git pull`
2. `npm run dev`
3. Open http://localhost:5173
