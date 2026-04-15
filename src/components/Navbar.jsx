import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#fff5f8]/98 backdrop-blur-xl shadow-[0_1px_0_0_rgba(244,167,187,0.1)] py-3'
            : 'bg-[#fff5f8] py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Left - Hamburger on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          >
            <span className={`block w-5 h-px bg-[#1a1a1a] transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#1a1a1a] transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-5 h-px bg-[#1a1a1a] transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

          {/* Center - Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-2xl md:text-3xl font-serif font-semibold text-[#1a1a1a] tracking-[0.08em] hover:opacity-70 transition-opacity"
          >
            Mehar
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[13px] font-normal tracking-[0.05em] transition-colors relative group mx-6 ${location.pathname === link.href
                    ? 'text-[#1a1a1a]'
                    : 'text-[#666] hover:text-[#1a1a1a]'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#f4a7bb] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-center px-12 space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={link.name}
              >
                <Link
                  to={link.href}
                  className={`text-4xl font-serif transition-all duration-300 relative group ${location.pathname === link.href
                      ? 'text-[#f4a7bb]'
                      : 'text-[#1a1a1a] hover:text-[#f4a7bb]'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
