---
name: Vesper Obscura
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8f9097'
  outline-variant: '#45474d'
  surface-tint: '#bbc6e2'
  primary: '#bbc6e2'
  on-primary: '#263046'
  primary-container: '#00081c'
  on-primary-container: '#6e7991'
  inverse-primary: '#545e76'
  secondary: '#e1c38c'
  on-secondary: '#3f2d04'
  secondary-container: '#584418'
  on-secondary-container: '#ceb17c'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#090909'
  on-tertiary-container: '#7a7878'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e2'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3c475d'
  secondary-fixed: '#fedea5'
  secondary-fixed-dim: '#e1c38c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#584418'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  brass-accent: '#AF9461'
  midnight-void: '#00081C'
  charcoal-surface: '#111111'
  gallery-white: '#FFFFFF'
  muted-silver: '#767676'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.05em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is anchored in the concept of "Quiet Luxury"—an aesthetic that prioritizes substance, texture, and restraint over loud ornamentation. Designed for a high-end interior design firm in São Paulo, the visual language draws heavy inspiration from contemporary art galleries and boutique hotels. It speaks to a sophisticated, affluent audience that values architectural precision and understated elegance.

The chosen style is **Minimalist with Architectural Influence**. It utilizes expansive whitespace (negative space) to frame content, much like a curated gallery wall. The interface remains intentionally quiet to allow the portfolio photography—the "art"—to command full attention. Every element is governed by sharp lines and a rigid grid, reflecting the precision of luxury interior craftsmanship.

## Colors

The palette is a study in darkness and metallic warmth. The foundation is **Midnight Void**, a deep blue-black that provides more depth than a standard neutral black. This is complemented by **Charcoal Surface**, used to create subtle tonal shifts in the UI hierarchy without breaking the dark-mode immersion.

**Brass Accent** is the primary vehicle for interaction and focal points. It is a muted, sophisticated gold that avoids "glitz" in favor of a brushed metal appearance. This color is used sparingly for call-to-actions, hover states, and active indicators. Typography primarily utilizes **Gallery White** for maximum legibility against the dark backgrounds, while **Muted Silver** is reserved for secondary information and metadata.

## Typography

The typography system relies on a high-contrast serif and sans-serif pairing to establish a premium editorial feel. 

**Bodoni Moda** is the headline face. Its extreme contrast between thick and thin strokes evokes the world of high fashion and luxury publishing. It should be used for large titles and pull-quotes, where its elegance can be fully appreciated.

**Montserrat** provides a clean, geometric counterpoint for body text. To achieve the "spacious" feel requested, body copy utilizes a lighter weight (300 or 400) and increased letter spacing. Small labels and navigation items are set in all-caps Montserrat with significant tracking (0.2em) to mimic the wayfinding found in modern architectural spaces.

## Layout & Spacing

The layout philosophy is built on a **Fixed Grid** with generous margins to create a "contained" and intentional viewing experience. On desktop, the central content container is capped at 1440px with substantial 80px outer margins, ensuring that text and images never feel crowded by the edges of the browser.

Vertical rhythm is governed by large "Section Gaps" (120px) to allow each architectural project or service to breathe. Content follows a 12-column structure, but frequently utilizes asymmetric placement—such as a 6-column image offset by a 4-column text block—to create visual interest and professional tension.

## Elevation & Depth

In keeping with the "Quiet Luxury" theme, this design system avoids traditional shadows and heavy 3D effects. Depth is instead conveyed through **Tonal Layers** and **Low-Contrast Outlines**.

Primary surfaces use the `midnight-void` color. Overlays, such as modals or floating menus, use the slightly lighter `charcoal-surface` with a very thin (1px) border in a muted brass or low-opacity white. Background blurs are used exclusively for navigation bars to provide a sense of transparency and lightness as users scroll through high-resolution project imagery.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. This choice mirrors the clean lines of modern architecture and the precise edges of marble, steel, and custom cabinetry. Every element—from buttons and form fields to project cards and image containers—must maintain a crisp 90-degree corner. This lack of softness reinforces the "boutique" and "curated" personality of the brand.

## Components

### Buttons
Buttons are designed as "Ghost" elements. They feature a 1px border in `gallery-white` and labels in all-caps Montserrat. On hover, the border and text transition to `brass-accent`, and the background may take on a very subtle 5% brass tint. This interaction should be slow and graceful (300ms transition).

### Input Fields
Forms are radically minimalist. Instead of boxed enclosures, fields consist only of a 1px bottom border (underline). Labels float above the line in a small, wide-tracked font. When focused, the bottom border changes from `muted-silver` to `brass-accent`.

### Cards (Portfolio)
Portfolio cards prioritize imagery. They are borderless with text appearing only on hover or as a minimal caption underneath in `label-sm` styling. Images within cards should have a subtle desaturation filter that returns to full color upon interaction, creating a sophisticated "active" state.

### Navigation
The header is a slim, persistent bar with a `backdrop-filter: blur(12px)`. Links are understated, using `label-sm` typography with a thin horizontal line appearing below the text for the active page.

### Chips/Tags
Used for project categories (e.g., "Residential", "Penthouse"), these are small, unbordered, and use a background of `charcoal-surface` with `muted-silver` text.