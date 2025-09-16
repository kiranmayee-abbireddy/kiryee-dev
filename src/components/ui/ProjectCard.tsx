import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((category, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <a 
          href={project.link} 
          className="inline-flex items-center text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;