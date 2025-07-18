---
Context: Main Content Sections for Wedding Website Homepage
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md, ComponentSpecs.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Elegant content sections that flow like pages in a book
Priority: High
---

# Main Content Sections Prompt

## Overview
Design the main content sections for the homepage that guide visitors through the wedding story and encourage participation. Each section should feel like turning a page in an elegant magazine, with generous white space and refined typography.

## Section Planning

### Content Flow Strategy
```
1. Navigation Cards → Guide to other pages
2. Well-Wishes Feed → Show community participation
3. Footer → Additional links and disclaimer
```

### Section Order
1. Three Navigation Cards: Visual gateway to key content
2. Well-Wishes Feed: Social proof and engagement
3. Footer: Subtle additional navigation

---

## Navigation Cards Section

### Layout Structure
```
Container: max-w-6xl mx-auto px-6 lg:px-16
Background: Maintain cream background continuity
Spacing: py-24 lg:py-32 from previous section
Grid: grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12
```

### Card Design
```
Each card:
- Background: bg-white
- Border: None, rely on shadow
- Shadow: shadow-md hover:shadow-lg
- Padding: p-8 lg:p-10
- Border radius: rounded-lg
- Height: Equal height using flex
- Transition: all 300ms ease-out
```

### Card Content Structure
```
Card 1 - Our Story:
- Heading: "Our Story"
- Typography: font-serif text-2xl lg:text-3xl text-gray-800 mb-4
- Description: "How we met, our first date, and what we do now"
- Text style: font-serif text-base lg:text-lg text-gray-600 leading-relaxed

Card 2 - Our Elopement:
- Heading: "Our Elopement"
- Typography: Same as Card 1
- Description: "What we're doing on August 21st and why Bear Creek Lake"

Card 3 - Registry:
- Heading: "Registry"
- Typography: Same as Card 1
- Description: "We have everything we need, except a house to put it in"
```

### Interactive Elements
```
Hover state:
- Shadow elevation increase
- Slight y-transform: -translateY-2px
- Cursor: pointer

Click behavior:
- Navigate to respective page
- Brief opacity transition

No explicit "Read More" - entire card is clickable
```

---

## Well-Wishes Feed Section

### Section Header
```
Container: text-center mb-16
Heading: "Your Toasts to Us"
Typography: font-serif text-3xl lg:text-4xl text-gray-800 mb-6
Subheading: "We'll read every single one on August 21st. Thank you for being part of our ceremony."
Subheading style: font-serif text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto
```

### Feed Layout
```
Container: max-w-4xl mx-auto
Display: Vertical scrollable feed
Max height: 600px with overflow-y-auto
Scrollbar: Styled to be subtle and elegant
Background: bg-gray-50/50 rounded-lg p-6
```

### Message Card Types

#### Text Message Cards
```
Container: bg-white rounded-lg shadow-sm p-6 mb-4
Border: 1px solid border-gray-200
Typography:
- Message: font-serif text-base lg:text-lg text-gray-700 italic leading-relaxed
- Author: font-serif text-sm text-gray-600 mt-4 text-right
Format: Styled like a handwritten note
Max width: 100%
```

#### Video/Audio Message Cards
```
Container: Same as text cards
Media player: Embedded with elegant controls
Thumbnail: For videos, show poster image
Play button: Centered overlay with semi-transparent background
Size: Responsive 16:9 aspect ratio
Caption: Author name below player
```

### Feed Behavior
```
Loading: Show skeleton cards while loading
Empty state: "Be the first to share your well-wishes!"
Error state: Graceful fallback message
Animation: Cards fade in as they load
Pagination: Load more on scroll (infinite scroll)
```

### Social Proof Elements
```
Counter: "32 messages and counting" (if applicable)
Style: text-sm text-gray-500 text-center mt-6
Update: Real-time if possible, static fallback
```

---

## Footer Section

### Layout
```
Container: Full width
Background: bg-white border-t border-gray-200
Padding: py-16 lg:py-20 px-6 lg:px-16
Max width: max-w-6xl mx-auto for content
```

### Content Structure
```
Top row: Additional page links
- Family Gathering | This Website
- Typography: font-serif text-base text-gray-600 hover:text-primary
- Separator: " | " between links
- Alignment: Center

Divider: Thin line or 32px spacing

Bottom row: Disclaimer
- Text: "As a side note, Mitch coded this entire website using AI, so some features might or might not work."
- Typography: font-serif text-sm text-gray-500 italic
- Max width: max-w-2xl mx-auto
- Alignment: Center
```

---

## Responsive Behavior

### Desktop (≥ 1024px)
- Three-column card grid
- Full-sized message feed
- Generous spacing throughout

### Tablet (768px - 1023px)
- Three columns maintained if possible
- Slightly reduced card padding
- Feed height adjusted

### Mobile (< 768px)
- Single column for cards
- Full-width cards
- Reduced feed height (400px)
- Larger touch targets

---

## Animation Strategy

### Scroll-Triggered Animations
```
Cards section:
- Fade in from bottom
- Stagger: 200ms between cards
- Duration: 500ms ease-out

Messages feed:
- Fade in as section appears
- Individual messages animate on load
```

### Interaction Feedback
- Smooth hover transitions
- No jarring movements
- Subtle, refined effects only

---

## Data Integration

### Dynamic Content
```
Well-wishes:
- Source: Firebase Firestore
- Real-time updates preferable
- Fallback: Static sampling

Message filtering:
- Only show public messages
- Sort by most recent
- Respect privacy settings
```

### Loading States
```
Cards: Static content, no loading needed
Feed: Elegant skeleton screens
Error handling: Graceful degradation
```

---

## Performance Optimization

### Lazy Loading
- Well-wishes load after initial page render
- Images in feed lazy loaded
- Video thumbnails only until play

### Optimization Strategies
- Virtualized scrolling for large feeds
- Image compression for thumbnails
- Efficient Firebase queries

---

## Implementation Notes

### Component Architecture
```
Homepage/
├── NavigationCards/
│   ├── CardGrid
│   └── NavigationCard
├── WellWishesFeed/
│   ├── FeedHeader
│   ├── MessageList
│   ├── TextMessage
│   ├── MediaMessage
│   └── EmptyState
└── Footer/
    ├── FooterLinks
    └── Disclaimer
```

### State Management
- Feed data in component state
- Loading/error states
- Real-time subscriptions if applicable

### Accessibility
- Keyboard navigation through cards
- Screen reader announcements for new messages
- Proper ARIA labels for media players

---

## Visual Cohesion

### Maintaining Book Aesthetic
- Each section feels like a chapter
- Consistent spacing rhythms
- Typography harmony throughout
- White space as a design element

### Personal Touches
- Handwritten note feeling for messages
- Warm, inviting card designs
- Nothing feels corporate or template-like
- Every element has breathing room

---

## Edge Cases

### Many Messages
- Smooth scrolling performance
- Clear indication of more content
- No overwhelming visual noise

### Few/No Messages
- Encouraging empty state
- Still maintain visual balance
- Clear CTA to add first message

### Long Messages
- Graceful text truncation with "Read more"
- Maintain card consistency
- Respect layout integrity 