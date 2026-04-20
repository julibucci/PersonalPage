import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navBtn = "px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30";
  const underline = <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">JB</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-slate-900 dark:text-white font-semibold">Julieta Bucci</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Software Engineer</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              <button onClick={() => scrollToSection('inicio')} className={navBtn}>
                Home{underline}
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className={navBtn}>
                About me{underline}
              </button>
              <button onClick={() => scrollToSection('education')} className={navBtn}>
                Education & Certifications{underline}
              </button>
              <button onClick={() => scrollToSection('habilidades')} className={navBtn}>
                Skills{underline}
              </button>
              <button onClick={() => scrollToSection('proyectos')} className={navBtn}>
                Projects{underline}
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700 mt-2 pt-4">
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('inicio')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left px-4 py-2 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left px-4 py-2 rounded-lg">
                About me
              </button>
              <button onClick={() => scrollToSection('education')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left px-4 py-2 rounded-lg">
                Education & Certifications
              </button>
              <button onClick={() => scrollToSection('habilidades')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left px-4 py-2 rounded-lg">
                Skills
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-left px-4 py-2 rounded-lg">
                Projects
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
