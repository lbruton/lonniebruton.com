# Kodachrome Roadside — locked design concept

Chosen direction for the new lonniebruton.com (Option 2 of five explored). This is the
reference for building the first drafts: tokens, components, pages and the photo data model.

- **Canvas (source of truth for visuals):** https://claude.ai/artifact/RhKoKZKupCo5y2wngWj5Ua
  → page tab **"Option 2 · detailed"**. The canvas is private to its owner.
- **Mockup source:** [`mockups/`](mockups/) holds the six artboard files as exported from the
  canvas. They are Design-canvas components (`.dc.html`), not site pages: images point at
  canvas asset URLs (`/_blob/…`) and they need the canvas runtime to render. Read them for exact
  spacing, sizes and markup, then rebuild as plain HTML/CSS.
- **Tokens:** [`tokens.css`](tokens.css).

## The idea

The site is a slide carousel. Every photograph sits in a **cardboard slide mount** with the film
stock (or `DIGITAL`) printed across the top and place/date across the bottom, laid out on a
**light table**. Around it: motel-sign chrome (yellow header, red slab wordmark, red and teal
stripes), typewriter labels and chunky bordered buttons with hard offset shadows.

Two rules keep it from fighting the photos:

1. **Loud chrome, quiet walls.** Colour lives in the header, buttons and category tags. The
   surfaces behind photos stay cream or near-black.
2. **Dark room toggle.** Night, neon and B&W work switches the light table to a warm near-black
   wall (`--darkroom`). The choice is remembered per visitor in `localStorage`.

The **framed-print look** (black frame, white mat, the way Darkroom previews prints) appears only
on the photo page and in posts, as a "this is what you can buy" preview. Mounts = the gallery;
frame = the product.

## Tokens

| Role | Value |
|---|---|
| Page / card / mount | `#F3EAD6` / `#FFFCF3` / `#F7F1E1` |
| Ink (text, borders, shadows) | `#2B1D12` |
| Header yellow | `#F6B81A` |
| Red (wordmark, print CTA, PRINT badge) | `#B3221A` |
| Teal (stripe, DevOps, Projects) | `#0B6867` |
| Purple (Concerts & Vinyl) | `#5E2A7E` |
| Dark room / projector | `#1E1712` |

Type: **Alfa Slab One** (display, headings, slide titles) · **Courier Prime** (nav, labels,
buttons, metadata, text on mounts) · **Libre Franklin** (body). All from Google Fonts.

Headings carry a hard text shadow: `text-shadow: 6px 6px 0 var(--yellow)` on page titles.

## Components

| Component | Spec |
|---|---|
| **Header** | Yellow band, `22px 80px` padding. Left: `LONNIE BRUTON` in Alfa Slab, red, 32px. Right nav in Courier Prime bold uppercase 16px: **Photographs · Projects · Field Notes · About**, then a red **Prints ↗** button to Darkroom. Active item = ink background, yellow text. Below: two 7px stripes, red then teal, 5px apart. |
| **Page title row** | Title on one line (Alfa Slab 112px). Filters/sort go on their **own row below**, between two 3px ink rules — never beside the title. |
| **Slide mount** | Square, `--mount` fill, 1px `--mount-edge` border, 10px radius, `--mount-shadow`. Top line: stock + slide number (Courier bold 10–13px, tracked). Window: 3:2 landscape or 2:3 portrait (vertical mount), 14px radius, `object-fit: cover`. Bottom line: place · date. Sizes used: 228, 266, 320, 380, 460. |
| **PRINT badge** | 48–64px red circle, ink border, white Courier bold "PRINT", rotated 12°, overlapping the mount's top-right corner. Shown when the photo has a Darkroom listing. |
| **Button** | Courier Prime bold, 3px ink border, hard offset shadow (`--shadow-sm`/`--shadow`). Yellow = primary internal action; red = buy/print (external ↗); cream = secondary. External links end in ↗, internal in → or ▸. |
| **Card** | `--card` fill, 3px ink border, 6px offset shadow. Optional category header strip (category colour, Courier bold 14px, category left / date right). |
| **Index card** | Metadata panel: cream with blue ruled lines every 32px, 6px red top border, Courier 15px, `Label ··· value` rows. |
| **Projector** | Dark panel (`--darkroom`) holding a large photo with an 8–10px cream border and a soft yellow glow; caption strip in yellow Courier. |
| **Carousel tray card** | Collection card: colour bar on top, two stacked mounts (back one rotated −8°), name + slide count. |
| **Framed print preview** | Black 14–22px frame, white mat, on a warm wall swatch; frame-colour chips Black / White / Natural (mirrors Darkroom's options). |

## Pages (IA)

Nav order: **Photographs · Projects · Field Notes · About** + **Prints ↗** (Darkroom).

1. **Home** — hero (title + "Load the carousel" / "Buy prints"), projector with a featured
   photo; **This weekend's slide** feature (mount + opening lines + Read / Framed print / Flickr);
   **Carousel trays** (collections); **Fresh off the scanner** (5 newest); latest **Field Notes**;
   **Projects** band (lbruton.cc, StakTrakr); footer with Darkroom, Flickr, Instagram
   (@lonnie.bruton), Facebook (lonnieb.photography), lbruton.cc, RSS.
2. **Photographs** — title row; filter row: trays (All · Route 66 · Air Shows · Street · Night &
   Chrome · Concerts), sort (**Shuffle** default · Date taken · Date added), background toggle
   (Light / Dark). 4-column light table of 266px mounts with title + camera/film under each.
   "Advance the carousel · next 12" pagination.
3. **Photo page** — breadcrumb (Photographs / tray / Slide NNN) with prev · random · next;
   projector + index card; CTAs **Buy a print (Darkroom ↗)**, **Read the field note →**,
   **View on Flickr ↗**; "Take it home" framed-print preview; tags; "Also posted to";
   "More from this tray" strip.
4. **Field Notes** — title row; categories: All · ★ Weekend Slides · Photography · DevOps ·
   Networking · Concerts & Vinyl; search; featured Weekend Slide; 3-column card grid (photo
   posts may carry an image); Older notes / WordPress archive.
5. **Field Note (Weekend Slide post)** — tags, title, byline; dark panel with the large mount and
   metadata tiles (Where, When, Format, Stock, Camera, Lens); 760px body column in the author's
   own words; right rail with framed-print preview + Buy a print, "Also posted to", copy link;
   prev/next notes.
6. **Projects** — lbruton.cc feature card (teal), then cards for StakTrakr, this site and the
   Weekend Slide pipeline; GitHub link. Deep technical write-ups live on lbruton.cc; notes here
   are the short versions and link across.

Desktop mockups are 1440px wide. Phone layouts still need designing: collapse the nav to a menu,
one-column cards, two-column mounts, 16px side gutters, no horizontal scroll.

## Photo data model

One record per photo (e.g. `content/photos/<slug>.json` or Markdown front matter). Fields the
pages above use; leave a field out when unknown rather than guessing.

```yaml
slug: oktoberfest-vendor
number: 71                 # slide number shown on the mount
title: Oktoberfest Vendor
trays: [street]            # route-66 | air-shows | street | night-chrome | concerts
medium: film               # film | digital
orientation: landscape     # landscape | portrait (portrait gets a vertical mount)
room: light                # light | dark — preferred background
taken: 2023-10             # ISO date, as precise as known
added: 2026-09-27
location: Tulsa, OK
# film
format: 35mm
stock: CineStill 800T
camera: null
lens: null
scan: null
# digital (read from EXIF at build time)
exif: { camera: , lens: , focal_length: , aperture: , shutter: , iso: , exposure_comp: , gps: }
caption: null
tags: [oktoberfest, tulsa, cinestill]
links:
  darkroom: https://lonniebruton.darkroom.com/products/1542833
  flickr: null
  instagram: null
  facebook: null
field_note: weekend-slide-001-oktoberfest-vendor
image: { src: , width: , height: , alt: }
```

## Weekend Slide workflow

1. Pick 1–3 frames from the backlog.
2. Metadata is read from EXIF (digital) or entered/copied from the Darkroom listing (film).
3. Lonnie writes the field note. The words stay his; tooling drafts only structure and captions.
4. The build produces the gallery entry and the post, and drafts Flickr / Instagram / Facebook
   captions. Every page links to the others and to the Darkroom print.

## Open items

- Real photos: 71-image Route 66 set plus air shows, street and concerts from the local export
  (the canvas uses a few originals and low-res crops of the Darkroom page as stand-ins).
- Hero photo: Desert Hills Motel night shot is the preferred home hero.
- StakTrakr description, per-photo Darkroom URLs, Flickr URLs.
- About page content.
- Phone layouts.
