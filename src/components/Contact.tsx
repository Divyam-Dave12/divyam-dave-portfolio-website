import { Section } from './Section';
import { DATA } from '../data';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch" className="pb-32">
      <div className="max-w-2xl">
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 text-balance">
          Currently exploring ML/AI engineering opportunities in Europe. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href={`mailto:${DATA.email}`} className="flex items-center gap-3 p-4 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/30 transition-all">
            <Mail size={20} className="text-neutral-400" />
            <span className="font-medium truncate">{DATA.email}</span>
          </a>
          <a href={`tel:${DATA.phone}`} className="flex items-center gap-3 p-4 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/30 transition-all">
            <Phone size={20} className="text-neutral-400" />
            <span className="font-medium">{DATA.phone}</span>
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/30 transition-all">
            <Linkedin size={20} className="text-neutral-400" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href={DATA.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/30 transition-all">
            <Github size={20} className="text-neutral-400" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
