# Sovereign Portfolio

The professional portfolio of Pragyan Dev, featuring architectural design, cinematic effects, and AI-moderated access.

## Commands to push to GitHub

If you encountered a "divergent branches" error, it's because the remote repository has files (like a README or License) that you don't have locally. Run these commands to synchronize and push:

```bash
# 1. Reconcile the histories
git pull origin main --allow-unrelated-histories

# 2. If a text editor opens for a merge message, save and close it (:wq in vim)

# 3. Push your code
git push -u origin main
```

**Alternative (Force Push):**
If the repository on GitHub is empty or you don't care about its current contents, you can simply overwrite it:

```bash
git push -u origin main --force
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Typography**: Libre Bodoni (Headline) & Inter (Body)
- **AI**: Genkit (Google Gemini 2.5 Flash)
