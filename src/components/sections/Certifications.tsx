import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Certifications: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isSea = theme === 'sea';
  const isDark = theme === 'dark';

  const certifications = [
    {
      title: 'Scientific Computing with Python',
      issuer: 'freeCodeCamp',
      link: 'https://freecodecamp.org/certification/fcc93fc1e32-6f7f-4372-bde9-3418d0217080/scientific-computing-with-python-v7'
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/5242c73e5e8e'
    },
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/58101a335d6d'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Achievements
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm flex justify-between items-start group hover:shadow-md transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex-1 relative z-10">
                <div className="mb-4 p-3 inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 sea:bg-[#78350f]">
                  <Award size={24} className="sea:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline transition-colors inline-block"
                >
                  View Certificate →
                </a>
              </div>

              <div
                className={`absolute right-[-10%] bottom-[-5%] w-48 h-auto transition-all duration-500 transform group-hover:scale-110 pointer-events-none
                  ${isSea
                    ? 'opacity-30 group-hover:opacity-60'
                    : isDark ? 'opacity-20 grayscale brightness-110 group-hover:opacity-40' : 'opacity-10 grayscale group-hover:opacity-20'}`}
              >
                <img
                  src="/certificate.svg"
                  alt="Certificate Illustration"
                  className="w-full h-full"
                  style={{ aspectRatio: '466/757' }}
                />
              </div>

              {/* Subtle background decoration for Sea theme */}
              <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-neutral-100 dark:bg-neutral-800 sea:bg-[#78350f]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;