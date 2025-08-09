/**
 * Mock data for Luv Suneja's Portfolio
 * TypeScript-typed data structures for the portfolio application
 */

import type {
  PersonalInfo,
  Project,
  Service,
  BlogPost,
  Achievement,
  Education,
  ProjectCategory,
  BlogCategory,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Luv Suneja",
  title: "Applied AI Consultant",
  subtitle: "Recalibrating Business Excellence for the AI-Driven Future",
  bio: "Data Professional with 7+ years of experience, skilled in AI, MLOps, Data Engineering and CI/CD. Proven track record in designing and implementing AI and ML solutions in the logistics and supply chain industry, with strategic leadership experience in data platform transformation.",
  experience: "7+ Years",
  teamLed: "Independent Consultant",
  costSavings: "$1M+ Annual Savings",
  contact: {
    email: "luv@recalibr.ai",
    phone: "",
    linkedin: "linkedin.com/in/luvsuneja",
    location: "Dubai, UAE",
    calendly: "https://cal.com/luv-suneja"
  }
};

export const featuredProjects: Project[] = [
  {
    id: "ai-bi-assistant",
    title: "AI-Powered BI Assistant",
    description: "Created NLP-to-SQL chat using RAG and OpenAI models, transforming user chat into actionable business insights. Boosted productivity by integrating into Teams via Power Automate.",
    impact: "Enhanced user experience with context memory & RBAC security",
    techStack: ["React", "Python", "Langchain", "Weaviate", "Lambda", "PostgreSQL", "RAG", "OpenAI", "FastAPI"],
    category: "AI/ML" as ProjectCategory
  },
  {
    id: "data-engineering-transition",
    title: "Data Engineering In-house Transition",
    description: "Transitioned from vendor to in-house data engineering & MLOps team, saving USD 877,670 annually. Spearheaded end-to-end pipeline management and infrastructure.",
    impact: "40% efficiency improvement through successful insourcing",
    techStack: ["Python", "AWS", "ETL", "MLOps", "Monitoring", "Cost Optimization"],
    category: "MLOps" as ProjectCategory
  },
  {
    id: "geocoding-system",
    title: "Geocoding and Sequencing System",
    description: "Developed CNN-based impersonal geocoder and address completion API using hierarchical clustering. Built end-to-end event-driven microservice architecture.",
    impact: "Core service supporting sorting, sequencing & route optimization",
    techStack: ["CNN", "Keras", "API Gateway", "ECS Fargate", "EventBridge", "Docker", "CloudFormation"],
    category: "AI/ML" as ProjectCategory
  },
  {
    id: "hs-code-classification",
    title: "HS Code Classification System",
    description: "Built deep learning model to predict HS codes for incoming shipments, enabling automated customs duty calculation. Processes over 1 million requests annually.",
    impact: "Significantly reduced customs processing time",
    techStack: ["Python", "Keras", "CNN", "SageMaker", "Lambda", "API Gateway"],
    category: "AI/ML" as ProjectCategory
  }
];

export const services: Service[] = [
  {
    id: "ai-ml-consulting",
    title: "AI/ML Consulting & Strategy",
    description: "End-to-end AI strategy development, from ideation to implementation. Help organizations identify AI opportunities and create actionable roadmaps.",
    features: ["Strategic Planning", "ROI Analysis", "Technology Selection", "Implementation Roadmap"]
  },
  {
    id: "implementation",
    title: "Implementation & Delivery",
    description: "Hands-on implementation of GenAI applications, AI/ML solutions, agentic AI systems, MLOps pipelines, and data engineering. From proof-of-concept to production-ready systems.",
    features: ["GenAI & Agentic AI", "MLOps Setup", "Pipeline Development", "Model Deployment", "Monitoring Systems"]
  },
  {
    id: "advisory",
    title: "Technical Advisory",
    description: "Provide expert guidance on complex data and AI initiatives. Help leadership make informed decisions on technology investments and platform transformations.",
    features: ["Architecture Review", "Technology Assessment", "Risk Mitigation", "Vendor Evaluation"]
  },
  {
    id: "team-building",
    title: "Team Building & Best Practices",
    description: "Build high-performing data teams and establish best practices. Mentoring, hiring strategies, and organizational transformation for data-driven culture.",
    features: ["Team Scaling", "Best Practices", "Mentoring", "Process Optimization"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "ai-is-now",
    title: "AI Isn't the Future—It's the Now. And Your Competitors Are Already Winning With It",
    excerpt: "Market research shows companies integrating AI into workflows gain up to 40% efficiency and 20–30% lower costs within a year. Yet only 1% of enterprises report achieving true AI maturity.",
    category: "Strategic Insights" as BlogCategory,
    readTime: "8 min read",
    publishDate: "2025-07-27",
    featured: true,
    content: `Every minute your organization delays meaningful AI adoption, you're losing efficiency, margin, and market share. Market research shows companies integrating AI into workflows gain **up to 40% efficiency** and **20–30% lower costs** within a year. Yet only **1% of enterprises** report achieving true AI maturity—meaning scaled, embedded solutions—while **78%** still use AI in only isolated functions.

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
- Right partners`
  },
  {
    id: "mlops-at-scale",
    title: "MLOps at Scale: Lessons from $1M+ Cost Savings",
    excerpt: "A detailed case study on transitioning from vendor-dependent to in-house MLOps, including challenges, solutions, and measurable business impact.",
    category: "Case Study" as BlogCategory,
    readTime: "12 min read",
    publishDate: "2024-12-10",
    featured: true,
    content: "A detailed case study on transitioning from vendor-dependent to in-house MLOps, including challenges, solutions, and measurable business impact. Content will be expanded in future iterations."
  },
  {
    id: "building-ai-teams",
    title: "Building World-Class AI Teams: A Leadership Perspective",
    excerpt: "Strategic insights on hiring, scaling, and leading AI teams from startup to enterprise. Real experiences from growing a team from 2 to 9 members.",
    category: "Leadership" as BlogCategory,
    readTime: "6 min read",
    publishDate: "2024-12-05",
    featured: false,
    content: "Strategic insights on hiring, scaling, and leading AI teams from startup to enterprise. Real experiences from growing a team from 2 to 9 members. Content will be expanded in future iterations."
  }
];

export const achievements: Achievement[] = [
  {
    title: "Patent Filed",
    description: "Address prediction system for GCC region (Patent Pending)"
  },
  {
    title: "AWS re:Invent 2019",
    description: "Showcased innovative ML models for logistics optimization"
  },
  {
    title: "Cost Optimization",
    description: "Led initiatives saving $1M+ annually through strategic transformations"
  },
  {
    title: "Team Leadership",
    description: "Grew multinational team from 2 to 9 data professionals"
  }
];

export const skills: Record<string, string[]> = {
  "AI/ML": ["TensorFlow", "PyTorch", "Sklearn", "XGBoost", "Deep Learning", "NLP", "LLMs", "Transformers"],
  "Cloud & MLOps": ["AWS SageMaker", "Lambda", "ECS", "MLflow", "CI/CD", "Model Monitoring", "Versioning"],
  "Data Engineering": ["PySpark", "ETL Pipelines", "Redshift", "Data Warehousing", "Matillion"],
  "Programming": ["Python", "SQL", "JavaScript", "FastAPI", "Django", "React"],
  "Leadership": ["Team Building", "Strategic Planning", "Stakeholder Management", "Cost Optimization"]
};

export const certifications: string[] = [
  "AWS Certified Developer – Associate",
  "AWS Certified Machine Learning – Specialty"
];

export const education: Education[] = [
  {
    degree: "MS in Electrical and Computer Engineering",
    school: "Georgia Institute of Technology",
    location: "Atlanta, USA",
    year: "2010 – 2012",
    gpa: "3.84/4.00",
    note: "Full GRA Scholarship"
  },
  {
    degree: "BE(Hons) in Electrical and Electronics Engineering",
    school: "BITS Pilani-Dubai",
    location: "Dubai, UAE", 
    year: "2005 – 2009",
    gpa: "9.8/10",
    note: "Rank 2"
  }
];