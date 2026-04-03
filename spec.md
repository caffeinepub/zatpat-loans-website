# Zatpat.loans Website

## Current State
Hero section uses a dark background (near-black with deep brown) with electric orange (#FF5500) accents. The layout has a left text column and right phone mockup image, with decorative blobs, dot grid, floating animation, and a bottom wave. CTA buttons use `btn-brand` and `btn-outline-brand` utility classes.

## Requested Changes (Diff)

### Add
- Light orange gradient background (warm white → soft peach → light orange) replacing the dark theme
- Large decorative circular shapes in warm orange/peach tones for visual depth
- A floating stats card (e.g. "50K+ Happy Customers") as a visual trust element
- A loan amount badge/card floating near the phone mockup for visual richness
- Subtle animated confetti or sparkle dots in the background

### Modify
- Background: change from dark (#1A0A00 → #3D1800) to light orange gradient (white/peach/orange tones)
- Text: change from white to dark charcoal/brown for readability on light background
- Sub-text: change from `text-white/70` to `text-orange-900/70` or similar dark warm tone
- Badge pill: update to a richer orange tint background
- CTA primary button: keep orange but ensure high contrast on light background
- CTA secondary button: update border/text to work on light background
- Blobs: update colors to softer, lighter orange/peach tones
- Bottom wave: update fill to match next section background (white stays)
- Dot grid pattern: update to softer warm orange dots
- Floating card UI elements (trust indicators) styled to be visible on light bg

### Remove
- Nothing removed

## Implementation Plan
1. Redesign Hero.tsx background to warm light orange gradient
2. Update all text colors for dark-on-light legibility
3. Redesign decorative blobs to soft peach/light orange
4. Add 1–2 floating UI cards (stats, loan amount) for visual richness
5. Update badge pill and CTA button styles for light background context
6. Ensure bottom wave transitions cleanly to white
