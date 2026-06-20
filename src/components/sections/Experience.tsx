import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Milestone } from 'lucide-react';

interface JobRole {
  role: string;
  duration: string;
  badge?: string;
  description: string[];
  achievements?: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles: JobRole[] = [
    {
      role: 'Lead Software Developer',
      duration: 'Sep 2025 – Present',
      badge: 'Current Role',
      description: [
        'Directing full-stack development team, sprint planning, task allocation, and risk assessment.',
        'Driving core technical architecture decisions, managing release cycles, and overseeing code reviews.',
        'Mentoring developers while remaining hands-on in delivering business-critical features.'
      ],
      achievements: [
        'Helped improve release quality by reducing production issues significantly.',
        'Balanced team workload and project delivery.'
      ]
    },
    {
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      badge: 'Promoted',
      description: [
        'Full-stack feature development using React, Django, PostgreSQL, and WebSockets.',
        'Designed database schemas, implemented secure APIs, and fixed production issues.'
      ]
    },
    {
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      description: [
        'Assisted with production web application development.',
        'Learned enterprise software workflows and contributed to testing.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full mb-4"
          >
            <Milestone size={14} /> Career Growth
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Career Progression
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Promoted from <strong className="text-neutral-900 dark:text-white">Intern → Developer → Lead Developer</strong> within a short timeframe due to performance and ownership.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated vertical timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-neutral-200 dark:bg-neutral-800 transform -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {roles.map((job, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="mb-12 relative flex flex-col md:flex-row items-start md:items-center">
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-neutral-900 shadow-md"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  />
                  {index === 0 && (
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-neutral-900/20 dark:bg-white/20 -z-10"
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Timeline Card */}
                <motion.div 
                  className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all">
                    {/* Badge & Dates */}
                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {job.badge && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                          {job.badge}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-neutral-550 dark:text-neutral-450 flex items-center gap-1.5">
                        <Calendar size={12} /> {job.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{job.role}</h3>
                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-4">
                      Protekk Web Technologies LLP
                    </p>

                    {/* Roles / Details */}
                    <ul className={`space-y-2 text-sm text-neutral-750 dark:text-neutral-300 text-left ${isEven ? 'md:text-right' : 'text-left'}`}>
                      {job.description.map((item, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    {job.achievements && (
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 text-left">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 flex items-center gap-1.5">
                          <Star size={12} /> Achievements
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((ach, idx) => (
                            <li key={idx} className="text-sm font-medium text-neutral-800 dark:text-neutral-250 flex items-start gap-2.5">
                              <span className="text-neutral-900 dark:text-white">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
