import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { DATA } from '../data';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
          Available for roles in Europe
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-sans font-bold text-neutral-900 dark:text-white tracking-tight mb-6 text-balance"
        >
          {DATA.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-4"
        >
          {DATA.title}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-neutral-500 dark:text-neutral-500 max-w-2xl text-balance mb-12"
        >
          I build RAG and NLP systems that go from prototype to production.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Contact Me
          </a>
          
          <div className="flex items-center gap-3 ml-2 border-l pl-5 border-neutral-200 dark:border-neutral-800">
            <a href={DATA.github} target="_blank" rel="noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${DATA.email}`} className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
