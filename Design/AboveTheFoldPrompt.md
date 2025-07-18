---
Context: Above the Fold / Hero Section for Wedding Website Homepage
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Hero section with prominent video and elegant introduction
Priority: High
---

# Above the Fold / Hero Section Prompt

## Overview
Create an elegant hero section that immediately establishes the personal, book-like aesthetic while featuring the couple's introduction video as the primary focal point. This section sets the intimate, non-traditional tone for the entire wedding website experience.

## Visual Design

### Layout Structure
**Desktop (>= 1024px)**:
- Layout type: Centered with generous padding
- Content alignment: Center
- Max content width: 800px with mx-auto
- Padding: px-16 lg:px-24 py-24
- Min height: 100vh to create full "page" feeling

**Tablet (768px - 1023px)**:
- Layout adaptation: Maintain centered layout
- Content width: 90% with side margins
- Padding: px-8 py-16

**Mobile (< 768px)**:
- Stack order: Maintain same hierarchy
- Padding: px-6 py-12
- Minimum height: Flexible based on content

### Background Treatment
```
Background: Soft cream white - oklch(0.9837 0.0066 106.5200)
No patterns or gradients - pure, clean background
Subtle page shadow at section bottom: shadow-md
Page effect: Entire section styled as a "page" with subtle elevation
```

### Visual Element
**Type**: Embedded YouTube video
**Placement**: Centered after introductory text
**Size**: 
- Desktop: 720px max-width, 16:9 aspect ratio
- Mobile: 100% width with 16px side margins
**Style**: Rounded corners (rounded-lg), subtle shadow-lg

## Content Elements

### Primary Headline
```
Text: "Mitch & Sarah's Wedding"
Typography: font-serif text-5xl lg:text-6xl font-light text-gray-800
Max width: max-w-3xl
Line height: leading-tight
Mobile: text-3xl
Letter spacing: tracking-wide
Margin: mb-12
```

### Introduction Paragraph
```
Text: "Hello friends and family. We are extremely grateful to have all of you in our lives. This website gives you a glimpse into the family we're creating together. We're eloping in one of our favorite spots in the Western NC mountains, and to bring everyone into the ceremony, we'd love to read some well-wishes and advice that evening. Please send us a short video, audio message, or written note!"
Typography: font-serif text-xl lg:text-2xl font-normal text-gray-600
Max width: max-w-2xl mx-auto
Line height: leading-relaxed
Margin: mb-16
Mobile: text-lg
```

### Video Container
```
Container style: bg-white rounded-lg shadow-lg p-2
Video embed: YouTube iframe with responsive wrapper
Aspect ratio: aspect-video (16:9)
Loading: Show elegant skeleton loader before video loads
Border: 1px solid border-gray-200
```

### Video Caption
```
Text: "We'll explain why we picked August 21st (solar eclipse anniversary and our first-kiss day) and why eloping felt right."
Typography: text-base lg:text-lg text-gray-500 italic
Max width: max-w-2xl mx-auto
Margin: mt-6 mb-16
Alignment: text-center
```

### About Our Wedding Section
```
Container: bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12
Shadow: shadow-sm
Max width: max-w-3xl mx-auto
Text: [Full paragraph from copy]
Typography: font-serif text-lg lg:text-xl text-gray-700 leading-relaxed
Paragraph spacing: mb-6 for each paragraph
```

### Call-to-Action
```
Text: "Share a Toast"
Style: bg-primary hover:bg-primary/90 text-white
Size: px-8 py-4 text-lg font-medium
Rounding: rounded-md
Shadow: shadow-md hover:shadow-lg
Transition: transition-all duration-300
Position: Centered below content, mt-12
Letter spacing: tracking-wide
```

## Interactions & Animations

### Entry Animation
```
Type: Fade in with subtle upward drift
Timing: 
- Headline: delay-0 duration-500
- Text: delay-200 duration-500
- Video: delay-400 duration-700
- CTA: delay-600 duration-500
Easing: ease-out
Trigger: On page load
```

### Hover Effects
- **CTA Button**: scale-[1.02] shadow-lg
- **Video**: Subtle scale-[1.01] on container
- **Links**: Primary color with underline

### Scroll Behavior
- **Smooth scroll**: To next section
- **No parallax**: Keep it simple
- **Fade elements**: As user scrolls down

## Responsive Behavior

### Breakpoint Changes
```
1440px+: Maximum elegance with extra white space
1024px: Full desktop layout
768px: Tablet adjustments, slightly reduced spacing
640px: Mobile optimizations
```

### Video Handling
- **Desktop**: 720px max width centered
- **Tablet**: 90% width
- **Mobile**: Full width minus padding

## Performance Considerations

### Loading Strategy
- **LCP Optimization**: Text visible immediately
- **Video Loading**: Lazy load with poster image
- **Font Loading**: Preload Source Serif Pro
- **Animation**: CSS only, no JavaScript

### Asset Optimization
- **Video**: YouTube embed (external hosting)
- **Fonts**: Subset for faster loading
- **Background**: Simple color, no images

## Accessibility Requirements

### Text Contrast
- Ensure WCAG AA compliance for all text
- Gray-800 on cream background exceeds requirements

### Interactive Elements
- **CTA**: Minimum 48px touch target
- **Focus states**: ring-2 ring-primary ring-offset-4
- **Video**: Proper iframe title for screen readers

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable fade animations, show content immediately */
}
```

## Edge Cases

### Video Loading Failure
- Show elegant placeholder with message
- Maintain layout integrity
- Provide link to video on YouTube

### Long Names
- Text wrapping handled gracefully
- Maintain center alignment

### No JavaScript
- Content visible without animations
- Video shows with standard YouTube embed

## Implementation Notes

### Component Structure
```
HeroSection/
├── HeroHeading
├── HeroIntroText
├── VideoEmbed (with loading state)
├── VideoCaption
├── AboutWeddingCard
└── CTAButton
```

### State Management
- Video loading state
- Animation trigger states
- Error handling for video

### SEO Considerations
- H1 for main headline
- Semantic HTML structure
- Meta description from intro text

## Additional Requirements

### Book-Like Details
- Subtle page texture on section edges
- Generous white space above and below
- Typography that feels like printed text
- No harsh edges - everything soft and refined

### Personal Touches
- Warm color accents from the primary palette
- Serif typography throughout for elegance
- Spacing that lets each element breathe
- Nothing feels rushed or crowded

---

## Example Implementation Reference

```jsx
// Visual structure concept (not actual code)
<section className="min-h-screen flex items-center justify-center py-24 bg-cream">
  <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
    <h1 className="font-serif text-5xl lg:text-6xl font-light text-gray-800 mb-12">
      Mitch & Sarah's Wedding
    </h1>
    <p className="font-serif text-xl lg:text-2xl text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
      [Introduction text]
    </p>
    <VideoEmbed />
    <p className="caption">[Video caption]</p>
    <AboutWeddingSection />
    <CTAButton />
  </div>
</section>
``` 