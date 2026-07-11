import { Section } from './Section';
import { DATA } from '../data';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
          <p className="leading-relaxed text-lg text-balance m-0">
            {DATA.about}
          </p>
        </div>
    </Section>
  );
}
