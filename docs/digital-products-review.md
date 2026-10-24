# Digital product showcase review

Implemented on local branch `feat/digital-product-showcase`.

## Source selection

Base: `35678ab` on `origin/copilot/update-terms-and-conditions`. This branch matches the current wealwaysrise.com homepage, including practice areas, Insights, Reports, Our Team and class-based dark mode. `main` is older and does not contain the current homepage. The PR was subsequently retargeted to `main` at the user’s request. Its divergent changes were reconciled while retaining the current site’s homepage, legal pages and advisory CTA, plus main’s payment routes, catalog, Stripe dependency and security headers.

Prepared for PR #3. The product showcase adds no dependencies. The main integration retains the pre-existing Stripe dependency and payment routes.

## Changed files

| File | Purpose |
| --- | --- |
| `src/app/page.tsx` | Insert the showcase directly after the homepage hero and before practice areas. |
| `src/components/DigitalProductsSection.tsx` | Product introduction, fictional workspace composition, seven planned package inclusions, seven selectable audience views, 12 native curriculum disclosures and audience-aware launch enquiries. |
| `src/components/DigitalProductsSection.module.css` | Scoped neutral/lime styling, overlapping desktop panels, simplified mobile cards, responsive layouts, focus styling and dark theme tokens. |
| `src/components/Navbar.tsx` | Digital Products link on desktop and mobile, mobile disclosure navigation, Escape handling and homepage anchors that also work from other pages. |
| `src/components/ThemeToggleButton.tsx` | Subscribe to the actual theme class so a restored dark theme is reflected by the button and the first click works. Fixes the existing set-state-in-effect lint error. |
| `src/app/globals.css` | Fixed-header anchor spacing, visible keyboard focus and reduced-motion rules. |

## Main integration

- Kept current homepage composition, navigation, contact/privacy/terms/support content and email advisory CTA.
- Preserved main’s payment API, checkout/pricing/service/payment-result routes, catalog, Stripe dependency, middleware and security header values.
- Combined image remote patterns with main’s security-header configuration.
- Preserved the homepage’s full service list and carousels; `/services` continues to use the payable catalog with valid checkout slugs.
- Kept Services and Pricing discoverable in the homepage footer.

## Contact behaviour

The current site offers email enquiries, not a persisted waitlist. Both product CTAs are therefore labelled **Enquire About Launch** and open a draft to the existing advisory address, `advisory@risetech.info`, with the product name and selected audience. The visitor must send the email. No success state, registration, payment or immediate access is claimed. `/contact` remains an alternative destination.

A saved-registration service is not integrated. No API credentials or provider setup are needed for the implemented email fallback. Mail delivery was not attempted during QA.

## Verification

- Production build passed, including TypeScript and generation of all 32 pages after main integration.
- Full ESLint check passed with zero errors. One pre-existing warning remains: unused `Link` import in `FeaturedServicesSection.tsx`.
- `git diff --check` passed.
- Browser layout checks used the generated production HTML and hydration scripts in same-origin iframe viewports at **375px, 768px and 1440px**. This verifies CSS viewport breakpoints, not physical-device emulation.
- No horizontal document or product overflow at those widths. On this browser, usable document widths were 360px, 753px and 1425px because scrollbars occupy 15px.
- Mobile visual uses one main workspace panel with two compact supporting cards. Desktop uses three overlapping browser panels. Captions clear the panels.
- Desktop Digital Products anchor works. Mobile menu opens, navigates and closes; Escape closes it and returns visible focus to the toggle.
- All seven audience views update the exact role title, description and three examples. One selection remains active. Both enquiry links carry the current role. The planned £99 one-time price remains constant.
- Audience selection works by keyboard. Native disclosures all expand and collapse; all 12 descriptions are visible when expanded. Curriculum anchor clears the fixed header.
- Product styles verified in light and dark themes; stored dark mode survives reload with the correct toggle label, and the first click returns to light mode.
- Calculated contrast ratios: light secondary copy 6.22:1, light panel secondary copy 6.74:1, dark secondary copy 8.69:1, dark panel secondary copy 7.66:1, lime badge text 12.68:1. Main copy exceeds 16:1 in both themes.
- Reduced-motion CSS disables smooth scrolling, new component transitions and existing marquee/proof motion. OS-level reduced-motion emulation was not available in the browser API.

## Main integration validation

After conflict resolution, the production build and TypeScript passed for all 32 pages. Lint had zero errors and the same existing unused-import warning. Generated-page smoke checks verified seven audiences, twelve workflow disclosures, no product checkout, and fifteen valid service checkout links. Byte comparisons confirmed that main’s payment/security sources and the live site’s legal/advisory/product sources were retained. The pre-existing middleware convention produces a Next.js deprecation warning.

## Preview limitations and local reproduction

The managed preview launcher passes Vite flags that Next.js does not accept. Browser QA therefore used a supported static preview directory populated with the successful production build's HTML and assets; the application source and dev script were not altered for this workaround. The static preview does not run the Next.js image-optimization endpoint, so the existing remote logo may appear as a plain circle there. This is not a change to the source logo.

For the complete Next.js runtime in an existing checkout of the selected branch:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/#digital-products`. For a production run, use `npm run build` and `npm start`.

The preview is a launch portfolio: materials and curriculum are planned and in development. No course player, downloadable assets, checkout, account system or hosted assistant subscription was added.
