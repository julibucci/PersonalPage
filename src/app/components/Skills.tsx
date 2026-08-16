import { Code2, Layers, Server, Database, Wrench, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: true, margin: '0px 0px -80px 0px' } as const;

const cardBg    = 'bg-[#f5ece1] dark:bg-[#8B4513]/15';
const cardBadge = 'bg-[#f0e0d0] dark:bg-[#8B4513]/30 text-[#5C3317] dark:text-[#e8a06a] border-[#c4956a]/50 dark:border-[#8B4513]/50';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: Code2,
    color: 'from-[#8B4513] to-[#c4522a]',
    bg:   cardBg,
    badge: cardBadge,
    skills: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    color: 'from-[#5C3317] to-[#8B4513]',
    bg:   cardBg,
    badge: cardBadge,
    skills: ['React', 'Angular', 'Bootstrap'],
  },
  {
    category: 'Backend & Principles',
    icon: Server,
    color: 'from-[#c4522a] to-[#e8856a]',
    bg:   cardBg,
    badge: cardBadge,
    skills: ['REST APIs', 'JSON', 'AJAX', 'OOP', 'SOLID', 'JDBC', 'DAO'],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-[#5C3317] to-[#a8622c]',
    bg:   cardBg,
    badge: cardBadge,
    skills: ['SQL', 'MySQL', 'NoSQL'],
  },
  {
    category: 'Tools & Methodologies',
    icon: Wrench,
    color: 'from-slate-500 to-slate-600',
    bg:   'bg-slate-50 dark:bg-slate-700/30',
    badge:'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600',
    skills: ['Git', 'GitHub', 'Maven', 'Jira', 'Scrum', 'Postman', 'Figma', 'Canva'],
  },
  {
    category: 'Platforms & Automation',
    icon: Workflow,
    color: 'from-[#8B4513] to-[#5C3317]',
    bg:   cardBg,
    badge: cardBadge,
    skills: ['WordPress', 'Airtable', 'n8n'],
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.09, duration: 0.6, ease: EASE },
  }),
};

export function Skills() {
  return (
    <section
      id="habilidades"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#e8ddd0] dark:bg-slate-900/55 dark:backdrop-blur-sm"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B4513]/10 dark:bg-[#8B4513]/20 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B4513] dark:text-[#c4956a] mb-3">
            05 — Technical Skills
          </p>
          <h2
            className="text-slate-900 dark:text-white mb-4 text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What I work with
          </h2>
          <motion.div
            className="h-1 w-0 bg-gradient-to-r from-[#5C3317] to-[#8B4513] rounded-full"
            whileInView={{ width: '5rem' }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm bg-white dark:bg-slate-800"
              whileHover={{
                y: -6,
                boxShadow: '0 16px 36px rgba(0,0,0,0.12)',
                borderColor: 'rgba(139,69,19,0.35)',
              }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {/* Card header */}
              <div className={`${cat.bg} px-6 py-4 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700`}>
                <motion.div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-sm`}
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                  <cat.icon className="text-white" size={18} />
                </motion.div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-sm">{cat.category}</h3>
              </div>

              {/* Badges */}
              <div className="bg-white dark:bg-slate-800 px-6 py-5">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      className={`px-3 py-1 text-xs font-medium rounded-full border cursor-default ${cat.badge}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 16 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
