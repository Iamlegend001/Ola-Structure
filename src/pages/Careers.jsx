import React from "react";
import { motion } from "motion/react";

const jobs = [
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    description:
      "Work on cutting-edge EV technology and scalable digital platforms.",
    email: "careers@olaelectric.com",
  },
  {
    title: "Product Designer",
    location: "Remote / Bangalore, India",
    description: "Design intuitive and beautiful experiences for our users.",
    email: "careers@olaelectric.com",
  },
  {
    title: "Manufacturing Specialist",
    location: "Futurefactory, Tamil Nadu, India",
    description:
      "Drive innovation and efficiency in the world’s largest 2W factory.",
    email: "careers@olaelectric.com",
  },
];

const Careers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-black"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Careers at Ola Electric
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Join us in building the future of mobility. We’re looking for
          passionate innovators to help us drive change.
        </p>
      </motion.section>
      {/* Open Positions */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Open Positions
        </h2>
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="text-gray-600 mb-2">{job.location}</div>
                <p className="text-gray-700 mb-4 md:mb-0">{job.description}</p>
              </div>
              <a
                href={`mailto:${
                  job.email
                }?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full text-lg transition-colors shadow-md mt-4 md:mt-0"
              >
                Apply
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full bg-black text-white py-12 px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          We’re always looking for talented people. Send your resume to
          <a
            href="mailto:careers@olaelectric.com"
            className="text-yellow-400 font-semibold hover:underline ml-2"
          >
            careers@olaelectric.com
          </a>
          .
        </p>
      </motion.section>
    </motion.div>
  );
};

export default Careers;
