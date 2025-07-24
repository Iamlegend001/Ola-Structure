import React from "react";
import { Clock, Zap, Shield, Gauge } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Long Range",
    desc: "Up to 181 km on a single charge with optimal efficiency.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Charging",
    desc: "Charges from 0 to 80% in just 18 minutes with HyperCharger.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safe & Secure",
    desc: "Multi-layered BMS for protection against overheat & short circuits.",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "High Performance",
    desc: "Delivers consistent power with quick acceleration support.",
  },
];

const BatteryFeatures = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Our Battery is the Best</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryFeatures;
