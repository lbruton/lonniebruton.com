# lonniebruton.com

Static site for [lonniebruton.com](https://lonniebruton.com) — photography and writing.

## Status

**Interim splash page.** The previous WordPress site (Namecheap EasyWP) was retired in
July 2026; its content was fully backed up (EasyWP files + database TARs, WXR export,
and a static wget mirror) before cancellation. This repo currently serves an
under-construction page while the permanent replacement is designed.

## Hosting

- **Platform:** Cloudflare Worker with static assets (`wrangler.jsonc`), deployed via Workers Builds on push to `main`
- **Domains:** `lonniebruton.com` (canonical) and `www.lonniebruton.com` (301 → apex), attached as Worker custom domains
- **DNS:** Cloudflare (registered at Namecheap). Proton Mail MX/SPF/DKIM/DMARC records must stay **DNS only** — never proxy the `_domainkey` CNAMEs

## Structure

Plain static HTML — no build step. `public/` is the site root (`public/index.html` is the entire site for now); `src/worker.js` handles the www redirect.
The long-term plan is a static site generator (Hugo/Astro/Eleventy) fed by the
converted WordPress export, in the same GitHub + Cloudflare pattern as StakTrakr.
