import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../../imports/WhatsApp_Image_2026-02-12_at_11.51.03.jpeg';
import heroBg from '../../imports/descarga.webp';

const socials = [
  {
    href: 'https://github.com/julibucci',
    icon: Github,
    bg: 'bg-slate-900 dark:bg-slate-700',
    shadow: '0 12px 28px rgba(0,0,0,0.30)',
  },
  {
    href: 'https://www.linkedin.com/in/julieta-bucci-0a630b239',
    icon: Linkedin,
    bg: 'bg-[#8B4513]',
    shadow: '0 12px 28px rgba(139,69,19,0.40)',
  },
  {
    href: 'mailto:julieta.bucci39@gmail.com',
    icon: Mail,
    bg: 'bg-[#5C3317]',
    shadow: '0 12px 28px rgba(92,51,23,0.40)',
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax layers
  const bgY      = useTransform(scrollY, [0, 700], [0, 160]);
  const contentY = useTransform(scrollY, [0, 600], [0,  60]);
  const opacity  = useTransform(scrollY, [0, 480], [1,   0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-[115%] -mt-[7.5%] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f5ece1]/55 dark:bg-slate-900/70" />

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        style={{ y: contentY, opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c4956a]/50 bg-[#f5ece1] dark:bg-[#8B4513]/20 dark:border-[#8B4513]/50 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4522a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B4513]" />
              </span>
              <span className="text-[#8B4513] dark:text-[#e8856a] text-xs font-mono uppercase tracking-widest">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name — curtain reveal */}
            <h1 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.15 }}>
              <div style={{ overflow: 'hidden', paddingTop: '0.12em' }}>
                <motion.span
                  className="block text-[#1a0f00] dark:text-white font-bold"
                  style={{ fontSize: 'clamp(56px, 7.5vw, 90px)' }}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.46, duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
                >
                  Julieta
                </motion.span>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.span
                  className="block text-[#c4522a] dark:text-[#e8856a] font-bold"
                  style={{ fontSize: 'clamp(56px, 7.5vw, 90px)' }}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.60, duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
                >
                  Bucci
                </motion.span>
              </div>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="font-mono uppercase tracking-[0.22em] text-xs font-bold text-black dark:text-white mb-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Software Engineering Student &amp; Programmer
            </motion.p>

            {/* Download CV */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.90, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="/CV-JulietaBucci-EN.pdf"
                download="CV-JulietaBucci-EN.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl shadow-sm"
                whileHover={{
                  y: -3,
                  borderColor: '#8B4513',
                  color: '#8B4513',
                  boxShadow: '0 10px 28px rgba(139,69,19,0.18)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <div className="flex gap-4">
              {socials.map(({ href, icon: Icon, bg, shadow }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center text-white shadow-md`}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.02 + i * 0.09,
                    type: 'spring',
                    stiffness: 300,
                    damping: 18,
                  }}
                  whileHover={{ scale: 1.18, y: -5, boxShadow: shadow }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right column — photo ── */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.52, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700"
              whileHover={{
                scale: 1.04,
                boxShadow: '0 32px 64px rgba(0,0,0,0.22)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              <img
                src={profileImage}
                alt="Julieta Bucci"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
