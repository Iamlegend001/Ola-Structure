import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-black flex flex-col justify-center items-center"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-16 px-4 text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Contact Ola Electric
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          We’re here to help. Reach out to us directly by phone for any queries
          or support.
        </p>
      </motion.section>
      {/* Phone Number */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gray-100 rounded-xl shadow-md p-10 flex flex-col items-center"
      >
        <span className="text-lg text-gray-700 mb-2">Call us at</span>
        <a
          href="tel:+9118001234567"
          className="text-3xl md:text-4xl font-bold text-blue-600 hover:underline"
        >
          +91 1800 123 4567
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
