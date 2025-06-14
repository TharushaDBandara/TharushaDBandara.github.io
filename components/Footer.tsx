
import React from 'react';

interface FooterProps {
  ownerName: string;
}

const Footer: React.FC<FooterProps> = ({ ownerName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-center py-8 border-t border-secondary">
      <div className="container mx-auto px-4">
        <p className="text-text-muted text-sm">
          &copy; {currentYear} {ownerName}. All rights reserved.
        </p>
        <p className="text-text-muted text-xs mt-1">
          Crafted with <span role="img" aria-label="love">❤️</span> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    