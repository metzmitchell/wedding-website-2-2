---
Context: Our Story Page for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md, ComponentSpecs.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Elegant storytelling page with timeline and photos
Priority: High
---

# Our Story Page Design Prompt

## Overview
Create a beautiful narrative page that tells Mitch & Sarah's love story through a combination of video, photos, and personal writing. The page should feel like reading through a cherished photo album with handwritten notes, maintaining the book-like aesthetic throughout.

## Page Structure

### Page Header
```
Container: max-w-4xl mx-auto px-6 lg:px-16 py-12
Title: "Our Story"
Typography: font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12
```

### Video Section

#### Container Design
```
Background: Transparent (part of page flow)
Max width: max-w-3xl mx-auto
Margin: mb-16 lg:mb-24
```

#### Video Player
```
Same styling as homepage video embed
Container: bg-white rounded-lg shadow-lg p-2
Aspect ratio: aspect-video (16:9)
Placeholder text: "The longer version of our story (coming soon)"
Typography for placeholder: font-serif text-lg text-gray-500 italic text-center
Loading state: Elegant skeleton
```

### Timeline Section

#### Section Header
```
Text: "When we met:"
Typography: font-serif text-2xl lg:text-3xl text-gray-800 mb-8
Position: text-center
```

#### Photo Grid
```
Container: grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12
Max width: max-w-4xl mx-auto
Margin: mb-16 lg:mb-24
```

#### Photo Cards
```
Each photo:
- Container: bg-white rounded-lg shadow-md p-2
- Image: rounded-md w-full
- Aspect ratio: Maintain original (mostly portrait)
- Hover: Subtle scale-[1.02] on image
- Caption container: p-4

Caption styling:
- Typography: font-serif text-base text-gray-600 italic
- Line height: leading-relaxed
- Examples: "Rock show tickets (Mitch's band was playing)"
```

### Story Text Section

#### Container
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
First line/date emphasis: font-medium text-gray-800

Content structure:
- Opening with eclipse date story
- Personal narrative style
- Warm, intimate tone
```

### Current Life Section

#### Section Header
```
Text: "What we do now:"
Typography: font-serif text-2xl lg:text-3xl text-gray-800 mb-8
Position: text-center
```

#### Photo Layout
```
Same grid structure as "When we met" section
2-4 photos showing current life
Each with descriptive captions
Focus on outdoor/hiking photos as mentioned
```

## Visual Design Elements

### Photo Presentation
```
Single photos with generous white space
No collages or packed layouts
Each photo gets room to breathe
Consistent shadow and rounding
Natural, unfiltered aesthetic
```

### Text Hierarchy
```
Section headers: Larger, centered
Body text: Comfortable reading size
Captions: Smaller, italic
Date emphasis: Slightly bolder
```

### Page Flow
```
Vertical rhythm with consistent spacing
Clear sections but smooth transitions
No harsh dividers
Natural reading progression
```

## Responsive Behavior

### Desktop (≥ 1024px)
- Two-column photo grids
- Generous padding and margins
- Full-width video player (max 720px)
- Optimal reading line length

### Tablet (768px - 1023px)
- Maintain two-column grid if possible
- Slightly reduced spacing
- Photos scale proportionally

### Mobile (< 768px)
- Single column for all content
- Full-width photos with padding
- Maintained hierarchy
- Touch-friendly spacing

## Interactions & Animations

### Scroll Animations
```
Photos fade in as they enter viewport
Delay: 100ms between grid items
Duration: 500ms ease-out
Text sections: Gentle fade in
```

### Photo Interactions
```
Hover: Very subtle scale and shadow increase
Click: Could open larger view (optional)
Loading: Blur-up placeholder effect
```

### Video Loading
```
Skeleton loader while loading
Smooth transition when ready
Play button overlay if not autoplay
```

## Content Guidelines

### Photo Selection
- Natural, candid shots preferred
- Outdoor/hiking theme prominent
- Mix of portrait and landscape orientations
- Chronological flow where relevant

### Caption Writing
- Brief, descriptive phrases
- Personal touches and inside references
- Date/location if relevant
- Maintain casual tone

### Story Text
- First person from Mitch's perspective
- Conversational, not formal
- Include specific details (eclipse, lake, etc.)
- Build emotional connection

## Performance Optimization

### Image Handling
```
Format: WebP with JPEG fallback
Sizing: Multiple sizes for responsive
Loading: Lazy loading with blur-up
Compression: Balanced quality/size
Max width: 800px for grid photos
```

### Page Load Strategy
```
1. Text content loads immediately
2. Video player shell renders
3. First two photos load eagerly
4. Remaining photos lazy load
5. Video loads when requested
```

## Edge Cases

### Missing Photos
- Graceful placeholder with message
- "Photo coming soon" in italic text
- Maintain layout structure

### Video Not Ready
- Clear "coming soon" message
- Possibly show thumbnail/poster
- No broken player interface

### Long Captions
- Allow natural wrapping
- Maintain readability
- Don't break layout

## Accessibility Features

### Image Alt Text
- Descriptive alt text for all photos
- Include context from captions
- Convey emotional content

### Reading Flow
- Logical heading structure
- Proper semantic HTML
- Screen reader friendly

### Keyboard Navigation
- All interactive elements accessible
- Clear focus indicators
- Skip links if needed

## Implementation Notes

### Component Structure
```
OurStoryPage/
├── PageHeader
├── StoryVideo
├── TimelineSection
│   ├── SectionHeader
│   └── PhotoGrid
├── StoryTextBlock
├── CurrentLifeSection
└── PhotoWithCaption (reusable)
```

### State Management
- Photo loading states
- Video player state
- Scroll animation triggers
- Lightbox state (if implemented)

### Data Structure
```
photos: [
  {
    id: string,
    src: string,
    alt: string,
    caption: string,
    section: 'meeting' | 'current'
  }
]
```

---

## Special Considerations

### Storytelling Flow
- Chronological progression feels natural
- Each section builds on previous
- Photos support the narrative
- Personal voice throughout

### Emotional Design
- This page builds connection
- Intimate without oversharing
- Focus on journey together
- Celebrate their uniqueness

### Photo Quality
- Smartphone photos are perfect
- Authenticity over perfection
- Natural moments preferred
- Consistent presentation style 