
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PORTFOLIO_OWNER } from '../constants'; // Import PORTFOLIO_OWNER
import { NavLinkItem } from '../types';
import { Bars3Icon, XMarkIcon } from './icons/HeroIcons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen ? 'bg-slate-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl font-bold text-primary hover:text-primary-hover transition-colors" onClick={closeMenu}>
            {PORTFOLIO_OWNER.name} {/* Use dynamic name */}
          </a>
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <a
                key={link.id}
                href={link.href}
                className="text-text-muted hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-muted hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`pt-2 pb-4 space-y-1 sm:px-3 bg-slate-800 ${isOpen ? 'block' : 'hidden'}`}>
          {NAV_LINKS.map((link: NavLinkItem) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-primary hover:bg-secondary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
