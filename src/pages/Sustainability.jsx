import React from "react";
import { motion } from "motion/react";

const initiatives = [
  {
    title: "100% Renewable Energy",
    description:
      "Our Futurefactory is powered entirely by renewable energy, reducing our carbon footprint and setting new standards for green manufacturing.",
    icon: (
      <svg
        className="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z"
        />
      </svg>
    ),
  },
  {
    title: "Zero Waste Manufacturing",
    description:
      "We strive for zero waste by recycling, reusing, and responsibly disposing of all materials used in our production process.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v16h16V4H4zm4 4h8v8H8V8z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Mobility",
    description:
      "Our electric vehicles are designed to reduce emissions and promote clean, sustainable transportation for everyone.",
    icon: (
      <svg
        className="w-10 h-10 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const Sustainability = () => {
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
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Sustainability at Ola Electric
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Driving the future of mobility with a commitment to the planet.
          Discover how we’re making a difference through innovation,
          responsibility, and action.
        </p>
      </motion.section>
      {/* Initiatives */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Our Sustainability Initiatives
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
          {initiatives.map((item, idx) => (
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
          Join Us on Our Green Journey
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Be a part of the movement for a cleaner, greener future. Choose
          electric. Choose sustainability.
        </p>
        <a
          href="/buy"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
        >
          Explore Our Electric Vehicles
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Sustainability;
