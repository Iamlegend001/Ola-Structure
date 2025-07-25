import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Clock,
  Battery,
  Gauge,
  ArrowRight,
} from "lucide-react";

// Sample scooter data
const scooterData = [
  {
    id: "s1pro",
    name: "Ola S1 Pro 3rd Gen",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_plus_gen3_web_image_v2.webp",
    price: "₹1,29,999",
    specs: {
      range: "181 km",
      topSpeed: "115 km/h",
      chargingTime: "2.5 hours",
      battery: "4 kWh",
    },
    description:
      "The ultimate electric scooter with industry-leading range and performance for the modern professional",
    backgroundColor: "#1e293b",
    accentColor: "#3b82f6",
  },
  {
    id: "s1air",
    name: "Ola S1 Air 3rd Gen",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_gen3_web_image_v2.webp",
    price: "₹84,999",
    specs: {
      range: "101 km",
      topSpeed: "85 km/h",
      chargingTime: "4.5 hours",
      battery: "2.5 kWh",
    },
    description:
      "Smart, stylish, and sustainable mobility solution designed for urban commuting excellence",
    backgroundColor: "#064e3b",
    accentColor: "#10b981",
  },
  {
    id: "s1x",
    name: "Ola S1 X",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_plus_gen3_web_image_v2.webp",
    price: "₹74,999",
    specs: {
      range: "91 km",
      topSpeed: "85 km/h",
      chargingTime: "5 hours",
      battery: "2 kWh",
    },
    description:
      "Affordable excellence with premium features and reliable performance for everyday mobility",
    backgroundColor: "#7c2d12",
    accentColor: "#f97316",
  },
];

const Scooter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        scrollToNext();
      }
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isAnimating) return;

      switch (event.key) {
        case 'ArrowDown':
        case ' ': // Spacebar
          event.preventDefault();
          scrollToNext();
          break;
        case 'ArrowUp':
          event.preventDefault();
          scrollToPrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  const scrollToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % scooterData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const scrollToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? scooterData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const scrollToIndex = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const specsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-white z-50"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentIndex + 1) / scooterData.length) * 100}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Main content */}
      <div className="relative h-full">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 h-full flex items-center"
            style={{
              backgroundColor: scooterData[currentIndex].backgroundColor,
            }}
          >
            <div className="w-full max-w-none px-0">
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Section */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center justify-center p-12 lg:p-16"
                >
                  <div className="relative max-w-lg w-full">
                    {/* Professional Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="absolute -top-4 -left-4 z-10"
                    >
                      <div
                        className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                        style={{ backgroundColor: scooterData[currentIndex].accentColor }}
                      >
                        PROFESSIONAL SERIES
                      </div>
                    </motion.div>

                    {/* Main Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl p-8 shadow-2xl"
                    >
                      <motion.img
                        src={scooterData[currentIndex].image}
                        alt={scooterData[currentIndex].name}
                        className="w-full h-80 object-cover rounded-xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Floating Specs */}
                    <motion.div
                      variants={specsVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border-l-4"
                      style={{ borderColor: scooterData[currentIndex].accentColor }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-2xl font-bold text-gray-900"
                          >
                            {scooterData[currentIndex].specs.range}
                          </motion.div>
                          <div className="text-xs text-gray-500">RANGE</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="text-center">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-2xl font-bold text-gray-900"
                          >
                            {scooterData[currentIndex].specs.topSpeed}
                          </motion.div>
                          <div className="text-xs text-gray-500">TOP SPEED</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center justify-center p-12 lg:p-16 bg-white"
                >
                  <div className="max-w-xl w-full">
                    {/* Model Name */}
                    <div className="mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
                      >
                        Model {String(currentIndex + 1).padStart(2, "0")}
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
                      >
                        {scooterData[currentIndex].name}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-gray-600 leading-relaxed"
                      >
                        {scooterData[currentIndex].description}
                      </motion.p>
                    </div>

                    {/* Technical Specifications */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-8"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Battery
                              className="w-5 h-5"
                              style={{ color: scooterData[currentIndex].accentColor }}
                            />
                            <span className="text-sm font-medium text-gray-500">
                              Battery
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {scooterData[currentIndex].specs.battery}
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Clock
                              className="w-5 h-5"
                              style={{ color: scooterData[currentIndex].accentColor }}
                            />
                            <span className="text-sm font-medium text-gray-500">
                              Charging
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {scooterData[currentIndex].specs.chargingTime}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Pricing and CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="border-t border-gray-200 pt-8"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Starting from
                          </div>
                          <div className="text-4xl font-black text-gray-900">
                            {scooterData[currentIndex].price}
                          </div>
                        </div>
                        <div className="bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-lg">
                          <div className="text-sm font-semibold text-yellow-800">
                            EMI from ₹2,999/month
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Link
                            to={`/scooter/${scooterData[currentIndex].id}`}
                            className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                          >
                            View Details <ArrowRight className="w-5 h-5" />
                          </Link>
                        </motion.div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                          style={{ backgroundColor: scooterData[currentIndex].accentColor }}
                        >
                          Configure Now
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Fixed Bottom Center */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToPrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
            <ChevronUp
              className={`w-6 h-6 ${
                isAnimating ? "text-gray-300" : "text-gray-700"
              }`}
            />
          </motion.button>

          <div className="flex gap-2">
            {scooterData.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => scrollToIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
            <ChevronDown
              className={`w-6 h-6 ${
                isAnimating ? "text-gray-300" : "text-gray-700"
              }`}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Side Navigation Hints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 text-white/60 text-sm hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span>↑ ↓</span>
          <span className="writing-mode-vertical text-xs">Navigate</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Scooter;