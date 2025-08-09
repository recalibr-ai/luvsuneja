from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Service(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    features: List[str]
    order: int = 0
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ServiceCreate(BaseModel):
    title: str
    description: str
    features: List[str]
    order: int = 0
    active: bool = True

class ServiceUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    features: Optional[List[str]] = None
    order: Optional[int] = None
    active: Optional[bool] = None