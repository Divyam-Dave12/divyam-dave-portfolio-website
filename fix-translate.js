import fs from 'fs';

const files = [
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
  content = content.replace(/tranneutral/g, 'translate');
  
  // also fix the background glow which I tried to remove but there was a typo in my regex
  // It's still there: <div className="absolute top-1/2 left-1/2 -tranneutral-x-1/2 -tranneutral-y-1/2 w-[800px] h-[800px] bg-accent/10 dark:bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
  content = content.replace(/\{\/\* Subtle background glow \*\/\}\n\s*<div className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[800px\] h-\[800px\] bg-accent\/10 dark:bg-accent\/5 blur-\[120px\] rounded-full pointer-events-none" \/>/g, '');

  fs.writeFileSync(file, content, 'utf8');
});
