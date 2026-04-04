# Rocket.Money Website

## Current State
The site has a full multi-section fintech landing page. The BannerIllustration component (placed after TrustBar) shows a two-column layout: left text/CTA, right image panel with floating approval badges and a stats row at the bottom. The current image references `banner-trio-v2.dim_1200x500.jpg`. The EasyLoans section has persona cards with images at the top.

## Requested Changes (Diff)

### Add
- A new standalone premium hero-style section component called `PremiumHeroSection` inserted after BannerIllustration (or replacing it) that contains:
  - Soft light-blue gradient background with subtle floating colored particles
  - Pill badge at top center: "LOANS FOR EVERY INDIAN" — blue text, soft border, minimal shadow
  - Bold centered headline: "Whether you're a Student, Gig Worker, or Shop Owner" with "Student" in blue (#2563EB), "Gig Worker" in orange (#FF6A00), "Shop Owner" in green (#22C55E)
  - Subtitle: "Rocket.Money approves your loan in minutes — No CIBIL needed, no paperwork." — centered, gray text
  - A large rounded hero card with premium soft gradient background and subtle shadow containing:
    - Three columns of photorealistic AI-generated Indians: left=Riya(student), center=Arjun(gig worker), right=Priya(shopowner)
    - Images: `/assets/generated/persona-student-riya.dim_400x520.jpg`, `/assets/generated/persona-gig-arjun.dim_400x520.jpg`, `/assets/generated/persona-shopowner-priya.dim_400x520.jpg`
    - Each image: full width of column, tall display (min 280px), object-fit cover, object-position top center, rounded-xl at top
    - Below each image: persona name tag (e.g., "Riya — Student") with color accent, short quote
    - Faint rupee (₹) icons scattered in the card background
  - Floating approval badges overlaid on the card:
    - "Riya — Student | ₹3,000 approved in 4 min" (blue)
    - "Arjun — Gig Worker | ₹5,000 approved instantly" (orange)
    - "Priya — Shop Owner | ₹5,000 approved, no CIBIL" (green)
  - Bottom row of 4 premium stat cards:
    - "50,000+ Loans Approved"
    - "< 5 Min Average Approval"
    - "0 CIBIL Minimum Score"
    - "₹5,000 Max Loan Amount"

### Modify
- App.tsx: insert `<PremiumHeroSection />` after `<BannerIllustration />` (keep BannerIllustration, add this new section next)
- BannerIllustration: update the PERSONA_BADGES to use the new exact text format:
  - "Riya — Student | ₹3,000 approved in 4 min"
  - "Arjun — Gig Worker | ₹5,000 approved instantly"
  - "Priya — Shop Owner | ₹5,000 approved, no CIBIL"

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/components/PremiumHeroSection.tsx` — the new standalone section
2. Use motion/react for particle animations, staggered card entrance, and badge float-in
3. Floating particles: 12–16 small colored dots (blue, orange, green, purple) that drift slowly using keyframe CSS animations
4. Faint rupee icons: 6–8 absolutely positioned `₹` symbols at varying opacity (0.04–0.08), sizes, and rotations
5. The hero card: white/glass gradient bg, 24px border radius, strong but soft box-shadow, overflow hidden, 3-column grid on desktop, single-column on mobile
6. Each persona column: image at top (object-position: top center, min-height 280px), name + color badge below, short quote
7. Floating approval badges: absolute-positioned over card, glassmorphic white background, colored border, pulsing dot
8. Stat cards at bottom: 4-column grid on desktop, 2×2 on mobile, white card, colored number, gray label
9. Register PremiumHeroSection in App.tsx after BannerIllustration
10. Validate, typecheck, and build
