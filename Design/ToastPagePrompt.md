---
Context: Toast Page (Well-Wishes Submission) for Wedding Website
Dependencies: ProjectGoals.md, VisualDirection.md, wedding-website-copy.md, ComponentSpecs.md
Tech Stack: React/Next.js 14, TailwindCSS, ShadCN, Firebase
Output: Elegant submission interface with multiple format options
Priority: High
---

# Toast Page Design Prompt

## Overview
Create an inviting submission experience that feels like writing in a guest book at an intimate gathering. The page should guide users through sharing their well-wishes via text, video, or audio, with clear options for privacy. This is the primary conversion point of the website.

## Page Structure

### Header Section
```
Container: max-w-4xl mx-auto px-6 lg:px-16 py-12
Title: "Share a Toast"
Typography: font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-8
Subheading: Full introductory paragraph from copy
Subheading style: font-serif text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center
```

### Submission Options Section

#### Container Design
```
Background: bg-white rounded-lg shadow-md
Padding: p-8 lg:p-12
Max width: max-w-3xl mx-auto
Margin: my-12 lg:my-16
```

#### Section Header
```
Text: "How would you like to share?"
Typography: font-serif text-2xl text-gray-800 text-center mb-8
```

#### Option Cards Layout
```
Container: grid grid-cols-1 md:grid-cols-3 gap-6
Each option as clickable card:
- Border: 2px solid border-gray-300
- Hover: border-primary bg-gray-50
- Active/Selected: border-primary bg-primary/5
- Padding: p-6
- Border radius: rounded-lg
- Transition: all 300ms ease-out
- Cursor: pointer
```

#### Option 1: Write a Message
```
Icon: 📝 (or Pencil icon from Lucide)
Icon size: text-4xl mb-4
Title: "Write a Message"
Typography: font-serif text-lg font-medium text-gray-800
Description: "Share your thoughts in writing"
Description style: font-serif text-sm text-gray-500 mt-2
```

#### Option 2: Upload a Video
```
Icon: 🎥 (or Video icon)
Title: "Upload a Video"
Description: "Record a video message"
Emphasis: This is high priority functionality
```

#### Option 3: Record Audio
```
Icon: 🎙️ (or Mic icon)
Title: "Record Audio"
Description: "Share your voice"
Emphasis: This is high priority functionality
```

### Form Section (Dynamic based on selection)

#### Text Message Form
```
Container: Appears below options when selected
Animation: Fade in with slight slide up
Spacing: mt-8

Textarea:
- Placeholder: "Write your message here... Feel free to share memories, advice, or well wishes for our new chapter together."
- Min height: min-h-[200px]
- Max length: 1000 characters (with counter)
- Style: As defined in ComponentSpecs

Character counter:
- Position: Bottom right of textarea
- Style: text-sm text-gray-500
- Format: "243 / 1000"

Submit button:
- Text: "Send Message"
- Style: Primary button as defined
- Position: mt-6 flex justify-end
```

#### Video Upload Form
```
Upload area:
- Dashed border container as defined in ComponentSpecs
- Drag and drop enabled
- Click to browse
- Accept: video/* (mp4, mov, avi)
- Max size: 100MB with clear indication

Progress indicator:
- Show during upload
- Percentage and/or progress bar
- Cancel option

Preview:
- Show thumbnail after upload
- Option to re-record/replace
```

#### Audio Recording Form
```
Recording interface:
- Large record button (red when recording)
- Time counter during recording
- Waveform visualization (if feasible)
- Max duration: 5 minutes

Playback controls:
- Play/pause
- Scrubber
- Re-record option
```

### Privacy Option

```
Container: mt-6 bg-gray-50 rounded-lg p-4
Checkbox and label as defined in ComponentSpecs
Additional text: "Your message will only be read by us"
Typography: font-serif text-sm text-gray-600 italic
```

### Public Messages Feed

#### Section Design
```
Container: max-w-4xl mx-auto mt-24
Separator: Thin border or generous spacing
Header: "Toasts from Family & Friends"
Subheader: "Shared with permission"
Typography: Same as homepage feed section
```

#### Feed Implementation
```
Same component as homepage feed
Shows only public messages
Real-time updates if possible
Pagination or infinite scroll
```

## Responsive Behavior

### Desktop (≥ 768px)
- Three-column option grid
- Side-by-side layout maintained
- Full-featured media controls

### Mobile (< 768px)
- Single column for options
- Stacked layout throughout
- Simplified media interfaces
- Touch-optimized controls

## User Flow & Interactions

### Selection Flow
1. User clicks option card
2. Card highlights with border/background
3. Corresponding form fades in below
4. Smooth scroll to form if needed

### Submission Flow
1. User completes form
2. Loading state during processing
3. Success message appears
4. Form resets or option to add another
5. If public, message appears in feed

### Success Feedback
```
Container: bg-green-50 border border-green-200 rounded-lg p-6
Icon: Check circle
Message: "Thank you! Your toast has been received."
Additional: "We'll read your message on our wedding night."
Animation: Fade in from top
Duration: Shows for 5 seconds or until dismissed
```

### Error Handling
```
Inline validation for required fields
Clear error messages below fields
Friendly language: "Oops! Please add your message"
Retry options for failed uploads
```

## Technical Considerations

### Form Validation
- Name: Required, max 100 characters
- Message: Required for text option
- File size limits clearly shown
- Format restrictions communicated

### Upload Handling
- Show progress for large files
- Chunked upload for reliability
- Fallback options if upload fails
- Clear file size/format requirements

### Data Privacy
- Clear indication of public vs private
- No message shown without permission
- Secure handling of personal messages
- GDPR considerations if applicable

## Performance Optimization

### Media Handling
- Compress videos client-side if possible
- Lazy load feed messages
- Thumbnail generation for videos
- Audio waveform generation (optional)

### Form State
- Persist form data in localStorage
- Clear indication of saved drafts
- Prevent data loss on navigation

## Edge Cases

### No JavaScript
- Basic HTML form fallback
- File upload still functional
- Graceful degradation

### Slow Connections
- Show progress clearly
- Allow pause/resume for uploads
- Timeout handling with clear messaging

### Multiple Submissions
- Allow users to submit multiple messages
- Clear flow to add another
- No confusion about what was sent

## Accessibility Features

### Form Labels
- Clear, descriptive labels
- Associated with inputs correctly
- Error messages linked to fields

### Media Controls
- Keyboard accessible
- Screen reader announcements
- Alternative text for icons

### Status Messages
- Announced to screen readers
- Sufficient color contrast
- Not reliant on color alone

## Implementation Notes

### Component Structure
```
ToastPage/
├── SubmissionOptions
├── TextMessageForm
├── VideoUploadForm
├── AudioRecordForm
├── PrivacyToggle
├── SuccessMessage
├── ErrorMessage
└── PublicMessagesFeed
```

### State Management
- Selected option type
- Form data
- Upload progress
- Submission status
- Privacy setting

### Firebase Integration
- Firestore for message storage
- Storage for media files
- Real-time listeners for feed
- Security rules for privacy

---

## Special Considerations

### Emotional Design
- This page captures precious memories
- Make it feel special and important
- Reduce anxiety about "saying the right thing"
- Encourage authenticity

### Mobile Recording
- Native device camera/mic access
- Clear permissions messaging
- Fallback to file upload
- Test on various devices

### Guest Book Feel
- Like signing a beautiful guest book
- Personal and intimate
- Not like a social media post
- Focus on the couple, not the public 