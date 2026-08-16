import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className={`relative inline-flex items-center w-16 h-8 rounded-full px-1 border-2 shadow-sm transition-colors duration-300 ${
        isDark ? 'bg-slate-700 border-slate-500' : 'bg-[#f0e0d0] border-[#c4956a]'
      } ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15 }}
    >
      <Sun size={14} className="absolute left-2 text-[#8B4513]/70 pointer-events-none" />
      <Moon size={14} className="absolute right-2 text-[#c4956a]/60 pointer-events-none" />

      <motion.span
        className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.22 }}
            style={{ display: 'flex' }}
          >
            {isDark ? <Moon size={14} className="text-[#e8856a]" /> : <Sun size={14} className="text-[#8B4513]" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
}
