import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterRollMenu } from './LetterRollMenu';
import { ThemeToggle } from './ThemeToggle';

const sections = ['inicio', 'proyectos', 'sobre-mi', 'experience', 'education', 'habilidades'];
const labels: Record<string, string> = {
  inicio:     'Home',
  'sobre-mi': 'About me',
  experience: 'Experience',
  education:  'Education & Certifications',
  habilidades:'Skills',
  proyectos:  'Projects',
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/75 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Desktop nav — spans the full bar */}
          <div className="hidden md:flex items-center justify-between flex-1 mr-4">
            {sections.map((id, i) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'text-[#8B4513] dark:text-[#e8856a]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-[#e8856a]'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ backgroundColor: 'rgba(240,224,208,0.5)' }}
                whileTap={{ scale: 0.96 }}
              >
                <LetterRollMenu text={labels[id]} />
                {activeSection === id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#8B4513] to-[#c4956a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme toggle — desktop */}
          <motion.div
            className="hidden md:block ml-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.58 }}
          >
            <ThemeToggle />
          </motion.div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'block' }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700"
            >
              <motion.div
                className="pb-4 pt-3 flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
              >
                {sections.map((id) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === id
                        ? 'text-[#8B4513] dark:text-[#e8856a] bg-[#f0e0d0] dark:bg-[#8B4513]/30'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-[#e8856a] hover:bg-[#f0e0d0] dark:hover:bg-[#8B4513]/20'
                    }`}
                    variants={{
                      hidden:  { opacity: 0, x: -14 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {labels[id]}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
