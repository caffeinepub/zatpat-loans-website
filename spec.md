# Zatpat.loans Website

## Current State
The app has a full-featured fintech landing page with Hero, Stats, Features, EasyLoans, HowItWorks, Eligibility, CreditScore, TrustBanner, AppDownload, Testimonials, FAQ, and Footer. The current section order places Stats immediately after Hero.

Existing utilities:
- `useIntersectionObserver` hook with `triggerOnce: true` support
- `useCounterAnimation` hook for number counting
- Framer Motion (`motion/react`) installed and used in Hero
- Tailwind + inline styles pattern throughout

## Requested Changes (Diff)

### Add
- New `HeroBand` component: a full animation band placed immediately after the Hero section (before Stats)
  - **Sub-band 1 — Feature Cards**: 4 horizontally scrollable (mobile) / grid-based (desktop) cards: "Instant Approval", "Low Interest", "Quick Disbursal", "100% Secure". Each floats up with fade-in stagger on scroll. Cards have subtle tilt on hover (CSS transform). Desktop: SVG icons inside cards animate with scale-in + pulse.
  - **Sub-band 2 — Process Flow**: 3-step process "Apply → Verify → Get Money". Steps light up sequentially with glow/color-shift animation. Connected by animated SVG dash-stroke line on desktop.
  - **Sub-band 3 — Stats Bar**: 3 key stats ("50,000+ Loans Disbursed", "4.8★ App Rating", "< 5 Min Processing"). Numbers count up from 0 on scroll using existing `useCounterAnimation`. Subtle expanding bar below each stat.
  - **Background**: Very light animated gradient/particle layer under entire band. Low opacity floating orbs + faint wave pattern. Does not overpower content.
  - **Timing**: Staggered reveal using IntersectionObserver — cards first, then steps (after 300ms), then stats (after 600ms). Max duration 0.8–1.2s per element, ease-in-out.
  - **Reduced motion**: All animations disabled / simplified when `prefers-reduced-motion: reduce`.

### Modify
- `App.tsx`: Insert `<HeroBand />` between `<Hero />` and `<Stats />`

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/components/HeroBand.tsx` with all 4 sub-sections
2. Use `useIntersectionObserver` hook for scroll-triggered reveals
3. Use CSS `@keyframes` + Tailwind for all animations, Framer Motion only if needed for complex spring effects
4. Add `prefers-reduced-motion` media query wrapper
5. Update `App.tsx` to import and render `<HeroBand />` after `<Hero />`
6. Validate (lint + typecheck + build)
