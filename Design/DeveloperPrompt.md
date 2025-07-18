# Developer Implementation Guide - Mitch & Sarah's Wedding Website

## Project Overview
Build a wedding website that allows guests to submit well-wishes (toasts) in multiple formats (text, photo, video) with public/private display options. The site should feel like reading an elegant book with a focus on simplicity for non-tech-savvy users.

**Domain**: pumpkinspumpkinspumpkinsandmore.com  
**Development Environment**: Replit  
**Starting Template**: (already installed) https://github.com/ansh/template-2 (social media app)   
**Design References**: All design specifications in this folder

---

## Project Introduction

Welcome! You'll be implementing Mitch & Sarah's wedding website, a carefully designed digital experience that serves as a virtual gathering space for their elopement celebration. The entire design phase has been completed with extensive specifications for every aspect of the site.

## Project Context

**Purpose**: Create an elegant website where guests can submit well-wishes (toasts) in multiple formats for the couple's intimate elopement ceremony. The site should feel like reading through a cherished photo album or personal memoir.

**Domain**: pumpkinspumpkinspumpkinsandmore.com  
**Wedding Date**: August 21, 2024 (already passed - building as a keepsake)  
**Target Users**: Non-tech-savvy family members primarily using mobile phones

## Development Environment

You'll be working in **Replit** with the following setup:
- **Starting Template**: (already installed) https://github.com/ansh/template-2 (social media app template)
- **Environment**: Next.js 14, TailwindCSS, ShadCN components
- **Database**: Firebase (Firestore + Storage)
- **Development Tool**: Claude Code within Replit

## Available Design Documentation

All design work has been completed and documented in the `/Design` folder:

1. **ProjectGoals.md** - Complete project requirements and success metrics
2. **SummaryOverview.md** - High-level design decisions and implementation guidance
3. **DeveloperPrompt.md** - Technical implementation guide with code examples
4. **ComponentSpecs.md** - Detailed component specifications
5. **Individual Page Prompts**:
   - AboveTheFoldPrompt.md
   - NavigationPrompt.md
   - MainSectionsPrompt.md
   - ToastPagePrompt.md
   - OurStoryPagePrompt.md
   - OurElopementPagePrompt.md
   - RegistryPagePrompt.md
   - FooterPrompt.md
6. **VisualDirection.md** - Complete design system with colors, typography, spacing
7. **Wedding Website structure.md** - Site architecture and content requirements
8. **IterationLogs.md** - Design decisions and rationale

## Development Workflow

### Phase 1: Environment Setup (CRITICAL - Complete with user before coding) ( I think I've already completed all of this, so just need to check that it works)
1. Fork the template repository in GitHub
2. Import into Replit
3. Set up Firebase project (Firestore, Storage, optionally Auth)
4. Configure all environment variables
5. Verify connectivity and test the base template

### Phase 2: Core Development
**Priority Features** (in order):
1. **Name Entry System** - Simple form for guest identification
2. **Text Toast Submission** - Basic well-wishes with public/private toggle
3. **Toast Display Feed** - Social media style card layout
4. **Photo Upload** - With compression and preview
5. **Video Upload/Recording** - File upload and browser recording
6. **Static Pages** - Story, elopement details, registry

### Phase 3: Polish & Deploy
- Mobile optimization (primary platform)
- Error handling and loading states
- Performance optimization
- Production deployment

## Key Design Principles

1. **Book-Like Aesthetic**: Every page should feel like a beautifully crafted magazine spread
2. **Mobile-First**: Most guests will use phones - this is the primary experience
3. **Generous White Space**: Let content breathe with ample margins
4. **Subtle Animations**: Fade effects only - no complex movements
5. **Personal Voice**: Casual tone throughout, avoiding wedding clichés

## Technical Requirements

- **Performance**: Visual richness prioritized over raw speed
- **Browser Support**: Modern browsers, iOS Safari priority
- **Accessibility**: WCAG AA compliance, large touch targets
- **Responsive**: True mobile-first with graceful desktop enhancement

## Important Notes

1. **Existing Template Modification**: You'll be adapting a social media app template - remove authentication in favor of simple name entry
2. **Media Storage**: Firebase Storage (integrated)
3. **AI Disclaimer**: Include footer note about AI-built site as specified
4. **No Post-Wedding Updates**: Site should be self-contained after launch

## Getting Started

1. First, review the **DeveloperPrompt.md** for detailed technical guidance
2. Examine the **ComponentSpecs.md** for exact component implementations
3. Reference individual page prompts for specific content and features
4. Use **VisualDirection.md** for all styling decisions

The design team has created a complete specification - your role is to bring this vision to life with clean, functional code that serves the couple's guests beautifully. Focus on the core well-wishes functionality first, as this is the primary purpose of the site.

Ready to begin? Start by walking through the complete environment setup with the user before writing any code.