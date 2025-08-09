from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    impact: str
    techStack: List[str]
    category: str
    featured: bool = True
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    impact: str
    techStack: List[str]
    category: str
    featured: bool = True
    order: int = 0

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    impact: Optional[str] = None
    techStack: Optional[List[str]] = None
    category: Optional[str] = None
    featured: Optional[bool] = None
    order: Optional[int] = None