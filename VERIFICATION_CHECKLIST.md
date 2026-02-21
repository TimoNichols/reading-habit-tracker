# Verification Checklist

Use this checklist to verify the repository can be cloned and set up successfully.

## Pre-Flight Check

- [ ] All files are committed and pushed to GitHub
- [ ] Repository is accessible to team members
- [ ] README.md contains correct repository URL

## Setup Verification

### 1. Clone Repository

```bash
git clone https://github.com/garettwoolley/reading-habit-tracker.git
cd reading-habit-tracker
```

- [ ] Repository clones successfully
- [ ] All folders are present (frontend/, backend/, db/)

### 2. Install Dependencies

```bash
npm run install:all
```

- [ ] No errors during installation
- [ ] node_modules folders are created in root, frontend, and backend

### 3. Database Setup

```bash
# Create database
psql -U postgres
CREATE DATABASE reading_habit_tracker;
\q

# Run schema
psql -U postgres -d reading_habit_tracker -f db/schema.sql

# Run seed
psql -U postgres -d reading_habit_tracker -f db/seed.sql
```

- [ ] Database is created
- [ ] Tables are created (no errors)
- [ ] Sample data is inserted

### 4. Environment Setup

Create `backend/.env` file with:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/reading_habit_tracker
PORT=3001
```

- [ ] backend/.env file is created
- [ ] Database credentials are configured correctly

### 5. Run Application

```bash
npm run dev
```

- [ ] Backend starts on port 3001
- [ ] Frontend starts on port 5173
- [ ] Application opens at http://localhost:5173
- [ ] No errors in browser console

### 6. Basic Functionality Test

- [ ] Can navigate between pages
- [ ] Home page displays correctly
- [ ] Log Reading page loads
- [ ] Form displays correctly

## Required Files

Verify these files exist in the repository:

- [ ] `db/schema.sql` - Database table definitions
- [ ] `db/seed.sql` - Sample data
- [ ] `backend/server.js` - Express server
- [ ] `backend/routes/readingLogs.js` - API routes
- [ ] `backend/controllers/readingLogsController.js` - Request handlers
- [ ] `frontend/src/App.jsx` - Main React component
- [ ] `frontend/src/context/AppContext.jsx` - State management
- [ ] `package.json` in root, frontend, and backend directories
- [ ] `README.md` - Project documentation

## Common Issues

- [ ] All dependencies listed in package.json files
- [ ] No hardcoded file paths
- [ ] Database scripts compatible with standard PostgreSQL
- [ ] Ports 3001 and 5173 are available

## Success Criteria

All checks completed successfully indicates the repository is ready for team use.
