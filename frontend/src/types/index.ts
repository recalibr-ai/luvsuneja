/**
 * Central TypeScript type definitions export
 * Main entry point for all application types and interfaces
 */

// Blog-related exports
export type {
  BlogCategory,
  BlogPostStatus,
  BlogPostFrontmatter,
  BlogPost,
  BlogPostSummary,
  BlogComment,
  BlogArchive,
  BlogSearchFilters,
  BlogSearchResult,
  BlogStatistics,
  NewsletterSubscription,
  RSSFeedItem,
} from './blog';

// Portfolio-related exports
export type {
  ContactInfo,
  PersonalInfo,
  ProjectCategory,
  ProjectStatus,
  TechStackItem,
  Project,
  ProjectMetric,
  ProjectImage,
  ProjectLink,
  Service,
  ServiceCategory,
  ServicePricing,
  Achievement,
  AchievementCategory,
  Education,
  Certification,
  SkillCategory,
  Skill,
  Testimonial,
  WorkExperience,
  PortfolioStatistics,
  PortfolioData,
} from './portfolio';

// UI component exports
export type {
  BaseComponentProps,
  HeaderProps,
  NavigationItem,
  HeroProps,
  AboutProps,
  ProjectsProps,
  ProjectCardProps,
  ServicesProps,
  ServiceCardProps,
  BlogProps,
  BlogPostCardProps,
  BlogPostProps,
  ContactProps,
  FooterProps,
  SocialLink,
  ContactFormData,
  ContactFormProps,
  NewsletterFormData,
  NewsletterFormProps,
  SearchBarProps,
  FilterOption,
  FilterProps,
  ModalProps,
  ConfirmDialogProps,
  LoadingSpinnerProps,
  ErrorMessageProps,
  PaginationProps,
  BreadcrumbItem,
  BreadcrumbProps,
  ToastProps,
  TableColumn,
  TableProps,
  AnimationProps,
  Breakpoint,
  ResponsiveValue,
  ThemeColors,
  ThemeConfig,
} from './ui';

// Utility type exports
export type {
  ApiResponse,
  ApiResponseMeta,
  AppError,
  LoadingState,
  FormState,
  ValidationResult,
  FileUpload,
  FileUploadConfig,
  MarkdownProcessor,
  MarkdownHeading,
  TableOfContentsItem,
  SEOMetadata,
  OpenGraphData,
  TwitterCardData,
  AnalyticsEvent,
  PageView,
  UserSession,
  DeviceInfo,
  LocationInfo,
  SearchIndex,
  SearchQuery,
  SearchResult,
  SearchResults,
  SearchFacet,
  SearchFacetValue,
  CacheConfig,
  CacheEntry,
  PerformanceMetric,
  PerformanceBudget,
  AppConfig,
  Optional,
  RequiredFields,
  Nullable,
  DeepPartial,
  DeepRequired,
  EventHandler,
  AsyncEventHandler,
  DateRange,
  TimeZoneInfo,
  ColorMode,
  ColorValue,
  ColorPalette,
  ResponsiveBreakpoints,
  UseAsyncReturn,
  UseLocalStorageReturn,
  UseToggleReturn,
  RequestConfig,
  RequestInterceptor,
  ResponseInterceptor,
} from './utils';

// Re-export common React types for convenience
export type {
  ReactNode,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  FocusEventHandler,
  ComponentType,
  FC,
  PropsWithChildren,
} from 'react';

// Common type aliases and constants
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const BLOG_CATEGORIES = [
  'Strategic Insights',
  'Case Study',
  'Leadership',
  'Technical Deep Dive',
  'AI/ML',
  'MLOps',
  'Data Engineering',
  'Industry Analysis',
  'Best Practices',
] as const;

export const PROJECT_CATEGORIES = [
  'AI/ML',
  'MLOps',
  'Data Engineering',
  'Cloud Architecture',
  'Full Stack',
  'API Development',
  'DevOps',
  'Consulting',
  'Research',
] as const;

export const SERVICE_CATEGORIES = [
  'Consulting',
  'Implementation',
  'Training',
  'Advisory',
  'Audit',
  'Support',
] as const;

export const ACHIEVEMENT_CATEGORIES = [
  'Award',
  'Certification',
  'Patent',
  'Publication',
  'Speaking',
  'Recognition',
  'Milestone',
] as const;

// Type guards
export const isProject = (obj: any): boolean => {
  return obj && typeof obj.id === 'string' && typeof obj.title === 'string';
};

export const isBlogPost = (obj: any): boolean => {
  return obj && typeof obj.id === 'string' && typeof obj.title === 'string' && typeof obj.content === 'string';
};

export const isService = (obj: any): boolean => {
  return obj && typeof obj.id === 'string' && typeof obj.title === 'string' && Array.isArray(obj.features);
};

export const isAchievement = (obj: any): boolean => {
  return obj && typeof obj.title === 'string' && typeof obj.description === 'string';
};

// Utility functions for type checking
export const hasRequiredFields = <T extends Record<string, any>>(
  obj: any,
  fields: (keyof T)[]
): obj is T => {
  return obj && fields.every(field => obj[field] !== undefined);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};

// Default values
export const DEFAULT_PERSONAL_INFO = {
  name: '',
  title: '',
  subtitle: '',
  bio: '',
  experience: '',
  teamLed: '',
  costSavings: '',
  contact: {
    email: '',
    phone: '',
    linkedin: '',
    location: '',
  },
};

export const DEFAULT_PROJECT = {
  title: '',
  description: '',
  impact: '',
  techStack: [],
  category: 'AI/ML',
  status: 'completed',
  featured: false,
};

export const DEFAULT_SERVICE = {
  title: '',
  description: '',
  features: [],
  category: 'Consulting',
};

export const DEFAULT_BLOG_POST = {
  title: '',
  excerpt: '',
  content: '',
  category: 'Technical Deep Dive',
  readTime: '5 min read',
  publishDate: new Date().toISOString().split('T')[0],
  featured: false,
  status: 'draft',
  tags: [],
};