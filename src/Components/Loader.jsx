import React from "react";
import { Zap } from "lucide-react";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90">
      <motion.div
        initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="mb-6"
      >
        <Zap className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-white text-2xl font-bold tracking-widest"
      >
        Charging up Ola Electric...
      </motion.div>
    </div>
  );
};

export default Loader;
