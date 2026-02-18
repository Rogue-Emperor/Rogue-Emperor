# Sovereign Portfolio

The professional portfolio of Pragyan Dev, featuring architectural design, cinematic effects, and AI-moderated access.

## GitHub Workflow (Rogue-Emperor)

### First Time Setup / Overwriting Remote
If you have a fresh repo or need to force your local code to be the "main" version on GitHub:

```bash
# 1. Initialize
git init

# 2. Add and Commit
git add .
git commit -m "Initial portfolio release"

# 3. Branch and Remote
git branch -M main
git remote add origin https://github.com/Rogue-Emperor/Rogue-Emperor.git

# 4. Force Push (Overwrites remote main)
git push -u origin main --force
```

### Pushing Regular Updates
Once your repository is linked, use these commands for everyday changes:

```bash
# 1. Stage changes
git add .

# 2. Commit changes
git commit -m "Update: [Brief description of what you changed]"

# 3. Push to GitHub
git push origin main
```

### Pulling Changes from GitHub
If you have made changes directly on GitHub (e.g., edited a file in the browser) or are working from a different machine, use this to sync your local environment:

```bash
# Fetch and merge changes from the remote main branch
git pull origin main
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Typography**: Libre Bodoni (Headline) & Inter (Body)
- **AI**: Genkit (Google Gemini 2.5 Flash)
