# Rocket.Money Website

## Current State

The site has a `PremiumHeroSection` component (replaces old `Hero`) with:
- Light-blue gradient background with floating particles and rupee icons
- Pill badge, tri-color headline (Student blue / Gig Worker orange / Shop Owner green)
- Hero card with 3 persona images (v4, 480×620) in a 3-column grid (center slightly larger)
- Floating approval badges for Riya, Arjun, Priya
- 4 stat cards at bottom (50,000+ Loans, <5 Min, 0 CIBIL, ₹5,000)

All other sections (HeroBand, TrustBar, BannerIllustration, Features, BadCIBILBanner, HowItWorks, EasyLoans, Eligibility, EMICalculator, CreditScore, Testimonials, TrustBanner, AppDownload, FAQ) exist and render in sequence.

The TrustBanner (`Transparent. Reliable. Here for You.`) is the reference for bold, full-width, premium section sizing.

## Requested Changes (Diff)

### Add
- **Trust strip directly below the hero section** (inline, before HeroBand): RBI NBFC, ISO 27001, CIBIL Partner, SSL Secured, 4.8★ rating, 50,000+ customers — glassmorphic cards in a horizontal scroll strip with subtle animated entrance
- **Subtle floating motion on the hero card** — gentle CSS float keyframe on the entire hero card (slow 6–8s cycle)
- **Premium fintech shadows** throughout hero — multi-layer box-shadows with colored tints on stat cards, hero card, and badges

### Modify
- **Headline font size**: increase from `clamp(2.1rem, 4.8vw, 3.6rem)` to `clamp(2.6rem, 5.8vw, 4.4rem)` — 20% bigger and stronger
- **Hero card**: increase padding, increase min-height of persona images from `clamp(240px,32vw,360px)` to `clamp(300px,38vw,440px)`; center persona raised further to `clamp(320px,42vw,480px)`; add a gentle float CSS animation on the whole card
- **Persona images**: switch from v4 (`480×620`) to new v5 (`520×680`) images for all three personas
- **Approval badges**: upgrade to full glassmorphism — stronger backdrop-filter blur, white tint background, colored inner glow border, float micro-animation
- **Stat cards**: increase number font size from `clamp(1.55rem,2.8vw,2.1rem)` to `clamp(1.9rem,3.2vw,2.6rem)`; add colored left-accent border stripe; larger icon (28px); padding increased to 28px 24px; deeper box-shadow
- **All sections overall sizing**: apply a consistent 15–20% size increase to section headings and padding across Features, HeroBand, HowItWorks, EasyLoans, Eligibility, CreditScore, Testimonials, BadCIBILBanner — to match the bold scale of TrustBanner
- **Subtitle under headline**: increase from `clamp(1.05rem,1.8vw,1.25rem)` to `clamp(1.15rem,2.1vw,1.45rem)`; more generous margin-bottom
- **Section paddings globally**: increase `py-` from 12/16 to 20/24 on large sections

### Remove
- Nothing removed

## Implementation Plan

1. **PremiumHeroSection.tsx** — full rewrite with:
   - Bigger headline (`clamp(2.6rem, 5.8vw, 4.4rem)`)
   - Bigger subtitle (`clamp(1.15rem, 2.1vw, 1.45rem)`)
   - Hero card: more padding, taller persona images (v5), center taller, gentle float CSS animation on card
   - Glassmorphic badges: stronger blur, colored inner glow, micro-float animation
   - Stat cards: bigger numbers, colored accent stripe, deeper shadow
   - All using the new v5 image filenames

2. **New HeroTrustStrip component** (or inline in App.tsx) placed immediately after `PremiumHeroSection` and before `HeroBand`:
   - 6 trust badges: RBI NBFC Registered, ISO 27001, CIBIL Partner, 256-bit SSL, 4.8★ Rating, 50,000+ Borrowers
   - Each badge is a glassmorphic pill with icon + text
   - Horizontal scroll on mobile, full row on desktop
   - Staggered fade-in on scroll

3. **Global section size pass** (Features, HeroBand, BadCIBILBanner, HowItWorks, EasyLoans, Testimonials, CreditScore, Eligibility):
   - Section heading font sizes +15–20%
   - Section vertical padding increased by 20%
   - CTA buttons slightly taller (py-4 → py-5)
   - Card paddings increased for spaciousness
