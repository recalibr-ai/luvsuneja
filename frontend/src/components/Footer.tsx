import { FC } from 'react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="py-12 bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>{personalInfo.contact.location} • {personalInfo.title}</span>
            <a 
              href="https://linkedin.com/in/luvsuneja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
