# Zatpat.loans Website — Color System Upgrade

## Current State
- Hero section uses a light orange gradient background (#FFF9F5 → #FFC880), warm peach tones
- Orange (#FF5500) is used as the primary/only brand color throughout
- No blue color used anywhere — trust color is missing
- Success states use green (#22C55E) in some places, inconsistently
- EasyLoans section uses blue/green tones but doesn't match the new design system
- Navbar: transparent on dark hero, white on scroll
- Stats section: orange numbers on white
- Features/HowItWorks: orange accents on white/light backgrounds
- index.css: .btn-brand uses #ff5500, global CSS uses orange tokens only

## Requested Changes (Diff)

### Add
- Blue (#2563EB) as the primary trust color — used for section accents, badge pill backgrounds, icon backgrounds, section underlines, and trust-oriented elements
- Blue-black gradient for hero background (#0F172A dark navy with blue gradient shift)
- Subtle blue glow effects in hero (in addition to orange)
- Approval/success animations that go: blue progress bar → green on success
- Loan growth color flow: ₹1000 (blue) → ₹2000 (orange glow) → ₹5000 (green success)
- Button hover: orange → adds slight blue glow
- CSS tokens for: --color-trust: #2563EB, --color-cta: #FF6A00, --color-bg: #F8FAFC, --color-dark: #0F172A, --color-success: #22C55E, --color-text: #1E293B

### Modify
- **Hero section**: Change from light orange gradient to dark blue-black gradient (#0F172A → #1E3A5F or similar), keep orange for CTA button and ₹ highlights, add blue glow effects, text should be white/light on dark background
- **Navbar on hero**: Logo text and nav links should be white (hero is now dark), scrolled state stays white bg with dark text
- **Hero headline**: Blue gradient for "Personal Loans" text (blue → white), or blue underline. Keep CTA button orange (#FF6A00)
- **Hero floating cards**: Update glow/shadow to include blue tones
- **EasyLoans section (Gamified Progress)**: Already dark (#0F172A), update to use #2563EB as primary blue instead of sky/slate blues. Loan step colors: Level 1 = #2563EB, Level 2 = #FF6A00 orange, Level 3 = #22C55E green
- **Features section**: Change orange icon backgrounds (#FFF1E8) to light blue (#EFF6FF), icon color from #FF5500 to #2563EB. Section badge uses blue. Keep "Why Choose Zatpat.loans?" with orange on brand name only
- **HowItWorks section**: Step icon background changes from orange (#FF5500) to blue (#2563EB). Connecting line uses blue → orange → green gradient. Section badge in blue
- **Stats section**: Numbers stay orange (#FF6A00 or #FF5500) — these are CTA highlights
- **index.css**: Update .btn-brand hover to add box-shadow with blue glow. Add .btn-brand:hover blue glow overlay. Background color for non-hero sections becomes #F8FAFC. Text color tokens updated to #1E293B. Add global CSS variables for the new palette
- **Overall text**: Body text updates to #1E293B (slightly bluer slate instead of pure gray)

### Remove
- Light orange/peach gradient from hero background
- Heavy use of orange as a trust/structural color (orange stays only for CTA buttons and ₹ amount highlights)
- Any purple-tinted colors

## Implementation Plan
1. Update `index.css`: Add CSS custom properties for new palette, update body text color, update `.btn-brand` hover with blue glow, update `.section-alt` to #F8FAFC, update `.section-title-underline::after` to use blue
2. Update `Hero.tsx`: Dark blue-black gradient background, white text, orange-only CTA button, blue glow blobs alongside orange blobs, update trust stats row border to blue-tinted, hero badge uses blue
3. Update `Navbar.tsx`: Hero dark → nav links white on transparent. Scrolled state unchanged
4. Update `Features.tsx`: Icon backgrounds to #EFF6FF (blue tint), icons to #2563EB, section badge to blue
5. Update `HowItWorks.tsx`: Step icon squares to #2563EB, connector line blue→orange→green, section badge to blue
6. Update `EasyLoans.tsx`: Loan step level colors → Level 1 blue, Level 2 orange, Level 3 green. Trust badge gradient updates to use blue. Gamified progress bar: starts blue, transitions orange at mid, ends green
7. Keep Stats, Testimonials, FAQ, Footer, AppDownload, Eligibility, LoanModal largely unchanged or with minor text color update to #1E293B
