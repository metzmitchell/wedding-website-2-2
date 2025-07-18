# Developer Implementation Guide

This guide provides a comprehensive plan for implementing the wedding website using ShadCN UI, incorporating an enhanced color palette and a clear component-based architecture.

## 1. Color Palette Implementation

The updated color palette can be found in `Design/VisualDirection.md`. Key colors to use:

- **Primary CTA & Links:** Terracotta (`#c97842`)
- **Success States:** Green (`#448860`)
- **Video Elements:** Soft Blue (`#617994`)
- **Audio Elements:** Warm Purple (`#77627f`)

Ensure these are set up in `tailwind.config.js` for easy use throughout the project.

## 2. ShadCN UI Component Mapping

Here is a breakdown of the recommended ShadCN components for each part of the website. This ensures consistency and leverages the power of the ShadCN library.

### Global & Layout
- **Navigation Menu**: `navigation-menu` for the main site navigation.
- **Separator**: `separator` to create visual breaks between sections.
- **Aspect Ratio**: `aspect-ratio` for maintaining consistent 16:9 for the YouTube video embeds.

### Homepage
- **Card**: Use `card` for the three main navigation links ("Our Story", "Our Elopement", "Registry").
- **Button**: The primary "Share a Toast" CTA should be a `button` styled with the primary terracotta color.
- **Scroll Area**: The well-wishes feed should be contained within a `scroll-area`.

### Toast/Well-Wishes Page
- **Form**: Use the `form` component to manage the submission state and validation.
- **Input**: For the user's name.
- **Textarea**: For the written message.
- **Checkbox**: For the "Keep this private" option.
- **Radio Group**: To select the submission type (Text, Video, Audio).
- **Progress**: To show file upload progress for video/audio.
- **Alert** & **Alert Dialog**: For success and error messages after submission. Use `sonner` for less intrusive toast notifications on success.
- **Dialog**: To house the video/audio recording interface, triggered from the respective `radio-group` option.

### Media & Feed
- **Avatar**: For user profile images in the message feed.
- **Badge**: To tag messages as "Video", "Audio", or "Text" using the new accent colors.
- **Skeleton**: To create loading placeholders for the feed and other dynamic content.
- **Tooltip**: For providing extra information on interactive elements.
- **Hover Card**: To show a preview of a message on hover in the feed.

## 3. Structural & Architectural Improvements

To improve the information hierarchy and visual flow, the following structural changes are recommended.

### Page Structure
Implement a clear section-based layout on the homepage and other long pages. The recommended flow for the homepage is:

1.  **Hero Section**: Full-width, containing the main video and primary CTA.
2.  **Navigation Cards Section**: Three `card` components linking to key pages.
3.  **Live Well-Wishes Feed**: A preview of the latest public messages to encourage participation.
4.  **About Section**: A brief section about the elopement.
5.  **Footer**: With links to secondary pages like "Family Gathering" and "This Website".

Use alternating background colors (e.g., `cream` -> `white` -> `cream`) for different sections to create visual separation.

### Mobile Navigation
Instead of trying to fit all navigation items horizontally on mobile, use the `sheet` component. A standard hamburger menu icon will toggle a side sheet containing the navigation links for a cleaner, more user-friendly mobile experience.

## 4. Detailed Component Specifications

Here are the detailed specifications for components that were not fully defined in the original design documents.

### Well-Wishes Feed Card (`MessageCard.tsx`)
This component should have variants based on the message type.

- **Container**: A `card` component.
- **Header**: Contains the user `avatar` and name.
- **Content**:
    - **Text**: Italicized quote style.
    - **Video**: `aspect-ratio` container with a play button overlay that opens the video in a `dialog`. Use the `--accent-blue` for the border/play icon.
    - **Audio**: A simple audio player interface. Use `--accent-purple` for the player controls.
- **Footer**: A `badge` indicating the message type.

### File Upload Component
- Use a dashed `div` that accepts drag-and-drop.
- On file selection, display a `progress` bar.
- Show a preview of the video thumbnail or an audio waveform after upload.
- Use `alert` to display any file size or format errors.

## 5. Animation & Transition Specifications

To bring an elegant feel to the site, use the following animation properties.

- **Page Transitions**: A simple fade-in/fade-out between pages.
  - `duration-300`, `ease-out`
- **Component Entry**: Staggered fade-in for elements as they enter the viewport.
  - `opacity-0` to `opacity-100`, `translate-y-4` to `translate-y-0`
  - `duration-500`, `ease-out`
  - Stagger items by `100ms`.
- **Hover States**:
  - **Cards**: `transform: translateY(-4px)`, increased `shadow-lg`.
  - **Buttons**: `scale(1.03)`.
  - All hover transitions should be `duration-200`.

## 6. Recommended Project File Structure

```
.
├── app/
│   ├── (pages)/
│   │   ├── page.tsx            // Homepage
│   │   ├── our-story/page.tsx
│   │   ├── our-elopement/page.tsx
│   │   ├── registry/page.tsx
│   │   └── toast/page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                     // ShadCN UI components
│   └── wedding/
│       ├── Navigation.tsx
│       ├── MobileNavSheet.tsx
│       ├── HeroSection.tsx
│       ├── WellWishesFeed.tsx
│       ├── MessageCard.tsx
│       ├── ToastForm.tsx
│       └── VideoEmbed.tsx
├── design/
│   └── (Your design files)
└── lib/
    └── utils.ts
``` 