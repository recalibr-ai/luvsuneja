import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { personalInfo, featuredProjects, services, blogPosts, achievements, skills } from '../data/mock';
import { ExternalLink, Calendar, Clock, ArrowRight, Award, Users, DollarSign, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              About
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
              {personalInfo.bio}
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
                  {index === 3 && <Users className="h-8 w-8 text-white" />}
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

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-black mb-8 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Showcasing AI/ML solutions that delivered measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-gray-50 p-8 lg:p-10 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-light text-black mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-black font-medium mb-6">
                    Impact: {project.impact}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-white text-gray-600 border border-gray-200">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-3 py-1 text-gray-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 lg:p-10 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl lg:text-2xl font-light text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
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
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
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
              </article>
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
                href={`mailto:${personalInfo.email}`}
                className="bg-white text-black px-8 py-3 font-normal hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="px-8 py-3 font-normal border border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                {personalInfo.phone}
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
              © 2024 Luv Suneja. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Dubai, UAE • Senior Tech Leader & AI Strategist
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;