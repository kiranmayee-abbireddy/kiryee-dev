import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
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
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
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
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                    : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
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
              <div className="relative w-full h-[200px] bg-neutral-100 dark:bg-neutral-800">
                <motion.div
                  className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="font-extrabold text-neutral-900 dark:text-white text-center px-6 
                              leading-tight tracking-tight 
                              text-[clamp(1.8rem,4vw,3.2rem)] 
                              whitespace-pre-line"
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