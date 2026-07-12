/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111111] text-neutral-900 dark:text-neutral-300 selection:bg-accent/30 selection:text-accent font-sans transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
