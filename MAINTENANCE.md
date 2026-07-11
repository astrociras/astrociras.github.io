# CIRAS-AI website maintenance

The site is deliberately static and has no build step.

## Main content

- `index.html`: Spanish page content
- `en/index.html`: English page content
- `legacy/`: previous Programa Centro CIRAS website

The two HTML files now contain only page structure, text, links and image references.
They contain no embedded CSS or page-specific JavaScript.

## Styling

- `assets/css/main.css`: original HTML5 UP Stellar stylesheet
- `assets/css/ciras-ai.css`: all CIRAS-AI-specific styling and visual overrides
- `assets/css/noscript.css`: fallback when JavaScript is disabled

For most visual changes, edit only `assets/css/ciras-ai.css`.

## JavaScript

- `assets/js/main.js`: original HTML5 UP behavior
- `assets/js/ciras-ai.js`: CIRAS-AI-specific menu scrolling behavior

## Images and logos

- `images/backgrounds/`
- `images/branding/`
- `images/pillars/`
- `images/meta/`

## Bilingual updates

When changing wording or adding a section, update both:

1. `index.html`
2. `en/index.html`

The pages share the same CSS and JavaScript.


## HTML paragraph formatting

Long `<p>` elements are intentionally kept on a single source line. This avoids
accidental spaces around inline elements such as `<strong>` and `<em>`, and
makes the prose easier to read and edit directly.

## Colour palette

The current palette is defined at the top of `assets/css/ciras-ai.css`:

- near-black neutrals;
- Inferno-inspired purple, magenta, orange and amber accents;
- the official USACH green/orange pair retained only in the thin institutional line.


## Partner and organization links

The associated-organization links are stored directly in the Network section of
both `index.html` and `en/index.html`. When adding a new partner, update both
language pages.

## Image credits

Image credits are listed in the footer of each language page. When replacing a
pillar image, update both the image files in `images/pillars/` and the credit text.


## Image credits near images

The hero credit is stored in the `<header id="header">` element of each language
page. Each pillar image is wrapped in `<figure class="pillar-media">` with an
`<figcaption class="image-credit">`.

The display styling is in `assets/css/ciras-ai.css`.


## Chile section background

The “Chile como laboratorio natural / Chile as a natural laboratory” background
files are:

- `images/backgrounds/chile-alma-panorama.jpg`
- `images/backgrounds/chile-alma-panorama.webp`

The background and overlay are controlled in `assets/css/ciras-ai.css`.
The image credit link is stored in the Chile section of both language pages.
