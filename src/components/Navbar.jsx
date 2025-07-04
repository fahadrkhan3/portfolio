import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi'; // Make sure you have react-icons installed

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-800 dark:bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold flex items-center"
        >
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> {/* Ensure you have a logo.png in your public folder */}
          Fahad's Portfolio
        </motion.h1>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 text-white" // Added text-white for icon visibility
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;