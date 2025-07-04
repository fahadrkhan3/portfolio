import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Education</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">NATIONAL UNIVERSITY OF MODERN LANGUAGES | Islamabad, Pakistan</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-gray-600 dark:text-gray-400">2021 - 2025</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">FAZAIA INTER COLLEGE JINNAH CAMP | Rawalpindi, Pakistan</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">Intermediate in Pre-Engineering | 72% FBISE</p>
            <p className="text-gray-600 dark:text-gray-400">2019 - 2021</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">FAZAIA INTER COLLEGE JINNAH CAMP | Rawalpindi, Pakistan</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">Matriculation in Science | 85% FBISE</p>
            <p className="text-gray-600 dark:text-gray-400">2017 - 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;