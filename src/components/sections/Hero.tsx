import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CursorRevealBackground from '../ui/CursorRevealBackground';

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without triggering scroll
      window.history.pushState(null, '', href);
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <CursorRevealBackground />
      <div className="container mx-auto px-6 h-full w-full flex justify-center items-center relative z-10">
        <div className="max-w-4xl text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block">Crafting Meaningful</span>
            <span className="block">Digital Experiences</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I create educational tools and mindfulness applications that empower users and make a positive impact. Let's build something meaningful together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, '#projects')}
              className="px-8 py-3 bg-neutral-900 dark:bg-white sea:bg-[#78350f] text-white dark:text-neutral-900 sea:text-white rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 sea:hover:bg-[#5d2a0c] transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 sea:border-[#78350f] sea:text-[#78350f] rounded-full font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 sea:hover:bg-[#f5e6d3] transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 inset-x-0 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <p className="text-sm font-medium mb-2">Scroll down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;