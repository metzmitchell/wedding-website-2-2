# Iteration Logs - Wedding Website

## Project: Mitch & Sarah's Wedding Website
**Start Date**: Current Session
**Current Version**: v1 - Initial Design Specification

---

## Initial Design Phase - Current Date

### Design Decisions Made

1. **Book-Like Aesthetic**: Chose to create a digital experience that feels like reading through a cherished photo album or memoir
   - Rationale: Aligns with the couple's desire for an elegant, magazine-like experience that feels handcrafted and personal

2. **Mobile-First with Generous White Space**: Prioritized mobile experience while maintaining elegant spacing
   - Rationale: Target audience includes non-tech-savvy family members who will primarily access via smartphones

3. **Serif Typography Throughout**: Source Serif Pro as primary font
   - Rationale: Creates warm, personal feeling like a handwritten letter rather than corporate website

4. **Warm Terracotta Primary Color**: oklch(0.6503 0.1227 52.5363)
   - Rationale: Earthy, warm tone that complements outdoor/nature theme without being too bold

5. **Subtle Animations Only**: Fade effects, no parallax or complex movements
   - Rationale: Maintains luxury/high-end feel while being accessible to older users

### Key Design Patterns Established

1. **Photo Presentation Pattern**:
   - Single photos with 25% white space minimum on sides
   - Subtle shadows instead of borders
   - Natural, unfiltered aesthetic
   - Why it works: Creates gallery/museum quality presentation

2. **Card Design Pattern**:
   - White background with shadow-md
   - Generous padding (p-8 to p-10)
   - Subtle hover elevation
   - Why it works: Maintains book page metaphor while providing clear interaction

3. **Navigation Pattern**:
   - Simple, centered text links
   - No hamburger menu on mobile (vertical stack instead)
   - Static header (not sticky)
   - Why it works: Like a book's table of contents, unobtrusive

### Content Structure Decisions

1. **Homepage Flow**:
   - Video first to humanize experience
   - Navigation cards to guide exploration
   - Well-wishes feed for social proof
   - Rationale: Creates emotional connection immediately

2. **Toast Page as Primary CTA**:
   - Multiple submission formats
   - Clear privacy options
   - Guest book metaphor
   - Rationale: Main goal is collecting well-wishes

3. **Footer with Personality**:
   - AI disclaimer adds charm
   - Minimal links
   - Rationale: Maintains personal, non-corporate feel

### Technical Decisions

1. **Component Architecture**:
   - Reusable components for cards, photos, forms
   - Consistent spacing and typography systems
   - ShadCN as base with customization

2. **Performance Strategy**:
   - Visual richness over raw speed
   - Lazy loading for images
   - YouTube embeds for video (external hosting)

3. **Responsive Approach**:
   - True mobile-first development
   - Graceful enhancement for desktop
   - No complex layouts that break on small screens

---

## Design System Evolution

### Color Palette Refinement
- Started with warm, earthy tones
- Added soft cream background for book-like feel
- Subtle grays for text hierarchy
- Kept palette minimal and sophisticated

### Typography Scale
- Established clear hierarchy from Display down to Caption
- Generous line heights for readability
- Consistent spacing rhythm based on 4px grid

### Component Standardization
- Message cards styled like handwritten notes
- Photos presented like in a gallery
- Forms feel approachable, not technical

---

## Accessibility Enhancements

1. **Large Touch Targets**: 48px minimum everywhere
2. **Clear Focus States**: Ring-2 with primary color
3. **High Contrast**: All text meets WCAG AA
4. **Simple Navigation**: No complex menus or interactions

---

## Successful Patterns

1. **Generous White Space**
   - Creates breathing room
   - Emphasizes content importance
   - Reduces cognitive load
   - Makes site feel expensive/luxurious

2. **Consistent Book Metaphor**
   - Each section as a "page"
   - Natural reading flow
   - No jarring transitions
   - Familiar mental model

3. **Personal Voice Throughout**
   - Casual copy from Mitch
   - Avoiding wedding clichés
   - Quirky domain story
   - AI disclaimer charm

---

## Areas for Future Enhancement

1. **Video/Audio Upload**: Research best implementation approach
2. **Photo Optimization**: Determine compression settings
3. **Feed Pagination**: Decide on infinite scroll vs pages
4. **Success Metrics**: Add analytics for conversion tracking

---

## Lessons Learned

### What Worked Well
1. Starting with clear aesthetic vision (magazine/book)
2. Prioritizing emotional design over features
3. Keeping navigation extremely simple
4. Using established patterns (ShadCN) as base

### Key Insights
1. Less is more for this audience
2. Personal touches matter more than polish
3. Mobile-first isn't just responsive - it's designing for primary use case
4. White space is a feature, not waste

---

## Next Steps
1. Implement video/audio upload functionality
2. Gather and optimize photo assets
3. Test with target demographic
4. Refine based on user feedback

---

## Final Notes

### For Future Projects
1. Book/magazine metaphor works well for personal sites
2. Don't underestimate power of generous spacing
3. Personal voice in copy is worth preserving
4. Simple can still be elegant

### Design Philosophy
This project proves that wedding websites don't need to follow templates. By focusing on the couple's story and making guests feel included despite physical distance, we created something uniquely theirs. The book-like aesthetic gives the site permanence - it will age gracefully as a digital keepsake.

### Technical Simplicity
By avoiding complex features and focusing on core functionality (video messages, story telling, simple navigation), we created a site that serves its purpose without overwhelming non-technical users. Sometimes the best design is the one that gets out of the way. 