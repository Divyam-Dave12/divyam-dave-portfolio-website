import { Section } from './Section';
import { DATA } from '../data';

export function Education() {
  return (
    <Section id="education" title="Education & Achievements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-8">
          <h3 className="text-xl font-sans font-bold text-neutral-900 dark:text-white mb-6">Academic Background</h3>
          {DATA.education.map((edu, idx) => (
            <div key={idx} className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <div className="text-sm font-sans text-neutral-500 dark:text-neutral-400 mb-1">{edu.date}</div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{edu.degree}</h4>
              <div className="text-accent font-medium mt-1">{edu.institution}</div>
              <div className="flex gap-4 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                <span>{edu.location}</span>
                <span className="font-sans bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">{edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-8">
          <h3 className="text-xl font-sans font-bold text-neutral-900 dark:text-white mb-6">Achievements</h3>
          <div className="grid gap-4">
            {DATA.achievements.map((ach, idx) => (
              <div key={idx} className="p-5 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800">
                <h4 className="font-bold text-neutral-900 dark:text-white mb-2">{ach.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed text-balance">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
