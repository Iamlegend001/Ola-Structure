import React from "react";

const images = [
  "https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_brake.webp",
  "https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_suspension_1.webp",
  "https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_chassis.webp",
  "https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/performance_chassis.webp"
];

const BatteryGallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Battery View ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryGallery;
