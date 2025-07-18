---
Context: Registry Page for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md, ComponentSpecs.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Simple, elegant page explaining no traditional registry
Priority: Medium
---

# Registry Page Design Prompt

## Overview
Create a warm, straightforward page that explains Mitch & Sarah's non-traditional approach to wedding gifts. The page should feel personal and remove any pressure while providing clear options for those who wish to contribute to their house fund.

## Page Structure

### Page Header
```
Container: max-w-4xl mx-auto px-6 lg:px-16 py-12
Title: "Registry"
Typography: font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12
```

### Main Content Section

#### Container Design
```
Background: bg-white/50 backdrop-blur-sm rounded-lg
Padding: p-8 lg:p-12
Max width: max-w-2xl mx-auto (narrower for intimate feel)
Shadow: shadow-sm
Margin: mb-16 lg:mb-24
Text alignment: Center for key messages
```

#### Opening Message
```
Text: "We don't have a registry – we have everything we need."
Typography: font-serif text-2xl lg:text-3xl text-gray-800 mb-8 text-center
Weight: font-light
Line height: leading-relaxed
```

#### Explanation Paragraph
```
Typography: font-serif text-lg lg:text-xl text-gray-700
Line height: leading-relaxed
Margin: mb-12
Content: Full explanation about focusing on house savings
Tone: Grateful and casual
```

### Contribution Information Section

#### Section Design
```
Container: bg-gray-50 rounded-lg p-8 mt-12
Border: 1px solid border-gray-200
Max width: max-w-md mx-auto
```

#### Section Header
```
Text: "If you'd like to contribute to our future adventures:"
Typography: font-serif text-lg font-medium text-gray-800 mb-6
Alignment: Center
```

#### Contribution Methods
```
Layout: Vertical stack with generous spacing
Each method in its own container:
- Background: bg-white
- Padding: p-4
- Border radius: rounded-md
- Margin bottom: mb-4
```

#### Venmo Information
```
Label: "Venmo"
Typography: font-serif text-base font-medium text-gray-700
Handle: "@[to be determined]"
Handle style: font-mono text-lg text-gray-800
Copy button: Optional small icon button
```

#### Mailing Address
```
Label: "Mailing Address"
Typography: font-serif text-base font-medium text-gray-700
Address layout:
- Line 1: "28 Claxton PL"
- Line 2: "Asheville, NC"
Style: font-serif text-base text-gray-800
Line height: leading-relaxed
```

### Closing Message

#### Container
```
Margin top: mt-16
Max width: max-w-2xl mx-auto
Text alignment: Center
```

#### Message
```
Text: "Your love and presence in our lives is the real gift."
Typography: font-serif text-xl text-gray-600 italic
Emphasis: This is the key message
Spacing: Generous padding around
```

## Visual Design Elements

### Page Atmosphere
```
Warm and welcoming
No pressure or obligation
Personal and intimate
Focus on gratitude
```

### Visual Hierarchy
```
1. No registry message (largest)
2. Explanation (medium)
3. Contribution info (contained/secondary)
4. Closing message (emphasized through style)
```

### Decorative Elements
```
Minimal - let the message speak
Possibly subtle heart icon or similar
No gift-related imagery
Maintain book-like simplicity
```

## Responsive Behavior

### Desktop (≥ 1024px)
- Centered narrow column
- Optimal reading width
- Generous white space
- Elegant proportions

### Tablet (768px - 1023px)
- Slightly wider content
- Maintained centering
- Comfortable reading

### Mobile (< 768px)
- Full width with padding
- Stacked elements
- Easy to read addresses
- Clear tap targets

## Content Tone & Messaging

### Key Messages
1. We have what we need (grateful)
2. No obligation whatsoever (clear)
3. House fund if you wish (optional)
4. Your presence is the gift (heartfelt)

### Voice Guidelines
- Conversational and warm
- Not apologetic about no registry
- Clear but not transactional
- Personal touch throughout

## Interactions & Animations

### Page Load
```
Gentle fade in for all content
No staggered animations
Simple and elegant
Focus on message
```

### Copy Functionality (Optional)
```
Small copy icon next to Venmo/address
Click to copy to clipboard
Brief success message
Subtle interaction
```

### Hover States
```
Contribution containers: Slight shadow increase
No dramatic effects
Maintain elegance
```

## Edge Cases

### Missing Information
- Venmo handle placeholder if not ready
- Clear "[to be determined]" text
- No broken functionality

### Long Addresses
- Natural line breaks
- Maintained readability
- No overflow issues

### Various Contributions
- Clear that cash/check both work
- No confusion about methods
- Simple and straightforward

## Accessibility Features

### Readability
```
High contrast for all text
Generous font sizes
Clear hierarchy
Simple layout
```

### Interaction
```
Copy buttons keyboard accessible
Clear focus states
Screen reader friendly
Logical tab order
```

### Content Structure
```
Semantic HTML
Proper headings
Address formatting
Clear labels
```

## Implementation Notes

### Component Structure
```
RegistryPage/
├── PageHeader
├── MainMessage
├── ExplanationSection
├── ContributionInfo
│   ├── VenmoDetails
│   └── AddressDetails
└── ClosingMessage
```

### Data Management
```
Venmo handle in config
Address as structured data
Copy functionality hooks
Analytics for interactions
```

### Styling Approach
```
Reuse content containers
Consistent with other pages
Minimal custom styles
Focus on typography
```

---

## Special Considerations

### Emotional Design
- This page removes gift pressure
- Makes clear they're grateful
- Focuses on the relationship
- Avoids wedding industry norms

### Cultural Sensitivity
- Some guests expect to give
- Provides clear alternative
- No judgment either way
- Gracious throughout

### Future Updates
- Easy to update Venmo info
- Address changes simple
- Could add thank you message later
- Maintains relevance

### Integration with Site
- Consistent navigation
- Same visual style
- Personal voice maintained
- Part of overall story 