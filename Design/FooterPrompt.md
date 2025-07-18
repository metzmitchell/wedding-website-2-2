---
Context: Footer Section for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Minimal, elegant footer that completes the book-like experience
Priority: Medium
---

# Footer Design Prompt

## Overview
Create a refined footer that serves as the closing note of each page, like the final lines of a book chapter. The footer should provide subtle navigation to additional pages while maintaining the personal, handcrafted aesthetic with the charming disclaimer about the AI-assisted development.

## Footer Structure

### Content Organization
```
Footer Layout:
├── Additional Navigation Links
├── Divider (subtle)
└── Personal Disclaimer
```

## Visual Design

### Container & Background
```
Background: bg-white
Border Top: border-t border-gray-200 (very subtle)
Padding: py-16 lg:py-20 px-6 lg:px-16
Container: max-w-4xl mx-auto (narrower for intimate feel)
Margin Top: mt-24 lg:mt-32 (generous space from content)
```

### Typography Hierarchy
```
Navigation Links: font-serif text-base text-gray-600 hover:text-primary
Disclaimer: font-serif text-sm text-gray-500 italic
All text: tracking-wide for elegance
Line height: leading-relaxed
```

## Content Sections

### Additional Navigation
```
Links:
- Family Gathering
- This Website

Layout: Inline with separator
Format: "Family Gathering | This Website"
Separator: " | " with px-3 spacing
Alignment: text-center
Hover: text-primary with 300ms transition
Underline: On hover only, 2px offset
```

### Visual Divider
```
Style: Hidden on mobile, visible on desktop
Type: Simple horizontal line
Implementation: border-b border-gray-200 w-24 mx-auto my-8
Alternative: Just use spacing (my-8) without visible line
```

### Personal Disclaimer
```
Text: "As a side note, Mitch coded this entire website using AI, so some features might or might not work."
Container: max-w-2xl mx-auto
Typography: font-serif text-sm text-gray-500 italic
Line height: leading-relaxed
Alignment: text-center
Charm: This adds personality and sets expectations
```

## Responsive Behavior

### Desktop (≥ 1024px)
```
Full layout with divider
Generous padding
Links inline with separator
```

### Tablet (768px - 1023px)
```
Similar to desktop
Slightly reduced padding
Maintain inline links
```

### Mobile (< 768px)
```
Reduced padding: py-12 px-6
Links remain inline (short enough)
No visual divider
Disclaimer may wrap to multiple lines
```

## Interactive Elements

### Link Behavior
```
Hover: Color transition to primary
Focus: ring-2 ring-primary ring-offset-4
Transition: all 300ms ease-out
Cursor: pointer
```

### No Additional CTAs
- Keep it minimal
- No newsletter signup
- No social media icons
- Just essential navigation and charm

## Accessibility

### Structure
- Semantic `<footer>` element
- Proper link contrast ratios
- Descriptive link text

### Keyboard Navigation
- All links keyboard accessible
- Logical tab order
- Clear focus indicators

### Screen Reader
- Landmark navigation
- Links announced clearly
- Disclaimer read as supplementary

## Edge Cases

### Single Page Application
- Footer appears on all pages
- Consistent positioning
- No variation in content

### Long Page Names
- Links should not wrap awkwardly
- Consider shortening if needed
- Maintain center alignment

### Mobile Scrolling
- Footer not sticky
- Natural document flow
- Adequate spacing from content above

## Implementation Notes

### Component Structure
```
Footer/
├── Footer.tsx (container)
├── FooterLinks.tsx
└── Disclaimer.tsx
```

### Styling Approach
- Pure Tailwind classes
- No custom CSS needed
- Consistent with site typography

### Performance
- Static content
- No JavaScript needed
- Minimal DOM elements

## Design Philosophy

### Book-Like Qualities
- Like publication details at book's end
- Understated presence
- Completes the page naturally
- Not competing for attention

### Personal Touch
- Disclaimer adds humanity
- Acknowledges the unique creation process
- Sets realistic expectations
- Adds charm and authenticity

### Visual Hierarchy
- Footer is clearly secondary
- Doesn't distract from main content
- Provides closure to page experience
- Subtle but discoverable

## Variations

### For Different Pages
- Same footer structure on all pages
- No page-specific variations
- Consistency throughout site
- Only content above footer changes

### Future Considerations
- Could add wedding date if needed
- Might include "Built with love" tagline
- Keep additions minimal
- Preserve simplicity

---

## Example Visual Structure

```
Desktop:
===============================================
                (main content ends)
                
                   (32px gap)
                
        Family Gathering | This Website
        
               ――――――――――――――
                   
     As a side note, Mitch coded this entire 
     website using AI, so some features might 
            or might not work.
            
                   (32px gap)
===============================================

Mobile:
=========================
    (main content ends)
    
         (24px gap)
         
  Family Gathering | 
    This Website
    
  As a side note, Mitch 
  coded this entire 
  website using AI, so 
  some features might or 
  might not work.
  
         (24px gap)
=========================
```

## Special Notes

### Maintaining Personality
- The disclaimer is crucial for the site's character
- It sets expectations while adding charm
- Reflects the couple's humor and transparency
- Makes the site feel more personal

### Integration with Pages
- Footer provides access to content not in main nav
- Doesn't overshadow primary navigation
- Discoverable but not prominent
- Completes the site structure elegantly 