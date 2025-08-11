# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Luv Suneja - Executive-ready consultant positioning:
- **Frontend**: React 19 TypeScript SPA with Tailwind CSS and shadcn/ui components
- **Deployment**: GitHub Pages at https://recalibr-ai.github.io/luvsuneja
- **Purpose**: C-suite focused AI consultant portfolio showcasing business impact and founder credibility

## Development Commands

### Frontend (from `/frontend` directory)
```bash
npm install           # Install dependencies
npm start            # Start development server (port 3000) 
npm run build        # Create production build
npm test             # Run tests with Jest
npm run deploy       # Deploy to GitHub Pages
```

### Deployment
```bash
# Build and deploy to GitHub Pages
cd frontend
npm run deploy       # Builds and deploys to gh-pages branch
```

## Architecture

### Frontend Architecture (Static)
- **Pages**: `src/pages/` - Main route components (Home.tsx, BlogPost.tsx)
- **Components**: `src/components/` - Reusable components (Header, Hero, etc.)
- **UI Library**: `src/components/ui/` - shadcn/ui components (40+ components)
- **Data**: `src/data/mock.ts` - Static TypeScript data (no backend required)
- **Types**: `src/types/` - TypeScript interfaces and type definitions

### Key Development Patterns
- **TypeScript**: Fully typed React components and data structures
- **Functional Components**: React hooks for state management
- **Tailwind CSS**: Utility-first styling with shadcn/ui theme
- **React Router**: Client-side navigation
- **Static Data**: All content stored in TypeScript files for simplicity

## Data Models (TypeScript)

### PersonalInfo
- Fields: name, title, subtitle, bio, experience, teamLed, costSavings, contact{}
- Located in: `src/data/mock.ts`

### Project
- Fields: id, title, description, impact, techStack[], category, featured
- Business impact focused descriptions with "At Aramex" context

### Testimonial
- Fields: id, name, title, company, content, linkedinUrl, featured
- Real LinkedIn recommendations with direct profile links

### Service
- Fields: id, title, description, features[], category
- Consultant service offerings

## Current Status
- **Static Site**: No backend required - all data in TypeScript files
- **Deployed**: Live at https://recalibr-ai.github.io/luvsuneja
- **C-Suite Ready**: Optimized for executive audience with business impact focus

## Portfolio Positioning
- **Founder Status**: Recalibr.ai founder with Aramex credibility
- **Business Impact**: $1M+ proven savings, quantified outcomes
- **Social Proof**: LinkedIn testimonials with direct profile links  
- **Executive CTA**: Single "Book Free 30-Min Consultation" button
- **Tech Stack**: Simplified to 4 key technologies per project