import { DATA } from '../data';

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-200 dark:border-neutral-800 bg-transparent">
      <p className="text-sm font-sans text-neutral-500 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} {DATA.name}. Designed & Built for Production.
      </p>
    </footer>
  );
}
