import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const sections = ['inicio', 'sobre-mi', 'education', 'habilidades', 'proyectos'];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navBtn = (id: string) =>
    `px-4 py-2 transition-colors relative group rounded-lg text-sm font-medium ` +
    (activeSection === id
      ? 'text-[#8B4513] dark:text-amber-400 bg-[#f0e0d0] dark:bg-amber-900/30'
      : 'text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-amber-400 hover:bg-[#f0e0d0] dark:hover:bg-amber-900/20');

  const underline = (id: string) => (
    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#c4956a] transition-transform origin-left ${activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
  );

  const mobileBtn = (id: string) =>
    `transition-colors text-left px-4 py-2 rounded-lg text-sm font-medium ` +
    (activeSection === id
      ? 'text-[#8B4513] dark:text-amber-400 bg-[#f0e0d0] dark:bg-amber-900/30'
      : 'text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-amber-400 hover:bg-[#f0e0d0] dark:hover:bg-amber-900/20');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="logo" className="w-10 h-10" />
              <div className="hidden sm:block">
                <div className="text-slate-900 dark:text-white font-semibold">Julieta Bucci</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Software Engineer</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              <button onClick={() => scrollToSection('inicio')} className={navBtn('inicio')}>
                Home{underline('inicio')}
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className={navBtn('sobre-mi')}>
                About me{underline('sobre-mi')}
              </button>
              <button onClick={() => scrollToSection('education')} className={navBtn('education')}>
                Education & Certifications{underline('education')}
              </button>
              <button onClick={() => scrollToSection('habilidades')} className={navBtn('habilidades')}>
                Skills{underline('habilidades')}
              </button>
              <button onClick={() => scrollToSection('proyectos')} className={navBtn('proyectos')}>
                Projects{underline('proyectos')}
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
              <button onClick={() => scrollToSection('inicio')} className={mobileBtn('inicio')}>Home</button>
              <button onClick={() => scrollToSection('sobre-mi')} className={mobileBtn('sobre-mi')}>About me</button>
              <button onClick={() => scrollToSection('education')} className={mobileBtn('education')}>Education & Certifications</button>
              <button onClick={() => scrollToSection('habilidades')} className={mobileBtn('habilidades')}>Skills</button>
              <button onClick={() => scrollToSection('proyectos')} className={mobileBtn('proyectos')}>Projects</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
