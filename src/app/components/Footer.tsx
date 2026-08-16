import { Github, Linkedin, Mail, Code2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: true, margin: '0px 0px -40px 0px' } as const;

const socials = [
  { href: 'https://github.com/julibucci', icon: Github,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/julieta-bucci-0a630b239', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:julieta.bucci39@gmail.com', icon: Mail, label: 'Email'    },
];

const rowVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Footer() {
  return (
    <footer className="bg-[#2a1a0a]/62 backdrop-blur-sm border-t border-[#4a2e12] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B4513]/10 rounded-full filter blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center gap-6 mb-10"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {/* Name */}
          <motion.h3
            className="text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
            variants={itemVariants}
          >
            <span className="text-[#e8ddd0]">Julieta </span>
            <span className="text-[#e8856a]">Bucci</span>
          </motion.h3>

          <motion.p className="text-[#b89a7a] text-sm" variants={itemVariants}>
            Software Engineer
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-[#b89a7a] text-sm"
            variants={itemVariants}
          >
            <MapPin size={14} className="text-[#8B6040]" />
            <span>Mar del Plata, Argentina</span>
          </motion.div>

          <motion.a
            href="mailto:julieta.bucci39@gmail.com"
            className="text-[#e8856a] text-sm"
            variants={itemVariants}
            whileHover={{ color: '#f0a688', letterSpacing: '0.04em' }}
            transition={{ duration: 0.25 }}
          >
            julieta.bucci39@gmail.com
          </motion.a>

          {/* Social icons */}
          <motion.div className="flex gap-3" variants={itemVariants}>
            {socials.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 bg-[#3d2510] rounded-lg flex items-center justify-center text-[#b89a7a]"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300, damping: 18 }}
                whileHover={{
                  y: -5,
                  backgroundColor: '#8B4513',
                  color: '#ffffff',
                  boxShadow: '0 10px 24px rgba(139,69,19,0.4)',
                }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-[#4a2e12] flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-[#b89a7a] text-sm flex items-center gap-2">
            <Code2 size={16} className="text-[#8B4513]" />
            © 2026 Julieta Bucci. All rights reserved.
          </p>
          <p className="text-[#8B6040] text-sm">Built with React &amp; TypeScript</p>
        </motion.div>
      </div>
    </footer>
  );
}
