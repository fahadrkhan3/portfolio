import { motion } from 'framer-motion';

const projects = [
  {
    title: "INTELLIAD PLATFORM",
    description: "AI-powered advertising management system",
    points: [
      "Developed with Python and machine learning",
      "Automated bid optimization",
      "Real-time data dashboards"
    ],
    image: "/intelliad.jpg", // Ensure you have intelliad.jpg in your public folder
    tags: ["AI", "Python", "React"]
  },
  {
    title: "WEATHER ANALYTICS APPLICATION",
    description: "Responsive weather forecasting application",
    points: [
      "Created with React.js for dynamic frontend",
      "Integrated real-time weather data API",
      "Implemented geolocation and interactive visualizations"
    ],
    image: "/weather-app.jpg", // Add an image for this project
    tags: ["React", "API", "JavaScript"]
  },
  {
    title: "GRAPHIC PROJECTS",
    description: "Collection of design and visual projects",
    points: [
      "Designed logos, banners, and social media content",
      "Created engaging social media post templates",
      "Developed custom UI mockups and visual assets"
    ],
    image: "/graphic-design.jpg", // Add an image for this project
    tags: ["UI/UX", "Figma", "Canva"]
  },
  // --- NEW PROJECT: Your Portfolio ---
  {
    title: "PERSONAL PORTFOLIO WEBSITE",
    description: "A responsive and interactive personal portfolio showcasing my skills and projects.",
    points: [
      "Built with React.js and Tailwind CSS for a modern UI.",
      "Incorporates Framer Motion for smooth animations and transitions.",
      "Features dynamic dark mode toggle and organized sections."
    ],
    image: "/portfolio-screenshot.jpg", // You'll need to create this image
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"]
  },
  // --- End of New Project ---
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 dark:text-white"
        >
          Technical Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 dark:text-gray-300">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;