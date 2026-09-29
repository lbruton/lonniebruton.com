---
tags: []
doc_type: overview
project: lonniebruton
source: manual
aliases: ["lonniebruton.com Overview", "lonniebruton.com"]
created: "2026-09-28"
updated: "2026-09-28"
---

# lonniebruton.com

Static site for [lonniebruton.com](https://lonniebruton.com): photography and writing.

## At a Glance

| Field | Value |
| --- | --- |
| Repo | [lbruton/lonniebruton.com](https://github.com/lbruton/lonniebruton.com) (public) |
| Stack | Plain static HTML, no build step; `src/worker.js` handles the www → apex redirect |
| Hosting | Cloudflare Worker with static assets (`wrangler.jsonc`, `assets.directory: ./public`), deployed by Workers Builds on push to `main` |
| Domains | `lonniebruton.com` (canonical), `www.lonniebruton.com` (301 → apex) |
| Status | Interim splash page. The WordPress site (EasyWP) was retired in July 2026 after a full backup |
| Plane | Tracked under the Portfolio project, prefix `WWW` |

## History

The previous WordPress site on Namecheap EasyWP was retired in July 2026. Before cancelling, its content was fully backed up: EasyWP files, database TARs, a WXR export and a static wget mirror.

## Plan

A static site generator (Hugo, Astro or Eleventy) fed by the converted WordPress export, following the same GitHub + Cloudflare pattern as StakTrakr.

## Docs

- Vault: this folder (`DocVault/`). Only `public/` is web-served, so the vault is never published.
- Onboarding follow-ups (Infisical binding, dedicated Plane project?): DEVS-103.
