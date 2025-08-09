import { useState, useEffect, FC } from 'react';
import { Menu, X } from 'lucide-react';
import { HeaderProps, NavigationItem } from '../types';

const Header: FC<HeaderProps> = ({ 
  className = '', 
  navigationItems,
  ctaButton,
  mobileMenuOpen,
  onMobileMenuToggle
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(mobileMenuOpen || false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use provided navigation items or default ones
  const navItems: NavigationItem[] = navigationItems || [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (): void => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (onMobileMenuToggle) {
      onMobileMenuToggle();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl lg:text-2xl font-light text-black">
              Luv Suneja
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick || (() => scrollToSection(item.href))}
                className="text-sm font-normal text-gray-700 hover:text-black transition-all duration-200 hover:-translate-y-0.5"
              >
                {item.label}
              </button>
            ))}
            {ctaButton ? (
              <button
                onClick={ctaButton.onClick}
                className="bg-black text-white px-6 py-2 text-sm font-normal hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                {ctaButton.label}
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-black text-white px-6 py-2 text-sm font-normal hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                Get In Touch
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick || (() => scrollToSection(item.href))}
                  className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              {ctaButton ? (
                <button
                  onClick={ctaButton.onClick}
                  className="w-full bg-black text-white px-6 py-3 text-sm font-normal hover:bg-gray-800 transition-colors duration-200 mt-4"
                >
                  {ctaButton.label}
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-black text-white px-6 py-3 text-sm font-normal hover:bg-gray-800 transition-colors duration-200 mt-4"
                >
                  Get In Touch
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;