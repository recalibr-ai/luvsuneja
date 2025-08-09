/**
 * Utility types and helper interfaces
 * Supports future blog system, API responses, and general application utilities
 */

// Generic API response wrapper
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  timestamp: string;
  meta?: ApiResponseMeta;
}

// API response metadata
export interface ApiResponseMeta {
  total?: number;
  page?: number;
  limit?: number;
  hasMore?: boolean;
  totalPages?: number;
  processingTime?: number;
  version?: string;
}

// Generic error interface
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: string;
  stack?: string;
  context?: Record<string, any>;
}

// Loading state management
export interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
  progress?: number;
  stage?: string;
}

// Generic form state
export interface FormState<T = Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

// Validation result
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  warnings?: Record<string, string>;
}

// File upload types
export interface FileUpload {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  progress?: number;
  url?: string;
  error?: string;
}

export interface FileUploadConfig {
  maxSize: number;
  allowedTypes: string[];
  maxFiles?: number;
  uploadUrl: string;
  onProgress?: (progress: number) => void;
  onComplete?: (url: string) => void;
  onError?: (error: string) => void;
}

// Markdown processing types
export interface MarkdownProcessor {
  content: string;
  frontmatter?: Record<string, any>;
  headings: MarkdownHeading[];
  wordCount: number;
  readTime: number;
  tableOfContents: TableOfContentsItem[];
}

export interface MarkdownHeading {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  anchor: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
  anchor: string;
  children?: TableOfContentsItem[];
}

// SEO and metadata types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  socialImage?: string;
  robots?: string;
  structuredData?: Record<string, any>;
  openGraph?: OpenGraphData;
  twitterCard?: TwitterCardData;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'website' | 'article' | 'profile';
  siteName?: string;
  locale?: string;
}

export interface TwitterCardData {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title: string;
  description: string;
  image: string;
}

// Analytics and tracking types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
  timestamp: string;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp: string;
  sessionId: string;
  userId?: string;
  duration?: number;
}

export interface UserSession {
  id: string;
  userId?: string;
  startTime: string;
  endTime?: string;
  pages: PageView[];
  events: AnalyticsEvent[];
  device: DeviceInfo;
  location?: LocationInfo;
}

export interface DeviceInfo {
  userAgent: string;
  browser: string;
  os: string;
  device: string;
  screenResolution: string;
  viewport: {
    width: number;
    height: number;
  };
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface LocationInfo {
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

// Search and indexing types
export interface SearchIndex<T = any> {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  url: string;
  lastModified: string;
  boost?: number;
  metadata?: T;
}

export interface SearchQuery {
  query: string;
  filters?: Record<string, any>;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  highlight?: boolean;
  fuzzy?: boolean;
  boost?: Record<string, number>;
}

export interface SearchResult<T = any> {
  id: string;
  score: number;
  highlight?: Record<string, string[]>;
  item: T;
}

export interface SearchResults<T = any> {
  query: SearchQuery;
  results: SearchResult<T>[];
  total: number;
  maxScore: number;
  processingTime: number;
  suggestions?: string[];
  facets?: Record<string, SearchFacet>;
}

export interface SearchFacet {
  name: string;
  values: SearchFacetValue[];
}

export interface SearchFacetValue {
  value: string;
  count: number;
  selected?: boolean;
}

// Cache management types
export interface CacheConfig {
  ttl: number;
  maxSize?: number;
  strategy: 'lru' | 'fifo' | 'ttl';
  serialize?: boolean;
  compress?: boolean;
}

export interface CacheEntry<T = any> {
  key: string;
  value: T;
  timestamp: number;
  ttl: number;
  hits: number;
  size?: number;
}

// Performance monitoring types
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: 'ms' | 'bytes' | 'count' | 'percentage';
  timestamp: string;
  tags?: Record<string, string>;
}

export interface PerformanceBudget {
  metric: string;
  threshold: number;
  severity: 'warning' | 'error';
  description: string;
}

// Configuration types
export interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  features: Record<string, boolean>;
  analytics: {
    enabled: boolean;
    trackingId?: string;
    cookieConsent: boolean;
  };
  cache: CacheConfig;
  performance: {
    budgets: PerformanceBudget[];
    monitoring: boolean;
  };
  seo: {
    siteName: string;
    siteUrl: string;
    defaultImage: string;
    twitterHandle?: string;
  };
  blog: {
    postsPerPage: number;
    enableComments: boolean;
    enableNewsletter: boolean;
    enableRSS: boolean;
    markdown: {
      enableTOC: boolean;
      enableCodeHighlight: boolean;
      enableMath: boolean;
    };
  };
}

// Utility types for better TypeScript support
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Pick<Required<T>, K>;
export type Nullable<T> = T | null;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// Event handling types
export type EventHandler<T = any> = (event: T) => void;
export type AsyncEventHandler<T = any> = (event: T) => Promise<void>;

// Date and time utilities
export interface DateRange {
  start: Date | string;
  end: Date | string;
}

export interface TimeZoneInfo {
  name: string;
  offset: number;
  abbreviation: string;
}

// Color and theme utilities
export type ColorMode = 'light' | 'dark' | 'auto';
export type ColorValue = string;
export type ColorPalette = Record<string, ColorValue>;

// Responsive utilities
export type ResponsiveBreakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

// Generic hooks return types
export interface UseAsyncReturn<T, E = Error> {
  data: T | null;
  loading: boolean;
  error: E | null;
  execute: (...args: any[]) => Promise<T>;
  reset: () => void;
}

export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
  removeValue: () => void;
}

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

// API client types
export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  signal?: AbortSignal;
}

export interface RequestInterceptor {
  onRequest?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
  onRequestError?: (error: any) => Promise<any>;
}

export interface ResponseInterceptor {
  onResponse?: (response: any) => any | Promise<any>;
  onResponseError?: (error: any) => Promise<any>;
}