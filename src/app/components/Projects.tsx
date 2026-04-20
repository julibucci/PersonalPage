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
      carouselImages: [
        '/chart_movies_vs_tvshows.png',
        '/chart_top10_genres.png',
        '/chart_titles_over_years.png',
      ],
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
      title: 'Coffee Place',
      description: 'Java-based coffee shop management system handling employees, recipes, inventory, and sales reporting using JSON for data processing.',
      previewDescription: 'Coffee Place is a Java application designed to manage the daily operations of a coffee shop. It covers employee management (adding, updating, and listing staff), recipe and menu administration, stock and inventory control, and the generation of detailed sales reports.\n\nAll data is handled in JSON format using the java-json library, making it easy to serialize, store, and exchange information. The system is fully built in Java following object-oriented principles, with a clean separation of responsibilities across classes to keep the codebase maintainable and extensible.',
      technologies: ['Java', 'JSON', 'OOP'],
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      github: 'https://github.com/julibucci/cofeePlace',
      demo: ''
    },
    {
      title: 'Vehicle Hierarchy MySQL',
      description: 'Java application modeling a vehicle hierarchy with MySQL, implementing OOP inheritance, DAO pattern, XML validation, and database connection pooling.',
      previewDescription: 'Vehicle Hierarchy MySQL is a Java project that demonstrates how to map object-oriented class hierarchies to a relational database using MySQL. The system models different vehicle types (trucks, buses, airplanes, and more) using inheritance relationships reflected in the database schema through one-to-one and one-to-many table associations.\n\nThe project follows a layered architecture: a Data Access Layer with a generic IGenericDAO interface and AbstractDAOClass handles all CRUD operations, while a Service Layer (VehicleServiceImpl) abstracts business logic from direct database access.\n\nAdditionally, the project includes XML processing features such as validation against XSD schemas and XML parsing to load vehicle data from structured files. Database connection pooling is managed through Apache Commons DBCP for optimized performance.',
      technologies: ['Java', 'MySQL', 'JDBC', 'XML', 'OOP', 'DAO'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      github: 'https://github.com/julibucci/Vehicle-Hierarchy-mySQL',
      demo: ''
    },
    {
      title: 'Gestión de Pedidos API',
      description: 'Java-based order management API modeling orders and line items with OOP principles, JSON serialization, and a clean layered structure.',
      previewDescription: 'Gestión de Pedidos is a Java application that simulates a RESTful order management system. It models the core entities involved in processing orders: each Pedido (order) holds a unique ID, a customer name, and a list of ItemPedido objects representing the individual products ordered.\n\nEach ItemPedido stores the product name, quantity, and unit price, following a clean DTO pattern. The project uses a JsonUtiles utility class to handle JSON serialization and deserialization, enabling structured data exchange. The architecture follows object-oriented principles with a clear separation between model classes and business logic, making the codebase easy to extend with additional endpoints or persistence layers.',
      technologies: ['Java', 'JSON', 'OOP', 'REST API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      github: 'https://github.com/julibucci/Gestion-pedidos---API',
      demo: ''
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#e8ddd0] dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-white mb-4">Projects</h2>
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
                      className="w-full h-96 object-contain bg-white dark:bg-slate-900"
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
