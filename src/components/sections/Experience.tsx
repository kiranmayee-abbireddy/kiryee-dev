import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, ChevronRight } from 'lucide-react';

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
        'Directing full-stack engineering team, sprint planning, and task allocation.',
        'Making core architecture decisions, managing release cycles, and leading code reviews.',
        'Mentoring developers while maintaining hands-on contribution to business-critical features.'
      ],
      achievements: [
        'Helped improve release quality by reducing production issues significantly.',
        'Balanced team workload and project delivery efficiently.'
      ]
    },
    {
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      badge: 'Promoted',
      description: [
        'Full-stack feature development using React, Django, PostgreSQL, and WebSockets.',
        'Designed database schemas, implemented secure APIs, and resolved complex production bugs.',
        'Optimized system performance to scale user interactions.'
      ]
    },
    {
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      description: [
        'Assisted with production web application development and feature design.',
        'Learned enterprise software workflows and agile methodologies.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Path
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-450 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rapid progression at <strong className="text-neutral-900 dark:text-white">Protekk Web Technologies LLP</strong>, promoted from Intern to Software Developer to Lead Developer due to full-stack ownership and execution.
          </motion.p>
        </div>

        {/* Timeline Layout using Standard Theme Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {roles.map((job, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{job.role}</h3>
                    {job.badge && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-neutral-550 dark:text-neutral-450">
                    Protekk Web Technologies LLP
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  <Calendar size={16} />
                  <span>{job.duration}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-4">
                <ul className="space-y-3">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-350 flex items-start gap-2 leading-relaxed">
                      <ChevronRight size={16} className="text-neutral-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Achievements if any */}
                {job.achievements && (
                  <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
                      <Star size={12} className="text-neutral-500" /> Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((ach, idx) => (
                        <li key={idx} className="text-sm text-neutral-800 dark:text-neutral-250 flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400 mt-2 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
