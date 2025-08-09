from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    category: str
    readTime: str
    publishDate: datetime = Field(default_factory=datetime.utcnow)
    featured: bool = False
    author: str = "Luv Suneja"
    tags: List[str] = []
    status: str = "published"  # draft, published
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class BlogPostCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    readTime: str
    featured: bool = False
    tags: List[str] = []
    status: str = "published"

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    readTime: Optional[str] = None
    featured: Optional[bool] = None
    tags: Optional[List[str]] = None
    status: Optional[str] = None