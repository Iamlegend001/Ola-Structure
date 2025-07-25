import React, { useState } from "react";
import {
  Users,
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("rides");

  const communityData = {
    rides: [
      {
        id: 1,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_2_v1.webp",
        title: "Weekend Mountain Ride",
        location: "Bangalore Hills",
        riders: 24,
        likes: 156,
        comments: 23,
        date: "Dec 15, 2024",
      },
      {
        id: 2,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_4_v1.webp",
        title: "City Explorer Group",
        location: "Mumbai Central",
        riders: 18,
        likes: 89,
        comments: 12,
        date: "Dec 20, 2024",
      },
      {
        id: 3,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_3_v1.webp",
        title: "Evening Coastal Drive",
        location: "Chennai Marina",
        riders: 31,
        likes: 203,
        comments: 45,
        date: "Dec 18, 2024",
      },
    ],
    events: [
      {
        id: 4,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_5_v1.webp",
        title: "Ola Community Meetup",
        location: "Delhi Convention Center",
        attendees: 150,
        likes: 342,
        comments: 67,
        date: "Jan 5, 2025",
      },
      {
        id: 5,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_sec_our_comminity_img_web_1_v1.webp",
        title: "Safety Workshop",
        location: "Hyderabad Hub",
        attendees: 85,
        likes: 128,
        comments: 34,
        date: "Jan 10, 2025",
      },
    ],
    stories: [
      {
        id: 6,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_futurefacctory_web.webp",
        title: "My First Ola Adventure",
        author: "Priya S.",
        likes: 67,
        comments: 18,
        date: "2 days ago",
      },
      {
        id: 7,
        image: "https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_gigafactory_web.webp",
        title: "Helping a Fellow Rider",
        author: "Raj M.",
        likes: 145,
        comments: 29,
        date: "1 week ago",
      },
    ],
  };

  const tabs = [
    { id: "rides", label: "Group Rides", icon: Users },
    { id: "events", label: "Events", icon: Calendar },
    { id: "stories", label: "Stories", icon: MessageCircle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const renderCard = (item, type, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2"
          whileHover={{
            scale: 1.2,
            backgroundColor: "rgba(249, 115, 22, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Heart className="w-4 h-4 text-white" />
        </motion.div>

        {/* Animated overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 flex items-end p-4"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Quick View
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3
          className="font-bold text-lg text-gray-800 mb-2 line-clamp-2"
          whileHover={{ color: "#f97316" }}
          transition={{ duration: 0.2 }}
        >
          {item.title}
        </motion.h3>

        {type !== "stories" && (
          <motion.div
            className="flex items-center text-gray-600 mb-3"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{item.location}</span>
          </motion.div>
        )}

        {type === "stories" && (
          <motion.div
            className="text-gray-600 mb-3"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm">by {item.author}</span>
          </motion.div>
        )}

        <motion.div
          className="flex items-center justify-between text-sm text-gray-500 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, color: "#f97316" }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-4 h-4 mr-1" />
              <span>
                {type === "events"
                  ? item.attendees
                  : type === "rides"
                  ? item.riders
                  : item.likes}
              </span>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, color: "#ef4444" }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="w-4 h-4 mr-1" />
              <span>{item.likes}</span>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{item.comments}</span>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15, color: "#f97316" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Share2 className="w-4 h-4 cursor-pointer" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xs text-gray-400">{item.date}</span>
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {type === "rides"
              ? "Join Ride"
              : type === "events"
              ? "Register"
              : "Read More"}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Community Drives Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Connect, share experiences, and ride together with fellow Ola
            community members
          </motion.p>
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "Active Riders", value: "50K+", icon: Users },
            { label: "Group Rides", value: "1.2K+", icon: MapPin },
            { label: "Events Hosted", value: "350+", icon: Calendar },
            { label: "Stories Shared", value: "2.8K+", icon: MessageCircle },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-md"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              </motion.div>
              <motion.div
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Tab Navigation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            className="bg-white rounded-full p-1 shadow-lg"
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-orange-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {communityData[activeTab].map((item, index) =>
            renderCard(item, activeTab, index)
          )}
        </motion.div>

        {/* Animated Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(249, 115, 22, 0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Load More Content
          </motion.button>
        </motion.div>

        {/* Animated Join Community CTA */}
        <motion.div
          className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 mt-16 text-center text-white"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            className="text-xl mb-6 opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Connect with riders, share your journey, and discover amazing
            experiences
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              className="bg-white text-orange-500 px-8 py-3 rounded-full font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Create Your Profile
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium"
              whileHover={{
                scale: 1.05,
                backgroundColor: "white",
                color: "#f97316",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore Groups
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommunitySection;
