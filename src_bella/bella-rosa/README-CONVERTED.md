Converted Angular app scaffolded from src_bella_rosa static site.

How to run (from Windows CMD/PowerShell):

1) Install deps
   cd c:\Users\User\agentic\website-converter-agent\src_bella\bella-rosa
   npm install

2) Start dev server
   npm run start
   # app served at http://localhost:4200

Notes:
- Routes created:
  - / (Home)
  - /commercial, /commercial/about-us, /commercial/rates, /commercial/gallery, /commercial/contact-info
  - /residential, /residential/about-us, /residential/gallery, /residential/contact-info
- Styles copied from src_bella_rosa/design_blueprint.css into src/styles.css.
- Images copied to src/assets/images and referenced via assets/images/...
- Residential gallery implemented in Angular (residential-gallery.component.ts) using signals and click handlers.
- Index includes Google Fonts (Inter, Playfair Display).
