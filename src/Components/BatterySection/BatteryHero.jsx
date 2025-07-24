import React from "react";
import { BatteryCharging, Zap } from "lucide-react";

const BatteryHero = () => {
  return (
    <section className="w-full h-[80vh] bg-gradient-to-r from-green-200 to-green-400 flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 flex justify-center items-center gap-2">
          <BatteryCharging size={36} /> Revolutionary EV Battery
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Discover the next-gen lithium-ion battery powering your ride — fast charging, long-lasting, and built for performance.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default BatteryHero;
