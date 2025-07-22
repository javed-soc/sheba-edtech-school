import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="p-0 dark:bg-gray-900 dark:text-white">
      <section className="bg-gray-900 text-white p-8 text-center dark:bg-gray-800">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to Sheba EdTech School
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-xl mx-auto"
        >
          Empowering the next generation of developers with practical, modern tech skills.
        </motion.p>
        <img src="https://sheba-platform.xyz/wp-content/uploads/2021/06/logo.png" alt="Sheba Logo" className="mx-auto my-6 w-64 rounded-xl" />
      </section>

      <section className="p-8 bg-gray-100 dark:bg-gray-800 dark:text-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold mb-6 text-center"
        >
          Our Popular Courses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'React JS Course', desc: 'Learn modern React with projects.' },
            { title: 'Node.js Course', desc: 'Backend development with Node and Express.' },
            { title: 'DevOps Basics', desc: 'CI/CD, Docker, and deployment.' }
          ].map((course, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-white dark:bg-gray-900 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.3 }}
          className="text-3xl font-semibold mb-4"
        >
          Why Choose Sheba EdTech?
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Our platform is built by professionals from Sheba Platform Ltd, offering real-world learning, mentorship, and practical projects.
        </p>
      </section>

      <section className="p-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-2">Start Your Journey Today</h2>
        <p className="mb-4">Join now and get access to premium content for free.</p>
        <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full">Apply for Admission</button>
      </section>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>© 2025 Sheba EdTech School. All rights reserved.</p>
      </footer>
    </div>
  );
}