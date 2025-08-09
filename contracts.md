# API Contracts & Integration Plan

## Overview
Transform the static portfolio site into a dynamic CMS-powered application with backend API integration.

## Backend Models & Collections

### 1. BlogPost Model
```json
{
  "_id": "ObjectId",
  "id": "string (slug)",
  "title": "string",
  "excerpt": "string",
  "content": "string (markdown)",
  "category": "string",
  "readTime": "string",
  "publishDate": "Date",
  "featured": "boolean",
  "author": "string",
  "tags": ["string"],
  "status": "string (draft|published)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 2. Project Model
```json
{
  "_id": "ObjectId",
  "id": "string",
  "title": "string",
  "description": "string",
  "impact": "string",
  "techStack": ["string"],
  "category": "string",
  "featured": "boolean",
  "order": "number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 3. Service Model
```json
{
  "_id": "ObjectId",
  "id": "string",
  "title": "string",
  "description": "string",
  "features": ["string"],
  "order": "number",
  "active": "boolean",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### 4. Profile Model (Single Document)
```json
{
  "_id": "ObjectId",
  "name": "string",
  "title": "string",
  "subtitle": "string",
  "location": "string",
  "email": "string",
  "phone": "string",
  "linkedin": "string",
  "bio": "string",
  "experience": "string",
  "teamLed": "string",
  "costSavings": "string",
  "updatedAt": "Date"
}
```

## API Endpoints

### Blog Posts
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:id` - Get single blog post by ID
- `POST /api/blog` - Create new blog post
- `PUT /api/blog/:id` - Update blog post
- `DELETE /api/blog/:id` - Delete blog post

### Projects
- `GET /api/projects` - Get all featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Services
- `GET /api/services` - Get all active services
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Profile
- `GET /api/profile` - Get profile information
- `PUT /api/profile` - Update profile information

## Frontend Integration Changes

### Data Source Migration
**Current**: Static data from `/src/data/mock.js`
**New**: Dynamic data from backend APIs

### Component Updates Required
1. **Home.js** - Replace mock data imports with API calls
2. **BlogPost.js** - Fetch individual posts from backend
3. **Add loading states** for all API calls
4. **Add error handling** for failed requests

### API Service Layer
Create `/src/services/api.js` with:
- Axios configuration
- API endpoint functions
- Error handling utilities
- Loading state management

## Implementation Steps

### Phase 1: Backend Development
1. Create MongoDB models
2. Implement CRUD endpoints
3. Add data validation
4. Test API endpoints

### Phase 2: Data Migration
1. Seed database with current mock data
2. Verify data integrity
3. Test API responses

### Phase 3: Frontend Integration
1. Create API service layer
2. Replace mock data with API calls
3. Add loading/error states
4. Test complete integration

### Phase 4: Testing & Validation
1. Test all CRUD operations
2. Verify frontend-backend integration
3. Test error scenarios
4. Performance validation

## Mock Data to Backend Migration

### Current Mock Data Files
- `personalInfo` → Profile collection
- `featuredProjects` → Projects collection
- `services` → Services collection
- `blogPosts` → BlogPosts collection (including real article)
- `achievements` → Part of Profile model

### Data Seeding Strategy
1. Create seed script to populate initial data
2. Migrate existing blog article with full content
3. Preserve all current project information
4. Maintain current service offerings

## Error Handling & Loading States

### Frontend Patterns
- Loading spinners during API calls
- Error boundaries for failed requests
- Graceful fallbacks for missing data
- User feedback for CRUD operations

### Backend Error Responses
- Consistent error format
- Appropriate HTTP status codes
- Detailed error messages for debugging
- Input validation errors

## Security Considerations
- Input sanitization for blog content
- Rate limiting on endpoints
- Data validation on all inputs
- CORS configuration

This CMS system will enable easy content management while maintaining the professional design and functionality of the current portfolio.