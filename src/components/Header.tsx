import React, { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Proposal', href: '#proposal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-md border-b border-slate-800/50 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Atom className="w-8 h-8 text-purple-400 group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-xl font-bold tracking-wider text-white">
            IZUNA <span className="text-gold-400 font-light">LAB</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors tracking-wide font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#proposal"
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-navy-900 bg-gold-400 hover:bg-gold-500 rounded-md transition-colors shadow-md shadow-gold-500/10"
          >
            Work Together
          </a>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-x-0 top-[73px] bg-navy-950/95 border-b border-slate-800/80 backdrop-blur-lg transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-slate-300 hover:text-gold-400 transition-colors py-2 border-b border-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#proposal"
            onClick={() => setIsOpen(false)}
            className="text-center mt-2 px-4 py-3 text-sm font-semibold tracking-wider uppercase text-navy-900 bg-gold-400 hover:bg-gold-500 rounded-md transition-colors"
          >
            Work Together
          </a>
        </div>
      </div>
    </header>
  );
};
