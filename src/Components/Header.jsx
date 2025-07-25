import React, { useState, useEffect } from "react";
import { Menu, Zap } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Badge } from "./ui/badge";

const navLinks = [
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

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md"
          : "bg-black shadow-sm"
      }`}
    >
      <div className="relative flex h-16 items-center px-4 md:px-6">
        {/* Logo (left) */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn.olaelectric.com/ev-discovery-platform/images/ola-logo-13042023.svg"
            alt="Ola Electric Logo"
            className="h-10 w-auto"
            draggable="false"
          />
        </a>

        {/* Centered Nav (desktop only) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
          {navLinks
            .filter((link) => link.name !== "Buy")
            .map((link) => (
              <Button
                key={link.name}
                variant={currentPath === link.path ? "default" : "ghost"}
                size="sm"
                asChild
                className={`relative transition-all duration-200 ${
                  currentPath === link.path
                    ? "bg-white text-black shadow-sm"
                    : "text-white hover:bg-gray-800 hover:text-white"
                }`}
              >
                <a href={link.path} className="flex items-center space-x-1">
                  <span>{link.name}</span>
                  {currentPath === link.path && (
                    <div className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-white rounded-full" />
                  )}
                </a>
              </Button>
            ))}
        </nav>

        {/* CTA (right) */}
        <div className="hidden lg:flex items-center ml-auto">
          <Button
            asChild
            size="default"
            className="bg-white hover:bg-gray-200 text-black shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href="/buy" className="inline-flex items-center space-x-2">
              <span>Buy Now</span>
              <Zap className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 sm:w-96 bg-black text-white"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <img
                  src="https://cdn.olaelectric.com/ev-discovery-platform/images/ola-logo-13042023.svg"
                  alt="Ola Electric Logo"
                  className="h-8 w-auto"
                  draggable="false"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-4 mt-8">
              {navLinks
                .filter((link) => link.name !== "Buy")
                .map((link, index) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      currentPath === link.path
                        ? "bg-white text-black"
                        : "hover:bg-gray-800 hover:text-white"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{link.name}</span>
                    {currentPath === link.path && (
                      <Badge
                        variant="default"
                        className="ml-auto text-xs bg-black text-white"
                      >
                        Current
                      </Badge>
                    )}
                  </a>
                ))}

              <div className="pt-4 mt-4 border-t border-gray-700">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white hover:bg-gray-200 text-black"
                >
                  <a
                    href="/buy"
                    className="inline-flex items-center justify-center space-x-2"
                  >
                    <span>Buy Now</span>
                    <Zap className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-700 text-center">
                <p className="text-sm text-gray-400">
                  Experience the future of mobility
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
