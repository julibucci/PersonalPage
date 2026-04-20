import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../../imports/WhatsApp_Image_2026-02-12_at_11.51.03.jpeg';
import heroBg from '../../imports/descarga.webp';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
              <img
                src={profileImage}
                alt="Julieta Bucci"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="mb-6">
            <h1 className="mb-3 text-slate-900 dark:text-white tracking-tight">Julieta Bucci</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#5C3317] to-[#8B4513] mx-auto rounded-full mb-6" />
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-300 mb-4 drop-shadow-sm">Software Engineering Student & Programmer</p>
            <div className="flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400">

            </div>
          </div>



          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="/BucciJulieta-CV.pdf"
              download="BucciJulieta-CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
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
      </div>
    </section>
  );
}
