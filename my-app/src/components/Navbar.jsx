"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setIsLoading }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

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
          <div className="flex items-center w-full sm:w-auto">
            <div className="flex items-center min-w-0">
              <button
                onClick={() => {
                  if (setIsLoading) setIsLoading(false);
                  navigate("/");
                }}
                className="flex items-center min-w-0 group focus:outline-none focus:ring-0 border-none bg-transparent p-0"
                aria-label="Go to home page"
                type="button"
                tabIndex={0}
              >
                <img
                  src="/logo.png"
                  alt="The Ecom Monks"
                  className="h-14 w-14 ml-[-14px] sm:ml-[-160px] max-w-[80px] sm:h-16 sm:max-w-[100px] md:h-20 md:max-w-[120px] lg:h-24 lg:max-w-[140px] object-contain transition-transform duration-200 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                {/* Hide all text next to logo on mobile */}
                <div className="hidden sm:flex whitespace-nowrap text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold px-2 py-1 flex-shrink min-w-0 items-center truncate max-w-[120px] sm:max-w-[180px] md:max-w-xs lg:max-w-md z-50">
                  <span className="text-green-900 ml-1 sm:ml-0">THE</span>
                  <span className="text-green-900 ml-2 md:ml-3">ECOM</span>
                  <span className="text-green-900 ml-2 md:ml-3">MONKS</span>
                </div>
              </button>
            </div>
            {/* Hamburger Button (right) */}
            <button
              className="lg:hidden text-green-500 p-3 flex-shrink-0 ml-auto focus:outline-none focus:ring-0 border-none outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              <div className="w-3 h-3 mb-2 flex flex-col justify-center items-center">
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
          <div className="hidden lg:flex items-center space-x-8 sm:ml-[100px]  flex-shrink-0">
            {[
              { label: "Home", href: "/", isLink: true },
              { label: "Our Services", href: "/services", isLink: true },
              { label: "Our Frameworks", href: "/ourframeworks", isLink: true },
              { label: "Why Us", href: "/whyus", isLink: true, customClass: "text-green-700 hover:text-green-500" },
              { label: "Contact Us", href: "/contactus", isLink: true },
              { label: "About Us", href: "/aboutus", isLink: true },
            ].map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative font-bold text-base sm:text-lg md:text-xl transition-all duration-500 group px-2 ${item.customClass || "text-green-900 hover:text-green-500"} focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none outline-none ring-0 border-none cursor-pointer`}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 w-0 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-bold text-base sm:text-lg md:text-xl transition-all duration-500 group px-2 ${item.customClass || "text-green-900 hover:text-green-500"}`}
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 w-0 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay - Fixed positioning with full viewport coverage */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 lg:hidden bg-white/90 backdrop-blur-2xl border-t border-green-400/30 overflow-y-auto min-h-screen w-full" style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}>
          {/* Close Button - absolutely positioned */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-green-700 text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80 rounded-full p-2 shadow hover:bg-green-100 transition z-50"
            type="button"
          >
            ×
          </button>
          <div className="px-8 pt-16 pb-6 space-y-6 min-h-screen flex flex-col justify-start">
            {[
              { label: "Home", href: "/", isLink: true },
              { label: "Our Services", href: "/services", isLink: true },
              { label: "Our Frameworks", href: "/ourframeworks", isLink: true },
              { label: "Why Us", href: "/whyus", isLink: true, customClass: "text-green-700 hover:text-green-500" },
              { label: "Contact Us", href: "/contactus", isLink: true },
              { label: "About Us", href: "/aboutus", isLink: true },
              { label: "Results", href: "/results", isLink: true },
              { label: "How It Works", href: "/how-it-works", isLink: true },
              { label: "FAQs", href: "/faqs", isLink: true },
              { label: "Thank You", href: "/thankyou", isLink: true },
              { label: "Refund Policy", href: "/refund", isLink: true },
              { label: "Terms & Conditions", href: "/tandc", isLink: true },
              { label: "Privacy Policy", href: "/privacy", isLink: true },
              { label: "Apply Now", href: "/application", isLink: true, customClass: "text-green-700 hover:text-green-500" },
            ].map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block text-green-900 font-bold text-xl sm:text-2xl transition-colors duration-500 py-2 ${item.customClass || "hover:text-green-500"} focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none outline-none ring-0 border-none cursor-pointer`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block text-green-900 font-bold text-xl sm:text-2xl transition-colors duration-500 py-2 ${item.customClass || "hover:text-green-500"} focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none outline-none ring-0 border-none cursor-pointer`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}