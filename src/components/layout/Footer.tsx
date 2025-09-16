import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/kiranmayee-abbireddy", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kiranmayee-abbireddy/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:kiranmayee118@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold tracking-tighter mb-2">kiryee.dev</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Building the future of the web
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12 text-sm text-neutral-500 dark:text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © {currentYear} Kiryee. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;