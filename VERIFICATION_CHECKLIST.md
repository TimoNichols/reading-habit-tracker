# Verification Checklist

Use this to verify someone can clone and set up the repository successfully.

## ✅ Pre-Flight Check (Before Testing)

- [ ] All files are committed and pushed to GitHub
- [ ] Repository is public (or team members have access)
- [ ] README.md has correct repository URL

## 📋 Setup Test (Have someone else test this)

Ask a team member (or test yourself in a fresh folder) to:

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
```bash
# Copy example file
cp .env.example backend/.env

# Edit backend/.env with actual database credentials
```
- [ ] .env.example file exists
- [ ] Can create backend/.env file
- [ ] Can edit with database credentials

### 5. Run Application
```bash
npm run dev
```
- [ ] Backend starts on port 3001
- [ ] Frontend starts on port 5173
- [ ] Can open http://localhost:5173 in browser
- [ ] App loads without errors

### 6. Test Basic Functionality
- [ ] Can navigate between pages
- [ ] Can see home page with stats
- [ ] Can access Log Reading page
- [ ] Form loads correctly

## 🔍 Files to Verify Are Present

Check these files exist in the repository:

- [ ] `db/schema.sql` - Creates database tables
- [ ] `db/seed.sql` - Sample data
- [ ] `backend/server.js` - Express server
- [ ] `backend/routes/readingLogs.js` - API routes
- [ ] `backend/controllers/readingLogsController.js` - Controllers
- [ ] `frontend/src/App.jsx` - Main React app
- [ ] `frontend/src/context/AppContext.jsx` - State management
- [ ] `package.json` files in root, frontend, and backend
- [ ] `README.md` - Documentation
- [ ] `.env.example` - Environment variable template

## 🐛 Common Issues to Check

- [ ] No missing dependencies in package.json
- [ ] No hardcoded paths that won't work on other machines
- [ ] Database scripts work with standard PostgreSQL setup
- [ ] Ports 3001 and 5173 are available (or configurable)

## ✅ Success Criteria

If all checks pass, the repository is ready for team use!
