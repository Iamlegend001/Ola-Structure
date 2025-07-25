import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      review:
        "Ola has completely transformed my daily commute! The community rides feature helped me make amazing friends who share the same passion for exploring the city.",
      role: "Marketing Executive",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      review:
        "The weekend mountain rides organized through Ola community are incredible! Safe, fun, and well-organized. I've discovered so many beautiful places I never knew existed.",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Bangalore",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      review:
        "As a solo female rider, I was initially hesitant. But the Ola community's safety measures and supportive environment made me feel confident and secure during every ride.",
      role: "Designer",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Chennai",
      avatar: "https://i.pravatar.cc/150?img=7",
      rating: 5,
      review:
        "The coastal drives with Ola community are magical! Professional organization, great people, and unforgettable experiences. It's more than just a ride - it's an adventure.",
      role: "Photographer",
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Hyderabad",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      review:
        "Ola's community events helped me overcome my fear of long rides. The supportive group and experienced riders made every journey a learning experience. Highly recommended!",
      role: "Teacher",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      location: "Pune",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      review:
        "The tech meetups combined with rides are genius! Meeting like-minded professionals while exploring beautiful routes - Ola community has redefined networking for me.",
      role: "Tech Lead",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            What Our Community Says
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real stories from real riders who've experienced the magic of Ola
            community
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handlePrevSlide}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative flex justify-center">
          <div className="flex gap-6 w-full max-w-4xl items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex === 0
                  ? testimonials.length - 1
                  : currentIndex - 1);
              const isNext = index === (currentIndex + 1) % testimonials.length;
              return (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-80 transition-all duration-700 ease-out ${
                    isActive
                      ? "scale-100 opacity-100 z-20"
                      : isPrev || isNext
                      ? "scale-95 opacity-70 z-10"
                      : "scale-90 opacity-0 pointer-events-none z-0"
                  }`}
                  style={{
                    transform: isActive
                      ? "scale(1)"
                      : isPrev || isNext
                      ? "scale(0.95)"
                      : "scale(0.9)",
                    opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0,
                    pointerEvents:
                      isActive || isPrev || isNext ? "auto" : "none",
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <div className="absolute inset-[2px] bg-white rounded-3xl -z-10"></div>

                    {/* Quote Icon */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <Quote className="w-12 h-12 text-white" />
                    </div>

                    {/* Avatar and Info */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-orange-400 to-pink-500 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-gray-700 text-center leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </blockquote>

                    {/* Decorative Elements */}
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50K+", label: "Happy Riders" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "1M+", label: "Rides Completed" },
            { number: "25+", label: "Cities Covered" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Join Our Community Today
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
