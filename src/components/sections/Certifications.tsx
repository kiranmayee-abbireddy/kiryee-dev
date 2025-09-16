import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-neutral-100 dark:bg-neutral-800">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;