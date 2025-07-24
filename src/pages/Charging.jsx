import React from "react";
import { Zap, Clock, PlugZap, TimerReset } from "lucide-react";

const Charging = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full h-[70vh] bg-gradient-to-r from-blue-200 to-indigo-300 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 flex justify-center items-center gap-2">
            <PlugZap size={36} /> Fast & Smart Charging
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Charge smarter, go farther. Experience lightning-fast charging with our HyperCharger network and at-home solutions.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Charging Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <div className="text-blue-600 mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hyper Charging</h3>
              <p className="text-gray-600">
                0 to 80% charge in just 18 minutes with our nationwide HyperCharger stations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <div className="text-indigo-600 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Overnight Charging</h3>
              <p className="text-gray-600">
                Plug in at home and wake up to a fully charged ride every morning.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <div className="text-green-600 mb-4">
                <TimerReset className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Use the app to schedule your charging during non-peak hours and save energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/powerpod/powerpod_ownit_web_image.webp"
            alt="Charging Station"
            className="w-full md:w-1/2 rounded-xl shadow-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Nationwide Charger Network</h2>
            <p className="text-gray-700 mb-4">
              Access over 10,000+ charging stations across the country. Plan long trips without worrying about battery anxiety.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time availability via app</li>
              <li>Secure & weatherproof charging docks</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Power Up Your Ride Today</h2>
        <p className="mb-6 text-lg">
          Whether at home or on the road — charging has never been easier.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Find Nearby Chargers
        </button>
      </section>
    </div>
  );
};

export default Charging;
