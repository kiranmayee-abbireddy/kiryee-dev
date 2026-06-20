import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Star, Award, TrendingUp, ChevronRight, Zap, Target } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface JobRole {
  id: number;
  role: string;
  duration: string;
  phase: string;
  timeframe: string;
  themeColor: string;
  icon: React.ReactNode;
  tagline: string;
  description: string[];
  achievements?: string[];
}

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<number>(0);

  const isSea = theme === 'sea';
  const isDark = theme === 'dark';

  const roles: JobRole[] = [
    {
      id: 0,
      role: 'Lead Software Developer',
      duration: 'Sep 2025 – Present',
      phase: 'Phase 3: Leadership',
      timeframe: 'Month 11+',
      themeColor: 'from-[#7c3aed] to-[#db2777]', // Indigo-pink
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
      themeColor: 'from-[#2563eb] to-[#0d9488]', // Blue-teal
      icon: <Zap size={20} />,
      tagline: 'Taking end-to-end ownership of backend API and frontend interfaces.',
      description: [
        'Built full-stack features using React, Django, PostgreSQL, and WebSockets.',
        'Designed scalable database schemas, developed secure REST APIs, and integrated real-time components.',
        'Identified and resolved critical production bugs to maintain high system reliability.'
      ]
    },
    {
      id: 2,
      role: 'Software Development Intern',
      duration: 'Oct 2024 – Jan 2025',
      phase: 'Phase 1: The Foundation',
      timeframe: 'Months 0 – 3',
      themeColor: 'from-[#4b5563] to-[#1f2937]', // Gray scale
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
        <div className="max-w-4xl mx-auto md:text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full mb-6"
          >
            <TrendingUp size={14} className="animate-pulse" /> The 11-Month Promotion Path
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Intern to Lead Developer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A visual roadmap of my rapid professional progression at <strong className="text-neutral-900 dark:text-white">Protekk Web Technologies LLP</strong>, driven by extreme ownership, execution reliability, and tech leadership.
          </motion.p>
        </div>

        {/* Visual Ascent Roadmap Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Stepping-Stone Graph */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 relative">
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-neutral-200 dark:bg-neutral-800 pointer-events-none -z-10" />

            {roles.slice().reverse().map((job) => {
              const isActive = activeTab === job.id;
              return (
                <motion.button
                  key={job.id}
                  onClick={() => setActiveTab(job.id)}
                  className={`w-full flex items-center gap-6 p-5 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-neutral-50 dark:bg-neutral-800 border-neutral-400 dark:border-neutral-600 shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 opacity-70 hover:opacity-100 hover:translate-x-1'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.1 * (2 - job.id) }}
                >
                  {/* Step Milestone Bubble */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-md bg-gradient-to-br ${job.themeColor} shrink-0`}>
                    {job.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-450 dark:text-neutral-500">
                      {job.timeframe} • {job.phase}
                    </span>
                    <h3 className="font-extrabold text-lg text-neutral-900 dark:text-white truncate">
                      {job.role}
                    </h3>
                  </div>

                  <ChevronRight size={18} className={`text-neutral-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Story Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {roles.map((job) => {
                if (job.id !== activeTab) return null;
                return (
                  <motion.div
                    key={job.id}
                    className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-sm min-h-[460px] flex flex-col justify-between relative overflow-hidden"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      {/* Top bar info */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/60 dark:border-neutral-700/60 pb-6 mb-6">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-neutral-500 dark:text-neutral-450">
                            {job.phase}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
                            {job.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-850 text-xs font-bold text-neutral-700 dark:text-neutral-350 shadow-sm">
                          <Calendar size={14} /> {job.duration}
                        </div>
                      </div>

                      {/* Role Tagline */}
                      <p className="text-md font-bold text-neutral-750 dark:text-neutral-200 mb-6 flex items-start gap-2.5">
                        <Target size={20} className="text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                        <span>{job.tagline}</span>
                      </p>

                      {/* Main bullet items */}
                      <ul className="space-y-4">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-neutral-650 dark:text-neutral-300 flex items-start gap-3 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 shrink-0 animate-pulse" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestone Highlights */}
                    {job.achievements && (
                      <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-700/60">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-450 dark:text-neutral-550 mb-4 flex items-center gap-1.5">
                          <Star size={12} className="animate-spin-slow" /> Strategic Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {job.achievements.map((ach, idx) => (
                            <div key={idx} className="p-3 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-850 flex items-start gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-250 shadow-xs">
                              <span className="text-neutral-900 dark:text-white font-extrabold">•</span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Ambient Glow for Sea / Dark theme styles */}
                    <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${job.themeColor} opacity-[0.04] dark:opacity-[0.08] rounded-full blur-3xl pointer-events-none`} />
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
