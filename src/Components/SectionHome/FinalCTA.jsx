import React from "react";
import { Button } from "../../Components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const FinalCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] overflow-hidden"
    >
      {/* Decorative Animated Icon */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-1/2 top-10 -translate-x-1/2 z-10"
      >
        <Sparkles className="w-16 h-16 text-yellow-300 animate-bounce-slow drop-shadow-xl" />
      </motion.div>
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl mx-auto text-center relative z-20 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl px-8 py-14 border border-white/20"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tight drop-shadow-lg">
          Your Electric Journey Starts Here
        </h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 rounded-full mb-6 animate-pulse" />
        <p className="text-lg mb-10 text-white/90 font-medium">
          Explore, customize and book your Ola S1 directly from your phone.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center gap-2 bg-yellow-300 text-black font-bold shadow-lg hover:shadow-yellow-300/50 hover:scale-105 transition"
          >
            <Download size={20} />
            Download Ola Electric App
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-white text-white font-bold shadow-lg hover:bg-white/10 hover:scale-105 transition"
          >
            <ArrowRight size={20} />
            Explore Scooters
          </Button>
        </div>
      </motion.div>
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
      <style>{`
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </motion.section>
  );
};

export default FinalCTA;
