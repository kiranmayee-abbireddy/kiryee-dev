import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Layout, Terminal, GitBranch, Monitor } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'Languages',
      icon: <Code size={24} />,
      description: 'Python, JavaScript, HTML5, CSS3, YAML, Java'
    },
    {
      name: 'Frameworks & Tools',
      icon: <Terminal size={24} />,
      description: 'Django, Chart.js, Highcharts, WebSockets, Docker, Git, SQLite'
    },
    {
      name: 'Frontend',
      icon: <Layout size={24} />,
      description: 'Responsive Design, UI/UX, CSS Animations, DOM Manipulation'
    },
    {
      name: 'Backend',
      icon: <Database size={24} />,
      description: 'RESTful APIs, Django Management Commands, Config Automation'
    },
    {
      name: 'Version Control',
      icon: <GitBranch size={24} />,
      description: 'Git, GitHub, Collaborative Development'
    },
    {
      name: 'Development Tools',
      icon: <Monitor size={24} />,
      description: 'VS Code, Live Server, PyWebView'
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p 
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kiranmayee Abbireddy
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a creative developer passionate about building meaningful digital experiences. I believe in code that empowers and delights users.
          </motion.p>
          <motion.blockquote 
            className="mt-6 text-lg italic text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            "I code because I believe in creating tools that empower people. As a woman in tech, I choose empathy-driven development, and I celebrate my identity through creativity."
          </motion.blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-neutral-100 dark:bg-neutral-800">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;