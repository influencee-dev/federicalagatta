
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consulenze', path: '/consulenze' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Toggle function with overflow lock
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="fixed w-full z-[100] bg-[#F9F7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onClick={closeMenu} className="flex flex-col group relative z-[110]">
            <span className="logo-font text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 leading-tight italic transition-colors group-hover:text-[#4A5D23]">
              Federica La Gatta
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#4A5D23] font-bold -mt-1 ml-1">
              Nutrizionista
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold tracking-widest transition-colors hover:text-[#4A5D23] ${
                  isActive(link.path) ? 'text-[#4A5D23] border-b-2 border-[#4A5D23]' : 'text-stone-500'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/consulenze"
              className="bg-[#6B1C3B] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-[#5a1731] transition-all shadow-sm"
            >
              PRENOTA ORA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-[110]">
            <button
              onClick={toggleMenu}
              className="text-stone-800 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F7F2] z-[100] md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-3xl font-medium serif tracking-tight ${
                isActive(link.path) ? 'text-[#4A5D23]' : 'text-stone-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consulenze"
            onClick={closeMenu}
            className="w-full max-w-xs bg-[#6B1C3B] text-white px-6 py-5 rounded-full text-sm font-bold tracking-widest shadow-xl uppercase text-center"
          >
            Prenota Sessione
          </Link>
          
          <div className="pt-12 border-t border-stone-200 w-full max-w-xs text-center">
            <p className="text-stone-400 text-[10px] tracking-widest uppercase font-bold mb-4">Seguimi</p>
            <div className="flex justify-center space-x-8 text-[#4A5D23]">
              <span className="text-sm font-semibold">Instagram</span>
              <span className="text-sm font-semibold">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
