# lonniebruton.com

Static personal site (photography + writing). Interim splash page; WordPress retired July 2026.

- **Deploy:** Cloudflare Worker + static assets, `public/` is the site root (`wrangler.jsonc`). Push to `main` deploys via Workers Builds. Only `public/` is served.
- **Docs:** in-repo vault at `DocVault/` (start at `DocVault/Overview.md`). This repo is public, so infra detail goes in `Devops/DocVault/Projects/lonniebruton.com/` (`vault-path private`).
- **Issues:** Plane, Web Portals project (prefix `WWW`, shared with `lbruton.github.io`; see `.claude/project.json`).
- **Git:** `main` only. Use a worktree and PR for changes.
- **Never commit `temp/`.** It holds local backup extracts.
