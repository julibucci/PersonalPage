import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = '';
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#e8ddd0] dark:bg-slate-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 } }}
        >
          <div className="flex flex-col items-center px-6 text-center">
            <motion.img
              src="/favicon.svg"
              alt="logo"
              className="w-14 h-14 mb-6"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            />

            <motion.p
              className="font-mono uppercase tracking-[0.3em] text-xs text-[#8B4513] dark:text-[#e8856a] mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
            >
              Welcome to
            </motion.p>

            <h1
              className="leading-tight text-slate-900 dark:text-white font-bold"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 48px)' }}
            >
              <div style={{ overflow: 'hidden' }}>
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
                >
                  Julieta Bucci's
                </motion.span>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.span
                  className="block text-[#c4522a] dark:text-[#e8856a]"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
                >
                  Personal Web Page
                </motion.span>
              </div>
            </h1>

            <motion.div
              className="mt-10 h-[3px] w-40 rounded-full bg-slate-300/50 dark:bg-slate-700 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#5C3317] to-[#8B4513]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.9, delay: 0.7, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
