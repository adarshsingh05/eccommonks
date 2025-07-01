"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ["services", "frameworks", "proof", "about"];
      let found = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = section;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-green-400/30 shadow-2xl"
          : "bg-white/1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
        <div className="flex items-center w-full">
          {/* Logo and Hamburger */}
          <div className="flex items-center w-full">
            <div className="flex items-center min-w-0">
              <a href="/" className="flex items-center min-w-0 group" aria-label="Go to home page">
                <img
                  src="/logo.png"
                  alt="The Ecom Monks"
                  className="h-18 w-20 max-w-[80px] sm:h-16 sm:max-w-[100px] md:h-20 md:max-w-[120px] lg:h-24 lg:max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                {/* Hide all text next to logo on mobile */}
                <div className="hidden sm:flex whitespace-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-white px-2 py-1 rounded flex-shrink min-w-0 items-center truncate max-w-[120px] sm:max-w-[180px] md:max-w-xs lg:max-w-md z-50" style={{color: '#111', boxShadow: '0 0 0 2px #fff'}}>
                  <span className="text-green-900 ml-1 sm:ml-0">THE</span>
                  <span className="text-green-900 ml-2 md:ml-3">ECOM</span>
                  <span className="text-green-900 ml-2 md:ml-3">MONKS</span>
                </div>
              </a>
            </div>
            {/* Hamburger Button (right) */}
            <button
              className="lg:hidden text-green-500 p-3 flex-shrink-0 ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <span
                  className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm my-1 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-green-500 block transition-all duration-500 ease-out h-1 w-8 rounded-sm ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-10 justify-end flex-shrink-0">
            {[
              { label: "Home", href: "#" },
              { label: "Our Services", href: "#services" },
              { label: "Our Frameworks", href: "#frameworks" },
              { label: "Why Us", href: "#whyus" },
              { label: "Contact Us", href: "#contact" },
              { label: "How it Works", href: "#howitworks" },
              { label: "About Us", href: "#about" },
              { label: "Legal", href: "#legal" },
              { label: "Privacy and Policy", href: "#privacy" },
              { label: "Terms and conditions", href: "#terms" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-green-900 font-bold text-base sm:text-lg md:text-xl hover:text-green-500 transition-all duration-500 group px-2"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 w-0 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-6 py-3 md:px-10 md:py-5 rounded-xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-1 text-base md:text-xl">
              GET FREE AUDIT
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-400/30">
            <div className="px-8 py-10 space-y-6">
              {[
                { label: "Home", href: "#" },
                { label: "Our Services", href: "#services" },
                { label: "Our Frameworks", href: "#frameworks" },
                { label: "Why Us", href: "#whyus" },
                { label: "Contact Us", href: "#contact" },
                { label: "How it Works", href: "#howitworks" },
                { label: "About Us", href: "#about" },
                { label: "Legal", href: "#legal" },
                { label: "Privacy and Policy", href: "#privacy" },
                { label: "Terms and conditions", href: "#terms" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-green-900 font-bold text-xl sm:text-2xl hover:text-green-500 transition-colors duration-500 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}