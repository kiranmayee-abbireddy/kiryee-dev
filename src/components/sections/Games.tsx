import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Gamepad2 } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  description: string;
  link: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

const AnimatedSVGBackground = ({ svg }: { svg: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(5)].map((_, i) => (
        <motion.img
          key={i}
          src={svg}
          alt=""
          className="absolute opacity-0"
          style={{
            width: i % 2 === 0 ? '60px' : '40px',
            height: 'auto',
            top: `${10 + i * 20}%`,
            filter: 'brightness(0.8) contrast(0.5)',
          }}
          initial={{
            x: i % 2 === 0 ? '-100%' : '300%',
            scaleX: i % 2 === 0 ? -1 : 1,
            opacity: 0,
          }}
          animate={{
            x: i % 2 === 0 ? '500%' : '-200%',
            opacity: [0, 0.4, 0.4, 0],
            y: [0, (i % 2 === 0 ? 1 : -1) * 20, (i % 2 === 0 ? -1 : 1) * 20, 0],
          }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};


const Games: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const games: Game[] = [
    {
      id: 11,
      title: 'Noct',
      description: 'Restore the light to the world by collecting stars',
      link: 'https://noctit.netlify.app/',
      difficulty: 'Medium',
      svg: '/jump.svg'
    },
    {
      id: 1,
      title: 'Letter Drop',
      description: 'A word-chain game where players stack and form a word like block blast.',
      link: 'https://kiranmayee-abbireddy.github.io/letter-drop/',
      difficulty: 'Medium',
      svg: '/block.svg'
    },
    {
      id: 2,
      title: 'Spell Steps',
      description: 'Educational game teaching spelling through interactive tiles.',
      link: 'https://kiranmayee-abbireddy.github.io/spell-steps/',
      difficulty: 'Easy',
      svg: '/stairs.svg'
    },
    {
      id: 3,
      title: 'The Last Letter',
      description: 'A timed typing game where players race to type falling letters before they vanish.',
      link: 'https://kiranmayee-abbireddy.github.io/the-last-letter/',
      difficulty: 'Medium',
      svg: '/keyboard.svg'
    },
    {
      id: 4,
      title: 'Bubble Fish',
      description: 'An underwater bubble dodging game with playful animation.',
      link: 'https://kiranmayee-abbireddy.github.io/bubble-fish/',
      difficulty: 'Easy',
      svg: '/fish.svg'
    },
    {
      id: 5,
      title: 'Orbital Escape',
      description: 'A space-themed escape game avoiding orbital debris.',
      link: 'https://kiranmayee-abbireddy.github.io/orbital-escape/',
      difficulty: 'Hard',
      svg: '/rocket.svg'
    },
    {
      id: 6,
      title: 'Paper Plane Wind Adventure',
      description: 'Guide a paper plane through windy paths in an aesthetic journey.',
      link: 'https://kiranmayee-abbireddy.github.io/paper-plane-wind-adventure/',
      difficulty: 'Medium',
      svg: '/paperplane.svg'
    },
    {
      id: 7,
      title: 'Parallel Love',
      description: 'A dual-character story-based side-scroller exploring long-distance love.',
      link: 'https://kiranmayee-abbireddy.github.io/Parallel-love/',
      difficulty: 'Medium',
      svg: '/love.svg'
    },
    {
      id: 8,
      title: 'Echo Speller',
      description: 'Listen carefully and type the word correctly.',
      link: 'https://echo-speller.netlify.app/',
      difficulty: 'Medium',
      svg: '/echo.svg'
    },
    {
      id: 9,
      title: 'Color Coded Words',
      description: 'The Stroop Effect makes your brain work harder when color and meaning conflict!',
      link: 'https://color-coded-words.netlify.app/',
      difficulty: 'Hard',
      svg: '/color.svg'
    },
    {
      id: 10,
      title: 'Emoji Decoder',
      description: 'Match emoji sequences with real-world meanings.',
      link: 'https://emoji-decode.netlify.app/',
      difficulty: 'Easy',
      svg: '/emoji.svg'
    }
  ];

  return (
    <section id="games" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Interactive Games
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Play & Learn
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of educational and entertaining games designed to challenge your mind and improve your skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="relative overflow-hidden bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:transform hover:-translate-y-1 transition-all group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + (index % 6) * 0.1 }}
            >
              <AnimatedSVGBackground svg={game.svg} />

              <div className="relative z-10 mb-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    <Gamepad2 size={24} />
                  </div>
                  {game.difficulty && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {game.difficulty}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{game.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>

              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-auto w-fit self-center flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all group-hover:scale-105"
              >
                <Play size={18} />
                Play Game
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;