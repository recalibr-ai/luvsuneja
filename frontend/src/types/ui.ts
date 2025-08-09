/**
 * UI Component Props and Interface Definitions
 * Covers all React component props, form types, and UI-related interfaces
 */

import { ReactNode, MouseEventHandler, FormEventHandler } from 'react';
import { PersonalInfo, Project, Service, Achievement, BlogPost, BlogPostSummary } from './';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Header component props
export interface HeaderProps extends BaseComponentProps {
  isScrolled?: boolean;
  logo?: string;
  navigationItems?: NavigationItem[];
  ctaButton?: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    href?: string;
  };
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

// Navigation item interface
export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// Hero section props
export interface HeroProps extends BaseComponentProps {
  personalInfo: PersonalInfo;
  onViewWorkClick?: MouseEventHandler<HTMLButtonElement>;
  onConnectClick?: MouseEventHandler<HTMLButtonElement>;
  backgroundImage?: string;
  showAnimation?: boolean;
}

// About section props
export interface AboutProps extends BaseComponentProps {
  personalInfo: PersonalInfo;
  showFullBio?: boolean;
  achievements?: Achievement[];
  onDownloadResume?: MouseEventHandler<HTMLButtonElement>;
}

// Projects section props
export interface ProjectsProps extends BaseComponentProps {
  projects: Project[];
  featuredOnly?: boolean;
  showFilters?: boolean;
  onProjectClick?: (projectId: string) => void;
  onViewAllClick?: MouseEventHandler<HTMLButtonElement>;
  viewMode?: 'grid' | 'list';
}

// Project card props
export interface ProjectCardProps extends BaseComponentProps {
  project: Project;
  onClick?: (projectId: string) => void;
  featured?: boolean;
  showFullDescription?: boolean;
  imageAspectRatio?: 'square' | 'video' | 'wide';
}

// Services section props
export interface ServicesProps extends BaseComponentProps {
  services: Service[];
  onServiceClick?: (serviceId: string) => void;
  onContactClick?: MouseEventHandler<HTMLButtonElement>;
  layout?: 'grid' | 'carousel';
}

// Service card props
export interface ServiceCardProps extends BaseComponentProps {
  service: Service;
  onClick?: (serviceId: string) => void;
  featured?: boolean;
  showPricing?: boolean;
}

// Blog section props
export interface BlogProps extends BaseComponentProps {
  posts: BlogPostSummary[];
  featuredOnly?: boolean;
  showCategories?: boolean;
  onPostClick?: (postId: string) => void;
  onViewAllClick?: MouseEventHandler<HTMLButtonElement>;
  layout?: 'grid' | 'list' | 'carousel';
}

// Blog post card props
export interface BlogPostCardProps extends BaseComponentProps {
  post: BlogPostSummary;
  onClick?: (postId: string) => void;
  featured?: boolean;
  showExcerpt?: boolean;
  imageAspectRatio?: 'square' | 'wide';
  showReadTime?: boolean;
  showCategory?: boolean;
}

// Full blog post props
export interface BlogPostProps extends BaseComponentProps {
  post: BlogPost;
  showRelatedPosts?: boolean;
  showComments?: boolean;
  showTableOfContents?: boolean;
  onBackClick?: MouseEventHandler<HTMLButtonElement>;
  onShareClick?: (platform: string) => void;
}

// Contact section props
export interface ContactProps extends BaseComponentProps {
  personalInfo: PersonalInfo;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  showMap?: boolean;
  showSocialLinks?: boolean;
}

// Footer props
export interface FooterProps extends BaseComponentProps {
  personalInfo: PersonalInfo;
  navigationItems?: NavigationItem[];
  socialLinks?: SocialLink[];
  showNewsletter?: boolean;
  onNewsletterSubmit?: (email: string) => void;
}

// Social link interface
export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'email' | 'phone' | 'instagram' | 'youtube';
  url: string;
  label?: string;
  icon?: ReactNode;
}

// Form interfaces
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  referralSource?: string;
}

export interface ContactFormProps extends BaseComponentProps {
  onSubmit: (data: ContactFormData) => Promise<void> | void;
  loading?: boolean;
  showExtraFields?: boolean;
  submitButtonText?: string;
  successMessage?: string;
  errorMessage?: string;
}

export interface NewsletterFormData {
  email: string;
  categories?: string[];
  firstName?: string;
}

export interface NewsletterFormProps extends BaseComponentProps {
  onSubmit: (data: NewsletterFormData) => Promise<void> | void;
  loading?: boolean;
  placeholder?: string;
  buttonText?: string;
  showCategories?: boolean;
}

// Search and filter interfaces
export interface SearchBarProps extends BaseComponentProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  showButton?: boolean;
  loading?: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface FilterProps extends BaseComponentProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  multiSelect?: boolean;
  searchable?: boolean;
}

// Modal and dialog interfaces
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface ConfirmDialogProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'destructive';
}

// Loading and error states
export interface LoadingSpinnerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

export interface ErrorMessageProps extends BaseComponentProps {
  message: string;
  title?: string;
  onRetry?: () => void;
  retryText?: string;
  showIcon?: boolean;
}

// Pagination interface
export interface PaginationProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
}

// Breadcrumb interface
export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

// Toast notification interface
export interface ToastProps {
  id: string;
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: (id: string) => void;
}

// Table interfaces
export interface TableColumn<T = any> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> extends BaseComponentProps {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
  sortBy?: keyof T;
  sortOrder?: 'asc' | 'desc';
  onSort?: (key: keyof T, order: 'asc' | 'desc') => void;
  selectable?: boolean;
  selectedRows?: T[];
  onSelectionChange?: (selected: T[]) => void;
}

// Animation and transition interfaces
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  trigger?: 'hover' | 'scroll' | 'click' | 'load';
  repeat?: boolean;
  playOnce?: boolean;
}

// Responsive breakpoints
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

// Theme and styling
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: {
    sans: string;
    serif: string;
    mono: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  animations: Record<string, string>;
}