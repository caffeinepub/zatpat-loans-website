# Rocket.Money Website

## Current State
The app is a full-featured fintech landing page with sections in this order:
1. Navbar
2. Hero
3. HeroBand (3D revolving carousel + process flow)
4. Features ("Why Choose Rocket.Money?" — plain white cards, blue icon only)
5. EasyLoans
6. HowItWorks
7. Eligibility
8. CreditScore
9. TrustBanner
10. AppDownload
11. Testimonials
12. FAQ
13. Footer

## Requested Changes (Diff)

### Add
- Best-in-class colorful card animations to the Features section ("Why Choose Rocket.Money?"). Each of the 6 cards should have a unique vivid gradient (blue, orange, green, purple, teal, pink), animated shimmer/glow on hover, staggered 3D tilt + float entrance animation, animated icon (scale pulse + color), and a floating particle or sparkle effect per card.

### Modify
- **Features.tsx**: Replace the existing plain white/blue cards with colorful gradient cards. Each card gets:
  - Unique gradient background (blue, orange, green, purple, teal, crimson/rose)
  - Animated icon with glow ring and scale-in pulse
  - Subtle shimmer sweep animation across the card on hover
  - 3D perspective tilt on hover (rotateX/rotateY)
  - Staggered entrance: float up + fade in, starting from 0 with delay per card
  - A bottom-left light streak or sparkle dot for premium feel
  - Text adapts to white on colored background

- **App.tsx**: Rearrange sections for world-class fintech UX flow:
  1. Hero (brand + emotion, above the fold)
  2. HeroBand (social proof, immediate trust below hero)
  3. Features / "Why Choose Rocket.Money?" (value proposition, colorful, memorable)
  4. HowItWorks (process clarity — how easy it is)
  5. EasyLoans (inclusivity & loan growth gamification)
  6. Eligibility (who qualifies — easy reassurance)
  7. CreditScore (aspiration — build your future)
  8. Testimonials (moved up — social proof reinforcement before CTA)
  9. TrustBanner (climax trust moment)
  10. AppDownload (conversion CTA)
  11. FAQ
  12. Footer

### Remove
- Nothing removed

## Implementation Plan
1. Rewrite `Features.tsx` with 6 colorful gradient cards, each with unique gradient, animated SVG icon, 3D hover tilt, shimmer sweep, staggered float-in entrance, and sparkle accents.
2. Update `App.tsx` section order as per the optimized fintech flow above.
3. Validate (lint + typecheck + build).
