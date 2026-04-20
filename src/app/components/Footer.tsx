import { Github, Linkedin, Mail, Code2, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2a1a0a] border-t border-[#4a2e12] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B4513]/10 rounded-full filter blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col items-center gap-6 mb-10">
          <h3 className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#e8ddd0]">Julieta </span>
            <span className="text-[#e8856a]">Bucci</span>
          </h3>
          <p className="text-[#b89a7a] text-sm">Software Engineer</p>

          <div className="flex items-center gap-2 text-[#b89a7a] text-sm">
            <MapPin size={14} className="text-[#8B6040]" />
            <span>Mar del Plata, Argentina</span>
          </div>

          <a href="mailto:julieta.bucci39@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm">
            julieta.bucci39@gmail.com
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/julibucci"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#3d2510] hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#b89a7a] hover:text-white transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/julieta-bucci-0a630b239"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#3d2510] hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#b89a7a] hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:julieta.bucci39@gmail.com"
              className="w-10 h-10 bg-[#3d2510] hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#b89a7a] hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4a2e12] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#b89a7a] text-sm flex items-center gap-2">
            <Code2 size={16} className="text-[#8B4513]" />
            © 2026 Julieta Bucci. All rights reserved.
          </p>
          <p className="text-[#8B6040] text-sm">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
