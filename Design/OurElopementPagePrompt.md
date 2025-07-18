---
Context: Our Elopement Page for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md, ComponentSpecs.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Elegant page describing the elopement location and plans
Priority: High
---

# Our Elopement Page Design Prompt

## Overview
Create an intimate page that shares the details of Mitch & Sarah's elopement at Bear Creek Lake. The page should convey the significance of the location, their ceremony plans, and the intentional nature of their celebration. It should feel like reading a personal letter about their special day.

## Page Structure

### Page Header
```
Container: max-w-4xl mx-auto px-6 lg:px-16 py-12
Title: "Our Elopement"
Typography: font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12
Subtitle: Optional - "August 21st at Bear Creek Lake"
Subtitle style: font-serif text-xl text-gray-600 text-center mt-4
```

### Main Content Section

#### Container Design
```
Background: bg-white/50 backdrop-blur-sm rounded-lg
Padding: p-8 lg:p-12
Max width: max-w-3xl mx-auto
Shadow: shadow-sm
Margin: mb-16 lg:mb-24
```

#### Text Content
```
Typography: font-serif text-lg lg:text-xl text-gray-700
Line height: leading-relaxed
Paragraph spacing: mb-6

Content structure:
1. Opening about Bear Creek Lake significance
2. Description of the ceremony location
3. Wedding day plans
4. Post-ceremony cabin intentions
5. Motorboat ceremony details
```

### Bear Creek Lake Photo

#### Photo Container
```
Position: After first or second paragraph
Container: my-12 lg:my-16
Max width: max-w-4xl mx-auto
Alignment: Center
```

#### Photo Styling
```
Image container: bg-white rounded-lg shadow-lg p-2
Image: rounded-md w-full
Aspect ratio: Landscape (maintain original)
Caption: "Bear Creek Lake" or similar
Caption style: font-serif text-sm text-gray-500 italic text-center mt-4
Loading: Blur-up placeholder
```

### Additional Content Sections

#### Ceremony Details (Optional Section)
```
Container: Same as main content container
Content could include:
- Time of day
- What they'll wear
- Vows approach
- Natural setting description
```

#### The Significance Section
```
Pull quote or highlighted text:
Container: border-l-4 border-primary pl-6 my-8
Typography: font-serif text-xl italic text-gray-700
Content: Key phrase about why this place matters
```

## Visual Design Elements

### Page Atmosphere
```
Romantic and intimate feeling
Natural, outdoor aesthetic
Peaceful and contemplative
Focus on the location's beauty
```

### Typography Treatment
```
Elegant serif throughout
Generous line spacing for readability
Key phrases slightly emphasized
Maintain personal letter feeling
```

### Photo Integration
```
Single hero photo of the lake
Generous white space around image
Natural, unedited aesthetic
Shows the actual ceremony location
```

## Responsive Behavior

### Desktop (≥ 1024px)
- Optimal reading width (max 65ch)
- Large photo display
- Generous padding throughout
- Centered content column

### Tablet (768px - 1023px)
- Slightly narrower content
- Photo scales proportionally
- Maintained readability

### Mobile (< 768px)
- Full-width content with padding
- Photo fills container width
- Comfortable mobile reading
- Single column throughout

## Content Sections Detail

### Opening Paragraph
```
Focus: Personal connection to location
Tone: Intimate and reflective
Length: 2-3 sentences
Key message: Why Bear Creek Lake
```

### Ceremony Description
```
Focus: Setting and atmosphere
Details: River mouth, grassy island, cliffs
Tone: Poetic but not overwrought
Visual: Help readers picture the scene
```

### Wedding Day Plans
```
Focus: Simple, intentional celebration
Details: Cabin retreat, reading messages
Tone: Excited but calm
Message: Quality over quantity
```

### Closing Thoughts
```
Focus: Transition to married life
Tone: Forward-looking
Connection: Tie back to well-wishes
```

## Interactions & Animations

### Page Load
```
Content fades in gently
Photo loads with blur-up effect
No jarring movements
Smooth, contemplative feel
```

### Scroll Behavior
```
Natural document flow
No parallax effects
Smooth scrolling between sections
Focus on reading experience
```

### Photo Interaction
```
Subtle zoom on hover (optional)
Possible lightbox on click
Maintain simplicity
```

## Performance Optimization

### Image Handling
```
Single high-quality photo
Multiple sizes for responsive
WebP with JPEG fallback
Optimized file size
Lazy load with placeholder
```

### Content Loading
```
Text loads immediately
Photo loads after text
No render blocking
Fast initial paint
```

## Edge Cases

### Missing Photo
- Graceful text-only layout
- No broken image icons
- Content stands alone

### Long Content
- Natural flow maintained
- No awkward breaks
- Readable on all devices

### Various Screen Sizes
- Test on very small screens
- Ensure readability throughout
- No horizontal scrolling

## Accessibility Features

### Semantic Structure
```
Proper heading hierarchy
Meaningful link text
Descriptive photo alt text
Logical reading order
```

### Readability
```
High contrast text
Sufficient font size
Good line spacing
Clear paragraph breaks
```

### Navigation
```
Skip to content link
Keyboard accessible
Clear focus indicators
Predictable behavior
```

## Implementation Notes

### Component Structure
```
OurElopementPage/
├── PageHeader
├── MainContent
│   ├── TextSection
│   ├── LakePhoto
│   └── PullQuote
├── CeremonyDetails (if added)
└── SignificanceHighlight
```

### Content Management
```
Text content in markdown/components
Photo path configuration
Caption management
SEO metadata
```

### Styling Approach
```
Consistent with site theme
Reuse existing components
Minimal custom styles
Tailwind utilities primarily
```

---

## Special Considerations

### Emotional Tone
- This page shares intimate details
- Balance openness with privacy
- Focus on the meaning, not logistics
- Create connection with readers

### Location Description
- Paint a picture with words
- Help guests visualize the setting
- Convey the natural beauty
- Explain why it's special

### Integration with Site
- Connect to well-wishes purpose
- Reference the date significance
- Maintain consistent voice
- Support overall narrative

### Future Viewing
- This becomes a keepsake
- Write timelessly
- Avoid too-specific details
- Focus on enduring sentiments 