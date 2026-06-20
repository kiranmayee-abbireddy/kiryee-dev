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
    if (isDragging) return; // Let dragging handle state updates
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
  }, [isDragging]);

  // Handle Drag logic
  const handleDrag = (clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const startY = rect.top + 28; // Align with the top anchor
    const endY = rect.bottom - 40; // Align with track limits
    const trackHeight = endY - startY;

    const relativeY = clientY - startY;
    const progress = Math.max(0, Math.min(1, relativeY / trackHeight));

    // Instantly update local progress state to match cursor Y position for zero-latency dragging
    setScrollProgress(progress * 100);

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

  // Theme-compliant colors
  const getThemeColor = () => {
    if (isSea) return '#78350f'; // Wet sand brown
    if (isDark) return '#ffffff'; // White for Dark Mode
    return '#000000'; // Black for Light Mode
  };

  const getThreadColor = () => {
    if (isSea) return 'rgba(120, 53, 15, 0.25)';
    if (isDark) return 'rgba(255, 255, 255, 0.2)';
    return 'rgba(0, 0, 0, 0.2)';
  };

  const startOffset = 28; // Starts aligned with navbar icons

  return (
    <div 
      ref={trackRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className="fixed right-3 top-0 w-6 h-screen z-[9999] cursor-ns-resize flex flex-col items-center select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Top Navbar Anchor (Small ring aligning with header icons) */}
      <div 
        className="w-2 h-2 rounded-full border-2 transition-colors duration-300 mb-0.5"
        style={{ 
          borderColor: getThemeColor(),
          marginTop: `${startOffset}px`
        }}
      />

      {/* Fishing Thread (Solid ultra-thin 1px line connecting top anchor to the fish) */}
      <div 
        className={`w-[1px] pointer-events-none ${
          isDragging ? '' : 'transition-all duration-300 ease-out'
        }`}
        style={{ 
          backgroundColor: getThreadColor(),
          height: `calc(${scrollProgress * 0.9}% + 8px)`
        }}
      />

      {/* Draggable Fish Thumb */}
      <motion.div
        className={`absolute w-12 h-16 flex items-center justify-center pointer-events-none ${
          isDragging ? '' : 'transition-all duration-300 ease-out'
        }`}
        style={{
          top: `calc(${scrollProgress * 0.9}% + ${startOffset}px)`,
        }}
      >
        {/* Vector Fish rotated 90deg to swim down the line */}
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
          <svg width="36" height="20" viewBox="-18 -10 36 20">
            {/* Wiggling tail */}
            <motion.path 
              d="M -9 0 L -16 -5 L -16 5 Z" 
              fill={getThemeColor()}
              animate={isDragging ? {
                rotateY: [0, 40, 0, -40, 0],
              } : {}}
              transition={{
                repeat: Infinity,
                duration: 0.3,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: '-9px 0px' }}
            />
            {/* Main fish body */}
            <ellipse cx="2" cy="0" rx="11" ry="6" fill={getThemeColor()} />
            {/* Eye */}
            <circle cx="8" cy="-2" r="1.2" fill={isDark ? '#000' : '#fff'} />
            {/* Fin */}
            <path d="M 0 4 L -3 8 L 1 5 Z" fill={getThemeColor()} />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;