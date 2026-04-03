# Zatpat.loans Website

## Current State
New project. Empty workspace with no existing application files.

## Requested Changes (Diff)

### Add
- Full single-page marketing website for Zatpat.loans, a fintech/instant personal loan platform
- Sticky header/navbar with logo, nav links, and CTA button
- Hero section with animated entrance, bold headline, subheadline, two CTAs, and hero illustration
- Loan Features/Benefits section with 6 icon cards and staggered scroll animations
- How It Works section with 3-step process and step-by-step scroll reveal
- Loan Amount & Eligibility section with loan range and eligibility criteria cards
- App Download section with Play Store / App Store buttons and mobile mockup
- Testimonials carousel with auto-scroll animation
- FAQ accordion section with smooth open/close animation
- Footer with links, social icons, and copyright
- Stats counter animation (10,000+ Customers, ₹50Cr+ Disbursed, etc.)
- All scroll-triggered animations via Intersection Observer API

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Set up Motoko backend (minimal, static site with no data persistence needed)
2. Build React frontend:
   - Global styles: electric orange (#FF5500) + white color scheme, Tailwind config
   - Navbar component: sticky, transparent-to-solid on scroll, logo + nav links + CTA
   - Hero section: fade-in + slide-up animation, floating illustration, two CTA buttons
   - Features section: 6 cards with Intersection Observer staggered fade-in
   - How It Works: 3 steps with scroll-triggered reveal
   - Eligibility section: loan range display + eligibility criteria
   - App Download section: store buttons + mobile mockup with slide-in animation
   - Testimonials: auto-scrolling carousel with customer reviews
   - FAQ: accordion with smooth CSS transitions
   - Footer: multi-column links, social icons, copyright
   - Stats counter: animated number count-up on scroll
   - Custom useIntersectionObserver hook for all scroll animations
