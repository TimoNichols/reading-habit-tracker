# Quick Setup

## First Time

1. Clone repo
2. Install: `npm run install:all`
3. Create database: `createdb reading_habit_tracker`
4. Run schema: `psql -d reading_habit_tracker -f db/schema.sql`
5. Run seed: `psql -d reading_habit_tracker -f db/seed.sql`
6. Create `backend/.env` with your database URL
7. Start: `npm run dev`

## Daily

1. `git pull`
2. `npm run dev`
3. Open http://localhost:5173
