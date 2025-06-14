
import React from 'react';
import Section from './Section';
import { SocialLink } from '../types';
import { EnvelopeIcon } from './icons/HeroIcons';

interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({ email, socialLinks }) => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
        <p className="text-lg md:text-xl text-text-muted mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. 
          Feel free to reach out if you'd like to connect!
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-lg mb-10"
        >
          <EnvelopeIcon className="w-6 h-6 mr-2" />
          Send Me An Email
        </a>
        <div className="mt-10">
          <p className="text-text-muted mb-4">Or find me on social media:</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.filter(link => link.id !== 'email').map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-text-muted hover:text-primary transition-transform duration-300 hover:scale-125"
              >
                {/* Fix: Refined type assertion for link.icon to React.ReactElement<{ className?: string }>
                    to ensure TypeScript recognizes className as a valid prop for the cloned element. */}
                {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;