import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ScrollIndicator: React.FC = () => {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const isSea = theme === 'sea';
  const isDark = theme === 'dark';

  // Calculate scroll progress percentage
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) {
      setScrollProgress(0);
      return;
    }
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(Math.max(0, Math.min(100, scrollPercent)));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Drag logic
  const handleDrag = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const progress = Math.max(0, Math.min(1, relativeY / rect.height));

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, progress * docHeight);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleDrag(e.clientY);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleDrag(e.touches[0].clientY);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleDrag(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleDrag(e.touches[0].clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Determine colors based on active theme
  const getFishColor = () => {
    if (isSea) return '#78350f'; // Beach theme accent
    if (isDark) return '#ffffff'; // White for Dark Mode
    return '#000000'; // Black for Light Mode
  };

  const getTrackColor = () => {
    if (isSea) return 'rgba(120, 53, 15, 0.15)';
    if (isDark) return 'rgba(255, 255, 255, 0.1)';
    return 'rgba(0, 0, 0, 0.1)';
  };

  return (
    <div 
      ref={trackRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className="fixed right-0 top-0 w-8 h-screen z-[9999] cursor-ns-resize flex items-center justify-center select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Scrollbar Track line */}
      <div 
        className="w-[2px] h-[95vh] rounded-full transition-colors duration-300"
        style={{ backgroundColor: getTrackColor() }}
      />

      {/* Draggable Fish Thumb */}
      <motion.div
        className="absolute w-12 h-16 flex items-center justify-center pointer-events-none"
        style={{
          top: `${scrollProgress * 0.9}vh`, // Keeps fish within track constraints
          y: '2.5vh', // Offsets top/bottom margins
        }}
      >
        {/* Cute Vector Fish looking down & wiggling on drag */}
        <motion.div
          animate={isDragging ? {
            rotate: [90, 85, 95, 90],
          } : {
            rotate: 90
          }}
          transition={{
            repeat: Infinity,
            duration: 0.25,
            ease: "easeInOut"
          }}
          className="flex items-center justify-center"
        >
          <svg width="40" height="24" viewBox="-20 -12 40 24">
            {/* Wiggling tail */}
            <motion.path 
              d="M -10 0 L -18 -6 L -18 6 Z" 
              fill={getFishColor()}
              animate={isDragging ? {
                rotateY: [0, 45, 0, -45, 0],
              } : {}}
              transition={{
                repeat: Infinity,
                duration: 0.3,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: '-10px 0px' }}
            />
            {/* Main fish body */}
            <ellipse cx="2" cy="0" rx="12" ry="7" fill={getFishColor()} />
            {/* Eye */}
            <circle cx="8" cy="-2.5" r="1.5" fill={isDark ? '#000' : '#fff'} />
            {/* Fin */}
            <path d="M 0 5 L -4 10 L 2 7 Z" fill={getFishColor()} />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;