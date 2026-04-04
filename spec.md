# Rocket.Money Website

## Current State
Full-featured fintech landing page with 14+ sections, sticky navbar, social proof ticker, sticky CTA. The navbar has a 3-part flex layout (logo left, nav center, CTA right) with a mobile hamburger drawer. Most sections are already mobile-optimized but several areas need centering improvements and premium visual polish, particularly on mobile.

## Requested Changes (Diff)

### Add
- Center alignment for all section headings, subheadings, and badges across all sections
- Improved mobile menu: larger touch targets, better spacing, centered items, smooth transitions
- Premium feel micro-interactions and consistent center alignment on mobile

### Modify
- **Navbar/Mobile Menu**: Fix mobile menu drawer to properly center all nav items, improve visual hierarchy, add subtle dividers, ensure perfect centering of logo on mobile, tighten Apply button
- **Section headers**: All `h2` section titles and badge pills should be `text-center` on mobile; ensure `mx-auto` on subheadings
- **Hero section**: Center all text on mobile (hero heading, subtitle, key points, CTAs, trust stats should be centered on small screens)
- **HeroBand**: Cards and process flow centered on mobile
- **TrustBar**: logos row centered
- **Features**: Heading, subheading, cards centered
- **BadCIBILBanner**: Score cards centered, headline centered
- **HowItWorks**: Steps centered, progress bar centered
- **EasyLoans**: Persona cards centered, section heading centered
- **Eligibility**: Table/list centered
- **EMI Calculator**: Calculator UI centered
- **CreditScore**: Gauge, steps, logos centered
- **Testimonials**: Cards centered, review stars row centered
- **TrustBanner**: Text centered
- **AppDownload**: Content centered on mobile
- **FAQ**: Accordion centered
- **Footer**: Links and branding centered on mobile
- **SocialProofTicker**: Already full-width, ensure text is vertically centered
- **StickyCTA**: Ensure full-width, properly padded
- All section `max-w-*` containers should have `mx-auto` and proper `px-4`

### Remove
- Nothing removed

## Implementation Plan
1. Fix Navbar mobile drawer: center nav links, improve spacing, add divider, better CTA placement
2. Fix Hero section: `text-center` + `items-center` on mobile for all text and CTA buttons
3. Audit all other 12+ sections for centering on mobile — add `text-center` to headings/badges, `mx-auto` to paragraphs/descriptions, `justify-center` to flex containers where needed
4. Ensure consistent section padding pattern: `py-12 sm:py-16 md:py-20` and `max-w-7xl mx-auto px-4 sm:px-6`
5. Polish mobile menu with premium feel: backdrop blur, icon alignment, smooth animation
6. Run UI Craft pass for highest-impact visual improvements across the whole page
7. Validate (lint, typecheck, build)
