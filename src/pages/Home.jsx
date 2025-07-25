import React from "react";
import Hero from "../Components/SectionHome/Hero";
import FeatureSection from "../Components/SectionHome/FeatureSection";
import BatteryAndTechnology from "../Components/SectionHome/BatteryAndTechnology";
import Experience from "../Components/SectionHome/Experience";
import AppSupport from "../Components/SectionHome/AppSupport";
import Ecosystem from "../Components/SectionHome/Ecosystem";
import FinalCTA from "../Components/SectionHome/FinalCTA";
import ProductHighlights from "../Components/SectionHome/ProductHightlights";
import { motion } from "motion/react";
import CommunitySection from "../Components/SectionHome/CommunitySection";
import Testimonials from "../Components/SectionHome/Testimonials";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-background text-foreground"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <Hero />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.1 },
            },
          }}
        >
          <ProductHighlights />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2 },
            },
          }}
        >
          <FeatureSection />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.3 },
            },
          }}
        >
          <BatteryAndTechnology />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.4 },
            },
          }}
        >
          <Experience />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.5 },
            },
          }}
        >
          <AppSupport />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.6 },
            },
          }}
        >
          <Ecosystem />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.65 },
            },
          }}
        >
          <CommunitySection />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.68 },
            },
          }}
        >
          <Testimonials />
        </motion.section>
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.7 },
            },
          }}
        >
          <FinalCTA />
        </motion.section>
      </motion.div>
    </motion.main>
  );
};

export default Home;
