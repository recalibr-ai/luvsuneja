import { FC } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogs.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Header from '../components/Header';

const Blog: FC = () => {
  return (
    <>
      <Header />
      <main className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              All Insights
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Technical deep-dives, case studies, and leadership perspectives on AI and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group cursor-pointer block"
              >
                <div className="bg-gray-50 p-6 lg:p-8 hover:bg-gray-100 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-wider text-gray-500">
                    <span>{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-light text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
