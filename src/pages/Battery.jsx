import React, { useRef } from "react";
import BatteryHero from "../Components/BatterySection/BatteryHero";
import BatteryFeatures from "../Components/BatterySection/BatteryFeatures";
import BatteryGallary from "../Components/BatterySection/BatteryGallary";
import BatteryTech from "../Components/BatterySection/BatteryTech";
import { Button } from "../Components/ui/button";

const Battery = () => {
  // Refs for scrolling
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const techRef = useRef(null);

  const handleNav = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Floating Quick Nav */}
      <nav className="fixed top-8 right-8 z-30 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-2 flex gap-4 border border-gray-200">
        <button
          onClick={() => handleNav(heroRef)}
          className="font-semibold text-gray-700 hover:text-black transition"
        >
          Overview
        </button>
        <button
          onClick={() => handleNav(featuresRef)}
          className="font-semibold text-gray-700 hover:text-black transition"
        >
          Features
        </button>
        <button
          onClick={() => handleNav(galleryRef)}
          className="font-semibold text-gray-700 hover:text-black transition"
        >
          Gallery
        </button>
        <button
          onClick={() => handleNav(techRef)}
          className="font-semibold text-gray-700 hover:text-black transition"
        >
          Tech
        </button>
      </nav>

      {/* Sections with fade-in animation */}
      <section id="hero" ref={heroRef} className="animate-fadein">
        <BatteryHero />
      </section>
      <section
        id="features"
        ref={featuresRef}
        className="animate-fadein delay-100"
      >
        <BatteryFeatures />
      </section>
      <section
        id="gallery"
        ref={galleryRef}
        className="animate-fadein delay-200"
      >
        <BatteryGallary />
      </section>
      <section id="tech" ref={techRef} className="animate-fadein delay-300">
        <BatteryTech />
      </section>

      {/* Call to Action */}
      <div className="w-full flex justify-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to experience the future of EV batteries?
          </h2>
          <Button className="bg-white text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition">
            Book a Test Ride
          </Button>
        </div>
      </div>

      {/* Fade-in animation keyframes (Tailwind custom) */}
      <style>{`
        .animate-fadein {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeinUp 0.8s forwards;
        }
        .animate-fadein.delay-100 { animation-delay: 0.1s; }
        .animate-fadein.delay-200 { animation-delay: 0.2s; }
        .animate-fadein.delay-300 { animation-delay: 0.3s; }
        @keyframes fadeinUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Battery;
