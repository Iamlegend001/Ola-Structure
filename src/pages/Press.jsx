import React from "react";
import { motion } from "motion/react";

const pressNews = [
  {
    title: "Ola Electric Launches New S1 Scooter",
    date: "2024-05-10",
    summary:
      "Ola Electric unveils the latest S1 scooter with improved range and features.",
    link: "#",
  },
  {
    title: "Ola Electric Expands to Europe",
    date: "2024-04-22",
    summary: "Ola Electric announces its expansion into the European market.",
    link: "#",
  },
  {
    title: "Ola Factory Achieves Sustainability Milestone",
    date: "2024-03-15",
    summary: "Ola’s Futurefactory is now powered by 100% renewable energy.",
    link: "#",
  },
];

const mediaMentions = [
  {
    outlet: "TechCrunch",
    quote:
      "Ola Electric is redefining the future of mobility in India and beyond.",
    link: "#",
  },
  {
    outlet: "The Economic Times",
    quote: "A game changer in the electric vehicle industry.",
    link: "#",
  },
  {
    outlet: "Reuters",
    quote: "Ola Electric’s rapid growth signals a shift in the EV market.",
    link: "#",
  },
];

const Press = () => {
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
        className="w-full bg-black text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ola Electric in the News
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Stay up to date with the latest news, announcements, and media
          coverage about Ola Electric.
        </p>
      </motion.section>
      {/* Latest News */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {pressNews.map((news, idx) => (
            <motion.a
              key={idx}
              href={news.link}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="block border rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-700 mb-2">{news.summary}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-right">
                  {news.date}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
      {/* Media Mentions */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-4xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-6">Media Mentions</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {mediaMentions.map((mention, idx) => (
            <motion.a
              key={idx}
              href={mention.link}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="block border rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="mb-2 text-lg font-bold">{mention.outlet}</div>
              <div className="text-gray-700 italic">"{mention.quote}"</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
      {/* Press Contact */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-4xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>
        <div className="bg-gray-100 rounded-lg p-6">
          <p className="mb-2">For press inquiries, please contact:</p>
          <a
            href="mailto:press@olaelectric.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            press@olaelectric.com
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Press;
