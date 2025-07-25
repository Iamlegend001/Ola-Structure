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
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/olacabs/?hl=en",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/user/OfficialOlacabs",
  },
  { name: "Twitter", icon: Twitter, url: "https://x.com/Olacabs/with_replies" },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/Olacabs/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/olacabs-com/?originalSubdomain=in",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Top Section with Logo and CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between border-b border-gray-700 mb-12 gap-8">
        <div className="mb-8 lg:mb-0 flex-1 min-w-[250px]">
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
        {/* Contact CTA & Social */}
        <div className="flex flex-col items-center gap-6 flex-1 min-w-[250px]">
          <div className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer group w-fit mx-auto">
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">Call: 080 6896 4050</span>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-center">
              Follow Us
            </h4>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links & Legal */}
      <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 block py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* Legal Links */}
        <div className="flex-1 min-w-[200px] mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-6 text-green-400">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/legal#privacy"
                className="hover:text-white transition-colors block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/legal#terms"
                className="hover:text-white transition-colors block"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/legal#cookie"
                className="hover:text-white transition-colors block"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/legal#accessibility"
                className="hover:text-white transition-colors block"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>© 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-center justify-center md:justify-end">
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
