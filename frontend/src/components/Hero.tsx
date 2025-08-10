import { FC, useState, useEffect } from 'react';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { HeroProps, PersonalInfo } from '../types';

const Hero: FC<HeroProps> = ({ 
  personalInfo: providedPersonalInfo,
  onViewWorkClick,
  onConnectClick,
  className = '',
  showAnimation = true
}) => {
  const profile: PersonalInfo = providedPersonalInfo || personalInfo;

  // Dynamic phrases that rotate after "Recalibrating Business Excellence for"
  const dynamicPhrases = [
    "the AI-Driven Future",
    "an Intelligent Economy", 
    "Data-Driven Growth",
    "Strategic Innovation",
    "Competitive Advantage"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToProjects = (): void => {
    if (onViewWorkClick) {
      onViewWorkClick({} as React.MouseEvent<HTMLButtonElement>);
      return;
    }
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (): void => {
    if (onConnectClick) {
      onConnectClick({} as React.MouseEvent<HTMLButtonElement>);
      return;
    }
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotation effect for dynamic phrases
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => 
            (prevIndex + 1) % dynamicPhrases.length
          );
          setIsAnimating(false);
        }, 250); // Half of transition duration
      }, 3500); // Rotate every 3.5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, dynamicPhrases.length]);

  return (
    <section className={`min-h-screen flex items-center justify-center bg-white pt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Abstract AI-inspired graphic */}
          {showAnimation && (
            <div className="mb-12 flex justify-center">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 rounded-full border border-gray-200 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border border-gray-300 animate-pulse delay-150"></div>
                <div className="absolute inset-4 rounded-full border border-gray-400 animate-pulse delay-300"></div>
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-black mb-6 tracking-tight leading-tight">
            {profile.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-8 tracking-wide">
            {profile.title}
          </h2>

          <p 
            className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Recalibrating Business Excellence for{' '}
            <span 
              className="inline-block transition-opacity duration-500 ease-in-out"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {dynamicPhrases[currentPhraseIndex]}
            </span>
          </p>

          {/* Key stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-light text-black mb-1">
                {profile.experience}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Experience
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-light text-black mb-1">
                {profile.costSavings}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Cost Savings
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{profile.contact.location}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a 
                href={`mailto:${profile.contact.email}`}
                className="hover:text-black transition-colors duration-200"
              >
                {profile.contact.email}
              </a>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex justify-center">
            <a
              href={profile.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white px-8 py-3 text-sm font-normal hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Book Free 30-Min Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;