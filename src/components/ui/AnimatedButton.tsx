import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, children, className = '' }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-2xl ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Star 1 */}
        <motion.div
          className="absolute w-3 h-3 text-neutral-400 dark:text-neutral-600"
          initial={{ top: '20%', left: '15%', opacity: 0, scale: 0 }}
          whileHover={{ 
            top: '-10%', 
            left: '5%', 
            opacity: 1, 
            scale: 1,
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Star 2 */}
        <motion.div
          className="absolute w-2 h-2 text-neutral-400 dark:text-neutral-600"
          initial={{ top: '40%', right: '20%', opacity: 0, scale: 0 }}
          whileHover={{ 
            top: '10%', 
            right: '5%', 
            opacity: 1, 
            scale: 1,
            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))'
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Star 3 */}
        <motion.div
          className="absolute w-2.5 h-2.5 text-neutral-400 dark:text-neutral-600"
          initial={{ bottom: '25%', left: '25%', opacity: 0, scale: 0 }}
          whileHover={{ 
            bottom: '5%', 
            left: '10%', 
            opacity: 1, 
            scale: 1,
            filter: 'drop-shadow(0 0 7px rgba(255, 255, 255, 0.6))'
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Star 4 */}
        <motion.div
          className="absolute w-1.5 h-1.5 text-neutral-400 dark:text-neutral-600"
          initial={{ bottom: '30%', right: '15%', opacity: 0, scale: 0 }}
          whileHover={{ 
            bottom: '-5%', 
            right: '20%', 
            opacity: 1, 
            scale: 1,
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.4))'
          }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Star 5 */}
        <motion.div
          className="absolute w-2 h-2 text-neutral-400 dark:text-neutral-600"
          initial={{ top: '60%', left: '50%', opacity: 0, scale: 0 }}
          whileHover={{ 
            top: '40%', 
            left: '80%', 
            opacity: 1, 
            scale: 1,
            filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.5))'
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3">
        <ExternalLink size={20} className="transition-transform group-hover:rotate-12" />
        {children}
      </span>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-neutral-900 dark:bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
    </motion.a>
  );
};

export default AnimatedButton;