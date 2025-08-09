from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Profile(BaseModel):
    name: str
    title: str
    subtitle: str
    location: str
    email: str
    phone: str
    linkedin: str
    bio: str
    experience: str
    teamLed: str
    costSavings: str
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class ProfileUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    subtitle: Optional[str] = None
    location: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    bio: Optional[str] = None
    experience: Optional[str] = None
    teamLed: Optional[str] = None
    costSavings: Optional[str] = None