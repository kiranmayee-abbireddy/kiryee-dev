import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Monitor, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface DesktopApp {
  id: number;
  title: string;
  description: string;
  link: string;
  downloadUrl?: string;
  platform: 'Windows' | 'Mac' | 'Linux' | 'Cross-platform' | 'Android';
  size?: string;
}

const DesktopApps: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });

  const apps: DesktopApp[] = [
    {
      id: 1,
      title: 'Rewind',
      description: 'Every bug has a past. Capture it before it disappears. Rewind continuously records a rolling GPU buffer in DirectX 11 with zero background bloat, on-device shader redaction, and instant Jira/Markdown reproduction dossiers.',
      link: 'https://rewinded.netlify.app/',
      downloadUrl: 'https://rewinded.netlify.app/downloads/Rewind-Setup-1.0.0.exe',
      platform: 'Windows',
      size: 'DirectX 11'
    },
    {
      id: 2,
      title: 'Again',
      description: 'Deterministic desktop workspace restorer for Windows. Captures and restores multi-monitor window bounds, processes, and browser tabs with under 600ms latency and no duplicate instances.',
      link: 'https://downloadagain.netlify.app/',
      downloadUrl: 'https://github.com/kiranmayee-abbireddy/Again/releases/download/v1.0.0/Again-Setup-v1.0.0.exe',
      platform: 'Windows',
      size: '4.2 MB'
    },
    {
      id: 3,
      title: 'Mimo',
      description: 'A warm, quiet, 100% local desktop companion that lives on your Windows taskbar. Watches your cursor with natural gaze, takes whisper voice notes, manages screenshots, and keeps you peaceful company.',
      link: 'https://downloadmimo.netlify.app/',
      downloadUrl: 'https://downloadmimo.netlify.app/downloads/Mimo-Setup-1.0.0.exe',
      platform: 'Windows',
      size: '59 MB'
    },
    {
      id: 4,
      title: 'Clip Box',
      description: 'Never lose what you copy! Save, organize, and quickly access text, links, code, and more with customizable categories, themes, and secure storage.',
      link: '/ClipBox.exe',
      platform: 'Windows',
      size: '53 MB'
    },
    {
      id: 5,
      title: 'Key Beatz',
      description: 'Make typing fun and musical! Play instruments with every key, add custom sounds, or go full meme mode with pets like roosters, ducks, and cats. Typing has never sounded this entertaining!',
      link: '/KeyBeatz.exe',
      platform: 'Windows',
      size: '70 MB'
    },
    {
      id: 6,
      title: 'Clean Sweep',
      description: 'A powerful, modern desktop application designed for granular system optimization. It provides developers and power users with total control over file cleanup and organization through a sleek, premium interface.',
      link: '/CleanSweep.exe',
      platform: 'Windows',
      size: '14 MB'
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
      case 'Android':
        return <Smartphone size={16} />;
      default:
        return <Monitor size={16} />;
    }
  };

  return (
    <section id="apps" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.p
            className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Native Applications
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Native Apps
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful applications designed to enhance your productivity and workflow across different platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:transform hover:-translate-y-1 transition-all group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="mb-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <Monitor size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 bg-neutral-100 dark:bg-neutral-800 sea:bg-[#78350f]/10 sea:text-[#78350f] rounded-full flex items-center gap-1 transition-colors">
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

              {app.downloadUrl ? (
                <div className="flex gap-3">
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all group-hover:scale-105 text-sm"
                  >
                    <ExternalLink size={16} />
                    Landing Page
                  </a>
                  <a
                    href={app.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all text-sm group-hover:scale-105"
                  >
                    <Download size={16} />
                    Download .exe
                  </a>
                </div>
              ) : (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all group-hover:scale-105"
                >
                  <ExternalLink size={18} />
                  Try App
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopApps;
