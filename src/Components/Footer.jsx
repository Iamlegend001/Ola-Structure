import React from "react";
import {
  Phone,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Scooter", path: "/scooter" },
  { name: "Motorcycles", path: "/motorcycles" },
  { name: "Battery", path: "/battery" },
  { name: "Charging", path: "/charging" },
  { name: "Factory", path: "/factory" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Press", path: "/press" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
  { name: "Legal", path: "/legal" },
  { name: "Buy", path: "/buy" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Top Section with Logo and CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between border-b border-gray-700 mb-12">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">OLA</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent ml-2">
              ELECTRIC
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            Revolutionizing mobility with sustainable electric vehicles for a
            greener tomorrow.
          </p>
        </div>
        {/* Contact CTA */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer group">
          <Phone className="w-5 h-5 group-hover:animate-pulse" />
          <span className="font-semibold text-lg">Call: 080 6896 4050</span>
        </div>
      </div>

      {/* Quick Links & Social */}
      <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-green-400 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="space-y-3 text-center md:text-left">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
            Follow Us
          </h4>
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>© 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-center">
              <a
                href="/legal#privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/legal#terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/legal#cookie"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="/legal#accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
