import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Matter from 'matter-js';
import { motion, AnimatePresence } from 'framer-motion';

const STATES = {
  INTRO: 'intro',
  DROPPING: 'dropping',
  PLAY: 'play',
  ALIGNED: 'aligned',
  CHAOS: 'chaos',
  OUTRO: 'outro',
};

const LETTERS = ['K', 'I', 'R', 'Y', 'E', 'E'];

export default function Kiryee() {
  const [state, setState] = useState(STATES.INTRO);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.5 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  const initialPositionsRef = useRef<{ x: number, y: number }[]>([]);
  const droppedOnceRef = useRef(false);
  const [letterStyles, setLetterStyles] = useState<{ x: number, y: number, angle: number }[]>(
    LETTERS.map(() => ({ x: 0, y: 0, angle: 0 }))
  );

  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Update container size on mount/resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          w: containerRef.current.clientWidth,
          h: containerRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Initialize Physics Engine
  useEffect(() => {
    if (!containerRef.current || containerSize.w === 0) return;

    const engine = Matter.Engine.create();
    const runner = Matter.Runner.create();
    
    // Add walls & floor
    const wallOptions = { isStatic: true, render: { visible: false } };
    const wallThick = 500;
    const ground = Matter.Bodies.rectangle(containerSize.w / 2, containerSize.h + wallThick / 2, containerSize.w * 2, wallThick, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-wallThick / 2, containerSize.h / 2, wallThick, containerSize.h * 2, wallOptions);
    const rightWall = Matter.Bodies.rectangle(containerSize.w + wallThick / 2, containerSize.h / 2, wallThick, containerSize.h * 2, wallOptions);
    const ceil = Matter.Bodies.rectangle(containerSize.w / 2, -wallThick / 2, containerSize.w * 2, wallThick, wallOptions);
    
    Matter.World.add(engine.world, [ground, leftWall, rightWall, ceil]);

    // Add mouse control
    const mouse = Matter.Mouse.create(containerRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.World.add(engine.world, mouseConstraint);

    // Keep mouse in sync with scrolling
    if (typeof window !== 'undefined') {
      try {
        const anyMouse = mouse as any;
        mouse.element.removeEventListener('wheel', anyMouse.mousewheel);
        mouse.element.removeEventListener('mousewheel', anyMouse.mousewheel);
        mouse.element.removeEventListener('DOMMouseScroll', anyMouse.mousewheel);
      } catch (e) {
        // Ignore if error
      }
    }

    engineRef.current = engine;
    runnerRef.current = runner;

    // Start engine ticking
    Matter.Runner.run(runner, engine);

    // Sync React State with Matter.js Bodies
    Matter.Events.on(engine, 'afterUpdate', () => {
      if (bodiesRef.current.length > 0) {
        setLetterStyles(
          bodiesRef.current.map(body => ({
            x: body.position.x,
            y: body.position.y,
            angle: body.angle
          }))
        );
      }
    });

    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (engineRef.current) {
         Matter.World.clear(engineRef.current.world, false);
      }
    };
  }, [containerSize]);

  // Handle Initial State & Letter Positioning (Before Drop)
  useEffect(() => {
    if (state === STATES.INTRO && containerSize.w > 0) {
      // Calculate perfect initial positions
      const letterWidth = window.innerWidth < 640 ? 60 : 120;
      const spacing = window.innerWidth < 640 ? 10 : 30;
      const totalWidth = (6 * letterWidth) + (5 * spacing);
      
      const startX = (containerSize.w - totalWidth) / 2 + (letterWidth / 2);
      const startY = containerSize.h / 2; // middle of the container

      const positions = LETTERS.map((_, i) => ({
        x: startX + i * (letterWidth + spacing),
        y: startY
      }));
      initialPositionsRef.current = positions;

      setLetterStyles(positions.map(p => ({ x: p.x, y: p.y, angle: 0 })));
    }
  }, [state, containerSize]);

  // Sequence: Intro -> Drop
  useEffect(() => {
    if (inView && state === STATES.INTRO && !droppedOnceRef.current) {
      droppedOnceRef.current = true;
      
      // Sequence: Text fades out -> Letters Drop
      setTimeout(() => {
        setState(STATES.DROPPING);
        
        setTimeout(() => {
          enablePhysics();
        }, 200);
      }, 2000); // 2 seconds of intro before it decides to drop
    }
  }, [inView, state]);

  // Enable Physics
  const enablePhysics = () => {
    if (!engineRef.current) return;
    setState(STATES.PLAY);

    const letterWidth = window.innerWidth < 640 ? 60 : 120;
    const letterHeight = window.innerWidth < 640 ? 80 : 160;

    // Create bodies at current positions (which are the perfect ones)
    const newBodies = initialPositionsRef.current.map((pos) => {
      const body = Matter.Bodies.rectangle(pos.x, pos.y, letterWidth, letterHeight, {
        restitution: 0.6,
        friction: 0.1,
        frictionAir: 0.01,
        density: 0.05
      });
      // Add huge initial velocity to make them completely swap/scatter
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 50,
        y: -10 - Math.random() * 20
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 1.5);
      return body;
    });

    bodiesRef.current = newBodies;
    Matter.World.add(engineRef.current.world, newBodies);
  };

  // Alignment Check (only during PLAY mode)
  useEffect(() => {
    if (state !== STATES.PLAY) return;

    const checkInterval = setInterval(() => {
      if (bodiesRef.current.length !== 6) return;

      let isAligned = true;
      const bodiesInfo = bodiesRef.current.map(b => ({ x: b.position.x, y: b.position.y }));

      // Check horizontal sequence and spacing
      for (let i = 0; i < 5; i++) {
        const curr = bodiesInfo[i];
        const next = bodiesInfo[i + 1];
        
        if (next.x <= curr.x) {
          isAligned = false;
          break;
        }
        
        const xDist = next.x - curr.x;
        if (xDist < 20 || xDist > 160) {
          isAligned = false;
          break;
        }
      }

      // Check vertical roughly inline
      if (isAligned) {
        const yVals = bodiesInfo.map(b => b.y);
        const minY = Math.min(...yVals);
        const maxY = Math.max(...yVals);
        
        if (maxY - minY > 60) {
          isAligned = false;
        }
      }

      if (isAligned) {
        setState(STATES.ALIGNED);
        // Snap into place
        bodiesRef.current.forEach((body, i) => {
          const target = initialPositionsRef.current[i];
          Matter.Body.setStatic(body, true);
          Matter.Body.setPosition(body, { x: target.x, y: target.y });
          // Normalize angle to the nearest full rotation to prevent wild spinning in CSS transition
          const closestAngle = Math.round(body.angle / (2 * Math.PI)) * (2 * Math.PI);
          Matter.Body.setAngle(body, closestAngle);
        });
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, [state]);

  // Chaos Trigger
  const triggerChaos = () => {
    setState(STATES.CHAOS);
    
    bodiesRef.current.forEach((body) => {
      Matter.Body.setStatic(body, false);
      const forceMultiplier = (Math.random() - 0.5) * 0.15;
      const upForce = -0.15 - Math.random() * 0.1;
      
      Matter.Body.applyForce(body, body.position, {
        x: forceMultiplier,
        y: upForce
      });
      // slight rotate
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.5);
    });

    setTimeout(() => {
      setState(STATES.OUTRO);
      setTimeout(() => {
        setState(STATES.PLAY);
      }, 5000);
    }, 2000);
  };

  const letterWidth = typeof window !== 'undefined' ? (window.innerWidth < 640 ? 60 : 120) : 120;
  const letterHeight = typeof window !== 'undefined' ? (window.innerWidth < 640 ? 80 : 160) : 160;

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-white dark:bg-neutral-900 sea:bg-[#f5e6d3] overflow-hidden flex flex-col items-center justify-center transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-800 sea:border-[#d4c5b0]"
    >
      {/* Physics Interactive Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full z-10" 
        style={{ 
          pointerEvents: (state === STATES.CHAOS || state === STATES.OUTRO) ? 'none' : 'auto',
          touchAction: 'pan-y'
        }}
      />

      {/* Camera Shake Wrapper */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        animate={state === STATES.CHAOS ? {
          x: [-5, 5, -5, 5, 0],
          y: [-5, 5, -5, 5, 0],
        } : {}}
        transition={{ duration: 0.4 }}
      >
        {/* The Letters */}
        {letterStyles.map((style, i) => (
          <div
            key={i}
            className={`absolute flex items-center justify-center font-black select-none pointer-events-none
              ${state === STATES.ALIGNED ? 'text-black dark:text-white sea:text-[#78350f] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] sea:drop-shadow-[0_0_15px_rgba(120,53,15,0.8)]' : 'text-neutral-800 dark:text-neutral-200 sea:text-[#451a03]'}`}
            style={{
              left: 0,
              top: 0,
              width: letterWidth,
              height: letterHeight,
              fontSize: window.innerWidth < 640 ? '5rem' : '10rem',
              transform: `translate(${style.x - letterWidth / 2}px, ${style.y - letterHeight / 2}px) rotate(${style.angle}rad)`,
              transition: state === STATES.INTRO || state === STATES.ALIGNED 
                ? 'transform 0.3s ease-out, color 0.3s ease-out, filter 0.3s ease-out' 
                : 'color 0.3s ease-out, filter 0.3s ease-out' // let Matter.js handle pos instantly during playback
            }}
          >
            {LETTERS[i]}
          </div>
        ))}
      </motion.div>

      {/* Overlay Text Container */}
      <div 
        className="absolute top-[20%] w-full text-center pointer-events-none z-30" 
        style={{ pointerEvents: state === STATES.ALIGNED ? 'auto' : 'none' }}
      >
        <AnimatePresence mode="wait">
          {state === STATES.INTRO && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
              className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400 sea:text-[#451a03]"
            >
              <p>This is KIRYEE. Handle with care.</p>
              <p className="text-sm opacity-70 mt-2">Or don't.</p>
            </motion.div>
          )}

          {state === STATES.ALIGNED && (
            <motion.button
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              onClick={triggerChaos}
              className="pointer-events-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sea:bg-[#78350f] sea:hover:bg-[#451a03] font-bold rounded-lg shadow-lg transition-all uppercase tracking-widest text-sm"
            >
              Don't touch this
            </motion.button>
          )}

          {(state === STATES.CHAOS || state === STATES.OUTRO) && (
            <motion.div
              key="outro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
              className="text-xl md:text-3xl font-bold text-neutral-900 dark:text-white sea:text-[#78350f]"
            >
              You had one job... and you ruined it.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
