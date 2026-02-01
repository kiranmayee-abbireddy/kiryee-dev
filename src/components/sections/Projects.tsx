import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#bae6fd] sea:bg-[#bae6fd] dark:bg-neutral-800">
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
        className="fill-[#0284c7]/30"
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
        className="fill-[#14b8a6]/40"
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
        className="fill-[#0d9488]/50"
      />
    </svg>
  </div>
);

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Drift Notes',
      type: 'Tool',
      description: 'Catch the thought before it floats away.',
      link: 'https://driftnotes.netlify.app/'
    },
    {
      id: 15,
      title: 'BugJournal',
      type: 'Tracker',
      description: 'A searchable, taggable record of bugs you\'ve solved, with fix notes and lessons.',
      link: 'https://bugjournal.netlify.app/'
    },
    {
      id: 20,
      title: 'Skill Tree',
      type: 'Tool',
      description: 'A visual skill mapping tool to track and grow your personal or professional abilities.',
      link: 'https://skilltreebykiryee.netlify.app/'
    },
    {
      id: 21,
      title: 'SnipKit',
      type: 'Tracker',
      description: 'An offline-first, searchable code snippet manager with tagging and export/import.',
      link: 'https://snipkit.netlify.app/'
    },
    {
      id: 22,
      title: 'ChangeMap',
      type: 'Tracker',
      description: 'A local timeline of what you changed in a project and why, with support for notes and images.',
      link: 'https://change-map.netlify.app/'
    },
    {
      id: 3,
      title: 'Time Box Me',
      type: 'Tracker',
      description: 'A journaling tool to type thoughts and receive prompts to rethink and store by date.',
      link: 'https://kiranmayee-abbireddy.github.io/think-box-me/'
    },
    {
      id: 4,
      title: 'ColorSnap.dev',
      type: 'Tool',
      description: 'Paste or upload a screenshot, get a palette, preview how it looks in dark/light mode, generate Tailwind classes.',
      link: 'https://colorsnapdev.netlify.app/'
    },
    {
      id: 8,
      title: 'Docker Sketch',
      type: 'Tool',
      description: ' Visual drag-and-drop canvas to design Docker Compose layouts, then export to docker-compose.yml.',
      link: 'https://dockersketch.netlify.app/'
    },
    {
      id: 5,
      title: 'Tiny Streaks',
      type: 'Tracker',
      description: 'A micro-habit daily streak tracker to boost consistency.',
      link: 'https://kiranmayee-abbireddy.github.io/tiny-streaks/'
    },
    {
      id: 6,
      title: 'Human Note',
      type: 'Creative',
      description: 'Record daily notes tagged by emotions for self-awareness.',
      link: 'https://kiranmayee-abbireddy.github.io/human-note/'
    },
    {
      id: 7,
      title: 'Letter Loop',
      type: 'Creative',
      description: 'A private message queue — each day, write one small note to someone you care about.',
      link: 'https://letterloopbykiryee.netlify.app/'
    },
    {
      id: 14,
      title: 'Form Forge',
      type: 'Tool',
      description: 'Drag-and-drop form builder that outputs clean, accessible HTML with keyboard/tab order previews.',
      link: 'https://formforgebykiryee.netlify.app/'
    },
    {
      id: 18,
      title: 'Daily Dare',
      type: 'Tracker',
      description: 'A tiny, fun, daily self-challenge tool to get you out of your comfort zone.',
      link: 'https://daily-dare.netlify.app/'
    },
    {
      id: 2,
      title: 'Nope Pad',
      type: 'Tool',
      description: 'Boundary-setting say no tracker',
      link: 'https://nopepad.netlify.app/'
    },
    {
      id: 13,
      title: 'My Digital Art Gallery',
      type: 'Creative',
      description: 'A personal digital gallery for showcasing vector and line art.',
      link: 'https://kiranmayee-abbireddy.github.io/My-digital-art-gallery/'
    }
  ];

  const categories = Array.from(new Set(projects.map(project => project.type)));

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.type === selectedCategory)
    : projects;

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Made with Purpose
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of tools and applications designed to enhance productivity and well-being.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedCategory === null
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 filter-button-active'
              : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 filter-button-inactive'
              }`}
            onClick={() => setSelectedCategory(null)}
          >
            All ({projects.length})
          </button>
          {categories.map((category) => {
            const count = projects.filter(p => p.type === category).length;
            return (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedCategory === category
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 filter-button-active'
                  : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 filter-button-inactive'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} ({count})
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + (index % 6) * 0.1 }}
            >
              <div className="relative w-full h-[200px] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                {theme === 'sea' ? (
                  <WaveBackground />
                ) : (
                  <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800" />
                )}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className={`font-extrabold text-center leading-tight tracking-tight text-[clamp(1.5rem,3vw,2.5rem)] whitespace-pre-line 
                             ${theme === 'sea' ? 'text-white drop-shadow-md' : 'text-neutral-900 dark:text-white'}`}
                  >
                    {project.title}
                  </h3>
                </motion.div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                  View Project
                  <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 dark:text-neutral-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;