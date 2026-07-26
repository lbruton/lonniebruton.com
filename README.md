# lonniebruton.com

Static site for [lonniebruton.com](https://lonniebruton.com) — photography and writing.

## Status

**Interim splash page.** The previous WordPress site (Namecheap EasyWP) was retired in
July 2026; its content was fully backed up (EasyWP files + database TARs, WXR export,
and a static wget mirror) before cancellation. This repo currently serves an
under-construction page while the permanent replacement is designed.

## Hosting

- **Platform:** Cloudflare Pages, auto-deploy on push to `main`
- **Domain:** `lonniebruton.com` (registered at Namecheap; DNS moves to Cloudflare at cutover)

## Structure

Plain static HTML — no build step. `index.html` is the entire site for now.
The long-term plan is a static site generator (Hugo/Astro/Eleventy) fed by the
converted WordPress export, in the same GitHub + Cloudflare pattern as StakTrakr.
