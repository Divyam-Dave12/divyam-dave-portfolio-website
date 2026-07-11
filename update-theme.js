import fs from 'fs';

const files = [
  'src/index.css',
  'src/App.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Projects.tsx',
  'src/components/Experience.tsx',
  'src/components/Skills.tsx',
  'src/components/Education.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/components/Section.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Base replacements
  content = content.replace(/slate/g, 'neutral');
  content = content.replace(/#020617/g, '#111111');
  content = content.replace(/#0A0F1E/g, '#111111');
  
  content = content.replace(/font-heading/g, 'font-sans');
  content = content.replace(/font-mono/g, 'font-sans');
  content = content.replace(/rounded-2xl/g, 'rounded-md');
  content = content.replace(/rounded-xl/g, 'rounded-md');
  content = content.replace(/rounded-lg/g, 'rounded-md');
  
  if (file === 'src/index.css') {
    content = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --color-accent: #2c3e50; /* soft navy */
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
`;
  }
  
  if (file === 'src/App.tsx') {
    content = content.replace(/bg-white dark:bg-\[\#111111\]/, 'bg-[#FAFAFA] dark:bg-[#111111]');
  }
  
  if (file === 'src/components/Navbar.tsx') {
    content = content.replace(/bg-white\/80 dark:bg-\[\#111111\]\/80/, 'bg-[#FAFAFA]/90 dark:bg-[#111111]/90');
  }

  if (file === 'src/components/Hero.tsx') {
    content = content.replace(/<div className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[800px\] h-\[800px\] bg-accent\/10 dark:bg-accent\/5 blur-\[120px\] rounded-full pointer-events-none" \/>\s*/g, '');
    content = content.replace(/<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" \/>/g, '<span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />');
    content = content.replace(/bg-neutral-900 dark:bg-white text-white dark:text-neutral-900/g, 'bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900');
    content = content.replace(/bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700/g, 'bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800');
  }

  if (file === 'src/components/Section.tsx') {
    content = content.replace(/py-20 md:py-32/, 'py-24 md:py-40');
  }
  
  if (file === 'src/components/Projects.tsx') {
    content = content.replace(/bg-white dark:bg-neutral-900\/40 border border-neutral-200 dark:border-neutral-800 transition-all hover:border-accent\/50 dark:hover:border-accent\/50 hover:shadow-xl hover:shadow-accent\/5/g, 'bg-transparent border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700');
    content = content.replace(/bg-neutral-50 dark:bg-neutral-800\/50 border border-neutral-100 dark:border-neutral-800/g, 'bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800');
    content = content.replace(/bg-accent\/10 text-accent/g, 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300');
  }

  if (file === 'src/components/Experience.tsx') {
    content = content.replace(/bg-accent ring-4 ring-white dark:ring-\[\#111111\]/g, 'bg-neutral-300 dark:bg-neutral-700 ring-4 ring-[#FAFAFA] dark:ring-[#111111]');
  }

  if (file === 'src/components/Skills.tsx') {
    content = content.replace(/bg-white dark:bg-neutral-900\/40 border border-neutral-200 dark:border-neutral-800/g, 'bg-transparent border border-neutral-200 dark:border-neutral-800');
    content = content.replace(/bg-neutral-50 dark:bg-neutral-800\/80 border border-neutral-100 dark:border-neutral-700/g, 'bg-neutral-100 dark:bg-neutral-900 border-none text-neutral-800 dark:text-neutral-200');
  }
  
  if (file === 'src/components/About.tsx') {
    content = content.replace(/bg-white dark:bg-neutral-900\/50 p-6 md:p-8 rounded-md border border-neutral-200 dark:border-neutral-800/g, 'bg-transparent');
    content = content.replace(/<div className="bg-transparent">\s*<div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">/g, '<div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">');
    content = content.replace(/<\/div>\s*<\/div>\s*<\/Section>/g, '</div>\n    </Section>');
  }

  if (file === 'src/components/Education.tsx') {
    content = content.replace(/bg-neutral-50 dark:bg-neutral-900\/20 border border-neutral-200 dark:border-neutral-800/g, 'bg-transparent border border-neutral-200 dark:border-neutral-800');
  }
  
  if (file === 'src/components/Contact.tsx') {
    content = content.replace(/bg-white dark:bg-neutral-900\/40 border border-neutral-200 dark:border-neutral-800/g, 'bg-transparent border border-neutral-200 dark:border-neutral-800');
    content = content.replace(/bg-neutral-900 dark:bg-white text-white dark:text-neutral-900/g, 'bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900');
  }
  
  if (file === 'src/components/Footer.tsx') {
    content = content.replace(/bg-white dark:bg-\[\#111111\]/g, 'bg-transparent');
  }
  
  fs.writeFileSync(file, content, 'utf8');
});
