import { useState } from 'react';
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'; // Import necessary icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 dark:bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                <FiMail className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:fahadrafi15493@gmail.com" className="hover:underline">
                  fahadrafi15493@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p>+92-333-1496-238</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                <FiLinkedin className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/fahad-rafi-9713912a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/fahad-rafi
                </a>
              </div>
            </div>
            {/* Additional Information from previous Contact.jsx */}
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <div className="space-y-2">
                <p><span className="font-semibold">Languages:</span> English, Urdu</p>
                <p><span className="font-semibold">Certifications:</span> Certificate for my work in OGDCL</p>
                <p><span className="font-semibold">Interests:</span> Front end web development, UI/UX designing, Digital marketing</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-6 rounded-lg flex items-center space-x-4">
              <FiCheckCircle className="text-3xl" />
              <div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p>I'll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 dark:bg-blue-900 border border-blue-700 dark:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 dark:bg-blue-900 border border-blue-700 dark:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800 dark:bg-blue-900 border border-blue-700 dark:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition shadow-lg w-full"
              >
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;