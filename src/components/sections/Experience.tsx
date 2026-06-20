import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Award } from 'lucide-react';

interface JobRole {
  role: string;
  duration: string;
  badge?: string;
  description: string[];
  achievements?: string[];
  icon: React.ReactNode;
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
      icon: <Award size={24} />,
      description: [
        'Directing full-stack engineering team, sprint planning, and release management.',
        'Making key technical architecture decisions and leading QA/code reviews.',
        'Mentoring junior developers and ensuring robust feature delivery.'
      ],
      achievements: [
        'Reduced production issues significantly, improving release quality.',
        'Successfully managed delivery tracking and task distributions.'
      ]
    },
    {
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      badge: 'Promoted',
      icon: <Briefcase size={24} />,
      description: [
        'Full-stack development using React.js, Django, PostgreSQL, and WebSockets.',
        'Designed database schemas, implemented secure APIs, and optimized performance.',
        'Resolved critical production bugs to maintain high platform uptime.'
      ]
    },
    {
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      icon: <Briefcase size={24} />,
      description: [
        'Assisted with production web application development and testing.',
        'Learned enterprise software workflows, Git collaboration, and agile cycles.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Progression
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rapid promotion from Intern to Software Developer to Lead Developer within a short timeframe due to performance and ownership at <strong>Protekk Web Technologies LLP</strong>.
          </motion.p>
        </div>

        {/* 3-Column Card Grid matching other portfolio sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:transform hover:-translate-y-1 transition-all group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                    {job.icon}
                  </div>
                  {job.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                      {job.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">{job.role}</h3>
                <p className="text-xs font-bold text-neutral-500 dark:text-neutral-450 uppercase tracking-wider mb-4">
                  Protekk Web Technologies LLP
                </p>

                <div className="flex items-center gap-1.5 text-xs text-neutral-550 dark:text-neutral-450 mb-6">
                  <Calendar size={14} />
                  <span>{job.duration}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.achievements && (
                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
                    <Star size={12} /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((ach, idx) => (
                      <li key={idx} className="text-xs font-semibold text-neutral-805 dark:text-neutral-250 flex items-start gap-2 leading-relaxed">
                        <span className="text-neutral-900 dark:text-white font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
