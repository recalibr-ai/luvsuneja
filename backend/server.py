from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime

# Import models
from models.blog import BlogPost, BlogPostCreate, BlogPostUpdate
from models.project import Project, ProjectCreate, ProjectUpdate
from models.service import Service, ServiceCreate, ServiceUpdate
from models.profile import Profile, ProfileUpdate

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Luv Suneja Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Legacy models for backward compatibility
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# =============================================================================
# BLOG ENDPOINTS
# =============================================================================

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    """Get all published blog posts"""
    blog_posts = await db.blog_posts.find({"status": "published"}).sort("publishDate", -1).to_list(100)
    return [BlogPost(**post) for post in blog_posts]

@api_router.get("/blog/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: str):
    """Get a single blog post by ID"""
    post = await db.blog_posts.find_one({"id": post_id, "status": "published"})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return BlogPost(**post)

@api_router.post("/blog", response_model=BlogPost)
async def create_blog_post(post_data: BlogPostCreate):
    """Create a new blog post"""
    post_dict = post_data.dict()
    post_obj = BlogPost(**post_dict)
    await db.blog_posts.insert_one(post_obj.dict())
    return post_obj

@api_router.put("/blog/{post_id}", response_model=BlogPost)
async def update_blog_post(post_id: str, post_data: BlogPostUpdate):
    """Update a blog post"""
    existing_post = await db.blog_posts.find_one({"id": post_id})
    if not existing_post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    update_data = {k: v for k, v in post_data.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await db.blog_posts.update_one({"id": post_id}, {"$set": update_data})
    updated_post = await db.blog_posts.find_one({"id": post_id})
    return BlogPost(**updated_post)

@api_router.delete("/blog/{post_id}")
async def delete_blog_post(post_id: str):
    """Delete a blog post"""
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}

# =============================================================================
# PROJECT ENDPOINTS
# =============================================================================

@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all featured projects"""
    projects = await db.projects.find({"featured": True}).sort("order", 1).to_list(100)
    return [Project(**project) for project in projects]

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a single project by ID"""
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@api_router.post("/projects", response_model=Project)
async def create_project(project_data: ProjectCreate):
    """Create a new project"""
    project_dict = project_data.dict()
    project_obj = Project(**project_dict)
    await db.projects.insert_one(project_obj.dict())
    return project_obj

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, project_data: ProjectUpdate):
    """Update a project"""
    existing_project = await db.projects.find_one({"id": project_id})
    if not existing_project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    update_data = {k: v for k, v in project_data.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await db.projects.update_one({"id": project_id}, {"$set": update_data})
    updated_project = await db.projects.find_one({"id": project_id})
    return Project(**updated_project)

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    """Delete a project"""
    result = await db.projects.delete_one({"id": project_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": "Project deleted successfully"}

# =============================================================================
# SERVICE ENDPOINTS
# =============================================================================

@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Get all active services"""
    services = await db.services.find({"active": True}).sort("order", 1).to_list(100)
    return [Service(**service) for service in services]

@api_router.post("/services", response_model=Service)
async def create_service(service_data: ServiceCreate):
    """Create a new service"""
    service_dict = service_data.dict()
    service_obj = Service(**service_dict)
    await db.services.insert_one(service_obj.dict())
    return service_obj

@api_router.put("/services/{service_id}", response_model=Service)
async def update_service(service_id: str, service_data: ServiceUpdate):
    """Update a service"""
    existing_service = await db.services.find_one({"id": service_id})
    if not existing_service:
        raise HTTPException(status_code=404, detail="Service not found")
    
    update_data = {k: v for k, v in service_data.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await db.services.update_one({"id": service_id}, {"$set": update_data})
    updated_service = await db.services.find_one({"id": service_id})
    return Service(**updated_service)

@api_router.delete("/services/{service_id}")
async def delete_service(service_id: str):
    """Delete a service"""
    result = await db.services.delete_one({"id": service_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Service not found")
    return {"message": "Service deleted successfully"}

# =============================================================================
# PROFILE ENDPOINTS
# =============================================================================

@api_router.get("/profile", response_model=Profile)
async def get_profile():
    """Get profile information"""
    profile = await db.profile.find_one()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return Profile(**profile)

@api_router.put("/profile", response_model=Profile)
async def update_profile(profile_data: ProfileUpdate):
    """Update profile information"""
    existing_profile = await db.profile.find_one()
    if not existing_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    update_data = {k: v for k, v in profile_data.dict().items() if v is not None}
    update_data["updatedAt"] = datetime.utcnow()
    
    await db.profile.update_one({}, {"$set": update_data})
    updated_profile = await db.profile.find_one()
    return Profile(**updated_profile)

# =============================================================================
# LEGACY ENDPOINTS (for backward compatibility)
# =============================================================================

@api_router.get("/")
async def root():
    return {"message": "Luv Suneja Portfolio API", "version": "1.0.0"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
