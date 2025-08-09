"""
Seed script to populate the database with initial portfolio data
"""
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
import asyncio
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Seed data
PROFILE_DATA = {
    "name": "Luv Suneja",
    "title": "Senior Tech Leader & AI Strategist",
    "subtitle": "Transforming businesses through AI, MLOps & Data Engineering",
    "location": "Dubai, UAE",
    "email": "luvsuneja@gmail.com",
    "phone": "+971 50 952 8461",
    "linkedin": "linkedin.com/in/luvsuneja",
    "bio": "Data Professional with 7+ years of experience, skilled in AI, MLOps, Data Engineering and CI/CD. Proven track record in designing and implementing AI and ML solutions in the logistics and supply chain industry, with strategic leadership experience in data platform transformation.",
    "experience": "7+ Years",
    "teamLed": "7 Data Scientists + 2 Data Engineers",
    "costSavings": "$1M+ Annual Savings",
    "updatedAt": datetime.utcnow()
}

PROJECTS_DATA = [
    {
        "id": "ai-bi-assistant",
        "title": "AI-Powered BI Assistant",
        "description": "Created NLP-to-SQL chat using RAG and OpenAI models, transforming user chat into actionable business insights. Boosted productivity by integrating into Teams via Power Automate.",
        "impact": "Enhanced user experience with context memory & RBAC security",
        "techStack": ["React", "Python", "Langchain", "Weaviate", "Lambda", "PostgreSQL", "RAG", "OpenAI", "FastAPI"],
        "category": "AI/ML",
        "featured": True,
        "order": 1,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "data-engineering-transition",
        "title": "Data Engineering In-house Transition",
        "description": "Transitioned from vendor to in-house data engineering & MLOps team, saving USD 877,670 annually. Spearheaded end-to-end pipeline management and infrastructure.",
        "impact": "40% efficiency improvement through successful insourcing",
        "techStack": ["Python", "AWS", "ETL", "MLOps", "Monitoring", "Cost Optimization"],
        "category": "MLOps",
        "featured": True,
        "order": 2,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "geocoding-system",
        "title": "Geocoding and Sequencing System",
        "description": "Developed CNN-based impersonal geocoder and address completion API using hierarchical clustering. Built end-to-end event-driven microservice architecture.",
        "impact": "Core service supporting sorting, sequencing & route optimization",
        "techStack": ["CNN", "Keras", "API Gateway", "ECS Fargate", "EventBridge", "Docker", "CloudFormation"],
        "category": "AI/ML",
        "featured": True,
        "order": 3,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "hs-code-classification",
        "title": "HS Code Classification System",
        "description": "Built deep learning model to predict HS codes for incoming shipments, enabling automated customs duty calculation. Processes over 1 million requests annually.",
        "impact": "Significantly reduced customs processing time",
        "techStack": ["Python", "Keras", "CNN", "SageMaker", "Lambda", "API Gateway"],
        "category": "AI/ML",
        "featured": True,
        "order": 4,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    }
]

SERVICES_DATA = [
    {
        "id": "ai-ml-consulting",
        "title": "AI/ML Consulting & Strategy",
        "description": "End-to-end AI strategy development, from ideation to implementation. Help organizations identify AI opportunities and create actionable roadmaps.",
        "features": ["Strategic Planning", "ROI Analysis", "Technology Selection", "Implementation Roadmap"],
        "order": 1,
        "active": True,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "advisory",
        "title": "Technical Advisory",
        "description": "Provide expert guidance on complex data and AI initiatives. Help leadership make informed decisions on technology investments and platform transformations.",
        "features": ["Architecture Review", "Technology Assessment", "Risk Mitigation", "Vendor Evaluation"],
        "order": 2,
        "active": True,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "implementation",
        "title": "Implementation & Delivery",
        "description": "Hands-on implementation of AI/ML solutions, MLOps pipelines, and data engineering platforms. From proof-of-concept to production-ready systems.",
        "features": ["MLOps Setup", "Pipeline Development", "Model Deployment", "Monitoring Systems"],
        "order": 3,
        "active": True,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    },
    {
        "id": "team-building",
        "title": "Team Building & Best Practices",
        "description": "Build high-performing data teams and establish best practices. Mentoring, hiring strategies, and organizational transformation for data-driven culture.",
        "features": ["Team Scaling", "Best Practices", "Mentoring", "Process Optimization"],
        "order": 4,
        "active": True,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    }
]

BLOG_POSTS_DATA = [
    {
        "id": "ai-is-now",
        "title": "AI Isn't the Future—It's the Now. And Your Competitors Are Already Winning With It",
        "excerpt": "Market research shows companies integrating AI into workflows gain up to 40% efficiency and 20–30% lower costs within a year. Yet only 1% of enterprises report achieving true AI maturity.",
        "category": "Strategic Insights",
        "readTime": "8 min read",
        "publishDate": datetime(2025, 7, 27),
        "featured": True,
        "author": "Luv Suneja",
        "tags": ["AI Strategy", "Business Transformation", "Enterprise AI"],
        "status": "published",
        "content": """Every minute your organization delays meaningful AI adoption, you're losing efficiency, margin, and market share. Market research shows companies integrating AI into workflows gain **up to 40% efficiency** and **20–30% lower costs** within a year. Yet only **1% of enterprises** report achieving true AI maturity—meaning scaled, embedded solutions—while **78%** still use AI in only isolated functions.

After a recent call with a Director at an Engineering services firm, a clear pattern emerged: the winners in the AI era aren't those with the biggest budgets or most data scientists—they're the ones solving *specific, high-impact business problems* with focused, scalable AI solutions.

Here are 4 things you need to know:

1. **Don't Just Build Monolithic Systems—Start Solving Niche Problems**
2. **Turn Compliance Risk Into a Competitive Advantage**
3. **Solve Industry-Specific Pain Points—Not Generic "AI Use Cases"**
4. **Build for Scale, But Deliver Value Now**

## 1. Don't Just Build Monolithic Systems—Start Solving Niche Problems

**The Problem:**

Too many organizations invest years and millions in enterprise-wide AI or data platforms—expecting future payoffs, but missing today's opportunities. The result? High cost, delayed ROI, and innovation that never reaches the front lines.

**The Strategic Shift:**

Don't wait for the platform to deliver value. Pair your long-term platform vision with immediate action: deploy modular AI micro solutions that solve urgent, high-impact business problems now—plugging directly into existing workflows.

> **Example:** A logistics firm reduced delivery risk by 22% using a modular AI tool that flagged high-risk customers based on historical behavior—saving millions in failed delivery attempts.

## 2. Turn Compliance Risk Into a Competitive Advantage

Deploy AI to automate regulatory classification using global standards like UN Dangerous Goods Classes. An AI layer can scan shipment descriptions and auto-tag high-risk items before they reach the tarmac.

> **Example:** A freight forwarder reduced compliance errors by 90% using an AI model trained on IATA and UN classification guidelines—cutting penalties and accelerating customs clearance.

## 3. Solve Industry-Specific Pain Points—Not Generic "AI Use Cases"

The real value lies in deep, vertical-specific problems like HS code classification, procurement risk mitigation, or geocoding in regions without postal codes.

Focus on use cases like:
- Automating HS Code Assignment for customs clearance
- Optimizing Procurement Workflows in construction
- Improving Geocoding in Low-Data Regions (e.g., UAE)

## 4. Scale Through Interoperability and Plug-and-Play Integration

Insist on API-first, plug-and-play AI modules that work with your existing stack. Avoid "rip-and-replace." Instead, layer AI as a service that pulls data from SAP, Zoho, or legacy systems.

## The Bottom Line: AI Wins Are Won With Focus, Not Force

You don't need a $10M budget or a 20-person AI team to win.

You need:
- One high-impact problem
- A lightweight, API-first solution
- Deep industry insight
- Right partners""",
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    }
]

async def seed_database():
    """Seed the database with initial data"""
    try:
        print("🌱 Starting database seeding...")
        
        # Clear existing data
        await db.profile.delete_many({})
        await db.projects.delete_many({})
        await db.services.delete_many({})
        await db.blog_posts.delete_many({})
        
        # Insert profile data
        await db.profile.insert_one(PROFILE_DATA)
        print("✅ Profile data seeded")
        
        # Insert projects data
        await db.projects.insert_many(PROJECTS_DATA)
        print("✅ Projects data seeded")
        
        # Insert services data
        await db.services.insert_many(SERVICES_DATA)
        print("✅ Services data seeded")
        
        # Insert blog posts data
        await db.blog_posts.insert_many(BLOG_POSTS_DATA)
        print("✅ Blog posts data seeded")
        
        print("🎉 Database seeding completed successfully!")
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())