import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Zap, Shield, Download } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MapPin,
    title: "Pan India Service",
    description:
      "Comprehensive service network with 600+ centers and doorstep support across the country.",
  },
  {
    icon: Zap,
    title: "Hypercharger Network",
    description:
      "Advanced rapid charging infrastructure strategically located at key destinations nationwide.",
  },
  {
    icon: Shield,
    title: "Insurance & Roadside Assistance",
    description:
      "Complete protection with comprehensive insurance coverage and 24/7 roadside assistance.",
  },
  {
    icon: Download,
    title: "Over-the-Air Updates",
    description:
      "Continuous improvement through regular software updates and feature enhancements.",
  },
];

const Ecosystem = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Ownership Ecosystem
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience seamless electric mobility with our comprehensive support
            infrastructure designed for convenience, reliability, and peace of
            mind.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {features.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="group bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 group-hover:bg-blue-100 rounded-lg mb-4 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <Badge
                      variant="outline"
                      className="border-blue-200 text-blue-700 font-medium"
                    >
                      {item.title}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 bg-white rounded-lg border border-gray-200 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Ecosystem?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our integrated approach ensures every aspect of your electric
            vehicle ownership is supported by reliable infrastructure and
            dedicated service excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Technology Integration</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Quality Assurance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Ecosystem;
