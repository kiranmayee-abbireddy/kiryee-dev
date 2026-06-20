import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Milestone, ArrowRight } from 'lucide-react';

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
        'Directing full-stack development team activities, sprint planning, task allocation, and release management.',
        'Making core technical architecture decisions, reviewing code for quality assurance, and mentoring junior engineers.',
        'Leading feature development from initial requirements gathering to final deployment while remaining hands-on.'
      ],
      achievements: [
        'Significantly improved release quality and reduced production bugs.',
        'Managed feature prioritization and balanced team workload to ensure on-time delivery.'
      ]
    },
    {
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      badge: 'Promoted',
      description: [
        'Full-stack feature development using React.js, Django, PostgreSQL, and WebSockets.',
        'Designed database schemas, implemented secure REST APIs, and optimized system performance.',
        'Identified and resolved critical production bugs to improve application uptime.'
      ]
    },
    {
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      description: [
        'Assisted with production application development and testing.',
        'Gained hands-on experience with enterprise agile workflows and version control.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-850 dark:text-neutral-200 rounded-full mb-4"
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
            Promoted from <span className="font-bold text-neutral-900 dark:text-white">Intern → Developer → Lead Developer</span> within a short timeframe due to performance and ownership.
          </motion.p>
        </div>

        {/* Clean Left-Aligned Timeline for Clean Reading */}
        <div className="max-w-3xl mx-auto relative pl-8 md:pl-12">
          {/* Timeline Vertical Line */}
          <motion.div
            className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-[2px] bg-neutral-200 dark:bg-neutral-800 origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />

          {roles.map((job, index) => (
            <motion.div
              key={index}
              className="mb-12 last:mb-0 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[-32px] md:left-[-41px] top-1.5 z-10 flex items-center justify-center">
                <motion.div
                  className="w-5 h-5 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center shadow-sm"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
                >
                  <Briefcase size={10} className="text-neutral-900 dark:text-white" />
                </motion.div>
                {index === 0 && (
                  <span className="absolute w-5 h-5 rounded-full bg-neutral-900/10 dark:bg-white/10 animate-ping -z-10" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                      {job.role}
                      {job.badge && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900">
                          {job.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-450 mt-0.5">
                      Protekk Web Technologies LLP
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-450 font-medium">
                    <Calendar size={14} />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="space-y-2.5 mb-6">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-350 flex items-start gap-2.5 leading-relaxed">
                      <ArrowRight size={14} className="text-neutral-400 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Achievements highlight */}
                {job.achievements && (
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
                      <Star size={12} /> Key Milestones
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((ach, idx) => (
                        <li key={idx} className="text-sm font-medium text-neutral-800 dark:text-neutral-250 flex items-start gap-2">
                          <span className="text-neutral-900 dark:text-white font-bold">•</span>
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
