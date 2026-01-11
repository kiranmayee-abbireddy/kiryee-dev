import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Download } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import Lottie from 'lottie-react';
import lumiflowAnimation from '/lumiflow.json';
import { useEffect, useState } from 'react';
const FeaturedProject: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [shouldPlay, setShouldPlay] = useState(false);

  // check on mount if section is already in view
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShouldPlay(true);
      }
    }
  }, [ref]);

  // also trigger when intersection changes
  useEffect(() => {
    if (inView) setShouldPlay(true);
  }, [inView]);

  const keyFeatures = [
    'Quick Logging for moods, habits, tasks, and affirmations',
    'Daily Overview Dashboard with subtle animations',
    'Habit & Mood Analytics with visual summaries',
    'Add-to-Home Screen PWA Support with offline caching',
    'Reminders and Notifications (Web APIs)'
  ];

  return (
    <section id="featured-project" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Project Info */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Featured Project
              </motion.p>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                LumiFlow
              </motion.h2>
              
              <motion.p 
                className="text-xl text-neutral-600 dark:text-neutral-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your Self-Care Productivity Companion
              </motion.p>
              
              <motion.p 
                className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                LumiFlow is a web-based self-care productivity app that blends daily wellness routines with habit tracking, task planning, and mood journaling — all in one elegant, minimalist interface. Designed for both desktop and mobile via a Progressive Web App (PWA), LumiFlow prioritizes offline access, fast performance, and an immersive distraction-free user experience.
              </motion.p>

              {/* Key Features */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* PWA Install Prompt */}
              <motion.div 
                className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg mb-8 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Smartphone className="text-neutral-600 dark:text-neutral-400 mr-3" size={20} />
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Available as a Progressive Web App</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Install on your device for the best experience!</p>
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <AnimatedButton href="https://lumiflow.netlify.app/">
                  Try it Live
                </AnimatedButton>
              </motion.div>

              {/* Why I Built It */}
              <motion.div 
                className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h3 className="text-lg font-semibold mb-3">Why I Built It</h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I created LumiFlow to explore the intersection of personal wellness and productivity — two themes I care deeply about. The goal was to build a delightful experience that could help people feel more in control of their routines without overwhelming them.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - App Preview */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Mobile / small screens */}
              <div className="relative block lg:hidden">
                <div className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700">
                  <iframe
                    src="https://lumiflow.netlify.app/"
                    title="LumiFlow - Self-Care Productivity App"
                    className="w-full h-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
                
                {/* Floating elements for visual interest */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-neutral-300 dark:bg-neutral-600 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                />
              </div>

              {/* Desktop / large screens */}
              <div className="hidden lg:block w-full h-full">
                <Lottie
                  animationData={lumiflowAnimation}
                  loop
                  autoplay={shouldPlay}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;