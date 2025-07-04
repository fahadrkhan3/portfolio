import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 90, color: "bg-yellow-400" },
  { name: "React", level: 85, color: "bg-blue-500" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
  { name: "Python", level: 60, color: "bg-green-500" },
  { name: "SQL", level: 80, color: "bg-red-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`${skill.color} h-2.5 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "react", "javascript", "html5", "css3", "python", "nodejs",
            "git", "github", "vscode", "figma", "mongodb", "mysql"
          ].map((icon) => (
            <motion.div
              key={icon}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                alt={icon}
                className="h-12 w-12 mb-2"
              />
              <span className="text-sm dark:text-gray-300">
                {icon.charAt(0).toUpperCase() + icon.slice(1)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;