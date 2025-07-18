# Component Specifications - Wedding Website

## Overview
This document defines the reusable UI components for Mitch & Sarah's wedding website. Each component follows the elegant, book-like aesthetic with serif typography, generous white space, and subtle shadows to create a magazine-quality experience.

---

## Button Component

### Primary Button (CTA)
```
Default: bg-primary text-white hover:bg-primary/90
Padding: px-8 py-4
Typography: font-serif text-lg font-medium tracking-wide
Border radius: rounded-md
Shadow: shadow-md hover:shadow-lg
Transition: all 300ms ease-out
Focus: ring-2 ring-primary ring-offset-4
```

### Secondary Button
```
Default: bg-white text-gray-700 border border-gray-300
Hover: bg-gray-50 border-gray-400
Other properties: Same as primary
```

### Text Link Button
```
Default: text-primary font-serif underline underline-offset-4
Hover: text-primary/80
No background or border
Used for: Subtle actions
```

---

## Navigation Link Component

### Desktop Nav Link
```
Base: font-serif text-base lg:text-lg text-gray-600
Hover: text-primary
Active: text-primary with border-b-2 border-primary underline-offset-8
Letter spacing: tracking-wide
Transition: all 300ms ease-out
```

### Mobile Nav Link
```
Base: Same typography as desktop
Display: block w-full text-center
Padding: py-3
Min height: 48px (touch target)
Active: text-primary (no underline)
```

---

## Card Components

### Navigation Card
```
Container: bg-white rounded-lg shadow-md p-8 lg:p-10
Hover: shadow-lg transform -translate-y-0.5
Transition: all 300ms ease-out
Clickable: Entire card is interactive

Structure:
- Title: font-serif text-2xl lg:text-3xl text-gray-800 mb-4
- Description: font-serif text-base lg:text-lg text-gray-600 leading-relaxed
- No explicit CTA text needed
```

### Content Card (Page Sections)
```
Container: bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12
Shadow: shadow-sm
Border: Optional 1px solid border-gray-100
Used for: Highlighting content blocks
```

---

## Form Components

### Text Input
```
Base: bg-white border border-gray-300 rounded-md
Padding: px-4 py-3
Typography: font-serif text-base
Focus: ring-2 ring-primary border-transparent
Placeholder: text-gray-400
```

### Textarea
```
Same as text input plus:
Min height: min-h-[120px]
Resize: resize-y
Line height: leading-relaxed
```

### Checkbox
```
Size: w-5 h-5
Color: text-primary
Focus: ring-2 ring-primary
Label: font-serif text-base text-gray-700 ml-3
Container: flex items-center
```

### Form Labels
```
Typography: font-serif text-base font-medium text-gray-700
Margin: mb-2
Required indicator: text-primary ml-1
```

---

## Media Components

### YouTube Video Embed
```
Container: bg-white rounded-lg shadow-lg p-2
Aspect ratio: aspect-video (16:9)
Border: 1px solid border-gray-200
Loading state: Skeleton with soft pulse animation

Responsive wrapper:
<div className="relative pb-[56.25%] h-0">
  <iframe className="absolute top-0 left-0 w-full h-full rounded-md" />
</div>
```

### Video/Audio Upload Button
```
Container: Border-2 border-dashed border-gray-300 rounded-lg
Padding: p-8
Hover: border-gray-400 bg-gray-50
Icon: 48px centered
Text: font-serif text-base text-gray-600
Active: border-primary bg-primary/5
```

### Media Player Card
```
Container: Same as text message card
Player controls: Minimal, elegant design
Thumbnail: Rounded-md with play overlay
Author: font-serif text-sm text-gray-600 mt-2
```

---

## Feed Components

### Message Feed Container
```
Container: bg-gray-50/50 rounded-lg p-6
Max height: 600px (desktop), 400px (mobile)
Overflow: overflow-y-auto
Scrollbar: Styled thin and subtle
```

### Text Message Card
```
Container: bg-white rounded-lg shadow-sm p-6 mb-4
Border: 1px solid border-gray-200
Message text: font-serif text-base lg:text-lg text-gray-700 italic leading-relaxed
Author: font-serif text-sm text-gray-600 mt-4 text-right
Hover: shadow-md (subtle elevation)
```

### Empty State
```
Container: text-center py-12
Icon: 64px mx-auto text-gray-300
Message: font-serif text-lg text-gray-500
Subtext: font-serif text-base text-gray-400 mt-2
CTA: Primary button style mt-6
```

---

## Photo Components

### Single Photo Display
```
Container: my-12 lg:my-16
Image: rounded-lg shadow-md
Max width: Depends on context (maintain aspect ratio)
White space: Minimum 25% on each side
Loading: Blur-up placeholder
```

### Photo Grid (2 photos)
```
Grid: grid-cols-1 md:grid-cols-2 gap-8
Each photo: Same styling as single
Mobile: Stack vertically
```

### Photo Caption
```
Typography: font-serif text-sm text-gray-500 italic text-center
Margin: mt-4
Max width: Same as photo
```

---

## Loading States

### Skeleton Loader
```
Base: bg-gray-200 animate-pulse rounded
Heights: Match content being loaded
Animation: Soft 2s pulse
Used for: Text blocks, images, cards
```

### Spinner
```
Size: w-8 h-8
Color: border-primary
Animation: animate-spin
Border: border-4 border-t-transparent rounded-full
Container: flex justify-center items-center
```

### Loading Text
```
Typography: font-serif text-base text-gray-500 italic
Animation: Soft fade in/out
Examples: "Loading messages...", "Uploading your video..."
```

---

## Layout Components

### Page Container
```
Max width: max-w-4xl mx-auto (most pages)
Padding: px-6 lg:px-16
Background: Inherit cream from body
Min height: min-h-screen
```

### Section Container
```
Padding: py-24 lg:py-32
Spacing: Generous gaps between sections
Background: Optional bg-white for contrast
```

### Content Block
```
Max width: max-w-2xl mx-auto (for text-heavy sections)
Line height: leading-relaxed
Paragraph spacing: mb-6
```

---

## Feedback Components

### Success Message
```
Container: bg-green-50 border border-green-200 rounded-lg p-4
Icon: Check circle, 20px, text-green-600
Text: font-serif text-base text-green-800
Animation: Fade in from top
```

### Error Message
```
Container: bg-red-50 border border-red-200 rounded-lg p-4
Icon: X circle, 20px, text-red-600
Text: font-serif text-base text-red-800
Dismissible: Optional X button
```

---

## Animation Patterns

### Page Transitions
```
Fade in: opacity-0 to opacity-100
Duration: 300ms
Easing: ease-out
Sequence: Stagger elements by 100-200ms
```

### Hover Effects
```
Cards: translateY(-2px) and shadow increase
Buttons: Subtle shadow elevation
Links: Color change with underline
Images: scale(1.02) very subtle
All: 300ms ease-out timing
```

### Scroll Animations
```
Fade in from bottom: translateY(20px) to translateY(0)
Trigger: When 20% visible
Duration: 500ms ease-out
Once: Animation runs once, doesn't repeat
```

---

## Accessibility Considerations

### Focus States
- All interactive elements: ring-2 ring-primary ring-offset-4
- High contrast against backgrounds
- Never remove focus indicators

### Touch Targets
- Minimum 48px height for all interactive elements
- Adequate spacing between clickable items
- Clear hit areas on mobile

### Screen Reader Support
- Descriptive labels for all media
- Proper heading hierarchy
- Form labels associated correctly
- Status messages announced

---

## Mobile-First Considerations

### Typography Scaling
```
Desktop -> Mobile:
- Display: 48px -> 32px
- Headings: Scale down ~20%
- Body: 18px -> 16px
- Maintain readability
```

### Spacing Adjustments
```
Desktop -> Mobile:
- Section padding: py-32 -> py-24
- Card padding: p-10 -> p-6
- Margins: Reduce by ~25%
```

### Layout Shifts
```
- Three columns -> Single column
- Side-by-side -> Stacked
- Horizontal scroll never needed
- Maintain visual hierarchy
```

---

## Implementation Notes

### Component Library Base
- Use ShadCN components where applicable
- Extend with custom styling
- Maintain consistency with theme

### CSS Strategy
- Tailwind utilities preferred
- Custom CSS only when necessary
- No inline styles

### Performance
- Lazy load heavy components
- Optimize images before display
- Minimize JavaScript where possible

---

## Special Wedding Website Components

### Toast Submission Options
```
Container: Grid or stack of option cards
Each option:
- Icon: 48px centered
- Label: font-serif text-lg text-gray-700
- Description: font-serif text-sm text-gray-500
- Hover: bg-gray-50 border-primary
- Padding: p-6
- Border: 2px solid border-gray-300 rounded-lg
```

### Privacy Toggle
```
Container: flex items-center justify-center mt-6
Checkbox: As defined above
Label: "Keep this private (just for us)"
Default: Unchecked (public)
```

### Message Counter
```
Typography: font-serif text-sm text-gray-500 italic
Position: Below feed or in header
Format: "32 messages and counting"
Update: Real-time if possible
``` 