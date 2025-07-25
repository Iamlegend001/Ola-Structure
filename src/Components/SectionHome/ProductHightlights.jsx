// components/ProductHighlights.jsx
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scooterData } from "../../Constants/scooterData";
import { motorcycleData } from "../../Constants/motorcycleData";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const ProductHighlights = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Collection
          </h2>
          <div className="w-30 h-px bg-gray-900 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {scooterData.map((scooter, idx) => (
            <Card
              key={scooter.id}
              className="relative bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 rounded-none overflow-hidden group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
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
                    ₹{scooter.price.toLocaleString()}
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
                <Button className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors duration-200 rounded-none group/btn">
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
          ))}
        </div>
        {/* Motorcycles Section */}
        <div className="text-center mt-24 mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Motorcycles
          </h2>
          <div className="w-30 h-px bg-gray-900 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {motorcycleData.map((motorcycle, idx) => (
            <Card
              key={motorcycle.id}
              className="relative bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 rounded-none overflow-hidden group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
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
                    favorites.includes(motorcycle.id) ? "currentColor" : "none"
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
                <Button className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors duration-200 rounded-none group/btn">
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
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > * {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductHighlights;
