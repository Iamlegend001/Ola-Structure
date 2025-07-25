import React from "react";
import {
  ShieldCheck,
  ThermometerSun,
  BarChart2,
  Cpu,
  BatteryCharging,
} from "lucide-react";
import { motion } from "motion/react";

const techFeatures = [
  {
    icon: <ShieldCheck className="text-green-600 w-8 h-8 animate-pulse-slow" />,
    title: "Multi-layer Protection",
    description:
      "Equipped with 14 layers of battery safety and waterproofing (IP67 rated).",
    accent: "from-green-400 via-green-200 to-white",
  },
  {
    icon: (
      <ThermometerSun className="text-red-500 w-8 h-8 animate-pulse-slow" />
    ),
    title: "Thermal Management",
    description:
      "Advanced thermal control keeps the battery stable under all weather conditions.",
    accent: "from-red-400 via-red-200 to-white",
  },
  {
    icon: <BarChart2 className="text-blue-500 w-8 h-8 animate-pulse-slow" />,
    title: "Range Intelligence",
    description:
      "Smart BMS tracks real-time data to optimize performance and range prediction.",
    accent: "from-blue-400 via-blue-200 to-white",
  },
  {
    icon: <Cpu className="text-purple-600 w-8 h-8 animate-pulse-slow" />,
    title: "AI-Based Diagnostics",
    description: "Monitors health 24x7 and predicts issues before they occur.",
    accent: "from-purple-400 via-purple-200 to-white",
  },
];

const batteryImg =
  "https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_motor.webp";

const BatteryAndTechnology = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-28 px-4 md:px-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-32 z-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a5b4fc"
          fillOpacity="0.18"
          d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      {/* Decorative Icon Above Heading */}
      <div className="relative z-10 flex flex-col items-center mb-2">
        <BatteryCharging className="w-12 h-12 text-blue-400 animate-spin-slow mb-2 drop-shadow-lg" />
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            {/* Decorative SVG Ring */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] z-0 hidden md:block"
              viewBox="0 0 420 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="210"
                cy="210"
                r="180"
                stroke="url(#batteryRing)"
                strokeWidth="18"
                strokeDasharray="12 18"
              />
              <defs>
                <linearGradient
                  id="batteryRing"
                  x1="0"
                  y1="0"
                  x2="420"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60a5fa" />
                  <stop offset="0.5" stopColor="#a78bfa" />
                  <stop offset="1" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
            {/* Floating Icon Badge */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-400 via-blue-200 to-white rounded-full p-3 shadow-lg border-4 border-white z-20">
              <BatteryCharging className="h-10 w-10 text-blue-600 animate-pulse-slow" />
            </div>
            <img
              src={batteryImg}
              alt="Battery technology"
              className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/60 bg-white/40 backdrop-blur-md w-full h-[22rem] md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_60px_10px_rgba(99,102,241,0.25)] hover:border-blue-400 animate-glow-img"
            />
            <style>{`
              .animate-glow-img {
                box-shadow: 0 0 60px 0 rgba(99,102,241,0.10), 0 0 0 0 transparent;
                transition: box-shadow 0.5s;
              }
              .animate-glow-img:hover {
                box-shadow: 0 0 80px 10px #60a5fa66, 0 0 0 0 transparent;
              }
            `}</style>
          </div>
        </motion.div>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl">
            Battery & Technology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-6 animate-pulse" />
          <p className="text-gray-700 mb-8 text-lg font-medium">
            Our scooter is powered by India's most advanced battery
            system—designed in-house, rigorously tested, and built for
            endurance, safety, and intelligence.
          </p>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
          >
            {techFeatures.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className={`relative bg-white/60 backdrop-blur-md border-2 border-transparent hover:border-blue-400 shadow-lg rounded-xl p-6 flex flex-col items-start animate-fadein-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Accent Line */}
                <div
                  className={`w-10 h-1 bg-gradient-to-r ${tech.accent} rounded-full mb-3`}
                />
                <div className="flex items-center gap-3 mb-2">
                  {tech.icon}
                  <h4 className="font-semibold text-lg text-gray-900">
                    {tech.title}
                  </h4>
                </div>
                <p className="text-gray-500 text-sm font-medium">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Fade-in, pulse, and spin animation keyframes */}
      <style>{`
        .animate-fadein-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeinUp 0.9s forwards;
        }
        @keyframes fadeinUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.12); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.section>
  );
};

export default BatteryAndTechnology;
