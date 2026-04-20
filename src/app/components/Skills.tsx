import { Code2, Layers, Server, Database, Wrench } from 'lucide-react';
import skillsBg from '../../imports/fondo1.jpeg';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/60',
      skills: ['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Frameworks & Libraries',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-200 dark:hover:bg-purple-900/60',
      skills: ['React', 'Angular', 'Bootstrap']
    },
    {
      category: 'Backend & Principles',
      icon: Server,
      color: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700 hover:bg-orange-200 dark:hover:bg-orange-900/60',
      skills: ['REST APIs', 'JSON', 'AJAX', 'OOP', 'SOLID', 'JDBC', 'DAO']
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      badge: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/60',
      skills: ['SQL', 'MySQL', 'NoSQL']
    },
    {
      category: 'Tools & Methodologies',
      icon: Wrench,
      color: 'from-slate-500 to-slate-600',
      bg: 'bg-slate-50 dark:bg-slate-700/30',
      badge: 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700',
      skills: ['Git', 'GitHub', 'Maven', 'Jira', 'Scrum', 'Postman', 'Figma', 'Canva']
    }
  ];

  return (
    <section
      id="habilidades"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#e8ddd0] dark:bg-slate-950"
    >
      <div
        className="absolute inset-10"
        style={{
          backgroundImage: `url(${skillsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
          opacity: 0.35,
        }}
      />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#5C3317] to-[#8B4513] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white dark:bg-slate-800">
              <div className={`${category.bg} px-6 py-4 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700`}>
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                  <category.icon className="text-white" size={18} />
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-sm">{category.category}</h3>
              </div>
              <div className="bg-white dark:bg-slate-800 px-6 py-5">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-default ${category.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
