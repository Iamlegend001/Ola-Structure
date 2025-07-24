import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Gauge, Zap, Clock, Star } from "lucide-react";

// Inline motorcycleData for detail lookup
const motorcycleData = [
  {
    id: "m1",
    name: "Ola Roadster X",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp",
    specs: {
      range: "220 km",
      topSpeed: "135 km/h",
      chargingTime: "3.5 hrs",
      battery: "6.5 kWh",
      power: "18 kW",
    },
    price: "₹2,49,999",
    description:
      "A futuristic electric motorcycle with aggressive styling, high performance, and advanced connectivity features.",
    accentColor: "#2563eb",
    backgroundColor: "#0f172a",
    gradientFrom: "#1e293b",
    gradientTo: "#0f172a",
  },
  {
    id: "m2",
    name: "Ola Cruiser",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/bike/cruiser/cruiser_banner_web_image.webp",
    specs: {
      range: "180 km",
      topSpeed: "120 km/h",
      chargingTime: "4 hrs",
      battery: "5.2 kWh",
      power: "15 kW",
    },
    price: "₹2,19,999",
    description:
      "A comfortable electric cruiser for long rides, blending classic design with modern technology.",
    accentColor: "#059669",
    backgroundColor: "#064e3b",
    gradientFrom: "#065f46",
    gradientTo: "#064e3b",
  },
  {
    id: "m3",
    name: "Ola Adventure",
    image:
      "https://cdn.olaelectric.com/sites/evdp/pages/bike/adventure/adventure_banner_web_image.webp",
    specs: {
      range: "200 km",
      topSpeed: "125 km/h",
      chargingTime: "4.2 hrs",
      battery: "5.8 kWh",
      power: "16 kW",
    },
    price: "₹2,39,999",
    description:
      "Go anywhere with this electric adventure bike, built for both city and off-road exploration.",
    accentColor: "#ea580c",
    backgroundColor: "#9a3412",
    gradientFrom: "#c2410c",
    gradientTo: "#9a3412",
  },
];

const MotorCycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = motorcycleData.find((b) => b.id === id);

  if (!bike) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Motorcycle Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The motorcycle you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${bike.gradientFrom}, ${bike.gradientTo})`,
          }}
        ></div>
        <img
          src={bike.image}
          alt={bike.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-black mb-4 drop-shadow-2xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            {bike.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto">
            {bike.description}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-semibold text-lg transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Motorcycles
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image & Glow */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
            style={{ backgroundColor: bike.accentColor }}
          ></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <video
              src="https://cdn.olaelectric.com/sites/evdp/pages/roadster-x/blue_theme/videos/mrx_banner_web_video_v2.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              poster={bike.image}
            />
            <div className="absolute top-4 right-4">
              <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                Electric ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg">
              {bike.name}
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              {bike.description}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-lg shadow">
                {bike.price}
              </span>
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full font-semibold text-base shadow">
                EMI from ₹4,999/month
              </span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-center">
              <Gauge className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-2xl font-black text-white mb-1">
                {bike.specs.topSpeed}
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wide">
                TOP SPEED
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-2xl font-black text-white mb-1">
                {bike.specs.power}
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wide">
                POWER
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-center">
              <Clock className="w-8 h-8 text-green-400 mb-2" />
              <div className="text-2xl font-black text-white mb-1">
                {bike.specs.chargingTime}
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wide">
                CHARGE TIME
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col items-center">
              <Star className="w-8 h-8 text-pink-400 mb-2" />
              <div className="text-2xl font-black text-white mb-1">
                {bike.specs.range}
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wide">
                RANGE
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Test Ride
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorCycleDetails;
