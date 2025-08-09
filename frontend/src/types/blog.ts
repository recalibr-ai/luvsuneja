/**
 * Blog-related TypeScript interfaces and types
 * Supports both current static blog posts and future markdown-based blog system
 */

// Base blog post categories
export type BlogCategory = 
  | 'Strategic Insights'
  | 'Case Study'
  | 'Leadership'
  | 'Technical Deep Dive'
  | 'AI/ML'
  | 'MLOps'
  | 'Data Engineering'
  | 'Industry Analysis'
  | 'Best Practices';

// Blog post status for content management
export type BlogPostStatus = 'draft' | 'published' | 'archived' | 'scheduled';

// Blog post frontmatter for markdown-based posts
export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishDate: string;
  lastModified?: string;
  featured: boolean;
  status?: BlogPostStatus;
  tags?: string[];
  author?: string;
  slug?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  socialImage?: string;
  tableOfContents?: boolean;
}

// Complete blog post interface (for both static and markdown posts)
export interface BlogPost extends BlogPostFrontmatter {
  id: string;
  content: string;
  wordCount?: number;
  estimatedReadTime?: number;
  relatedPosts?: string[]; // Array of related post IDs
  comments?: BlogComment[];
  viewCount?: number;
  shareCount?: number;
  seoScore?: number;
}

// Blog post summary (for lists and previews)
export interface BlogPostSummary {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishDate: string;
  featured: boolean;
  slug?: string;
  socialImage?: string;
  tags?: string[];
}

// Blog comment interface (for future commenting system)
export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  parentCommentId?: string; // For nested comments
  replies?: BlogComment[];
}

// Blog archive structure
export interface BlogArchive {
  year: number;
  months: {
    month: number;
    monthName: string;
    posts: BlogPostSummary[];
    postCount: number;
  }[];
  totalPosts: number;
}

// Blog search/filter options
export interface BlogSearchFilters {
  category?: BlogCategory;
  tags?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  featured?: boolean;
  searchQuery?: string;
  sortBy?: 'publishDate' | 'readTime' | 'title' | 'featured' | 'viewCount';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

// Blog search results
export interface BlogSearchResult {
  posts: BlogPostSummary[];
  totalCount: number;
  hasMore: boolean;
  appliedFilters: BlogSearchFilters;
}

// Blog analytics/statistics
export interface BlogStatistics {
  totalPosts: number;
  totalViews: number;
  totalShares: number;
  averageReadTime: number;
  mostPopularPosts: BlogPostSummary[];
  categoryCounts: Record<BlogCategory, number>;
  monthlyPublishStats: {
    month: string;
    count: number;
  }[];
}

// Newsletter/subscription related types
export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
  categories?: BlogCategory[];
  isActive: boolean;
}

// RSS feed item
export interface RSSFeedItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  category: string;
  author: string;
}