import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Battery,
  Zap,
  Clock,
  Gauge,
  Shield,
  Wrench,
  Star,
  Check,
  ChevronDown,
  Play,
} from "lucide-react";
import { scooterData } from "../Constants/scooterData";

const colorVariants = {
  "Crimson Red": "#dc2626",
  "Jet Black": "#1f2937",
  "Neo Mint": "#10b981",
  "Porcelain White": "#f8fafc",
};

const ScooterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scooter = scooterData.find((s) => s.id === id);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!scooter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scooter Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The scooter you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Models
          </button>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src={scooter.bannerImage || scooter.image}
          alt={scooter.name}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-tight">
            {scooter.name}
          </h1>
          {scooter.tagline && (
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto">
              {scooter.tagline}
            </p>
          )}

          {/* Rating Display */}
          {scooter.rating && (
            <div className="flex items-center justify-center gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      i < Math.floor(scooter.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                ))}
                <span className="ml-2 text-base sm:text-lg">
                  {scooter.rating} ({scooter.reviews} reviews)
                </span>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-colors">
              Configure Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
        </div>
      </section>

      {/* Quick Specs Bar */}
      <section className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                {scooter.specs.range}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Max Range
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                {scooter.specs.topSpeed}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Top Speed
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                {scooter.specs.chargingTime}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Fast Charge
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
                {scooter.specs.power}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Peak Power
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Product Image & Colors */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              <img
                src={scooter.image}
                alt={scooter.name}
                className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 object-contain"
              />
            </div>

            {scooter.specs.colors && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Available Colors</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {scooter.specs.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 transition-all ${
                        selectedColor === idx
                          ? "border-gray-900 scale-110"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        backgroundColor: colorVariants[color] || "#eee",
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {scooter.specs.colors[selectedColor]}
                </p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
                {scooter.name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {scooter.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
                  {scooter.price}
                </span>
                {scooter.originalPrice && (
                  <>
                    <span className="text-xl sm:text-2xl text-gray-400 line-through">
                      {scooter.originalPrice}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Save ₹20,000
                    </span>
                  </>
                )}
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="text-yellow-800 font-semibold text-sm sm:text-base">
                  EMI from {scooter.emi}
                </div>
                {scooter.additionalInfo && (
                  <div className="text-xs text-yellow-600 mt-1">
                    {scooter.additionalInfo}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gray-900 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors">
                Book Test Ride
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Performance Specs */}
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-blue-600 p-2 sm:p-3 rounded-lg">
                  <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Performance
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Top Speed
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.specs.topSpeed}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Range
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.specs.range}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Acceleration
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.specs.acceleration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Power
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.specs.power}
                  </span>
                </div>
              </div>
            </div>

            {/* Battery Specs */}
            <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-green-600 p-2 sm:p-3 rounded-lg">
                  <Battery className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Battery
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Capacity
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.battery?.capacity || scooter.specs.battery}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Type
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.battery?.type || "Li-ion"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Charging Time
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.specs.chargingTime}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Warranty
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.battery?.warranty || scooter.specs.warranty}
                  </span>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-purple-600 p-2 sm:p-3 rounded-lg">
                  <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Dimensions
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Length
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.dimensions?.length || "1859 mm"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Width
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.dimensions?.width || "700 mm"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Height
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.dimensions?.height || "1115 mm"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Weight
                  </span>
                  <span className="font-semibold text-sm sm:text-base">
                    {scooter.dimensions?.kerbWeight ||
                      scooter.specs.weight ||
                      "125 kg"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {scooter.features && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {scooter.features.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {category.category || "Features"}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {(category.items || []).map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Battery Deep Dive */}
        {scooter.battery && (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Advanced Battery Technology
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading battery technology for superior performance and
                longevity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="bg-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Battery className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  High Capacity
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {scooter.battery.capacity} battery
                  {scooter.battery.cells &&
                    ` with ${scooter.battery.cells}`}{" "}
                  for maximum range
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Fast Charging
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Multiple charging options for convenient power-ups
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  Long Lasting
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {scooter.battery.batteryLife} battery life with comprehensive
                  warranty
                </p>
              </div>
            </div>

            {scooter.battery.chargingOptions && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Charging Options
                </h3>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  {scooter.battery.chargingOptions.map((option, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center"
                    >
                      <div className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {option.type}
                      </div>
                      <div className="text-sm text-gray-600">{option.time}</div>
                      <div className="text-xs text-gray-500">
                        {option.power}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of riders who have made the switch to electric
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors">
              Schedule Test Ride
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors">
              Get Financing Options
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScooterDetails;
