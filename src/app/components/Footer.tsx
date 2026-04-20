import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="flex gap-3">
            <a
              href="https://github.com/julibucci"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/julieta-bucci-0a630b239"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:julieta.bucci39@gmail.com"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:julieta.bucci39@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                julieta.bucci39@gmail.com
              </a>
              <a href="tel:+5492966486017" className="text-slate-400 hover:text-blue-400 transition-colors">+5492966486017</a>
              <p className="text-slate-500">Mar del Plata, Argentina</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <Code2 size={16} className="text-blue-500" />
            © 2026 Julieta Bucci. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
