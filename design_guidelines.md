# Portfolio Website Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Modern Developer Portfolio)  
**Primary References:** Linear, Vercel, GitHub profiles - clean, technical aesthetic with professional polish  
**Guiding Principles:** Clarity over decoration, content-first hierarchy, technical sophistication

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Background: 0 0% 100% (pure white)
- Surface: 0 0% 98% (subtle gray for cards)
- Primary: 222 47% 11% (deep navy - professional, trustworthy)
- Accent: 217 91% 60% (vibrant blue - CTAs, links, highlights)
- Text Primary: 222 47% 11%
- Text Secondary: 215 16% 47%
- Border: 214 32% 91%

**Dark Mode:**
- Background: 222 47% 11%
- Surface: 217 33% 17%
- Primary: 0 0% 100%
- Accent: 217 91% 60%
- Text Primary: 0 0% 98%
- Text Secondary: 220 9% 65%
- Border: 217 33% 23%

### B. Typography
- **Primary Font:** Inter (Google Fonts) - clean, technical, modern
- **Headings:** Font weights 700-800, tracking tight (-0.02em)
- **Body:** Font weight 400-500, line-height 1.7
- **Code/Tech:** JetBrains Mono for tech stack labels
- **Scale:** text-sm (14px), text-base (16px), text-lg (18px), text-2xl-4xl for headings

### C. Layout System
**Spacing Units:** Consistently use 4, 6, 8, 12, 16, 20, 24, 32 for rhythm  
**Container:** max-w-6xl with px-6 md:px-12  
**Sections:** py-16 md:py-24 for consistent vertical spacing  
**Grids:** gap-6 md:gap-8 for card/project layouts

### D. Component Library

**Hero Section (80vh):**
- Two-column layout: Left - headline + CTA buttons, Right - professional portrait/workspace image
- Headline: text-4xl md:text-6xl, font-bold with gradient text effect on name
- Subheadline: text-xl with muted color
- CTA buttons: Primary (filled accent), Secondary (outline with blur backdrop)
- Subtle animated gradient background overlay

**About Section:**
- Single column, max-w-3xl centered
- Professional headshot (rounded-2xl, shadow-lg) floating left on desktop
- Rich paragraph text with career highlights
- Skills chips in flex wrap layout

**Projects Showcase:**
- Grid: grid-cols-1 md:grid-cols-2 gap-8
- Project cards with hover lift effect (hover:scale-[1.02])
- Card structure: Image (aspect-video), Title, Description, Tech tags (pill badges), Links (GitHub + Live demo)
- Tech tags: Small pill badges with surface background

**Tech Stack:**
- Grid: grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6
- Icon cards: Centered tech logo (via CDN - Simple Icons/DevIcons), Label beneath
- Cards with subtle hover border glow effect

**Contact Section:**
- Two-column split: Left - Contact form, Right - Contact info + social links
- Form inputs: Consistent border, focus:ring-2 accent color, rounded-lg
- Submit button: Full-width accent primary
- Social icons: Heroicons with hover accent color transition
- Mailto link prominently displayed with icon

**Navigation:**
- Sticky header with blur backdrop (backdrop-blur-md bg-background/80)
- Logo/Name left, Nav links center/right
- Smooth scroll to sections on click
- Mobile: Hamburger menu with slide-in drawer

**Footer:**
- Centered layout with social links, copyright, "Built with Next.js" badge
- py-12 with border-t

### E. Animations
Use sparingly and purposefully:
- Hero: Subtle fade-in on load (400ms)
- Cards: hover:scale and shadow transitions (150ms ease-out)
- Scroll: Intersection observer fade-in for sections (stagger 100ms)
- Links: Color transitions (150ms)

## Images

**Hero Image (Required):**
- Professional workspace shot or portrait
- Position: Right side of hero, 50% width on desktop
- Treatment: Rounded-2xl with subtle shadow, aspect-square or 3:4
- Fallback: Geometric pattern or gradient if no photo

**Project Images (3-5 projects):**
- Screenshots or mockups of projects
- Treatment: Aspect-video, rounded-lg, shadow-md
- Hover: Slight scale + shadow enhancement

## Additional Sections

**Experience/Timeline:** Brief work history with company logos and date ranges in vertical timeline format

**Achievements:** Quick stats or highlights (GitHub stars, projects completed, years experience) in metric cards

## Accessibility & Quality
- All interactive elements have clear focus states (ring-2 ring-accent)
- Minimum contrast ratio 4.5:1 for text
- All images have descriptive alt text
- Form inputs have proper labels and error states
- Dark mode: Consistent implementation across all components including forms

## Key Differentiators
- Clean, code-focused aesthetic without excessive decoration
- Strategic use of accent color for CTAs and highlights only
- Professional photography/imagery over illustrations
- Asymmetric hero layout for visual interest
- Tech stack presented as visual grid, not list