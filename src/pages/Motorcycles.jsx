import React from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { motorcycleData } from "../Constants/motorcycleData";

const Motorcycles = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      gestureOrientation: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="text-center z-10 px-6">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-6 tracking-tighter">
            ELECTRIC
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8 tracking-wide">
            The Future Rides Here
          </p>
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-white mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Motorcycle Sections */}
      {motorcycleData.map((bike, index) => (
        <section
          key={bike.id}
          className="h-screen relative overflow-hidden flex items-center"
          style={{
            background: `linear-gradient(135deg, ${bike.gradientFrom}, ${bike.gradientTo})`,
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${bike.accentColor}40 2px, transparent 2px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-6 lg:px-12 flex items-center h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Side - Content */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ position: "relative", zIndex: 10 }}
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className="w-12 h-1 rounded-full"
                      style={{ backgroundColor: bike.accentColor }}
                    ></div>
                    <span className="text-gray-300 font-medium tracking-widest uppercase text-sm">
                      Model {index + 1}
                    </span>
                  </div>

                  <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-none">
                    {bike.name.split(" ").map((word, i) => (
                      <div
                        key={i}
                        className={i === 1 ? `text-[${bike.accentColor}]` : ""}
                        style={i === 1 ? { color: bike.accentColor } : {}}
                      >
                        {word}
                      </div>
                    ))}
                  </h2>

                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    {bike.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-black text-white mb-1">
                      {bike.specs.range}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      RANGE
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-black text-white mb-1">
                      {bike.specs.topSpeed}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      TOP SPEED
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-black text-white mb-1">
                      {bike.specs.power}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      POWER
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-black text-white mb-1">
                      {bike.specs.chargingTime}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide">
                      CHARGE TIME
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-5xl font-black text-white">
                        {bike.price}
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        EMI from ₹4,999/month
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      className="px-8 py-4 rounded-2xl font-bold text-lg text-white hover:scale-105 transition-all duration-300 shadow-2xl"
                      style={{ backgroundColor: bike.accentColor }}
                    >
                      Reserve Now
                    </button>
                    <Link
                      to={`/motorcycles/${bike.id}`}
                      className="px-8 py-4 rounded-2xl font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                    style={{ backgroundColor: bike.accentColor }}
                  ></div>

                  {/* Main Image */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        Electric ⚡
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className="absolute -z-10 top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                  style={{ backgroundColor: bike.accentColor }}
                ></div>
                <div
                  className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 rounded-full opacity-5"
                  style={{ backgroundColor: bike.accentColor }}
                ></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="h-screen bg-gradient-to-t from-black via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="text-center z-10 px-6 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
            Ready to Ride?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the electric revolution. Book your test ride today and
            experience the future of mobility.
          </p>
          <div className="space-y-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              Schedule Test Ride
            </button>
            <div className="text-gray-400">
              Available in 50+ cities across India
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Motorcycles;
