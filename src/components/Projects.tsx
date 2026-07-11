import { Section } from './Section';
import { DATA } from '../data';
import { Github } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-8">
        {DATA.projects.map((project, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col gap-8 p-6 md:p-8 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div className="flex-1 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-sans font-bold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-sans font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map(metric => (
                  <div key={metric.label} className="p-4 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800">
                    <div className="text-2xl font-sans font-bold text-neutral-900 dark:text-white mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-sans text-neutral-500 dark:text-neutral-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
