import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Factory,
  Zap,
  Users,
  Calendar,
  MapPin,
  ChevronRight,
  Battery,
  Cpu,
  ArrowRight
} from "lucide-react";

const Experience = () => {
  const [currentStats, setCurrentStats] = useState({
    visitors: 15240,
    robots: 3127,
    tours: 892
  });

  // Animate stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        robots: 3127 + Math.floor(Math.random() * 10) - 5,
        tours: prev.tours + Math.floor(Math.random() * 2)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 'factory',
      icon: Factory,
      title: 'FutureFactory Tour',
      subtitle: 'Advanced EV Manufacturing Experience',
      description: 'Explore our state-of-the-art manufacturing facility featuring 3000+ AI-powered robots and witness precision engineering in sustainable vehicle production.',
      buttonText: 'Schedule Factory Tour',
      highlights: ['Live Production Line', 'Technology Demonstration', 'Sustainability Overview'],
      stats: { label: 'Active Robots', value: currentStats.robots }
    },
    {
      id: 'experience',
      icon: Eye,
      title: 'Experience Center',
      subtitle: 'Interactive Product Showcase',
      description: 'Visit our flagship centers to experience our electric vehicle lineup, participate in product demonstrations, and receive expert consultation.',
      buttonText: 'Find Experience Center',
      highlights: ['Vehicle Test Drives', 'Product Consultation', 'Technical Specifications'],
      stats: { label: 'Monthly Visitors', value: currentStats.visitors }
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of Mobility
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge manufacturing processes and experience our electric vehicle technology
            through guided tours and interactive demonstrations at our facilities worldwide.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{currentStats.visitors.toLocaleString()}+ Monthly Visitors</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{currentStats.tours}+ Tours Completed Today</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <Card
                key={feature.id}
                className="group bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                {/* Card Header with Icon */}
                <div className="relative p-8 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 text-sm mb-1">
                        <Cpu className="w-4 h-4 mr-1" />
                        <span className="font-medium">{feature.stats.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">
                        {feature.stats.value.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-lg text-blue-600 font-medium mb-4">
                      {feature.subtitle}
                    </p>
                    <div className="w-16 h-1 bg-blue-600 mb-4" />
                  </CardHeader>
                </div>

                <CardContent className="p-8 pt-0">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-3 mb-8">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {feature.buttonText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-lg mb-6">
            <Battery className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Electric Revolution
          </h3>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience firsthand how we're building the future of sustainable transportation.
            Schedule your visit today and see innovation in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              <MapPin className="w-4 h-4 mr-2" />
              Find Nearest Location
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Schedule Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;