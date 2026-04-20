import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../../imports/WhatsApp_Image_2026-02-12_at_11.51.03.jpeg';
import heroBg from '../../imports/descarga.webp';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div className="flex flex-col items-start">

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-300 bg-teal-50 dark:bg-teal-900/30 dark:border-teal-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-teal-700 dark:text-teal-300 text-xs font-mono uppercase tracking-widest">Open to Opportunities</span>
            </div>

            {/* Name */}
            <h1
              className="leading-none mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="block text-[#1a0f00] dark:text-white font-bold"
                style={{ fontSize: 'clamp(56px, 7.5vw, 90px)' }}
              >
                Julieta
              </span>
              <span
                className="block text-[#c4522a] dark:text-[#e8856a] font-bold"
                style={{ fontSize: 'clamp(56px, 7.5vw, 90px)' }}
              >
                Bucci
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-mono uppercase tracking-[0.22em] text-xs font-bold text-black dark:text-white mb-10">
              Software Engineering Student &amp; Programmer
            </p>

            {/* Download CV */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/BucciJulieta-CV.pdf"
                download="BucciJulieta-CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl hover:border-[#8B4513] dark:hover:border-amber-500 hover:text-[#8B4513] dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/julibucci"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-slate-700 flex items-center justify-center text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/julieta-bucci-0a630b239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:julieta.bucci39@gmail.com"
                className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right column — photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
              <img
                src={profileImage}
                alt="Julieta Bucci"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
