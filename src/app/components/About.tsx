import { BadgeCheck, GraduationCap, Laptop, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const VP   = { once: true, margin: '0px 0px -80px 0px' } as const;

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   VP,
  transition: { duration: 0.65, delay, ease: EASE },
});

const experiences = [
  {
    role:    'Full Stack Developer & IT Lead',
    company: 'Lulea Mindful — Apr 2026 – Present',
    bullets: [
      "Lead the company's IT area, overseeing all technology initiatives and coordinating development efforts, including mentoring and managing team members.",
      'Develop, maintain, and optimize the company website using WordPress, delivering frontend enhancements and backend solutions to improve performance and user experience.',
      'Implement scalable and reliable backend optimizations, ensuring website speed, maintainability, and overall system stability.',
    ],
    dot:     '#c4522a',
  },
  {
    role:    'QA Automation Developer',
    company: 'Solvd Inc. — 2024 (Internship)',
    desc:    'Developed and executed automated test cases, performed functional testing, and reported bugs. Collaborated within an agile team using QA tools and methodologies.',
    dot:     '#8B4513',
  },
  {
    role:    'Administrative Assistant (Finance)',
    company: 'Balanza — 2023–2025',
    desc:    'Managed administrative processes and provided operational support. Developed strong organizational, communication, and time management skills.',
    dot:     '#5C3317',
  },
];

const education = [
  { degree: 'Software Engineering', school: 'CAECE', period: '2025 – Present', icon: GraduationCap, iconColor: 'text-[#8B4513] dark:text-[#e8856a]' },
  { degree: 'Programmer', school: 'Universidad Tecnológica Nacional', period: '2022 – 2024', icon: Laptop, iconColor: 'text-slate-600 dark:text-slate-300' },
];

const certs = [
  { name: 'HTML y CSS desde CERO',                                    issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/certificado-html-y-css-e8u/' },
  { name: 'Introducción a las Bases de Datos Relacionales (Con MySQL)', issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/bd-relacionales-con-mysql-jhx/' },
  { name: 'Java para Principiantes',                                   issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/java-para-principiantes-7iz/'  },
  { name: 'The Complete Python Developer',                             issuer: 'Udemy — Oct 2025',           url: 'https://www.udemy.com/certificate/UC-ad93d8fe-737a-4c67-a934-97f377761ea0/' },
];

export function About() {
  return (
    <>
      {/* ── About Me + Experience ── */}
      <section
        id="sobre-mi"
        className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-[#e8ddd0] dark:bg-slate-900/55 dark:backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B4513]/10 rounded-full filter blur-3xl opacity-30" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Section header */}
          <motion.div className="mb-8 flex flex-col items-center" {...fadeUp()}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B4513] dark:text-[#c4956a] mb-3">
              02 — About Me
            </p>
            <h2
              className="text-slate-900 dark:text-white mb-4 text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who I Am
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-[#5C3317] to-[#8B4513] rounded-full"
              whileInView={{ width: '5rem' }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            />
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <p className="text-foreground mb-4 text-justify">
              I am a fourth-year Software Engineering student and a University Technician in Programming
              with experience in backend development, frontend technologies, and QA automation. I have a
              strong foundation in Java, SQL, and object-oriented programming, and I enjoy building
              reliable, maintainable, and scalable applications. On the backend, I have worked with REST
              APIs, JDBC, DAO, and SOLID principles, while on the frontend I have experience creating
              responsive interfaces using HTML, CSS, JavaScript, React, and Angular.
            </p>
            <p className="text-foreground text-justify">
              Additionally, I have professional experience in QA Automation, where I developed and
              executed automated test cases, performed functional testing, and reported bugs within agile
              environments. I am passionate about continuous learning and currently seeking opportunities
              to grow as a developer in roles that combine backend, frontend, and QA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#e8ddd0] dark:bg-slate-900/55 dark:backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B4513]/10 rounded-full filter blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div className="text-left mb-16" {...fadeUp()}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B4513] dark:text-[#c4956a] mb-3">
              03 — Experience
            </p>
            <h2
              className="text-slate-900 dark:text-white mb-4 text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-[#5C3317] to-[#8B4513] rounded-full"
              whileInView={{ width: '5rem' }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            />
          </motion.div>

          {/* Experience grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured — current role */}
            <motion.div
              className="md:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-8 border-l-4 shadow-lg relative overflow-hidden"
              style={{ borderLeftColor: experiences[0].dot }}
              {...fadeUp(0.1)}
              whileHover={{ boxShadow: '0 20px 48px rgba(0,0,0,0.12)', y: -4 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="text-slate-900 dark:text-white text-xl">{experiences[0].role}</h4>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#f0e0d0] dark:bg-[#8B4513]/25 text-[#8B4513] dark:text-[#e8a06a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4522a] animate-pulse" />
                  Current
                </span>
              </div>
              <p className="text-sm font-mono text-[#c4522a] dark:text-[#e8856a] mb-4">{experiences[0].company}</p>
              <ul className="space-y-2">
                {experiences[0].bullets!.map((bullet, bi) => (
                  <li key={bi} className="text-slate-600 dark:text-slate-300 flex gap-2">
                    <span className="text-[#8B4513]/60 dark:text-[#e8856a]/60 mt-0.5">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Past roles */}
            {experiences.slice(1).map((exp, i) => (
              <motion.div
                key={exp.role}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.55, ease: EASE }}
                whileHover={{ y: -5, boxShadow: '0 14px 32px rgba(0,0,0,0.10)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full mb-4" style={{ backgroundColor: exp.dot }} />
                <h4 className="text-slate-900 dark:text-white mb-1">{exp.role}</h4>
                <p className="text-sm font-mono text-[#c4522a] dark:text-[#e8856a] mb-3">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section
        id="education"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#e8ddd0] dark:bg-slate-900/55 dark:backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B4513]/10 rounded-full filter blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div className="text-left mb-16" {...fadeUp()}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B4513] dark:text-[#c4956a] mb-3">
              04 — Education & Certifications
            </p>
            <h2
              className="text-slate-900 dark:text-white mb-4 text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Education & Certifications
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-[#5C3317] to-[#8B4513] rounded-full"
              whileInView={{ width: '5rem' }}
              viewport={VP}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            />
          </motion.div>

          {/* Education card */}
          <motion.div
            className="bg-white/60 dark:bg-slate-700/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 shadow-lg mb-8"
            {...fadeUp(0.1)}
            whileHover={{ boxShadow: '0 16px 40px rgba(0,0,0,0.10)', y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#5C3317] to-[#8B4513] rounded-full" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: EASE }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-[#f0e0d0] dark:bg-slate-700 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 14 }}
                  >
                    <edu.icon className={edu.iconColor} size={20} />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{edu.school}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            id="certifications"
            className="bg-white/60 dark:bg-slate-700/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 shadow-lg"
            {...fadeUp(0.18)}
            whileHover={{ boxShadow: '0 16px 40px rgba(0,0,0,0.10)', y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#5C3317] to-[#8B4513] rounded-full" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={VP}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: EASE }}
                  whileHover={{ y: -3, boxShadow: '0 8px 22px rgba(0,0,0,0.10)' }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 12 }}
                  >
                    <BadgeCheck className="text-[#8B4513] dark:text-[#e8856a] flex-shrink-0 mt-0.5" size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white font-medium text-sm">{cert.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-1.5 mt-3 px-4 py-2 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-[#5C3317] to-[#8B4513] overflow-hidden shadow-sm"
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 24px rgba(139,69,19,0.4)' }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.22 }}
                      >
                        {/* shine sweep */}
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none"
                          style={{ skewX: '-20deg' }}
                          initial={{ x: '-130%' }}
                          whileHover={{ x: '130%' }}
                          transition={{ duration: 0.65, ease: 'easeInOut' }}
                        />
                        <span className="relative z-10">View Certificate</span>
                        <motion.span
                          className="relative z-10 flex"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <ExternalLink size={13} />
                        </motion.span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
