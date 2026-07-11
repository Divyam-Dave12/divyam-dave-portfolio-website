import { Section } from './Section';
import { DATA } from '../data';
import { MapPin } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {DATA.experience.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-[8.5rem] top-2 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-[#FAFAFA] dark:ring-[#111111] z-10" />
            <div className="hidden md:block absolute left-[8.85rem] top-4 bottom-[-3rem] w-px bg-neutral-200 dark:bg-neutral-800" />
            
            <div className="md:grid md:grid-cols-[8rem_1fr] md:gap-12">
              <div className="mb-4 md:mb-0 pt-1 text-sm font-sans text-neutral-500 dark:text-neutral-400">
                {job.date}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 mt-1">
                    <span className="font-medium text-accent">{job.company}</span>
                    <span className="flex items-center gap-1 text-sm"><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                      <span className="leading-relaxed text-balance">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
