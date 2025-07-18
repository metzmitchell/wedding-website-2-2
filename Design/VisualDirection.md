# Visual Direction

## Design Mood & Style

### Overall Aesthetic
An elegant digital experience that feels like reading through a beautifully crafted magazine or personal memoir. Each section flows like turning pages in a cherished book, with handcrafted touches and generous breathing room that invites contemplation and connection.

### Keywords
Elegant, Magazine-like, Handcrafted, Personal, Spacious, Refined, Book-like, Sophisticated

## Color Palette

### Primary Colors
```
Primary: oklch(0.65 0.14 55) - #c97842 - Warm terracotta/clay
Usage: Primary CTAs, key accents, link hovers
States:
  - Hover: oklch(0.6 0.14 55)
  - Active: oklch(0.55 0.14 55)
  - Disabled: opacity-50
```

### Secondary Colors
```
Secondary: oklch(0.9285 0.0160 102.8408) - #EDE8E3 - Warm off-white
Usage: Section backgrounds, cards, subtle accents
States:
  - Hover: oklch(0.9085 0.0160 102.8408)
  - Active: oklch(0.8885 0.0160 102.8408)
```

### Neutral Palette
```
Gray-900: oklch(0.2174 0.0019 106.5582) - Deep charcoal for primary text
Gray-800: oklch(0.2726 0.0227 107.8180) - Headers
Gray-700: oklch(0.3515 0.0310 105.3514) - Secondary headers
Gray-600: oklch(0.4382 0.0206 107.2219) - Body text
Gray-500: oklch(0.6081 0.0089 106.6610) - Muted text
Gray-400: oklch(0.7662 0.0181 106.8198) - Placeholders
Gray-300: oklch(0.8867 0.0081 106.5637) - Borders
Gray-200: oklch(0.9285 0.0160 102.8408) - Dividers
Gray-100: oklch(0.9381 0.0174 99.6086) - Light backgrounds
Gray-50:  oklch(0.9837 0.0066 106.5200) - Lightest backgrounds
```

### Background Colors
```
Primary Background: oklch(0.9837 0.0066 106.5200) - Soft cream white
Card Background: #FFFFFF with subtle shadow
Section Background: oklch(0.9837 0.0066 106.5200)
Overlay Background: rgba(0, 0, 0, 0.5) for modals
```

### Accent Colors (NEW)
```
Accent Green (Success): #448860
Usage: Success messages, confirmations

Accent Blue (Video): #617994
Usage: Accents for video-related elements

Accent Purple (Audio): #77627f
Usage: Accents for audio-related elements

Accent Amber (Warning): oklch(0.75 0.15 80)
Usage: Warnings, highlights, special notes
```

## Typography

### Font Families
```
Primary Font: Source Serif Pro, serif
Fallback: Georgia, 'Times New Roman', serif
Display Font: Source Serif Pro, serif (same for consistency)
Sans Accent: system-ui, -apple-system, sans-serif (for UI elements only)
```

### Type Scale
```
Display Large: 48px/64px - font-light (desktop only)
Display: 40px/52px - font-light
H1: 36px/48px - font-normal
H2: 28px/40px - font-normal
H3: 24px/32px - font-medium
H4: 20px/28px - font-medium
Body Large: 20px/32px - font-normal
Body: 18px/28px - font-normal
Body Small: 16px/24px - font-normal
Caption: 14px/20px - font-normal
```

### Responsive Typography
```
Mobile Adjustments:
- Display Large: 32px/44px
- Display: 28px/36px
- H1: 28px/36px
- H2: 24px/32px
- H3: 20px/28px
- Body: 16px/26px (slightly smaller for mobile)
```

### Text Styling
- **Links**: Primary color, no underline default, underline on hover with 2px offset
- **Emphasis**: Font-medium for subtle emphasis, italic for quotes
- **Blockquotes**: Italic with left border, increased padding

## Spacing System

### Base Unit
Base: 4px (following Tailwind's system)

### Common Spacing Values
```
xs: 8px (2)
sm: 16px (4)
md: 24px (6)
lg: 48px (12)
xl: 64px (16)
2xl: 96px (24)
3xl: 128px (32)
4xl: 160px (40)
```

### Component Spacing
- **Card Padding**: 32px (desktop), 24px (mobile)
- **Section Spacing**: 96px between major sections
- **Paragraph Spacing**: 24px between paragraphs
- **Button Padding**: 16px vertical, 32px horizontal
- **Image Margins**: 48px minimum white space around photos

## Component Styling

### Borders & Corners
```
Border Radius:
- Small: 4px - buttons, form inputs
- Medium: 8px - cards, images
- Large: 16px - major containers
- Full: 9999px - avatar images

Border Width:
- Default: 1px for subtle definition
- None: Most elements rely on shadow instead
```

### Shadows
```
Shadow-sm: 0 1px 3px 0px hsla(0, 0%, 0%, 0.05) - subtle cards
Shadow: 0 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0 1px 2px -1px hsla(0, 0%, 0%, 0.10) - default
Shadow-md: 0 4px 8px 0px hsla(0, 0%, 0%, 0.10), 0 2px 4px -1px hsla(0, 0%, 0%, 0.10) - hover
Shadow-lg: 0 8px 16px 0px hsla(0, 0%, 0%, 0.10), 0 4px 8px -2px hsla(0, 0%, 0%, 0.10) - modals
Shadow-xl: 0 16px 32px 0px hsla(0, 0%, 0%, 0.15) - high elevation
```

### Effects
- **Page Sections**: Each section styled as a "page" with subtle shadow
- **Transitions**: 300ms ease-out for all hover effects
- **Opacity**: Gentle fades only, no harsh transitions

## Layout Principles

### Grid System
- **Columns**: 12-column grid with flexible use
- **Gutters**: 32px desktop, 16px mobile
- **Margins**: 64px desktop, 24px mobile
- **Max Width**: 1200px for content, full-width backgrounds

### Breakpoints
```
Mobile: < 768px (primary target)
Tablet: 768px - 1024px
Desktop: 1024px - 1440px
Wide: > 1440px
```

### White Space Philosophy
- **Generous Margins**: Let content breathe
- **Single Photos**: Minimum 25% white space on each side
- **Text Blocks**: Max 65 characters per line for readability
- **Section Breaks**: Clear visual separation between "pages"

## Imagery & Graphics

### Photography Style
- **Treatment**: Natural, unfiltered outdoor shots
- **Presentation**: Single photos with ample white space
- **Aspect Ratios**: Primarily portrait (3:4), some landscape (16:9)
- **Borders**: Subtle shadow rather than hard borders

### Visual Elements
- **Dividers**: Thin lines or generous spacing, no heavy decorations
- **Backgrounds**: Solid colors or very subtle textures
- **Patterns**: None - maintain clean, book-like aesthetic

## Motion & Animation

### Timing
```
Fast: 200ms - Micro-interactions
Normal: 300ms - Most transitions
Slow: 500ms - Page/section reveals
```

### Animation Types
- **Fade In**: Primary animation for all elements
- **Subtle Scale**: 1.02 scale on image hover
- **Smooth Scroll**: Between sections
- **No Parallax**: Keep it simple and elegant

### Interaction Principles
- **Understated**: Animations should whisper, not shout
- **Purposeful**: Each animation guides attention
- **Consistent**: Same easing throughout (ease-out)

## Reference & Inspiration

### Mood Board Concepts
1. High-end travel magazines with full-page photos
2. Personal photo books with handwritten captions
3. Minimalist wedding invitations with serif typography

### Visual Hierarchy
- **Hero Areas**: Large type over subtle backgrounds
- **Content Flow**: Clear reading path like a book
- **CTAs**: Subtle but clear, integrated into content

## Implementation Notes

### Mobile-First Considerations
- Touch targets minimum 48px
- Simplified navigation
- Vertical photo orientation preferred
- Quick access to key actions

### Performance vs. Beauty
- Compressed images acceptable for faster loads
- Prioritize visual richness over raw speed
- Lazy load images below fold
- Smooth transitions over complex animations

### Accessibility Enhancements
- High contrast between text and backgrounds
- Large, readable serif font
- Clear focus states with primary color
- Generous tap targets for older users

---

## Additional Notes
- Each section should feel like a page in a high-end magazine
- Photos are the heroes - give them space to shine
- Typography should feel warm and personal, like a handwritten letter
- Overall feeling: You're holding something precious and personal 