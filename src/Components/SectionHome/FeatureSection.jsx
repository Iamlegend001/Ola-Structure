import React from "react";
import { Zap, Gauge, Battery, Clock } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Zap className="text-blue-600 w-8 h-8" />,
    title: "Instant Acceleration",
    description:
      "Experience lightning-fast pickup with industry-leading torque and electric motor responsiveness.",
  },
  {
    icon: <Gauge className="text-blue-600 w-8 h-8" />,
    title: "Top Speed",
    description:
      "Zoom through the streets at speeds up to 116 km/h with ultimate control and safety.",
  },
  {
    icon: <Battery className="text-blue-600 w-8 h-8" />,
    title: "Smart Battery",
    description:
      "High-capacity Lithium-ion battery with intelligent BMS for long range and better life.",
  },
  {
    icon: <Clock className="text-blue-600 w-8 h-8" />,
    title: "Fast Charging",
    description:
      "Charge up to 50% in under 30 minutes with Ola Hypercharger Network support.",
  },
];

const FeatureSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ola Electric?
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </motion.div>
        <motion.div
          className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="group bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 rounded-lg p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 group-hover:bg-blue-100 rounded-lg mb-4 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
