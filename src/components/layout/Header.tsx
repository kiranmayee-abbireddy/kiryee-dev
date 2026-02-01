import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Menu, X, Moon, Sun, FileDown, Palette,
  Home, User, Star, Briefcase, Gamepad2, Layout, Award, Send
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, setTheme } = useTheme();

  // Motion values for extra smooth physical rotation
  const rotationRaw = useMotionValue(0);
  const rotationSpring = useSpring(rotationRaw, {
    damping: 30,
    stiffness: 200,
    mass: 0.8
  });
  const rotation = useTransform(rotationSpring, (v) => v);
  const rotationInverse = useTransform(rotation, r => -r);

  // Map icon strings to components
  const IconMap: { [key: string]: any } = {
    Home, User, Star, Briefcase, Gamepad2, Layout, Award, Send
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };



  // Theme-based colors for the radial menu
  const getThemeColors = () => {
    if (theme === 'sea') return 'bg-[#78350f] text-white border-[#5d2a0c]';
    if (theme === 'dark') return 'bg-white text-neutral-900 border-neutral-200';
    return 'bg-neutral-900 text-white border-neutral-800';
  };

  const getThemeAccent = () => {
    if (theme === 'sea') return '#78350f';
    if (theme === 'dark') return '#fff';
    return '#171717';
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
    ? 'py-4 bg-white/90 dark:bg-neutral-900/90 sea:bg-[#f5e6d3]/90 backdrop-blur-sm shadow-sm'
    : 'py-6 bg-transparent'
    }`;

  const navItems = [
    { label: 'Home', href: '#home', icon: 'Home' },
    { label: 'About', href: '#about', icon: 'User' },
    { label: 'Featured', href: '#featured-project', icon: 'Star' },
    { label: 'Projects', href: '#projects', icon: 'Briefcase' },
    { label: 'Games', href: '#games', icon: 'Gamepad2', className: 'hidden xl:inline-block' },
    { label: 'Apps', href: '#apps', icon: 'Layout', className: 'hidden xl:inline-block' },
    { label: 'Certifications', href: '#certifications', icon: 'Award', className: 'hidden lg:inline-block' },
    { label: 'Work with Me', href: '#contact', icon: 'Send' },
  ];

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold tracking-tighter hover:text-neutral-600 dark:hover:text-neutral-300 sea:hover:text-[#78350f] transition-colors"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            KIRYEE
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 sea:hover:text-[#78350f] transition-colors ${item.className || ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/Kiranmayee-Abbireddy-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-medium 
                      hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 
                      sea:bg-[#78350f] sea:hover:bg-[#5d2a0c]
                      transition-colors shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Resume <FileDown size={16} />
            </motion.a>
            <div className="flex items-center gap-1">
              <motion.button
                onClick={() => setTheme(theme === 'sea' ? 'light' : 'sea')}
                className={`p-2 rounded-full transition-colors ${theme === 'sea' ? 'bg-[#78350f] text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                aria-label="Switch to sea theme"
              >
                <Palette size={20} />
              </motion.button>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button - The Center of the Quadrant */}
          <div className="flex items-center md:hidden gap-1 z-[110]">
            <button
              onClick={() => setTheme(theme === 'sea' ? 'light' : 'sea')}
              className={`p-2 rounded-full transition-colors ${theme === 'sea' ? 'bg-[#78350f] text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
              aria-label="Switch to sea theme"
            >
              <Palette size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                rotationRaw.set(0); // Reset rotation when opening
              }}
              className={`relative z-[120] p-2 rounded-full transition-all duration-300 ${mobileMenuOpen ? getThemeColors() : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dimmer Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* The Quadrant Menu */}
            <motion.div
              className="fixed top-0 right-0 z-[100] pointer-events-none"
              initial={{ opacity: 0, scale: 0.5, x: 100, y: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 100, y: -100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Visual Circle/Arc - originates from top right */}
              <svg className="absolute top-0 right-0 w-[500px] h-[500px]" style={{ transform: 'translate(40%, -40%)' }}>
                <circle
                  cx="250" cy="250" r="240"
                  fill="none"
                  stroke={getThemeAccent()}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="opacity-20"
                />
                <circle
                  cx="250" cy="250" r="280"
                  fill="none"
                  stroke={getThemeAccent()}
                  strokeWidth="1"
                  className="opacity-10"
                />
              </svg>

              {/* Rotating Container */}
              <motion.div
                className="relative pointer-events-auto"
                style={{
                  width: '600px', height: '600px',
                  transformOrigin: 'top right',
                  right: '-30px', top: '30px',
                  rotate: rotation
                }}
                onPan={(_, info) => {
                  const sensitivity = 0.5;
                  const delta = (info.delta.x - info.delta.y) * sensitivity;
                  const current = rotationRaw.get();
                  rotationRaw.set(Math.max(-150, Math.min(0, current + delta)));
                }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
              >
                {navItems.map((item, i) => {
                  const Icon = IconMap[item.icon as string];
                  const spacing = 25;
                  const angle = 95 + (i * spacing);
                  const radius = 220;

                  const x = radius * Math.cos(angle * (Math.PI / 180));
                  const y = radius * Math.sin(angle * (Math.PI / 180));

                  return (
                    <motion.div
                      key={item.href}
                      className="absolute"
                      style={{
                        left: '100%', top: '0',
                        x: x - 30, y: y - 30
                      }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`flex flex-col items-center justify-center w-16 h-16 rounded-full shadow-lg border-2 transition-transform active:scale-90 ${getThemeColors()}`}
                        whileHover={{ scale: 1.1 }}
                        style={{ rotate: rotationInverse }}
                      >
                        <Icon size={20} />
                        <span className="text-[8px] font-bold mt-1 uppercase tracking-tighter">{item.label}</span>
                      </motion.a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Resume Floating Button - Bottom Right */}
            <motion.a
              href="/Kiranmayee-Abbireddy-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`fixed bottom-8 right-8 z-[110] flex items-center gap-3 px-6 py-4 rounded-2xl font-bold shadow-2xl ${getThemeColors()}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FileDown size={20} />
              RESUME
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;