'use client';

import * as Switch from '@radix-ui/react-switch';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-end mb-4">
      <label className="sr-only" htmlFor="theme-toggle">
        Toggle dark mode
      </label>
      <Switch.Root
        id="theme-toggle"
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
        aria-label="Toggle dark mode"
      >
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
    </div>
  );
}
