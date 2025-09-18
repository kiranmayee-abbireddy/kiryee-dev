import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const CursorRevealBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let time = 0;

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Theme-based colors
      const isDark = theme === 'dark';
      const primaryColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
      const secondaryColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
      const accentColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';

      // Create multiple slow wave layers for gentle ocean effect
      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        
        const amplitude = 40 + layer * 15;
        const frequency = 0.008 + layer * 0.001;
        const speed = 0.008 + layer * 0.004; // Much slower waves
        const yOffset = canvas.height * 0.4 + layer * 30;

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yOffset + 
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.sin(x * frequency * 1.5 + time * speed * 1.2) * (amplitude * 0.4) +
            Math.sin(x * frequency * 0.3 + time * speed * 0.6) * (amplitude * 0.2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Complete the wave shape
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Apply gradient fill
        const gradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, canvas.height);
        
        if (layer === 0) {
          gradient.addColorStop(0, accentColor);
          gradient.addColorStop(0.5, primaryColor);
          gradient.addColorStop(1, secondaryColor);
        } else if (layer === 1) {
          gradient.addColorStop(0, primaryColor);
          gradient.addColorStop(1, secondaryColor);
        } else {
          gradient.addColorStop(0, secondaryColor);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Add celestial elements based on theme
      if (isDark) {
        // Dark mode: Moon and stars
        
        // Moon
        const moonX = canvas.width * 0.8;
        const moonY = canvas.height * 0.15;
        const moonRadius = 30;
        
        // Moon glow
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius + 10, 0, Math.PI * 2);
        const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonRadius + 10);
        moonGlow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        moonGlow.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
        moonGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = moonGlow;
        ctx.fill();
        
        // Moon body
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        
        // Moon craters
        ctx.beginPath();
        ctx.arc(moonX - 8, moonY - 5, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 200, 200, 0.6)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(moonX + 6, moonY + 8, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 200, 200, 0.6)';
        ctx.fill();
        
        // Stars
        const stars = [
          { x: canvas.width * 0.1, y: canvas.height * 0.1 },
          { x: canvas.width * 0.2, y: canvas.height * 0.05 },
          { x: canvas.width * 0.3, y: canvas.height * 0.12 },
          { x: canvas.width * 0.5, y: canvas.height * 0.08 },
          { x: canvas.width * 0.6, y: canvas.height * 0.15 },
          { x: canvas.width * 0.9, y: canvas.height * 0.05 },
          { x: canvas.width * 0.15, y: canvas.height * 0.25 },
          { x: canvas.width * 0.85, y: canvas.height * 0.25 },
        ];
        
        stars.forEach((star, i) => {
          const twinkle = Math.sin(time * 0.02 + i) * 0.3 + 0.7;
          const size = 2 + Math.sin(time * 0.03 + i) * 0.5;
          
          // Star glow
          ctx.beginPath();
          ctx.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
          const starGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, size * 2);
          starGlow.addColorStop(0, `rgba(255, 255, 255, ${twinkle * 0.6})`);
          starGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = starGlow;
          ctx.fill();
          
          // Star body
          ctx.beginPath();
          ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
          ctx.fill();
        });
        
      } else {
        // Light mode: Sun
        const sunX = canvas.width * 0.8;
        const sunY = canvas.height * 0.15;
        const sunRadius = 35;
        
        // Sun rays
        const rayCount = 12;
        for (let i = 0; i < rayCount; i++) {
          const angle = (i / rayCount) * Math.PI * 2;
          const rayLength = 20 + Math.sin(time * 0.05 + i) * 5;
          const startX = sunX + Math.cos(angle) * (sunRadius + 5);
          const startY = sunY + Math.sin(angle) * (sunRadius + 5);
          const endX = sunX + Math.cos(angle) * (sunRadius + rayLength);
          const endY = sunY + Math.sin(angle) * (sunRadius + rayLength);
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Sun glow
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius + 15, 0, Math.PI * 2);
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius + 15);
        sunGlow.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
        sunGlow.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
        sunGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = sunGlow;
        ctx.fill();
        
        // Sun body
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fill();
      }

      time += 0.5; // Slower time progression for gentler movement
      animationRef.current = requestAnimationFrame(drawWaves);
    };

    drawWaves();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-40"
      />
    </div>
  );
};

export default CursorRevealBackground;