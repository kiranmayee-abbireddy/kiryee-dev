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

const WaveBackground: React.FC<{ isSea: boolean; isDark: boolean }> = ({ isSea, isDark }) => {
  const fill1 = isSea ? 'fill-[#0284c7]/30' : isDark ? 'fill-white/[0.12]' : 'fill-black/[0.12]';
  const fill2 = isSea ? 'fill-[#14b8a6]/40' : isDark ? 'fill-white/[0.08]' : 'fill-black/[0.08]';
  const fill3 = isSea ? 'fill-[#0d9488]/50' : isDark ? 'fill-white/[0.04]' : 'fill-black/[0.04]';

  return (
    <div className={`absolute inset-0 overflow-hidden ${
      isSea ? 'bg-[#bae6fd]' : 'bg-transparent'
    }`}>
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
          className={fill1}
        />
        <motion.path
          animate={{
            d: [
              "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={fill2}
        />
        <motion.path
          animate={{
            d: [
              "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,240C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,181.3C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,240C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={fill3}
        />
      </svg>
    </div>
  );
};

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [expandedId, setExpandedId] = useState<number | null>(0);

  const isSea = theme === 'sea';
  const isDark = theme === 'dark';

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
        'Optimized feature prioritization and balanced team workload to meet critical demands.'
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
      icon: <Briefcase size={20} />,
      tagline: 'Learning enterprise software workflows and contributing features.',
      description: [
        'Assisted with production web application development and feature design.',
        'Gained hands-on experience in collaborative Git workflows and agile processes.'
      ]
    }
  ];

  const handleCardToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getHeadingColor = (isExpanded: boolean) => {
    if (isExpanded) {
      if (isSea) return 'text-[#78350f]';
      if (isDark) return 'text-white';
      return 'text-neutral-900';
    }
    return 'text-neutral-900 dark:text-white';
  };

  const getSubHeadingColor = (isExpanded: boolean) => {
    if (isExpanded) {
      if (isSea) return 'text-[#451a03]/80';
      if (isDark) return 'text-neutral-400';
      return 'text-neutral-500';
    }
    return 'text-neutral-500 dark:text-neutral-400';
  };

  const getBodyTextColor = () => {
    if (isSea) return 'text-[#451a03]';
    if (isDark) return 'text-neutral-300';
    return 'text-neutral-700';
  };

  // Custom styling for the icon container to bypass global .p-3.rounded-full overrides in Sea theme
  const getIconWrapperClass = (isExpanded: boolean) => {
    const base = "p-[11px] rounded-full shrink-0 transition-colors duration-300 flex items-center justify-center";
    if (isExpanded) {
      if (isSea) return `${base} bg-[#78350f] text-white`;
      if (isDark) return `${base} bg-white text-neutral-900`;
      return `${base} bg-neutral-900 text-white`;
    } else {
      if (isSea) return `${base} bg-[#fdfcf0] text-[#78350f] border border-[#e7d8c0]`;
      if (isDark) return `${base} bg-neutral-800 text-white`;
      return `${base} bg-neutral-100 text-neutral-900`;
    }
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900">
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
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An interactive breakdown of my rapid progression at <strong className="text-neutral-900 dark:text-white">Protekk Web Technologies LLP</strong>. Click each phase to expand its details.
          </motion.p>
        </div>

        {/* Expanding Accordion Cards Stack for Mobile & Desktop */}
        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <motion.div
                layout
                key={job.id}
                className={`rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col ${
                  isExpanded
                    ? 'bg-neutral-50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 shadow-md'
                    : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-sm'
                }`}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Wave Decoration active in expanded state across all themes */}
                {isExpanded && <WaveBackground isSea={isSea} isDark={isDark} />}

                {/* Accordion Toggle Header */}
                <button
                  onClick={() => handleCardToggle(job.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left relative z-10"
                >
                  <div className="flex items-center gap-4 md:gap-6 min-w-0">
                    {/* Circle icon with theme consistency */}
                    <div className={getIconWrapperClass(isExpanded)}>
                      {job.icon}
                    </div>

                    <div className="min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block transition-colors duration-300 ${getSubHeadingColor(isExpanded)}`}>
                        {job.timeframe} • {job.phase}
                      </span>
                      <h3 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${getHeadingColor(isExpanded)}`}>
                        {job.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className={`hidden md:inline-block text-xs font-semibold transition-colors duration-300 ${getSubHeadingColor(isExpanded)}`}>
                      {job.duration}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className={`transition-all duration-300 ${
                        isExpanded ? 'rotate-95' : ''
                      } ${isExpanded && isSea ? 'text-[#78350f]' : 'text-neutral-400'}`} 
                    />
                  </div>
                </button>

                {/* Collapsible Details Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden relative z-10 border-t border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      <div className="p-6 md:p-8 bg-transparent">
                        {/* Mobile display duration */}
                        <div className={`md:hidden flex items-center gap-1.5 text-xs font-semibold mb-4 ${getSubHeadingColor(isExpanded)}`}>
                          <Calendar size={12} /> {job.duration}
                        </div>

                        {/* Tagline */}
                        <p className={`text-sm md:text-base font-semibold mb-5 flex items-start gap-2.5 leading-relaxed ${getHeadingColor(isExpanded)}`}>
                          <Target size={16} className={`shrink-0 mt-1 ${isSea ? 'text-[#78350f]' : 'text-neutral-900 dark:text-white'}`} />
                          <span>{job.tagline}</span>
                        </p>

                        {/* Description lists */}
                        <ul className="space-y-3 mb-6">
                          {job.description.map((item, idx) => (
                            <li key={idx} className={`text-sm flex items-start gap-2.5 leading-relaxed ${getBodyTextColor()}`}>
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                isSea ? 'bg-[#78350f]/60' : 'bg-neutral-400 dark:bg-neutral-500'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Achievements */}
                        {job.achievements && (
                          <div className={`pt-5 border-t ${
                            isSea ? 'border-[#78350f]/20' : 'border-neutral-200/50 dark:border-neutral-700/50'
                          }`}>
                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${getSubHeadingColor(isExpanded)}`}>
                              <Star size={12} /> Key Accomplishments
                            </h4>
                            <ul className="space-y-2">
                              {job.achievements.map((ach, idx) => (
                                <li key={idx} className={`text-xs md:text-sm font-semibold flex items-start gap-2 leading-relaxed ${getBodyTextColor()}`}>
                                  <span className={`font-bold ${isSea ? 'text-[#78350f]' : 'text-neutral-900 dark:text-white'}`}>•</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
