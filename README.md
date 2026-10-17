# Smartway Finance redesign

Buildless responsive redesign using the client's current composition, brand and content, with the supplied eight-second SUV idle video as the hero background.

Preview: `python -m http.server 4173 --directory dist`

All production files are in `dist/`. Apply and compare links go to the existing Smartway website; phone links call its published number. This preview does not collect applications. Video controls, finance navigation, mobile navigation and FAQ disclosures work locally. Reduced-motion and data-saver users receive the poster without automatic video loading.

## Design reference

Primary composition: https://swfin.com.au/ and the user's screenshot. Preserve full-screen video, pill navigation, left-aligned two-line white/cyan headline, product chips, paired CTAs, and bottom metrics. Replace skyline footage with supplied coastal SUV/person footage. Move award badge out of the hero to keep the subject clear; no award claim added elsewhere.

Supporting automotive composition: https://dribbble.com/shots/23734386-Trumvolt-Rivian-R1T-EV-Car-Landing-Page (large subject, environmental backdrop, restrained navigation). Other reviewed sources and extracted images are recorded under `references/`; third-party gallery images are research only and are not shipped in `dist/`.

## Assets and content

- Hero source: `/home/nami/Videos/Man_leaning_against_parked_SUV_20261017222534.mp4`, compressed without audio to `dist/assets/coastal-idle.mp4`.
- Logo, five lender logos and leisure image: existing https://swfin.com.au/ assets, retrieved 17 October 2026.
- Manrope: Google Fonts, bundled locally.
- 40+ lenders, 98% satisfaction, $0 hidden fees and Scott H. testimonial: client website. These claims are carried forward, not independently substantiated.
- Generated lifestyle footage depicts an illustrative scene, not an actual client.

## Verification

Chromium checked desktop at 1440×960 and mobile at 390×844. Verified video play/pause, finance dropdown and Escape, mobile navigation, FAQ disclosures, no mobile overflow, reduced-motion poster behavior, and no page exceptions or failed asset requests. Screenshots: `desktop.png`, `mobile.png`, `full-page.png`.

Remaining: client review of wording/statistical claims, exact loop seam quality and crop preferences. No live client deployment or application submission was performed.
