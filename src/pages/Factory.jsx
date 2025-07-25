import React from "react";
import { motion } from "motion/react";

const highlights = [
  {
    title: "World’s Largest 2W Factory",
    description:
      "Ola’s Futurefactory is the world’s largest two-wheeler manufacturing facility, with a capacity to produce millions of electric vehicles annually.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M9 21V7a3 3 0 1 1 6 0v14"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Automation",
    description:
      "The factory leverages advanced robotics and AI for precision, efficiency, and quality, setting new benchmarks in smart manufacturing.",
    icon: (
      <svg
        className="w-10 h-10 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Sustainable by Design",
    description:
      "Built with sustainability at its core, the Futurefactory uses renewable energy, recycles water, and minimizes waste.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0v10l6 3"
        />
      </svg>
    ),
  },
];

const Factory = () => {
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
        className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Ola Futurefactory
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Discover the world’s most advanced and sustainable two-wheeler
          manufacturing facility, where innovation meets scale.
        </p>
      </motion.section>
      {/* Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Factory Highlights
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
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
          Experience the Future of Manufacturing
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Join us as we revolutionize mobility and manufacturing for a greener
          tomorrow.
        </p>
        <a
          href="/sustainability"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
        >
          Learn About Our Sustainability
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Factory;
