import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  previewDescription?: string;
  carouselImages?: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevSlide = (total: number) => setCarouselIndex(i => (i - 1 + total) % total);
  const nextSlide = (total: number) => setCarouselIndex(i => (i + 1) % total);

  const projects: Project[] = [
    {
      title: 'Netflix Data Analysis',
      description: 'Exploratory data analysis of the Netflix catalog using Python. Includes visualizations of content trends, genre distribution, and release patterns.',
      previewDescription: 'This project performs an in-depth exploratory data analysis (EDA) on the Netflix dataset. Using Python with Pandas, Matplotlib, and Seaborn, it uncovers insights about content distribution by genre, country, release year, and rating. The analysis includes visualizations such as bar charts, heatmaps, and trend lines to understand how Netflix\'s catalog has evolved over time. It also explores the balance between Movies and TV Shows and identifies the most prolific directors and actors on the platform.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      github: 'https://github.com/julibucci/Netflix-Data-Analysis',
      demo: ''
    },
    {
      title: 'MealMaster Project',
      description: 'Recipe management system with user profiles, favorites, comments, and PayPal integration for premium subscriptions with advanced meal planning features.',
      previewDescription: 'MealMaster is a full-stack recipe management application built with Angular. Users can register and manage their personal profiles, browse a wide variety of recipes fetched from the MealDB API, save their favorites, and interact through comments on recipes.\n\nThe application has two types of users: common users and premium users. Common users can explore recipes, manage their profile, and save favorites. Premium users, who upgrade their plan through PayPal integration, unlock exclusive features such as creating personalized meal plans, filtering recipes by available ingredients, and accessing advanced content.\n\nThe backend is powered by Node.js with Express and JSON Server for data management, while the frontend is built with Angular and Bootstrap for a fully responsive and modern UI.',
      technologies: ['Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express'],
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
      github: 'https://github.com/julibucci/MealMaster-Project',
      demo: '',
      carouselImages: [
        '/mealmaster/mealmaster_1.jpeg',
        '/mealmaster/mealmaster_2.jpeg',
        '/mealmaster/mealmaster_3.jpeg',
        '/mealmaster/mealmaster_4.jpeg',
        '/mealmaster/mealmaster_5.jpeg',
        '/mealmaster/mealmaster_6.jpeg',
        '/mealmaster/mealmaster_7.jpeg',
        '/mealmaster/mealmaster_8.jpeg',
        '/mealmaster/mealmaster_9.jpeg',
      ]
    },
    {
      title: 'Real-Time Data Pipeline',
      description: 'ETL pipeline for real-time data processing with Apache Kafka. SQL query optimization reducing response time by 70%.',
      technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Scalable REST API',
      description: 'RESTful API with JWT authentication, rate limiting, and Swagger documentation. Caching implementation and critical endpoint optimization.',
      technologies: ['FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'CI/CD Automation',
      description: 'Automated continuous integration and deployment pipeline with unit testing, static code analysis, and multi-environment deployment.',
      technologies: ['GitHub Actions', 'Jest', 'SonarQube', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Monitoring System',
      description: 'Observability platform with distributed metrics, logs, and traces. Automatic alerts and custom dashboards for SRE teams.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Machine Learning API',
      description: 'ML model for data classification deployed as an API with versioning, A/B testing, and model performance monitoring.',
      technologies: ['TensorFlow', 'Flask', 'MLflow', 'Docker'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#c8c9a0] dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#5C3317] to-[#8B4513] mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:shadow-2xl group">
              <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs rounded-lg border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-amber-400 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.previewDescription && (
                    <button
                      onClick={() => { setSelectedProject(project); setCarouselIndex(0); }}
                      className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-amber-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Preview
                    </button>
                  )}
                  {!project.previewDescription && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#8B4513] dark:hover:text-amber-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-t-2xl">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-slate-900 dark:text-white text-xl font-semibold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-4">
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs rounded-lg border border-slate-200 dark:border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 space-y-4">
                {selectedProject.previewDescription?.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>


              {selectedProject.carouselImages && selectedProject.carouselImages.length > 0 && (
                <div className="relative mb-8">
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600">
                    <img
                      src={selectedProject.carouselImages[carouselIndex]}
                      alt={`Screenshot ${carouselIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <button
                    onClick={() => prevSlide(selectedProject.carouselImages!.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 rounded-full p-1.5 shadow-md transition-colors"
                  >
                    <ChevronLeft size={20} className="text-slate-700 dark:text-white" />
                  </button>
                  <button
                    onClick={() => nextSlide(selectedProject.carouselImages!.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 rounded-full p-1.5 shadow-md transition-colors"
                  >
                    <ChevronRight size={20} className="text-slate-700 dark:text-white" />
                  </button>
                  <div className="flex justify-center gap-1.5 mt-3">
                    {selectedProject.carouselImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === carouselIndex ? 'bg-[#8B4513]' : 'bg-slate-300 dark:bg-slate-600'}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5C3317] to-[#8B4513] text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
