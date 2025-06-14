import React from 'react';
import { SocialLink } from '../types'; // Corrected import
import { ArrowDownTrayIcon } from './icons/HeroIcons';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  profileImageUrl: string;
  socialLinks: SocialLink[];
  resumeUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, summary, profileImageUrl, socialLinks, resumeUrl }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-slate-800 text-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or animation could go here */}
      </div>
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <img 
            src={profileImageUrl} 
            alt={name} 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-xl border-4 border-primary object-cover" 
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-primary">{name}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-text-muted mb-8 font-medium">
            {title}
          </p>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            {summary}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-lg"
            >
              Get In Touch
            </a>
            {resumeUrl && resumeUrl !== '#' && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-lg flex items-center"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download CV
            </a>
            )}
          </div>
          <div className="flex justify-center space-x-6 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-text-muted hover:text-primary transition-transform duration-300 hover:scale-125"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
