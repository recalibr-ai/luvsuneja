import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import { blogPosts } from '../data/mock';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-light text-black mb-8">Post Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatContent = (content) => {
    if (!content) return '';
    
    // Convert markdown-style formatting to HTML
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl lg:text-3xl font-light text-black mb-6 mt-12">${paragraph.replace('## ', '')}</h2>`;
        }
        
        // Handle bold text
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
        
        // Handle lists
        if (paragraph.includes('- ')) {
          const listItems = paragraph.split('\n').filter(line => line.startsWith('- '));
          const listHTML = listItems.map(item => 
            `<li class="mb-2">${item.replace('- ', '')}</li>`
          ).join('');
          return `<ul key="${index}" class="mb-6 pl-6 space-y-2 list-disc text-gray-600">${listHTML}</ul>`;
        }
        
        // Handle blockquotes
        if (paragraph.startsWith('> ')) {
          return `<blockquote key="${index}" class="border-l-4 border-gray-300 pl-6 py-4 mb-6 bg-gray-50 italic text-gray-700">${paragraph.replace('> **Example:** ', '<strong>Example:</strong> ')}</blockquote>`;
        }
        
        // Handle regular paragraphs
        if (paragraph.trim() && !paragraph.startsWith('#')) {
          return `<p key="${index}" class="mb-6 text-gray-600 leading-relaxed">${paragraph}</p>`;
        }
        
        return '';
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="uppercase tracking-wider">{post.category}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-light text-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: formatContent(post.content) 
                }} 
              />
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 mb-8">Full article content coming soon...</p>
                <p className="text-sm text-gray-400">
                  This article is currently being prepared for publication.
                </p>
              </div>
            )}
          </div>

          {/* CTA section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="bg-gray-50 p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-light text-black mb-6">
                Let's Discuss Your AI Strategy
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to identify your highest-impact AI opportunities? Let's have a conversation about how AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://cal.com/luv-suneja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-3 font-normal hover:bg-gray-800 transition-all duration-200 hover:scale-105 flex items-center gap-2"
                >
                  Book a Free Call
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="mailto:luvsuneja@gmail.com"
                  className="px-8 py-3 font-normal text-black border border-gray-300 hover:border-black transition-all duration-200 hover:scale-105"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;