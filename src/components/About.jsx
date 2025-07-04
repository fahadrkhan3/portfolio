import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-center dark:text-gray-300">
          <p className="text-lg mb-6">
            Front-End Web Developer & UI/UX Designer with a strong passion for creating responsive, user-friendly web applications.
            Proficient in HTML, CSS, JavaScript, and React, with a keen eye for intuitive design and user experience.
          </p>
          <p className="text-lg">
            Skilled in translating mockups into clean, maintainable code, optimizing performance, and collaborating across teams
            to deliver impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;