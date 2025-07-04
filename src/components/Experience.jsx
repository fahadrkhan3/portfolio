import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Professional Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">OIL AND GAS DEVELOPMENT COMPANY LIMITED (OGDCL) | Pakistan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Aug 2024 - Sept 2024</p>
            <p className="font-semibold mb-2 dark:text-gray-300">Web Development Intern</p>
            <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li>Assisted in the development of internal web applications using HTML, CSS, JavaScript, and React.js.</li>
              <li>Collaborated with seniors to implement UI components aligned with user experience best practices.</li>
              <li>Integration of front-end components with APIs, ensuring data flow and application performance.</li>
              <li>Helped debugging and performance optimization of web pages to enhance usability and load times.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">ITCON, NUML Islamabad | Pakistan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">March 2024 - Aug 2024</p>
            <p className="font-semibold mb-2 dark:text-gray-300">Web Development Intern</p>
            <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li>Contributed to the development and maintenance of NUML's website and institutional web platforms.</li>
              <li>Assisted in fixing bugs, and implementing design improvements to enhance user experience and accessibility.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Oracle's Men Professional Network | Rawalpindi, Pakistan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Nov 2023 - Jan 2024</p>
            <p className="font-semibold mb-2 dark:text-gray-300">Sales Team Lead</p>
            <ul className="list-disc pl-5 space-y-1 mb-4 dark:text-gray-300">
              <li>Led a remote sales team, developed client engagement strategies, and contributed to increasing conversion rates across digital platforms.</li>
              <li>Coordinated team tasks and performance tracking to ensure monthly sales targets were met.</li>
            </ul>
            <p className="font-semibold mb-2 dark:text-gray-300">Digital Marketing Consultant</p>
            <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li>Provided strategic insights into digital marketing and e-commerce operations, focusing on audience targeting and engagement optimization.</li>
              <li>Leveraged analytical tools to assess campaign performance and improve outreach effectiveness.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;