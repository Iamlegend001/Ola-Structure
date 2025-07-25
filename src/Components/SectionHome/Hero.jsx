import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_banner/hpb_web_image.webp",
      title: "Revolutionary Electric Mobility",
      subtitle: "Experience the future of transportation",
      buttonText: "Explore Now",
      link: "/scooter",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home/hp_banner_web_image_180325.webp",
      title: "Smart Electric Scooters",
      subtitle: "Ride into tomorrow with cutting-edge technology",
      buttonText: "View Models",
      link: "/scooter",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/bike/roadster_x/rodster_x_banner_web_image.webp",
      title: "Roadster X Series",
      subtitle: "Power meets performance in electric excellence",
      buttonText: "Discover Roadster",
      link: "/motorcycles",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/gen3/hp_gen3_banner_web_image_03.webp",
      title: "Generation 3 Innovation",
      subtitle: "Next-level electric vehicle technology",
      buttonText: "Learn More",
      link: "/battery",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home/hp_gen3_banner_web_image_03_070225.webp",
      title: "Enhanced Gen3 Experience",
      subtitle: "Advanced features for the modern rider",
      buttonText: "Get Started",
      link: "/buy",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/gig/home_banner_gig_web_image_v2.webp",
      title: "Gig Economy Solutions",
      subtitle: "Empowering delivery partners with electric mobility",
      buttonText: "Join Gig",
      link: "/careers",
    },
    {
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_banner_hyperservices_web_v3.webp",
      title: "HyperServices Network",
      subtitle: "Comprehensive electric vehicle ecosystem",
      buttonText: "Explore Services",
      link: "/contact",
    },
  ];

  // Initialize Swiper
  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && swiperRef.current) {
        const swiperInstance = new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: "slide",
          speed: 800,
          autoplay: isAutoPlay
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: (swiper) => {
              setCurrentSlide(swiper.realIndex);
            },
          },
        });
        setSwiper(swiperInstance);
      }
    };

    // Load Swiper CSS and JS
    if (!document.querySelector("#swiper-css")) {
      const css = document.createElement("link");
      css.id = "swiper-css";
      css.rel = "stylesheet";
      css.href =
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css";
      document.head.appendChild(css);
    }

    if (!window.Swiper) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js";
      script.onload = initSwiper;
      document.body.appendChild(script);
    } else {
      initSwiper();
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  // Handle autoplay toggle
  useEffect(() => {
    if (swiper) {
      if (isAutoPlay) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    }
  }, [isAutoPlay, swiper]);

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Swiper Container */}
      <div ref={swiperRef} className="swiper w-full h-full">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide relative">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Text Overlay with Better Contrast */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center text-center"
              >
                <div className="max-w-4xl px-6 z-10">
                  <div className="bg-black/40 rounded-2xl p-8 md:p-12">
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg md:text-xl lg:text-2xl mb-8 text-white/95 drop-shadow-lg"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                      onClick={() => navigate(slide.link)}
                    >
                      {slide.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !w-12 !h-12 !mt-0 !left-6 !top-1/2 !-translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !rounded-full transition-all duration-300 group after:!content-none">
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="swiper-button-next !w-12 !h-12 !mt-0 !right-6 !top-1/2 !-translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm !rounded-full transition-all duration-300 group after:!content-none">
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination !bottom-8"></div>
      </div>

      {/* Auto-play Control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
      >
        {isAutoPlay ? (
          <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <style jsx>{`
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          margin: 0 6px !important;
        }

        .custom-bullet-active {
          background: white !important;
          transform: scale(1.3) !important;
        }

        .custom-bullet:hover {
          background: rgba(255, 255, 255, 0.8) !important;
          transform: scale(1.1) !important;
        }

        .swiper-button-disabled {
          opacity: 0.5 !important;
        }

        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: 32px !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;
