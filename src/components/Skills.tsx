import { Section } from './Section';
import { DATA } from '../data';

export function Skills() {
  const categories = [
    { title: 'Languages', items: DATA.skills.languages },
    { title: 'ML/AI Libraries', items: DATA.skills.libraries },
    { title: 'Frameworks & Tools', items: DATA.skills.tools },
    { title: 'Core Competencies', items: DATA.skills.core },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => (
          <div key={category.title} className="p-6 rounded-md bg-transparent border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-sm font-sans font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-900 border-none text-neutral-800 dark:text-neutral-200 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
