# Barira Rashid — Portfolio

A public research portfolio: remote sensing, geospatial AI, and phosphorus sustainability.
Static site, no build step, no dependencies to install. Hosted free on GitHub Pages.

**Live site:** https://YOURUSERNAME.github.io ← *(update after step 4)*

---

## 1. Put it on GitHub (first time only)

### The easy way — no command line

1. Sign up / sign in at [github.com](https://github.com).
2. Click **+** (top right) → **New repository**.
3. Name it **exactly** `YOURUSERNAME.github.io` (your real username — this special
   name gives you a clean URL). Set **Public**. Don't add a README (you have one).
   Click **Create repository**.
4. On the new repo page click **uploading an existing file**.
5. Drag in **everything from this folder** — `index.html`, `404.html`, `README.md`,
   `LICENSE`, `robots.txt`, `sitemap.xml`, and the whole `assets` folder.
   > ⚠️ Keep the folder structure. `assets/css/styles.css` must stay at that path.
   > ⚠️ `.nojekyll` is a hidden file — if your file picker hides it, see *Troubleshooting*.
6. Scroll down, click **Commit changes**.
7. Go to **Settings → Pages**. Under *Build and deployment → Source* pick
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Click **Save**.
8. Wait 1–2 minutes, then visit `https://YOURUSERNAME.github.io`. Done.

### The command-line way

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

Then do step 7 above.

---

## 2. Edit your content

**Almost everything lives in one file: [`assets/js/data.js`](assets/js/data.js).**
You don't touch HTML or CSS for normal updates.

| I want to… | Go to `data.js` → |
|---|---|
| Add a publication | `publications:` — copy a `{ ... }` block, edit it |
| Add an award | `honors:` |
| Link a story map | `storymaps:` → paste into `url: ""` |
| Fix my ORCID / Scholar link | `profile.links` |
| Change my tagline or bio | `profile.thesis` / `about.paragraphs` |
| Add a degree or move a map pin | `degrees:` (drives **both** the map pins and the timeline) |
| Add a field site to the map | `fieldSites:` |
| Add a CV download button | put `cv.pdf` in `assets/`, set `profile.cv: "assets/cv.pdf"` |

**Editing rules:** keep the `"quotes"`, end each item with a comma, and copy an
existing block rather than writing one from scratch. If the page goes blank after
an edit, you dropped a quote or comma — press `F12` in the browser, read the red
error, fix that line.

### Editing on GitHub (no tools needed)
Open the file in your repo → click the ✏️ pencil → edit → **Commit changes**.
The live site updates in about a minute.

---

## 3. Preview locally before you publish

Double-clicking `index.html` works. For a more faithful preview:

```bash
cd this-folder
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

---

## 4. Go-live checklist

Search the project for `YOURUSERNAME` and replace it in:

- [ ] `index.html` — `og:url` and `<link rel="canonical">`
- [ ] `robots.txt` — sitemap line
- [ ] `sitemap.xml` — `<loc>`
- [ ] `README.md` — the live-site link at the top

Then:

- [ ] Fill in the three `storymaps` URLs in `data.js`
- [ ] Replace the ORCID and Scholar **search links** with your real profile URLs
- [ ] Add the PhosForUs podcast URL (`outreach`)
- [ ] Verify author order on all publications
- [ ] Add your remaining publications (ResearchGate lists 8)

---

## 5. Custom domain (optional)

1. Buy a domain (Namecheap, Cloudflare, Porkbun…).
2. In the repo: **Settings → Pages → Custom domain** → enter it → **Save**.
   This creates a `CNAME` file. Tick **Enforce HTTPS**.
3. At your registrar, add DNS records:
   - `A` records for the apex (`example.com`) → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `YOURUSERNAME.github.io`
4. DNS takes 10 minutes to a few hours.

---

## Project structure

```
.
├── index.html          # page skeleton — section shells only
├── 404.html            # "off the map" error page
├── assets/
│   ├── css/styles.css  # all styling; re-theme via the :root palette
│   ├── js/data.js      # ← YOUR CONTENT. Edit this one.
│   ├── js/main.js      # renders data.js into the page + builds the map
│   └── img/favicon.svg
├── robots.txt          # search-engine directives
├── sitemap.xml         # helps Google index the site
├── .nojekyll           # tells GitHub Pages to serve files as-is
├── LICENSE             # MIT (code); content © Barira Rashid
└── README.md
```

## How it's built

- **No framework, no build step.** Plain HTML/CSS/JS — it will still work in ten years.
- **[Leaflet](https://leafletjs.com/)** for the journey map, with a
  [CARTO](https://carto.com/basemaps/) dark basemap over
  [OpenStreetMap](https://www.openstreetmap.org/copyright) data. Both free; attribution
  is in the map footer and must stay.
- **Type:** Fraunces (display) + Hanken Grotesk (body) + IBM Plex Mono (metadata), via Google Fonts.
- **Palette:** false-color remote sensing — vegetation-magenta `#FF5C8A`, water-teal `#19C7B6`,
  detection-gold `#FFC24B` on deep indigo. Change these in `:root` in `styles.css` to re-theme everything.
- Responsive, keyboard-focusable, honours `prefers-reduced-motion`.

## Troubleshooting

**Site is a wall of unstyled text.** `assets/` didn't upload, or the folder structure
broke. Confirm `assets/css/styles.css` exists in the repo at that exact path.

**Page is blank.** A syntax error in `data.js`. Press `F12` → Console → read the red line.

**Map area is empty / dark.** It needs internet for basemap tiles. Offline or
strict network filtering will do this; it works fine once deployed.

**Nothing changed after committing.** Hard-refresh (`Ctrl/Cmd + Shift + R`). GitHub Pages
takes ~1 minute to rebuild. Check the **Actions** tab for a failed deploy.

**Markdown README is showing instead of the site.** `index.html` isn't at the repo root,
or the `.nojekyll` file is missing. Create the file on GitHub: **Add file → Create new file**,
name it `.nojekyll`, leave it empty, commit.
