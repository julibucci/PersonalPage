import { BadgeCheck, ExternalLink, GraduationCap } from 'lucide-react';

export function About() {

  return (
    <section id="sobre-mi" className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-[#e8ddd0] dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-white mb-4">About me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#5C3317] to-[#8B4513] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-foreground mb-4"></p>
            <p className="text-foreground mb-4 text-justify">
              I am a fourth-year Software Engineering student and a University Technician in Programming with experience in backend development, frontend technologies, and QA automation. I have a strong foundation in Java, SQL, and object-oriented programming, and I enjoy building reliable, maintainable, and scalable applications. On the backend, I have worked with REST APIs, JDBC, DAO, and SOLID principles,
              while on the frontend I have experience creating responsive interfaces using HTML, CSS, JavaScript, React, and Angular.

            </p>
            <p className="text-foreground text-justify">
              Additionally, I have professional experience in QA Automation, where I developed and executed automated test cases, performed functional
               testing, and reported bugs within agile environments. I am passionate about continuous learning and currently seeking opportunities to grow
               as a developer in roles that combine backend, frontend, and QA.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <h3 className="text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#5C3317] to-[#8B4513] rounded-full" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-600">
                <div className="absolute left-0 top-1 w-3 h-3 bg-[#8B4513] rounded-full -translate-x-[7px]" />
                <h4 className="text-slate-900 dark:text-white mb-1">QA Automation Developer</h4>
                <p className="text-slate-600 dark:text-slate-300">Developed and executed automated test cases, performed functional testing, and reported bugs. Collaborated within an agile team using QA tools and methodologies.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Solvd Inc. — 2024 (Internship)</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-600">
                <div className="absolute left-0 top-1 w-3 h-3 bg-[#5C3317] rounded-full -translate-x-[7px]" />
                <h4 className="text-slate-900 dark:text-white mb-1">Administrative Assistant (Finance)</h4>
                <p className="text-slate-600 dark:text-slate-300">Managed administrative processes and provided operational support. Developed strong organizational, communication, and time management skills.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Balanza — 2023–2025</p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-600">




              </div>
            </div>
          </div>
        </div>

        <div id="education" className="bg-[#f0c4a8] dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg mb-8">
          <h3 className="text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[#5C3317] to-[#8B4513] rounded-full" />
            Education
          </h3>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-600">
              <div className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full -translate-x-[7px]" />
              <div className="flex items-start gap-2">
                <GraduationCap className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-slate-900 dark:text-white mb-1">Software Engineering</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">CAECE</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2025 – Present</p>
                </div>
              </div>
            </div>
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-600">
              <div className="absolute left-0 top-1 w-3 h-3 bg-indigo-600 rounded-full -translate-x-[7px]" />
              <div className="flex items-start gap-2">
                <GraduationCap className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-slate-900 dark:text-white mb-1">Programmer</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Universidad Tecnológica Nacional</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2022 – 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="certifications" className="bg-[#f0c4a8] dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg mb-16">
          <h3 className="text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[#5C3317] to-[#8B4513] rounded-full" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'HTML y CSS desde CERO', issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/certificado-html-y-css-e8u/' },
              { name: 'Introducción a las Bases de Datos Relacionales (Con MySQL)', issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/bd-relacionales-con-mysql-jhx/' },
              { name: 'Java para Principiantes', issuer: 'TodoCode Academy — Feb 2026', url: 'https://todocodeacademy.com/certificate/java-para-principiantes-7iz/' },
              { name: 'The Complete Python Developer', issuer: 'Udemy — Oct 2025', url: 'https://www.udemy.com/certificate/UC-ad93d8fe-737a-4c67-a934-97f377761ea0/' },
            ].map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                <BadgeCheck className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <p className="text-slate-900 dark:text-white font-medium text-sm">{cert.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
