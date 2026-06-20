import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Sparkles, TrendingUp, Target, Award } from 'lucide-react';

const AiMl: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scores = [
    { label: 'Initial Try', score: 25, color: 'bg-neutral-400' },
    { label: 'Iteration 2', score: 40, color: 'bg-neutral-500' },
    { label: 'Iteration 3', score: 95, color: 'bg-neutral-700' },
    { label: 'Final Score (GAIA)', score: 100, color: 'bg-neutral-950 dark:bg-white' }
  ];

  const agentSkills = [
    'AI Agents Development',
    'Agent Workflows Design',
    'Tool Integration & Usage',
    'Multi-Step Reasoning',
    'LLM Orchestration',
    'Autonomous Agents Lifecycle',
    'Evaluation & Benchmarking',
    'Agent Reliability Improvements'
  ];

  return (
    <section id="ai-ml" className="py-24 bg-neutral-50 dark:bg-neutral-850">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Title */}
        <div className="max-w-3xl mx-auto md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full mb-4"
          >
            <Brain size={14} /> Artificial Intelligence
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI & Machine Learning
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Successfully completed the <span className="font-bold text-neutral-900 dark:text-white">Hugging Face AI Agents Course</span>, demonstrating high proficiency in designing, evaluating, and deploying autonomous systems.
          </motion.p>
        </div>

        {/* Dashboard Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Score progression chart */}
          <motion.div
            className="lg:col-span-7 bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-250/30 dark:border-neutral-750/30 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-neutral-600 dark:text-neutral-400" size={20} />
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-white">Iterative Evaluation Progression</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded">GAIA Benchmark</span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {scores.map((s, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-neutral-700 dark:text-neutral-300">{s.label}</span>
                      <span className="font-bold text-neutral-950 dark:text-white">{s.score}/100</span>
                    </div>
                    <div className="h-3 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${s.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.score}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <Sparkles size={16} className="text-neutral-950 dark:text-white shrink-0" />
              <span>Perfect <strong>100/100 score</strong> on the GAIA-based final evaluation. Built, evaluated, and progressively optimized agents through multiple iterations.</span>
            </div>
          </motion.div>

          {/* Card 2: Skills Learned & Credentials */}
          <motion.div
            className="lg:col-span-5 bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-250/30 dark:border-neutral-750/30 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Target className="text-neutral-600 dark:text-neutral-400" size={20} />
                <h3 className="font-bold text-xl text-neutral-900 dark:text-white">Core Competencies</h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {agentSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200/50 dark:border-neutral-850/50 flex items-center gap-4">
              <div className="p-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900 dark:text-white">Hugging Face Credential</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-450 mt-0.5">Completed AI Agents Course</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiMl;
