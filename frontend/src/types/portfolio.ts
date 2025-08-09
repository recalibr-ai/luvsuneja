/**
 * Portfolio-related TypeScript interfaces and types
 * Covers personal information, projects, services, achievements, and professional data
 */

// Contact information interface
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  website?: string;
  twitter?: string;
  github?: string;
  calendly?: string;
}

// Personal information interface
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  experience: string;
  teamLed: string;
  costSavings: string;
  profileImage?: string;
  resumeUrl?: string;
  contact: ContactInfo;
}

// Project categories
export type ProjectCategory = 
  | 'AI/ML'
  | 'MLOps'
  | 'Data Engineering'
  | 'Cloud Architecture'
  | 'Full Stack'
  | 'API Development'
  | 'DevOps'
  | 'Consulting'
  | 'Research';

// Project status
export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

// Technology stack item
export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'ML/AI' | 'DevOps' | 'Other';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  category: ProjectCategory;
  status?: ProjectStatus;
  startDate?: string;
  endDate?: string;
  duration?: string;
  client?: string;
  teamSize?: number;
  role?: string;
  challenges?: string[];
  outcomes?: string[];
  metrics?: ProjectMetric[];
  images?: ProjectImage[];
  links?: ProjectLink[];
  featured?: boolean;
  testimonial?: Testimonial;
  caseStudyUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Project metrics for measurable outcomes
export interface ProjectMetric {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  improved?: boolean; // indicates if this was an improvement
}

// Project images/media
export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: 'screenshot' | 'diagram' | 'result' | 'process' | 'team';
}

// Project external links
export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'case-study' | 'article' | 'documentation' | 'other';
}

// Service offering interface
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
  category?: ServiceCategory;
  duration?: string;
  pricing?: ServicePricing;
  deliverables?: string[];
  prerequisites?: string[];
  targetAudience?: string[];
  caseStudies?: string[]; // Array of related project IDs
}

// Service categories
export type ServiceCategory = 
  | 'Consulting'
  | 'Implementation'
  | 'Training'
  | 'Advisory'
  | 'Audit'
  | 'Support';

// Service pricing structure
export interface ServicePricing {
  type: 'fixed' | 'hourly' | 'retainer' | 'quote';
  amount?: number;
  currency?: string;
  billingPeriod?: 'hour' | 'day' | 'week' | 'month' | 'project';
  description?: string;
}

// Achievement/milestone interface
export interface Achievement {
  id?: string;
  title: string;
  description: string;
  date?: string;
  category?: AchievementCategory;
  organization?: string;
  location?: string;
  credentialUrl?: string;
  imageUrl?: string;
}

// Achievement categories
export type AchievementCategory = 
  | 'Award'
  | 'Certification'
  | 'Patent'
  | 'Publication'
  | 'Speaking'
  | 'Recognition'
  | 'Milestone';

// Education interface
export interface Education {
  id?: string;
  degree: string;
  school: string;
  location: string;
  year: string;
  gpa?: string;
  note?: string;
  coursework?: string[];
  honors?: string[];
  thesis?: string;
  advisor?: string;
}

// Certification interface
export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  level?: 'Associate' | 'Professional' | 'Expert' | 'Specialty';
}

// Skills structure
export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: string;
  description?: string;
}

export interface Skill {
  name: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
  lastUsed?: string;
  certifications?: string[];
  projects?: string[]; // Array of related project IDs
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating?: number;
  date?: string;
  avatar?: string;
  linkedinUrl?: string;
  projectId?: string;
  serviceId?: string;
  featured?: boolean;
}

// Work experience interface
export interface WorkExperience {
  id?: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  teamSize?: number;
  projects?: string[]; // Array of related project IDs
  companyUrl?: string;
  companyLogo?: string;
}

// Portfolio statistics/analytics
export interface PortfolioStatistics {
  totalProjects: number;
  totalClients?: number;
  totalSavings?: string;
  yearsOfExperience: number;
  teamMembersLed: number;
  technologiesUsed: number;
  certifications: number;
  successfulProjects: number;
  clientSatisfactionRate?: number;
}

// Complete portfolio data structure
export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  featuredProjects?: Project[];
  services: Service[];
  achievements: Achievement[];
  education: Education[];
  certifications: Certification[];
  workExperience?: WorkExperience[];
  skills: SkillCategory[];
  testimonials?: Testimonial[];
  statistics?: PortfolioStatistics;
  lastUpdated: string;
}