import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown, { Components } from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import allPosts from '../data/blogs.json';
import { personalInfo } from '../data/mock';

const BlogPost: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = allPosts.find(p => p.slug === id);

  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      // Remove frontmatter from content before rendering
      fetch(`${process.env.PUBLIC_URL || ''}/blog/${post.slug}.md`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch post');
            }
            return res.text();
        })
        .then(text => {
            const body = text.replace(/^---[\s\S]*?---/, '');
            setContent(body);
        })
        .catch(err => {
            console.error(err);
            setContent('Failed to load post content.');
        });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-black mb-8">Post Not Found</h1>
            <button
              onClick={() => navigate('/blog')}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              ← Back to All Posts
            </button>
          </div>
        </main>
        <Footer personalInfo={personalInfo} />
      </div>
    );
  }

  const markdownComponents: Components = {
    h1: (props: any) => <h1 className="text-3xl lg:text-4xl font-light text-black mb-6 mt-12" {...props} />,
    h2: (props: any) => <h2 className="text-2xl lg:text-3xl font-light text-black mb-6 mt-12" {...props} />,
    h3: (props: any) => <h3 className="text-xl lg:text-2xl font-light text-black mb-6 mt-10" {...props} />,
    p: (props: any) => <p className="mb-6 text-gray-700 leading-relaxed" {...props} />,
    ul: (props: any) => <ul className="mb-6 pl-6 space-y-2 list-disc text-gray-700" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-gray-300 pl-6 py-4 mb-6 bg-gray-50 italic text-gray-700" {...props} />,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </button>

            <header className="mb-12 border-b pb-8">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                {post.category && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs uppercase tracking-wider">
                    {post.category}
                  </span>
                )}
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

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default BlogPost;