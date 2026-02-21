# GitHub Setup

## Initial Setup

1. Create GitHub repository
2. Add team members as collaborators
3. Add `taforlauracutler` as collaborator
4. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Team Workflow

1. Pull latest: `git pull origin main`
2. Create branch: `git checkout -b feature/name`
3. Make changes and commit
4. Push branch: `git push origin feature/name`
5. Create Pull Request on GitHub
6. Get review and merge
