import React from "react";
import { Phone, Instagram, Youtube, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const productLinks = [
    "Ola S1 Pro+",
    "Ola S1 Pro",
    "Ola S1 X+",
    "Ola S1 X",
    "Ola Gig",
    "Ola S1 Z",
    "Roadster X+",
    "Roadster X",
    "Roadster",
    "Roadster Pro"
  ];

  const techLinks = [
    "Software",
    "Cell Tech",
    "Manufacturing",
    "Performance",
    "Design",
    "Gigafactory",
    "Future Factory"
  ];

  const ownershipLinks = [
    "Ola Electric Store",
    "4000 Stores",
    "Hypercharger",
    "Accessories",
    "Community",
    "Referrals",
    "Hyperservice",
    "Battery Warranty"
  ];

  const companyLinks = [
    "About Us",
    "Investor",
    "Newsroom",
    "Blogs",
    "Careers",
    "Krutrim",
    "Dealership"
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section with Logo and CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 pb-12 border-b border-gray-700">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">OLA</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent ml-2">
                ELECTRIC
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-md">
              Revolutionizing mobility with sustainable electric vehicles for a greener tomorrow.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer group">
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">Call: 080 6896 4050</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & Design */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Tech & Design</h3>
            <ul className="space-y-3">
              {techLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ownership */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Ownership</h3>
            <ul className="space-y-3">
              {ownershipLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-gray-700">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-r-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>© 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;