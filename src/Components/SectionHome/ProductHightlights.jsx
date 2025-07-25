// components/ProductHighlights.jsx
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../Components/ui/card";
import { scooterData } from "../../Constants/scooterData";
import { motorcycleData } from "../../Constants/motorcycleData";
import { Button } from "../../Components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const ProductHighlights = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Collection
          </h2>
          <div className="w-30 h-px bg-gray-900 mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {scooterData.map((scooter, idx) => (
            <motion.div
              key={scooter.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <Card className="relative bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 rounded-none overflow-hidden group">
                {/* Favorite Button */}
                <button
                  className={`absolute top-6 right-6 z-20 p-2 transition-colors duration-200 ${
                    favorites.includes(scooter.id)
                      ? "text-red-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => toggleFavorite(scooter.id)}
                  aria-label="Save for later"
                >
                  <Heart
                    fill={
                      favorites.includes(scooter.id) ? "currentColor" : "none"
                    }
                    size={20}
                  />
                </button>

                {/* Product Image */}
                <div className="relative w-full h-80 bg-gray-50">
                  <img
                    src={scooter.image}
                    alt={scooter.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  {/* Product Name */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2">
                      {scooter.name}
                    </h3>
                    <div className="text-2xl font-medium text-gray-900">
                      {scooter.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Range
                      </span>
                      <span className="text-gray-900 font-medium">
                        {scooter.specs.range}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Top Speed
                      </span>
                      <span className="text-gray-900 font-medium">
                        {scooter.specs.topSpeed}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Charging Time
                      </span>
                      <span className="text-gray-900 font-medium">
                        {scooter.specs.chargingTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Battery
                      </span>
                      <span className="text-gray-900 font-medium">
                        {scooter.specs.battery}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors duration-200 rounded-none group/btn"
                    onClick={() => navigate(`/scooter/${scooter.id}`)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-200"
                      />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* Motorcycles Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mt-24 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Motorcycles
          </h2>
          <div className="w-30 h-px bg-gray-900 mx-auto" />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {},
          }}
        >
          {motorcycleData.map((motorcycle, idx) => (
            <motion.div
              key={motorcycle.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <Card className="relative bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 rounded-none overflow-hidden group">
                {/* Favorite Button */}
                <button
                  className={`absolute top-6 right-6 z-20 p-2 transition-colors duration-200 ${
                    favorites.includes(motorcycle.id)
                      ? "text-red-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => toggleFavorite(motorcycle.id)}
                  aria-label="Save for later"
                >
                  <Heart
                    fill={
                      favorites.includes(motorcycle.id)
                        ? "currentColor"
                        : "none"
                    }
                    size={20}
                  />
                </button>
                {/* Product Image */}
                <div className="relative w-full h-80 bg-gray-50">
                  <img
                    src={motorcycle.image}
                    alt={motorcycle.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  {/* Product Name */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2">
                      {motorcycle.name}
                    </h3>
                    <div className="text-2xl font-medium text-gray-900">
                      ₹{motorcycle.price.toLocaleString()}
                    </div>
                  </div>
                  {/* Specifications */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Range
                      </span>
                      <span className="text-gray-900 font-medium">
                        {motorcycle.specs.range}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Top Speed
                      </span>
                      <span className="text-gray-900 font-medium">
                        {motorcycle.specs.topSpeed}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Charging Time
                      </span>
                      <span className="text-gray-900 font-medium">
                        {motorcycle.specs.chargingTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm uppercase tracking-wide">
                        Battery
                      </span>
                      <span className="text-gray-900 font-medium">
                        {motorcycle.specs.battery}
                      </span>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <Button
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors duration-200 rounded-none group/btn"
                    onClick={() => navigate(`/motorcycles/${motorcycle.id}`)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-200"
                      />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductHighlights;
