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
  Testimonial,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Luv Suneja",
  title: "Applied AI Consultant & Founder, Recalibr.ai",
  subtitle: "Recalibrating Business Excellence for the AI-Driven Future",
  bio: "Founder of Recalibr.ai and former senior member of the Aramex data science team with 7+ years of experience in AI strategy, machine learning, and intelligent automation. Led AI initiatives and business transformation projects in the logistics and supply chain industry, with deep expertise in GenAI applications and strategic AI implementation.",
  experience: "7+ Years",
  teamLed: "Founder & AI Expert",
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
    description: "At Aramex, transformed business intelligence accessibility by enabling natural language queries through Teams using GenAI, eliminating SQL knowledge barriers for business users using RAG and OpenAI models.",
    impact: "Enabled leadership team to access business insights readily through natural language.",
    techStack: ["Python", "OpenAI", "RAG", "AWS Lambda"],
    category: "AI/ML" as ProjectCategory
  },
  {
    id: "data-engineering-transition",
    title: "Data Engineering In-house Transition",
    description: "At Aramex, delivered more than USD 1 million annual cost savings by transitioning from vendor to in-house data engineering & MLOps team, while gaining full control over pipeline management and infrastructure and enhancing project delivery efficiency by 40%.",
    impact: "Cost savings exceeding USD 1 million through successful insourcing.",
    techStack: ["Python", "AWS", "MLOps", "ETL"],
    category: "MLOps" as ProjectCategory
  },
  {
    id: "geocoding-system",
    title: "Geocoding and Sequencing System",
    description: "At Aramex, solved critical last-mile delivery challenges in GCC region by developing custom deep learning geocoder and address completion system, enabling accurate routing despite incomplete address data.",
    impact: "Core enterprise service supporting sorting, sequencing & route optimization",
    techStack: ["Deep Learning", "AWS", "Docker", "API Gateway"],
    category: "AI/ML" as ProjectCategory
  },
  {
    id: "hs-code-classification",
    title: "HS Code Classification System",
    description: "At Aramex, automated customs clearance for 1M+ annual shipments by building deep learning HS code classification system, drastically reducing manual processing and customs delays.",
    impact: "Automated customs classification reducing processing time significantly and lowering costs.",
    techStack: ["Python", "Deep Learning", "AWS SageMaker", "API Gateway"],
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
    features: ["GenAI & Agentic AI", "Machine Learning and Deep Learning", "MLOps", "Model Deployment", "Model and System Monitoring"]
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

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Krishna Kumar",
    title: "Global Digital & Technology Director- Architecture, Integration and Data",
    company: "Aramex",
    content: "In the short time that I worked with Luv, he has come across as a mature IT professional with rounded IT skills specifically in Data Management and Program Management. He has an uncanny ability to create structured, high quality and timely output with no supervision or guidance. This coupled with his strong conceptualization and articulation skills makes him a very valuable asset.",
    rating: 5,
    date: "2024-08-15",
    featured: true,
    linkedinUrl: "https://www.linkedin.com/in/krishna-kumar-7893484/"
  },
  {
    id: "testimonial-2", 
    name: "Mohit Rajpoot",
    title: "Applied Science Specialist",
    company: "G42",
    content: "Working alongside Luv for the past five years has been both a pleasure and an invaluable learning experience. Luv is a professional who consistently demonstrates impressive technical prowess and a remarkable dedication to their work. Embracing new technologies and challenging the status quo seems to be second nature for Luv, which has greatly accelerated our project timelines and created an environment of continuous learning and innovation within our team. Their proactiveness when it comes to responsibility is something I greatly admire. Whether it's leading complex tasks or taking the initiative in difficult situations, Luv handles it all with commendable diligence and patience. Above all, what sets Luv apart is his eagerness to learn and his ability to work seamlessly in a team. His curiosity and drive to grow, paired with his strong team spirit, not only foster an atmosphere of mutual development but also make him a substantial asset to any team. For those who are looking for a reliable, adaptive, and skilled professional who flourishes in a collaborative environment, I wholeheartedly recommend Luv. His exceptional skill set, dedication, and approach to learning new technologies make him an outstanding professional to work with.",
    rating: 5,
    date: "2024-07-20",
    featured: true,
    linkedinUrl: "https://www.linkedin.com/in/mohitt008/"
  },
  {
    id: "testimonial-3",
    name: "Nilotpal Sinha",
    title: "Director of AI Engineering",
    company: "Multiverse Computing",
    content: "Collaborating with Luv on the Delivery Risk project was impressive. His blend of business acumen and technical expertise, particularly in AWS, proved invaluable. Luv consistently offered innovative solutions that drove our project forward. His willingness to help others and his cooperative spirit made him an essential team member. Luv's ability to bridge complex technical concepts with business needs sets him apart. I highly recommend Luv for any challenging role in tech leadership or AWS-related projects.",
    rating: 5,
    date: "2024-06-10",
    featured: true,
    linkedinUrl: "https://www.linkedin.com/in/nilotpalsinha/"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "ai-is-now",
    title: "AI Isn't the Future—It's the Now. And Your Competitors Are Already Winning With It",
    excerpt: "Market research shows companies integrating AI into workflows gain up to 40% efficiency and 20–30% lower costs within a year. Yet only 1% of enterprises report achieving true AI maturity.",
    category: "Strategic Insights" as BlogCategory,
    readTime: "3 min read",
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