# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Luv Suneja - a full-stack application featuring:
- **Frontend**: React 19 SPA with Tailwind CSS and shadcn/ui components
- **Backend**: FastAPI REST API with MongoDB (Motor async driver)
- **Purpose**: Showcase AI/ML expertise, projects, services, and blog content with CMS capabilities

## Development Commands

### Frontend (from `/frontend` directory)
```bash
yarn install          # Install dependencies
yarn start           # Start development server (port 3000)
yarn build           # Create production build
yarn test            # Run tests with Jest
```

### Backend (from `/backend` directory)
```bash
pip install -r requirements.txt    # Install Python dependencies
python server.py                   # Start FastAPI server (port 8000)
uvicorn server:app --reload       # Alternative: Start with auto-reload
python seed_data.py                # Seed MongoDB with initial data
```

### Code Quality
```bash
# Backend linting and formatting
black backend/                    # Format Python code
isort backend/                    # Sort imports
flake8 backend/                   # Lint Python code
mypy backend/                     # Type checking

# Frontend - no specific linting commands configured yet
# Consider adding: yarn lint, yarn format
```

## Architecture

### API Structure
All API endpoints are prefixed with `/api/`:
- **Blog**: `/api/blog` (GET, POST), `/api/blog/:id` (GET, PUT, DELETE)
- **Projects**: `/api/projects` (GET, POST), `/api/projects/:id` (GET, PUT, DELETE)
- **Services**: `/api/services` (GET, POST), `/api/services/:id` (GET, PUT, DELETE)
- **Profile**: `/api/profile` (GET, PUT)

### Frontend Architecture
- **Pages**: `src/pages/` - Main route components (Home.js, BlogPost.js)
- **Components**: `src/components/` - Reusable components (Header, Hero, etc.)
- **UI Library**: `src/components/ui/` - shadcn/ui components (40+ components)
- **API Integration**: `src/services/` - Axios-based API client
- **Hooks**: `src/hooks/` - Custom React hooks for API calls

### Backend Architecture
- **Models**: `backend/models/` - Pydantic models for data validation
- **Server**: `backend/server.py` - FastAPI application with CRUD endpoints
- **Database**: MongoDB with Motor async driver
- **Environment**: Uses `.env` for configuration (MONGO_URL, DB_NAME, CORS_ORIGINS)

## Key Development Patterns

### Frontend Patterns
- Functional React components with hooks
- Tailwind CSS for styling with shadcn/ui theme
- Axios for API calls with custom hooks
- React Router for navigation

### Backend Patterns
- Async/await throughout with Motor driver
- Pydantic models for request/response validation
- CORS middleware for cross-origin requests
- Environment-based configuration

## Data Models

### BlogPost
- Fields: title, excerpt, content (markdown), category, readTime, publishDate, tags, status
- Status values: "draft" or "published"

### Project
- Fields: title, description, impact, techStack[], category, featured, order

### Service
- Fields: title, description, features[], order, active

### Profile (single document)
- Fields: name, title, subtitle, location, email, bio, experience, etc.

## Current Migration Status
The project is transitioning from static mock data (`frontend/src/data/mockData.js`) to dynamic MongoDB-backed content. API integration is in progress.

## Testing
- Frontend: Jest-based testing through Create React App
- Backend: pytest with comprehensive linting (black, isort, flake8, mypy)
- Advanced testing protocol available in `/test_result.md`

## Environment Setup
1. Frontend runs on port 3000 (development)
2. Backend runs on port 8000
3. MongoDB connection required (configure in backend/.env)
4. CORS is configured to allow frontend-backend communication