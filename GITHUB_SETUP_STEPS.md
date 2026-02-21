# GitHub Setup Steps

## Step 1: Check Your Git Connection

✅ **Your Git is configured:**
- Name: Garett
- Email: garettwoolley@gmail.com

✅ **Your folder is a Git repository** (ready to go!)

## Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill out the form:**
   - Repository name: `reading-habit-tracker` (or whatever you want)
   - Description: "Reading habit tracking app - PERN stack"
   - **Make it Public** (or Private if you prefer)
   - **DO NOT** check "Initialize with README" (we already have one)
   - **DO NOT** add .gitignore or license (we have those)
5. **Click "Create repository"**

## Step 3: Connect Your Local Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Make sure you're in the project folder
cd "/Users/gswoolley/AI Prototype"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: PERN stack reading habit tracker"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/reading-habit-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

## Step 4: Add Team Members

1. Go to your repository on GitHub
2. Click **Settings** (top right of repo page)
3. Click **Collaborators** (left sidebar)
4. Click **Add people**
5. Enter team member GitHub usernames
6. **Add `taforlauracutler`** (required for assignment)

## Step 5: Verify It Worked

Go to your repository URL: `https://github.com/YOUR_USERNAME/reading-habit-tracker`

You should see all your files there!

## Troubleshooting

**"Permission denied" when pushing:**
- You might need to authenticate. GitHub may ask for username/password
- If you have 2FA enabled, you'll need a Personal Access Token instead of password
- To create token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

**"Repository not found":**
- Check the repository URL is correct
- Make sure you created the repository on GitHub first
- Verify your GitHub username is correct

**"Already exists" error:**
- The remote might already be set. Check with: `git remote -v`
- If it's wrong, remove it: `git remote remove origin` then add it again
