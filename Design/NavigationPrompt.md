---
Context: Navigation Component for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Elegant, minimal navigation that feels like a book's table of contents
Priority: High
---

# Navigation Design Prompt

## Overview
Create a refined navigation system that feels like flipping through a cherished book's table of contents. The navigation should be understated yet clear, with mobile-first considerations for non-tech-savvy guests while maintaining the elegant, magazine-like aesthetic.

## Navigation Structure

### Information Architecture
```
Primary Navigation:
├── Our Story
├── Our Elopement 
├── Registry
├── Share a Toast (Primary CTA)

Additional Pages (accessed via footer or secondary nav):
├── Family Gathering
└── This Website
```

### Logo/Header Treatment
- **Text**: "Mitch Metz & Sarah Robinson" 
- **Position**: Centered at very top of page
- **Typography**: font-serif text-lg lg:text-xl text-gray-700
- **Style**: Letter-spacing wide, elegant serif treatment
- **Mobile**: Same centered position, text-base size

## Visual Design

### Desktop Navigation Bar
```
Layout: Horizontal, centered below header text
Position: Static (not sticky) - like a book page
Background: Transparent - part of the page
Spacing: 48px below header text
Container: max-w-4xl mx-auto
```

### Typography & Spacing
```
Navigation Items:
- Font: font-serif text-base lg:text-lg font-normal
- Color: text-gray-600 hover:text-primary
- Spacing: space-x-8 lg:space-x-12 between items
- Letter spacing: tracking-wide

CTA Item:
- Same typography but text-primary
- No button styling - integrated as navigation item
- Slightly heavier: font-medium
```

### Active State Indicators
```
Desktop:
- Color: text-primary (warm terracotta)
- Underline: 2px solid border-primary
- Offset: underline-offset-8
- Transition: 300ms ease-out

Mobile:
- Same color change
- No underline on mobile (cleaner)
```

## Mobile Navigation

### Mobile Menu Toggle
```
No hamburger menu - use horizontal scroll or wrap
Alternative approach:
- Stack navigation items vertically
- Center aligned
- Full width tap targets
- No drawer or overlay needed
```

### Mobile Layout
```
Container: w-full px-6
Items: Block-level, centered
Spacing: py-3 between items
Typography: text-base maintaining serif font
Tap targets: min-height 48px
```

## Interactive Behaviors

### Hover Effects
- **Links**: Gentle color transition to primary
- **Underline**: Fades in on hover (desktop only)
- **Transition**: All 300ms ease-out

### Click Feedback
- **Mobile**: Brief opacity change (0.8) on tap
- **No scale effects**: Maintain elegant feel

### Page Transitions
```
When navigating:
- Gentle fade out (200ms)
- New page fades in (300ms)
- Maintains book-like page-turning feel
```

## Responsive Breakpoints

### Desktop (≥ 1024px)
- Full horizontal navigation
- All items visible with generous spacing
- Underline hover effects active

### Tablet (768px - 1023px)
- Horizontal with reduced spacing
- May wrap to two lines if needed
- Maintain center alignment

### Mobile (< 768px)
- Vertical stack of navigation items
- Center aligned
- Full-width tap targets
- Increased vertical padding

## Accessibility Requirements

### Keyboard Navigation
- Tab through all items sequentially
- Focus states: ring-2 ring-primary ring-offset-4
- Current page announced to screen readers

### Screen Reader
- Proper nav landmark
- Current page: aria-current="page"
- Descriptive link text

### Visual Indicators
- High contrast maintained
- Focus indicators clearly visible
- No reliance on color alone

## Edge Cases

### Long Names
- Allow natural wrapping
- Maintain center alignment
- Adjust spacing as needed

### Single Page View
- Show navigation but style current page differently
- No redundant linking to current page

### JavaScript Disabled
- Navigation fully functional
- No dependent features

## Implementation Notes

### Component Structure
```
Navigation/
├── NavigationWrapper
├── HeaderText (Mitch Metz & Sarah Robinson)
├── NavigationList
├── NavigationItem
└── NavigationLink
```

### Styling Approach
- Use Tailwind classes exclusively
- No custom CSS needed
- Maintain consistency with book theme

### Performance
- No JavaScript for basic function
- CSS-only hover states
- Minimal DOM elements

## Special Considerations

### Book-Like Qualities
- Navigation feels like chapter listings
- Generous spacing between items
- Serif typography throughout
- No harsh lines or boxes

### Mobile-First Design
- Large, clear tap targets
- Simple vertical layout on mobile
- No complex interactions
- Clear visual hierarchy

### Integration with Page Design
- Navigation is part of the page, not separate
- Flows naturally with content
- Doesn't dominate or distract
- Subtle presence

## Footer Integration
Since some pages (Family Gathering, This Website) aren't in main nav:
- Include subtle footer links
- Same typography style
- Slightly smaller size
- Muted color until hover

---

## Example Visual Structure

```
Desktop:
    Mitch Metz & Sarah Robinson
           (48px gap)
Our Story   Our Elopement   Registry   Share Well-Wishes

Mobile:
     Mitch Metz & Sarah Robinson
          
          Our Story
          
        Our Elopement
          
          Registry
          
      Share a Toast
```

## Alternative Approach for Mobile
If vertical stack feels too long, consider:
- Two-column grid for the four items
- Maintains center alignment
- Still provides adequate tap targets
- Reduces vertical scroll

```
Mobile Alternative:
    Mitch Metz & Sarah Robinson
         
   Our Story    |    Registry
                |
 Our Elopement   | Share a Toast
``` 