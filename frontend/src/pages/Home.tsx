import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { personalInfo, featuredProjects, services, blogPosts, testimonials } from '../data/mock';
import { Calendar, Clock, ArrowRight, Award, DollarSign, Target, Crown } from 'lucide-react';
import { PersonalInfo, Project, Service, BlogPostSummary, Achievement, Testimonial } from '../types';

const Home: FC = () => {
  // Use static data instead of API calls
  const profile: PersonalInfo = personalInfo;
  const projects: Project[] = featuredProjects;
  const servicesData: Service[] = services;
  const blogData: BlogPostSummary[] = blogPosts;
  const testimonialsData: Testimonial[] = testimonials;
  
  // State for expanded testimonials
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<string>>(new Set());
  
  const toggleTestimonial = (testimonialId: string) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(testimonialId)) {
      newExpanded.delete(testimonialId);
    } else {
      newExpanded.add(testimonialId);
    }
    setExpandedTestimonials(newExpanded);
  };
  
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Mock achievements data (static content)
  const achievements: Achievement[] = [
    {
      title: "Patent Pending",
      description: "Address prediction system for GCC region - innovative logistics solution"
    },
    {
      title: "Cost Optimization",
      description: "Led initiatives saving $1M+ annually through strategic transformations"
    },
    {
      title: "AWS re:Invent 2019",
      description: "Showcased innovative ML models for logistics optimization at AWS flagship conference"
    },
    {
      title: "Team Leadership",
      description: "Grew multinational team from 2 to 9 data professionals"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero personalInfo={profile} />
      
      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              About
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                  {index === 0 && <Award className="h-8 w-8 text-white" />}
                  {index === 1 && <Target className="h-8 w-8 text-white" />}
                  {index === 2 && <DollarSign className="h-8 w-8 text-white" />}
                  {index === 3 && <Crown className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-lg font-normal text-black mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              Recommendations
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              From professionals I've collaborated with
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsData.filter(testimonial => testimonial.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 hover:bg-gray-100 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1 pr-4">
                    <h4 className="font-normal text-black text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                  {testimonial.linkedinUrl && (
                    <a 
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-8 h-8 bg-[#0A66C2] hover:bg-[#004182] transition-colors duration-200 rounded-sm flex items-center justify-center"
                    >
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 310 310">
                        <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                        <path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                        <path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"/>
                      </svg>
                    </a>
                  )}
                </div>
                
                <blockquote className="text-gray-600 text-sm leading-relaxed">
                  "{expandedTestimonials.has(testimonial.id) ? testimonial.content : truncateText(testimonial.content)}"
                </blockquote>
                
                {testimonial.content.length > 200 && (
                  <button
                    onClick={() => toggleTestimonial(testimonial.id)}
                    className="mt-3 text-xs text-black hover:text-gray-700 transition-colors duration-200"
                  >
                    {expandedTestimonials.has(testimonial.id) ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="projects" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              AI/ML solutions that delivered measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-gray-50 p-8 lg:p-10 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-light text-black mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <p className="text-sm text-black font-medium">
                      Impact: {project.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              Services
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Comprehensive AI/ML consulting from strategy to implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
                <div key={service.id} className="bg-white p-8 lg:p-10 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl lg:text-2xl font-light text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features?.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-black" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Technical deep-dives, case studies, and leadership perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="bg-gray-50 p-6 lg:p-8 hover:bg-gray-100 transition-all duration-300 h-full">
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
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-light mb-8 tracking-tight">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 font-light mb-12 leading-relaxed">
              Ready to transform your business with AI? Let's discuss your next breakthrough project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <a 
                href={profile.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 font-normal hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Book Free 30-Min Consultation
              </a>
              <a 
                href={`mailto:${profile.contact.email}`}
                className="px-8 py-3 font-normal border border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                {profile.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 {profile.name}. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              {profile.contact.location} • {profile.title}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;