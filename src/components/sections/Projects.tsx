import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const categories = Array.from(new Set(projects.map((p) => p.type)));
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.type === selectedCategory)
    : projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Made with Purpose
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of tools and applications designed to enhance productivity and well-being.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              selectedCategory === null
                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            All ({projects.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {category} ({projects.filter((p) => p.type === category).length})
            </button>
          ))}
        </motion.div>

        {/* Constellation/Grid Projects */}
        <div className="relative w-full h-[600px]">
          {filteredProjects.map((project, i) => {
            // Position nodes differently for dark/light mode
            const darkPositions = [
              { top: "15%", left: "20%" },
              { top: "40%", left: "60%" },
              { top: "65%", left: "30%" },
              { top: "25%", left: "80%" },
              { top: "75%", left: "70%" },
            ];
            const lightPositions = [
              { top: "20%", left: "20%" },
              { top: "40%", left: "40%" },
              { top: "60%", left: "60%" },
              { top: "80%", left: "80%" },
              { top: "50%", left: "10%" },
            ];
            const pos =
              document.documentElement.classList.contains("dark")
                ? darkPositions[i % darkPositions.length]
                : lightPositions[i % lightPositions.length];

            return (
              <motion.div
                key={project.id}
                className="absolute group cursor-pointer"
                style={pos}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15 }}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Node */}
                <div
                  className={`w-6 h-6 rounded-full ${
                    document.documentElement.classList.contains("dark")
                      ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                      : "bg-black"
                  }`}
                ></div>

                {/* Tooltip on Hover */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-neutral-900 text-black dark:text-white text-sm p-3 rounded-xl shadow-lg w-56 z-10">
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                    {project.description}
                  </p>
                  <span className="text-xs font-medium">{project.type}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative Lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <line x1="20%" y1="20%" x2="60%" y2="40%" stroke="currentColor" strokeWidth="1" />
            <line x1="60%" y1="40%" x2="30%" y2="65%" stroke="currentColor" strokeWidth="1" />
            <line x1="80%" y1="25%" x2="70%" y2="75%" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Projects;
