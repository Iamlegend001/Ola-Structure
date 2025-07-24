import React from "react";

const BatteryTech = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_motor.webp"
          alt="Battery Cutaway"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Advanced Lithium-Ion Technology</h2>
          <p className="text-gray-700 mb-4">
            Built with 21700 cells — the same used in premium electric cars — this battery provides superior density, performance, and longevity.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>IP67 rated for dust and water resistance</li>
            <li>Built-in Battery Management System (BMS)</li>
            <li>Smart cooling for consistent performance</li>
            <li>1000+ charge cycles without significant degradation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BatteryTech;
