# CIRAS-AI website implementation notes

## What changed

- The previous CIRAS website is preserved under `/legacy/` with a bilingual notice linking to the new site.
- The new bilingual CIRAS-AI landing page is available at `/` (Spanish) and `/en/` (English).
- The implementation remains fully static and uses the existing HTML5 UP Stellar runtime assets plus a readable project-specific stylesheet at `assets/css/ciras-ai.css`.
- `CNAME`, the HTML5 UP licence and GitHub Pages compatibility files are preserved.

## Public content and privacy

- The team list is based on the supplied CIRAS-AI member spreadsheet.
- Individual member email addresses are not exposed on the new pages.
- The only public contact address is `sebastian.perez.ma@usach.cl`.
- Sebastián Pérez Márquez links to his official USACH profile. Jenny Blamey Alegría is left unlinked until an official profile URL is supplied.

## Image optimization

- The hero image is delivered as WebP with an optimized JPEG fallback.
- A separate 1200 × 630 Open Graph image was generated for social sharing.
- CIRAS, VRIIC and USACH logos retain high-resolution source detail. Transparent whitespace is trimmed where useful, but the logos are not downscaled; they are only losslessly recompressed.
- Favicon and Apple touch icon files were generated.
- Legacy photographs were resized to sensible display dimensions, metadata was stripped and JPEGs were recompressed only when this reduced file size.
- Redundant image ZIP archives and macOS `.DS_Store` files were removed from the deployable package.

## Tests performed

- Spanish, English and legacy pages were rendered in a headless browser.
- Desktop and 390 px mobile layouts were checked.
- No horizontal overflow was detected.
- All four images on each new landing page loaded successfully.
- All 44 images on the legacy homepage loaded successfully.
- No browser console or JavaScript errors remained in the tested pages.
- Local HTML, stylesheet, script and image references were checked for missing files.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

- `http://localhost:8000/`
- `http://localhost:8000/en/`
- `http://localhost:8000/legacy/`

## Visual palette update

The public CIRAS-AI pages now use a modern hybrid palette: charcoal (`#111827`), violet (`#7C6CFF`), teal (`#2DD4BF`), terracotta (`#E76F51`), and warm off-white (`#F4F1EA`). The legacy website remains visually unchanged.

## Revision: simpler editorial design

- Converted all root-relative logo, language, favicon and legacy links to file-safe relative paths, so opening `index.html` directly now loads local assets.
- Removed the numerical highlight strip, pill-shaped navigation, tag chips, circular section icons, abstract gradient circles and most card decoration.
- Replaced the three pillar icons with optimized representative images.
- Retained the selected hybrid palette but now uses it only as restrained accents.
- High-resolution logo source dimensions remain unchanged.
