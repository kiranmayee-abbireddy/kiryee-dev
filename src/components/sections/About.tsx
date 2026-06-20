import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, Layout, Terminal, GitBranch, Cpu, 
  Layers, Hammer, GraduationCap, Laptop, ShieldCheck, HeartHandshake
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const skillCategories = [
    {
      name: 'Languages',
      icon: <Code size={20} />,
      items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Go']
    },
    {
      name: 'Backend & APIs',
      icon: <Terminal size={20} />,
      items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'JWT Auth']
    },
    {
      name: 'Frontend',
      icon: <Layout size={20} />,
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js']
    },
    {
      name: 'Mobile & Desktop',
      icon: <Laptop size={20} />,
      items: ['Flutter', 'PyWebView', 'Electron.js']
    },
    {
      name: 'Databases & Storage',
      icon: <Database size={20} />,
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Supabase']
    },
    {
      name: 'Real-Time & Interactive',
      icon: <Layers size={20} />,
      items: ['WebSockets', 'HLS Streaming', 'Three.js', 'WebGL']
    },
    {
      name: 'AI & Data',
      icon: <Cpu size={20} />,
      items: ['AI Agent Workflows', 'LLM Orchestration', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy']
    },
    {
      name: 'DevOps & Cloud',
      icon: <GitBranch size={20} />,
      items: ['Docker', 'Nginx', 'Git/GitHub', 'CI/CD', 'Vercel', 'Netlify', 'Render']
    },
    {
      name: 'Tools & Utilities',
      icon: <Hammer size={20} />,
      items: ['Postman', 'Figma', 'Framer', 'FFmpeg']
    }
  ];

  const domainExperiences = [
    {
      title: 'EdTech (Educational Technology)',
      points: [
        'Developed comprehensive Teacher Portals & Student Platforms',
        'Implemented core Learning Management Features',
        'Built content delivery systems and user engagement tracking analytics'
      ]
    },
    {
      title: 'Device Management & Analytics',
      points: [
        'Built device usage tracking & performance metric collection pipelines',
        'Created analytics dashboards & user behavior reporting systems'
      ]
    },
    {
      title: 'SaaS Platforms',
      points: [
        'Designed subscription-based user dashboards and workflow systems',
        'Automated business workflows & integrated complex SaaS metrics'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-850">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Intro */}
        <div className="max-w-4xl mx-auto md:text-center mb-20">
          <motion.p 
            className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kiranmayee Abbireddy
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-neutral-750 dark:text-neutral-350 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lead Software Developer with a strong track record of delivering business-critical features,
            mentoring engineers, and architecting production-scale applications across web, mobile, analytics, and SaaS.
          </motion.p>
          <motion.blockquote 
            className="mt-8 text-lg italic text-neutral-600 dark:text-neutral-400 border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 py-2 text-left max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            "I build production-scale systems with an empathy-driven approach, combining rapid feature execution with robust architecture. I choose ownership, accountability, and continuous learning."
          </motion.blockquote>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-neutral-850 dark:text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-750 dark:text-neutral-300">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-lg text-neutral-900 dark:text-white">{cat.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-750 dark:text-neutral-300 rounded-lg border border-neutral-250/30 dark:border-neutral-750/30 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Domain & Leadership Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Domain Experience */}
          <motion.div
            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-neutral-600 dark:text-neutral-400" size={28} />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Domain Experience</h3>
            </div>
            <div className="space-y-6">
              {domainExperiences.map((domain, i) => (
                <div key={i} className="border-b border-neutral-100 dark:border-neutral-800 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-lg mb-2 text-neutral-800 dark:text-white">{domain.title}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-650 dark:text-neutral-400">
                    {domain.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Strengths */}
          <motion.div
            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="text-neutral-600 dark:text-neutral-400" size={28} />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Leadership & Strengths</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-neutral-650 dark:text-neutral-400 leading-relaxed">
                  Proven ability to direct sprint planning, execute technical architecture design, mentor developers, run code reviews, and drive features from requirements to deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Technical Leadership', 'Sprint Ownership', 'Mentorship', 
                    'Cross-functional Collaboration', 'Stakeholder Communication', 
                    'High Accountability', 'Rapid Execution'
                  ].map((strength) => (
                    <span 
                      key={strength} 
                      className="px-3 py-1.5 text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block font-bold text-neutral-900 dark:text-white">Education</span>
                <span className="text-xs text-neutral-555 dark:text-neutral-400">B.E. (Computer Science), CGPA: 8.2 (2023)</span>
              </div>
              <div>
                <span className="block font-bold text-neutral-900 dark:text-white">Languages</span>
                <span className="text-xs text-neutral-555 dark:text-neutral-400">English (Prof.), Telugu (Native), Tamil (Conversational)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;