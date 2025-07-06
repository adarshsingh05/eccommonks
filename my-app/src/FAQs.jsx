import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { HelpCircle, Rocket, ShoppingCart, TrendingUp, Users, DollarSign, Clock, BarChart2, CheckCircle, Layers, HeartHandshake } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const faqs = [
  {
    q: "Who should hire The Ecom Monks?",
    icon: <Users className="w-7 h-7 text-blue-500" />,
    a: (
      <>
        Whether you're:
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>A first-time seller launching your brand on Amazon/Flipkart</li>
          <li>A D2C founder scaling across platforms</li>
          <li>A regional business trying out Q-commerce</li>
        </ul>
        <div className="mt-2">…we customize the journey for where you are today.</div>
      </>
    ),
  },
  {
    q: "Do you only help with Amazon?",
    icon: <ShoppingCart className="w-7 h-7 text-green-500" />,
    a: (
      <>
        Not at all. We actively manage and grow brands across:
        <ul className="list-none ml-0 mt-2 flex flex-wrap gap-2">
          <li className="bg-blue-100/60 px-3 py-1 rounded-xl flex items-center gap-2">🛒 Amazon, Flipkart, Shopify, Meesho, Nykaa, JioMart</li>
          <li className="bg-green-100/60 px-3 py-1 rounded-xl flex items-center gap-2">🚀 Blinkit, Zepto, Instamart (Q-commerce)</li>
          <li className="bg-purple-100/60 px-3 py-1 rounded-xl flex items-center gap-2">🛍️ Myntra, and others by request</li>
        </ul>
      </>
    ),
  },
  {
    q: "What kind of brands do you typically work with?",
    icon: <TrendingUp className="w-7 h-7 text-purple-500" />,
    a: (
      <>
        We work with:
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>Solo founders with product-market fit</li>
          <li>D2C brands doing ₹0.01–10 Cr in annual revenue</li>
          <li>Early-stage startups launching on e-commerce</li>
          <li>FMCG/Wellness/Beauty/Herbal/Regional gems</li>
        </ul>
      </>
    ),
  },
  {
    q: "What services do you provide?",
    icon: <HelpCircle className="w-7 h-7 text-yellow-500" />,
    a: (
      <>
        End-to-end ecommerce growth, including:
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>Listing creation, optimization & SEO</li>
          <li>Performance & PPC ads (Amazon + Flipkart +FB+Google+ Zepto etc.)</li>
          <li>Design & content for A+ / Storefronts</li>
          <li>Account health, Safe-T, claim resolutions</li>
          <li>Q-commerce onboarding & product packaging assistance</li>
          <li>Weekly analytics, growth reports, & direct support</li>
        </ul>
      </>
    ),
  },
  {
    q: "How do your service packages work?",
    icon: <Layers className="w-7 h-7 text-pink-500" />,
    a: (
      <>
        We offer 3 Growth Tracks:
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>Launch Pad (for new brands)</li>
          <li>Growth Engine (for expanding brands)</li>
          <li>Brand Dominator (for scaling aggressively)</li>
        </ul>
        <div className="mt-2">We also offer plug & play services for specific needs.<br />Custom plans available for unique business goals. No copy-paste strategies.</div>
      </>
    ),
  },
  {
    q: "Do you offer performance-based pricing?",
    icon: <DollarSign className="w-7 h-7 text-green-600" />,
    a: (
      <>
        Yes. Our pricing includes:
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>A base monthly Fees</li>
          <li>A % commission on revenue generated (where applicable)</li>
        </ul>
        <div className="mt-2">We're invested in your growth. If you grow, we grow.</div>
      </>
    ),
  },
  {
    q: "What if I'm a new brand with limited budget?",
    icon: <HeartHandshake className="w-7 h-7 text-pink-600" />,
    a: (
      <>
        We'd still love to talk. We occasionally take on select "Monk Growth Grant" brands where we work on a no-retainer basis, with only a % of sales.<br />
        <span className="font-bold text-red-500">🔔 This is application-based. Details on Contact Page</span>
      </>
    ),
  },
  {
    q: "How fast can I go live?",
    icon: <Clock className="w-7 h-7 text-blue-600" />,
    a: (
      <>
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>Amazon / Flipkart: 5–12 business days</li>
          <li>Blinkit / Zepto / Q-commerce: 10–20 business days (platform dependent)</li>
        </ul>
        <div className="mt-2">You'll receive a timeline during onboarding based on your current setup.</div>
      </>
    ),
  },
  {
    q: "Do I get access to reports or dashboards?",
    icon: <BarChart2 className="w-7 h-7 text-purple-600" />,
    a: (
      <>
        Yes. We offer shared dashboards, campaign reports, listing trackers, and weekly performance reviews. You're never left in the dark.
      </>
    ),
  },
  {
    q: "How do I get started?",
    icon: <CheckCircle className="w-7 h-7 text-green-500" />,
    a: (
      <>
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>✅ Book a Free Discovery Call</li>
          <li>✅ Get your Brand Audit Report</li>
          <li>✅ Choose your Growth Track</li>
          <li>✅ We activate your MonkOS™ execution system</li>
        </ul>
        <div className="mt-2 font-bold text-blue-600">Book Now →</div>
      </>
    ),
  },
];

function FAQCard({ q, a, icon, isOpen, onClick }) {
  return (
    <div className="w-full p-0 overflow-hidden bg-gradient-to-br from-white to-blue-50/30 shadow-xl mb-4 rounded-2xl border border-blue-100">
      <button
        className="flex items-center w-full px-6 py-5 gap-4 text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="font-black text-lg sm:text-xl text-blue-700 group-hover:text-purple-600 transition-colors duration-300 flex-1">{q}</span>
        <span className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-90 text-purple-600' : 'text-blue-400'}`}>▶</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="px-6 pb-6 pt-0 text-slate-700 text-base sm:text-lg bg-gradient-to-br from-blue-50/40 to-purple-50/20"
            key="content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQs() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/40 to-purple-50/20 min-h-screen text-slate-800 overflow-x-hidden relative">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-60px] left-[-60px] w-60 h-60 bg-gradient-to-br from-blue-300/30 to-purple-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-gradient-to-br from-purple-300/30 to-blue-200/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <Navbar />
      <ParallaxSection speed={0.15} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["Ecommerce FAQs: Everything Sellers Ask Before Partnering with The Ecom Monks"]} className="inline-block" />
        </motion.h1>
        <motion.p className="text-lg sm:text-xl text-center mb-10 text-slate-600 font-semibold" variants={fadeInUp}>
          Have questions about selling on Amazon, Flipkart, or Blinkit with The Ecom Monks? We've answered the most common ones here. Transparent. Simple. Seller-first.
        </motion.p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <FAQCard
              key={idx}
              q={faq.q}
              a={faq.a}
              icon={faq.icon}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </motion.main>
      <Footer />
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default FAQs; 