import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Clock,
  Battery,
  Gauge,
  ArrowRight,
} from "lucide-react";
import Lenis from "lenis";

// Sample scooter data - replace with your actual scooterData import
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
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scrolling on the container
  useEffect(() => {
    if (!containerRef.current) return;
    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current,
      duration: 1.2,
      smooth: true,
      gestureOrientation: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  // Advanced effect: fade-in and slide-up for cards
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-card");
          } else {
            entry.target.classList.remove("fade-in-card");
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [scooterData.length]);

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % scooterData.length;
    setCurrentIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  const scrollToPrev = () => {
    const prevIndex =
      currentIndex === 0 ? scooterData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToCard(prevIndex);
  };

  // Use Lenis for smooth scroll to card
  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    if (card && lenisRef.current) {
      lenisRef.current.scrollTo(card, { offset: -20 });
    } else if (containerRef.current) {
      // fallback to native
      const cardHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: index * cardHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Header with Logo - Fixed */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-center py-4">
          <img src={OLA_LOGO} alt="Ola Electric" className="w-12 h-12 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Electric Scooters
          </h1>
        </div>
      </div> */}

      {/* Scooter Cards Container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto scroll-smooth pt-20"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          .fade-in-card {
            opacity: 1 !important;
            transform: translateY(0) scale(1) !important;
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>

        {scooterData.map((scooter, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="h-screen flex items-center opacity-0 scale-95"
            style={{
              backgroundColor: scooter.backgroundColor,
              transform: "translateY(40px) scale(0.98)",
              transition: "opacity 0.8s, transform 0.8s",
            }}
          >
            <div className="w-full max-w-none px-0">
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="flex items-center justify-center p-12 lg:p-16">
                  <div className="relative max-w-lg w-full">
                    {/* Professional Badge */}
                    <div className="absolute -top-4 -left-4 z-10">
                      <div
                        className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                        style={{ backgroundColor: scooter.accentColor }}
                      >
                        PROFESSIONAL SERIES
                      </div>
                    </div>

                    {/* Main Image */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                      <img
                        src={scooter.image}
                        alt={scooter.name}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>

                    {/* Floating Specs */}
                    <div
                      className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border-l-4"
                      style={{ borderColor: scooter.accentColor }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {scooter.specs.range}
                          </div>
                          <div className="text-xs text-gray-500">RANGE</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {scooter.specs.topSpeed}
                          </div>
                          <div className="text-xs text-gray-500">TOP SPEED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex items-center justify-center p-12 lg:p-16 bg-white">
                  <div className="max-w-xl w-full">
                    {/* Model Name */}
                    <div className="mb-8">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Model {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                        {scooter.name}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {scooter.description}
                      </p>
                    </div>

                    {/* Technical Specifications */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Battery
                              className="w-5 h-5"
                              style={{ color: scooter.accentColor }}
                            />
                            <span className="text-sm font-medium text-gray-500">
                              Battery
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {scooter.specs.battery}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock
                              className="w-5 h-5"
                              style={{ color: scooter.accentColor }}
                            />
                            <span className="text-sm font-medium text-gray-500">
                              Charging
                            </span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {scooter.specs.chargingTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            Starting from
                          </div>
                          <div className="text-4xl font-black text-gray-900">
                            {scooter.price}
                          </div>
                        </div>
                        <div className="bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-lg">
                          <div className="text-sm font-semibold text-yellow-800">
                            EMI from ₹2,999/month
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          to={`/scooter/${scooter.id}`}
                          className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                          View Details <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                          className="flex-1 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                          style={{ backgroundColor: scooter.accentColor }}
                        >
                          Configure Now
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Fixed Bottom Center */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <button
            onClick={scrollToPrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={currentIndex === 0}
          >
            <ChevronUp
              className={`w-6 h-6 ${
                currentIndex === 0 ? "text-gray-300" : "text-gray-700"
              }`}
            />
          </button>

          <div className="flex gap-2">
            {scooterData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToCard(idx);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollToNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            disabled={currentIndex === scooterData.length - 1}
          >
            <ChevronDown
              className={`w-6 h-6 ${
                currentIndex === scooterData.length - 1
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scooter;
