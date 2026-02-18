# Sovereign Portfolio

The professional portfolio of Pragyan Dev, featuring architectural design, cinematic effects, and AI-moderated access.

## Commands to push to GitHub (Rogue-Emperor)

If you encountered a "divergent branches" error, it's because the remote repository has files (like a README or License) that you don't have locally. Run these commands to force your local code to become the remote `main` branch:

```bash
# 1. Initialize (if not already done)
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial portfolio release"

# 4. Ensure you are on the 'main' branch locally
git branch -M main

# 5. Connect to your repo (if not already done)
git remote add origin https://github.com/Rogue-Emperor/Rogue-Emperor.git

# 6. Force push to overwrite remote 'main' with your local 'main'
git push -u origin main --force
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Typography**: Libre Bodoni (Headline) & Inter (Body)
- **AI**: Genkit (Google Gemini 2.5 Flash)
