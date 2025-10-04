import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

interface DesktopApp {
  id: number;
  title: string;
  description: string;
  link: string;
  platform: 'Windows' | 'Mac' | 'Linux' | 'Cross-platform';
  size?: string;
}

const DesktopApps: React.FC = () => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const apps: DesktopApp[] = [
    {
      id: 1,
      title: 'Clip Box',
      description: 'Never lose what you copy! Save, organize, and quickly access text, links, code, and more with customizable categories, themes, and secure storage.',
      link: '/ClipBox.exe',
      platform: 'Windows',
      size: '53 MB'
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Windows':
        return <Monitor size={16} />;
      case 'Mac':
        return <Smartphone size={16} />;
      case 'Linux':
        return <Monitor size={16} />;
      default:
        return <Monitor size={16} />;
    }
  };

  return (
    <section id="apps" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p 
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Desktop Applications
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Desktop Apps
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful desktop applications designed to enhance your productivity and workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:transform hover:-translate-y-1 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <Monitor size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center gap-1">
                      {getPlatformIcon(app.platform)}
                      {app.platform}
                    </span>
                    {app.size && (
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {app.size}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>
              </div>
              
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all group-hover:scale-105"
              >
                <ExternalLink size={18} />
                Try App
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopApps;