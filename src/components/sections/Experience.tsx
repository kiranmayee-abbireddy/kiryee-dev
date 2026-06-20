import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Award, Code, Cpu, GraduationCap, Server } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface JobRole {
  role: string;
  duration: string;
  badge?: string;
  description: string[];
  achievements?: string[];
  icon: React.ReactNode;
  bgIcon: React.ReactNode;
}

const FloatingDecor: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05] sea:opacity-[0.07]">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${20 + i * 25}%`,
            left: `${15 + i * 30}%`,
          }}
          animate={{
            y: [0, -15, 15, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isSea = theme === 'sea';
  const isDark = theme === 'dark';

  const roles: JobRole[] = [
    {
      role: 'Lead Software Developer',
      duration: 'Sep 2025 – Present',
      badge: 'Current Role',
      icon: <Award size={24} />,
      bgIcon: <Cpu size={80} />,
      description: [
        'Directing full-stack engineering team, sprint planning, and release management.',
        'Making key technical architecture decisions and leading QA/code reviews.',
        'Mentoring developers while remaining hands-on in delivering business-critical features.'
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
      bgIcon: <Code size={80} />,
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
      bgIcon: <GraduationCap size={80} />,
      description: [
        'Assisted with production web application development and testing.',
        'Learned enterprise software workflows, Git collaboration, and agile cycles.'
      ]
    }
  ];

  // Theme-specific glow highlight colors
  const getGlowColor = () => {
    if (isSea) return 'bg-[#78350f]/10';
    if (isDark) return 'bg-white/5';
    return 'bg-neutral-900/5';
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-850">
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
            className="text-lg text-neutral-705 dark:text-neutral-300"
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
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:transform hover:-translate-y-1.5 transition-all group flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
            >
              {/* Floating Animated Graphics in the Background */}
              <FloatingDecor icon={job.bgIcon} />

              <div className="flex-1 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors duration-300">
                    {job.icon}
                  </div>
                  {job.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-105 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors duration-300">
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
                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 mt-auto relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 mb-3 flex items-center gap-1.5">
                    <Star size={12} /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((ach, idx) => (
                      <li key={idx} className="text-xs font-semibold text-neutral-800 dark:text-neutral-250 flex items-start gap-2 leading-relaxed">
                        <span className="text-neutral-900 dark:text-white font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Glowing Background Blob decoration adapting to active theme */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${getGlowColor()}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
