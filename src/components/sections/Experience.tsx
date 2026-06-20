import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle2, Milestone, Star } from 'lucide-react';

interface JobRole {
  role: string;
  duration: string;
  description: string[];
  achievements?: string[];
  badge?: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData: JobRole[] = [
    {
      role: 'Lead Software Developer',
      duration: 'Sep 2025 – Present',
      badge: 'Current Role',
      description: [
        'Directing development team activities, technical architecture choices, and managing release cycles.',
        'Driving sprint planning, task allocation, delivery tracking, and risk assessment.',
        'Mentoring junior developers and conducting comprehensive code reviews to maintain high quality.',
        'Maintaining hands-on involvement in development while managing feature ownership from requirements to deployment.'
      ],
      achievements: [
        'Drastically reduced production defects, significantly improving release stability and quality.',
        'Successfully balanced delivery timelines with team workload optimization.'
      ]
    },
    {
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      badge: 'Promoted',
      description: [
        'Developed robust backend REST APIs and front-end user interfaces using Django and React.',
        'Designed database schemas, performed performance optimizations, and managed SQL migrations.',
        'Resolved critical production bugs to ensure seamless service uptime.'
      ]
    },
    {
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      badge: 'Entry',
      description: [
        'Assisted in building enterprise applications, learning production workflows and agile cycles.',
        'Contributed to client-facing feature development and unit testing.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Title */}
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full mb-4"
          >
            <Milestone size={14} /> Career Growth
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Career Progression
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Promoted from <span className="font-bold text-neutral-900 dark:text-white">Intern → Developer → Lead Developer</span> within a short timeframe due to performance, reliability, and full-stack ownership at <strong>Protekk Web Technologies LLP</strong>.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-neutral-200 dark:border-neutral-800 pl-8 ml-4 md:ml-auto">
          {timelineData.map((job, idx) => (
            <motion.div
              key={idx}
              className="mb-12 last:mb-0 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center">
                <Briefcase size={12} className="text-neutral-900 dark:text-white" />
              </div>

              {/* Card Container */}
              <div className="bg-neutral-50 dark:bg-neutral-850 p-6 md:p-8 rounded-2xl border border-neutral-250/30 dark:border-neutral-750/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                      {job.role}
                      {job.badge && (
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full ${
                          job.badge === 'Current Role' 
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' 
                            : 'bg-neutral-200 text-neutral-800 dark:bg-neutral-850 dark:text-neutral-350'
                        }`}>
                          {job.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-450 mt-1 flex items-center gap-1.5">
                      <Calendar size={14} /> {job.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-550 mb-1">Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-sm text-neutral-700 dark:text-neutral-305 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 size={16} className="text-neutral-450 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {job.achievements && (
                    <div className="mt-6 pt-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-550 mb-3 flex items-center gap-1.5">
                        <Star size={12} /> Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((ach, i) => (
                          <li key={i} className="text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-start gap-2.5">
                            <span className="text-neutral-900 dark:text-white font-extrabold">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
