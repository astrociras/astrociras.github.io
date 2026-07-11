# Latest CIRAS-AI website package

This directory includes the complete bilingual CIRAS-AI website and the legacy site.

Latest refinements include:
- quieter editorial visual style;
- faster menu scrolling;
- high-resolution CIRAS isotype in the hero;
- VRIIC-only institutional strip;
- Gabriel Ruete as Subdirector ejecutivo / Executive Deputy Director;
- highlighted Comunidad de Aprendizaje;
- linked institutional profiles for principal investigators;
- ALeRCE Broker removed;
- research/project staff section retained as an HTML comment.

Main pages:
- `/index.html` — Spanish
- `/en/index.html` — English
- `/legacy/index.html` — previous CIRAS website


## Further refinement

- Added a concise discipline beside every principal investigator.
- Added a clear explanation of CIRAS as a USACH Centre Programme and of the expansion to CIRAS-AI through FIU funding.
- Simplified the hero copy and made the background photograph fully visible on mobile.
- Reduced the institutional strip to the VRIIC logo.
- Removed “Universidad de Santiago de Chile” from the contact block.
- Reworded the legacy link around the CIRAS Centre Programme.
- Applied all changes to both Spanish and English pages.


## USACH branding refinement

- Corrected the VRIIC logo so its native proportions are always preserved.
- Removed conflicting fixed image dimensions and maximum-height constraints.
- Added very subtle official USACH green (`#00A499`) and orange (`#EA7600`) accents.
- Institutional colours are limited to a 2-pixel band, small list markers, focus states and selected typographic details.


## FIU update

- Added the funding acknowledgement code `FIUF137139-USACH` to the site.
- Added an FIU USACH logo in white alongside the VRIIC logo in the institutional band.
- Drew a clean scalable SVG version of the FIU logo for dark-background use.
- Improved the Learning Community button with a clearer, more polished call-to-action style.


## FIU logo and palette correction

- Replaced the approximate FIU vector redraw with a faithful white version derived directly from the supplied original logo.
- Preserved the original icon, lettering and typography, removed only the blue background, and generated a 3× high-resolution transparent PNG.
- Moved the CIRAS isotype from the hero to the “De CIRAS a CIRAS-AI / From CIRAS to CIRAS-AI” section.
- Reworked the Learning Community call-to-action using the established violet palette.
- Increased the use of violet across labels, lists, links and selected borders while retaining teal and terracotta only as secondary accents.
- Kept USACH green and orange confined to the subtle two-pixel institutional signature.


## Final visual tweaks

- Reduced the displayed FIU logo size for a crisper appearance.
- Removed the redundant horizontal rule above the CIRAS isotype.
- Replaced Stellar's light-blue Learning Community button with a solid violet button and darker violet hover state.
- Removed the remaining teal tint from the Learning Community background.


## Source-code cleanup

- Removed all embedded CSS from the Spanish and English `index.html` files.
- Moved the shared page CSS into `assets/css/ciras-ai.css`.
- Removed the page-level inline hero style.
- Moved the custom scrolling JavaScript into `assets/js/ciras-ai.js`.
- Reformatted both HTML files with consistent indentation.
- Added `MAINTENANCE.md` with a short guide to the site structure.


## Inferno palette and source readability

- Replaced the blue foundation with a near-black principal colour.
- Added a restrained Inferno-inspired purple, magenta, orange and amber palette.
- Reduced the FIU logo by 15% relative to its previous visual size beside VRIIC.
- Reformatted all paragraphs as single readable source lines.
- Removed formatting whitespace that could produce visible gaps around `<strong>` and `<em>` text.


## Partner links and visual updates

- Added links for Núcleo Milenio YEMS, Fundación Astrodiálogos, Fundación Biociencia, Oficina de la Nada and Grupo PO-EX.
- Replaced the first research-pillar image with the supplied Vera C. Rubin Observatory photograph.
- Added the supplied Rubin Observatory image credit in Spanish and English.
- Gave the Ejes/Pillars section a pale smoky-plum background.
- Replaced the compact footer mark with the supplied full CIRAS logo.


## Image-credit placement

- Added the hero-image credit directly over the lower corner of the hero.
- Added a source credit immediately beneath each of the three pillar images.
- Linked each credit to the official ESO or NOIRLab image page.
- Replaced the long duplicate footer credit with a short note.


## Final image changes

- Removed the visible credit overlay from the front-page hero.
- Kept the hero-image credit in the footer.
- Added the ESO ALMA panorama as the background of the Chile section.
- Added a discreet source credit within the Chile section.
- Added optimized JPEG and WebP versions of the new background.
