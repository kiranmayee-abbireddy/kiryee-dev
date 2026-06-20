import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Award, ChevronRight, Zap, Target, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface JobRole {
  id: number;
  role: string;
  duration: string;
  phase: string;
  timeframe: string;
  icon: React.ReactNode;
  tagline: string;
  description: string[];
  achievements?: string[];
}

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#bae6fd] sea:bg-[#bae6fd] dark:bg-neutral-800 opacity-20 pointer-events-none">
    <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        animate={{
          d: [
            "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,213C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fill-[#0284c7]/20"
      />
    </svg>
  </div>
);

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<number>(0);

  const isSea = theme === 'sea';

  const roles: JobRole[] = [
    {
      id: 0,
      role: 'Lead Software Developer',
      duration: 'Sep 2025 – Present',
      phase: 'Phase 3: Leadership',
      timeframe: 'Month 11+',
      icon: <Award size={20} />,
      tagline: 'Leading team execution, systems architecture, and product delivery.',
      description: [
        'Directing full-stack engineering team activities, sprint planning, task allocation, and delivery tracking.',
        'Making critical technical architecture decisions, establishing best practices, and running code reviews.',
        'Mentoring junior developers and managing release cycles while remaining active in hands-on code development.'
      ],
      achievements: [
        'Significantly improved release quality, reducing production bugs by a high margin.',
        'Optimized feature prioritization and balanced team workload to meet critical business demands.'
      ]
    },
    {
      id: 1,
      role: 'Software Developer',
      duration: 'Jan 2025 – Sep 2025',
      phase: 'Phase 2: Full Stack Ownership',
      timeframe: 'Months 3 – 11',
      icon: <Zap size={20} />,
      tagline: 'Taking end-to-end ownership of backend API and frontend interfaces.',
      description: [
        'Built full-stack features using React, Django, PostgreSQL, and WebSockets.',
        'Designed database schemas, developed secure REST APIs, and integrated real-time components.',
        'Identified and resolved critical production bugs to maintain high system reliability.'
      ]
    },
    {
      id: 2,
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      phase: 'Phase 1: The Foundation',
      timeframe: 'Months 0 – 3',
      icon: <Briefcase size={20} />,
      tagline: 'Learning enterprise software workflows and contributing features.',
      description: [
        'Assisted with production web application development and feature design.',
        'Gained hands-on experience in collaborative Git workflows and agile processes.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-850">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Storytelling Header */}
        <div className="max-w-4xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Progression
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Intern to Lead Developer
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-305 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A visual roadmap of my rapid professional progression at <strong className="text-neutral-900 dark:text-white">Protekk Web Technologies LLP</strong>.
          </motion.p>
        </div>

        {/* Visual Ascent Roadmap Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Stepping-Stone Graph - Fills height cleanly */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {roles.slice().reverse().map((job) => {
              const isActive = activeTab === job.id;
              return (
                <motion.button
                  key={job.id}
                  onClick={() => setActiveTab(job.id)}
                  className={`flex-1 w-full flex items-center justify-between gap-4 p-6 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-transparent shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-250/80 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isActive ? 'bg-white/10 dark:bg-neutral-900/10' : 'bg-neutral-100 dark:bg-neutral-850'
                    }`}>
                      {job.icon}
                    </div>
                    <div className="min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isActive ? 'text-neutral-300 dark:text-neutral-500' : 'text-neutral-450 dark:text-neutral-500'
                      }`}>
                        {job.timeframe}
                      </span>
                      <h3 className="font-bold text-base truncate">
                        {job.role}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight size={16} className={`shrink-0 transition-transform ${isActive ? 'rotate-90 text-white dark:text-neutral-900' : 'text-neutral-400'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Story Card */}
          <div className="md:col-span-7 relative min-h-[420px] flex">
            <AnimatePresence mode="wait">
              {roles.map((job) => {
                if (job.id !== activeTab) return null;
                return (
                  <motion.div
                    key={job.id}
                    className="w-full bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col justify-between relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Background Waves (Optional/Theme based) */}
                    {isSea && <WaveBackground />}

                    <div className="relative z-10">
                      {/* Top bar info */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-5">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-450 dark:text-neutral-550 block">
                            {job.phase}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                            {job.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-neutral-500 dark:text-neutral-450">
                          <Calendar size={14} /> {job.duration}
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-neutral-750 dark:text-neutral-200 mb-5 flex items-start gap-2 leading-relaxed">
                        <Target size={16} className="text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                        <span>{job.tagline}</span>
                      </p>

                      {/* Main bullet items */}
                      <ul className="space-y-3 mb-6">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2.5 leading-relaxed">
                            <ArrowRight size={14} className="text-neutral-400 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestone Highlights */}
                    {job.achievements && (
                      <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 relative z-10">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-500 mb-3 flex items-center gap-1">
                          <Star size={12} /> Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((ach, idx) => (
                            <li key={idx} className="text-xs font-semibold text-neutral-800 dark:text-neutral-250 flex items-start gap-2.5">
                              <span className="text-neutral-900 dark:text-white">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
