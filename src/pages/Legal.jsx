import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="py-16 px-4 text-center bg-gradient-to-r from-blue-900/60 to-purple-900/60 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Legal & Policies
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transparency and trust are at the core of our mission. Please review
          our terms and policies below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link
              to="/"
              className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all duration-200 shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Legal Content */}
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Terms of Service */}
        <motion.section
          className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Terms of Service
          </motion.h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              By using our website, you agree to comply with all applicable laws
              and regulations.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              All content is for informational purposes only and may be updated
              without notice.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Unauthorized use or duplication of content is strictly prohibited.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We reserve the right to modify or terminate services at any time.
            </motion.li>
          </ul>
        </motion.section>

        {/* Privacy Policy */}
        <motion.section
          className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We value your privacy and are committed to protecting your
              personal information.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Information collected is used solely to improve your experience
              and will not be shared with third parties without consent.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Cookies may be used to enhance site functionality and analytics.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              You may contact us at any time to request access to or deletion of
              your data.
            </motion.li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
};

export default Legal;
