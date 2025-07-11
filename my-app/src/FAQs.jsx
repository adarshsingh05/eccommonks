import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { 
  HelpCircle, 
  Rocket, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  BarChart2, 
  CheckCircle, 
  Layers, 
  HeartHandshake,
  Check,
  Store,
  Zap,
  Package,
  Bell,
  ArrowRight,
  ChevronRight
} from "lucide-react";

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
    icon: <Users className="w-7 h-7 text-blue-600" />,
    a: (
      <>
        Whether you're:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">A first-time seller launching your brand on Amazon/Flipkart</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">A D2C founder scaling across platforms</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">A regional business trying out Q-commerce</span>
          </li>
        </ul>
        <div className="mt-3 text-gray-700">…we customize the journey for where you are today.</div>
      </>
    ),
  },
  {
    q: "Do you only help with Amazon?",
    icon: <ShoppingCart className="w-7 h-7 text-red-600" />,
    a: (
      <>
        Not at all. We actively manage and grow brands across:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="bg-blue-50 px-4 py-3 rounded-xl flex items-center gap-3 border border-blue-100">
            <Store className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-800">Amazon, Flipkart, Shopify, Meesho, Nykaa, JioMart</span>
          </li>
          <li className="bg-red-50 px-4 py-3 rounded-xl flex items-center gap-3 border border-red-100">
            <Zap className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="text-gray-800">Blinkit, Zepto, Instamart (Q-commerce)</span>
          </li>
          <li className="bg-green-50 px-4 py-3 rounded-xl flex items-center gap-3 border border-green-100">
            <Package className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-gray-800">Myntra, and others by request</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What kind of brands do you typically work with?",
    icon: <TrendingUp className="w-7 h-7 text-purple-600" />,
    a: (
      <>
        We work with:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Solo founders with product-market fit</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">D2C brands doing ₹0.01–10 Cr in annual revenue</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Early-stage startups launching on e-commerce</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">FMCG/Wellness/Beauty/Herbal/Regional gems</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What services do you provide?",
    icon: <HelpCircle className="w-7 h-7 text-indigo-600" />,
    a: (
      <>
        End-to-end ecommerce growth, including:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Listing creation, optimization & SEO</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Performance & PPC ads (Amazon + Flipkart +FB+Google+ Zepto etc.)</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Design & content for A+ / Storefronts</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Account health, Safe-T, claim resolutions</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Q-commerce onboarding & product packaging assistance</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Weekly analytics, growth reports, & direct support</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How do your service packages work?",
    icon: <Layers className="w-7 h-7 text-teal-600" />,
    a: (
      <>
        We offer 3 Growth Tracks:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Launch Pad (for new brands)</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Growth Engine (for expanding brands)</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Brand Dominator (for scaling aggressively)</span>
          </li>
        </ul>
        <div className="mt-3 text-gray-700">We also offer plug & play services for specific needs.<br />Custom plans available for unique business goals. No copy-paste strategies.</div>
      </>
    ),
  },
  {
    q: "Do you offer performance-based pricing?",
    icon: <DollarSign className="w-7 h-7 text-yellow-600" />,
    a: (
      <>
        Yes. Our pricing includes:
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">A base monthly Fees</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">A % commission on revenue generated (where applicable)</span>
          </li>
        </ul>
        <div className="mt-3 text-gray-700">We're invested in your growth. If you grow, we grow.</div>
      </>
    ),
  },
  {
    q: "What if I'm a new brand with limited budget?",
    icon: <HeartHandshake className="w-7 h-7 text-pink-600" />,
    a: (
      <>
        We'd still love to talk. We occasionally take on select "Monk Growth Grant" brands where we work on a no-retainer basis, with only a % of sales.<br />
        <div className="mt-3 flex items-center gap-2 bg-yellow-50 px-4 py-3 rounded-xl border border-yellow-200">
          <Bell className="w-5 h-5 text-yellow-600 flex-shrink-0" />
          <span className="font-bold text-yellow-800">This is application-based. Details on Contact Page</span>
        </div>
      </>
    ),
  },
  {
    q: "How fast can I go live?",
    icon: <Clock className="w-7 h-7 text-orange-600" />,
    a: (
      <>
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Amazon / Flipkart: 5–12 business days</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Blinkit / Zepto / Q-commerce: 10–20 business days (platform dependent)</span>
          </li>
        </ul>
        <div className="mt-3 text-gray-700">You'll receive a timeline during onboarding based on your current setup.</div>
      </>
    ),
  },
  {
    q: "Do I get access to reports or dashboards?",
    icon: <BarChart2 className="w-7 h-7 text-cyan-600" />,
    a: (
      <>
        Yes. We offer shared dashboards, campaign reports, listing trackers, and weekly performance reviews. You're never left in the dark.
      </>
    ),
  },
  {
    q: "How do I get started?",
    icon: <CheckCircle className="w-7 h-7 text-emerald-600" />,
    a: (
      <>
        <ul className="list-none ml-0 mt-3 space-y-2">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Book a Free Discovery Call</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Get your Brand Audit Report</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Choose your Growth Track</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">We activate your MonkOS™ execution system</span>
          </li>
        </ul>
        <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer book-now-button">
          <span>Book Now</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </>
    ),
  },
];

function FAQCard({ q, a, icon, isOpen, onClick }) {
  return (
    <div className="w-full p-0 overflow-hidden bg-gradient-to-br from-white to-gray-50/50 shadow-xl mb-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
      <button
        className="flex items-center w-full px-6 py-6 gap-4 text-left focus:outline-none group hover:bg-gray-50/50 transition-colors duration-300"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="font-black text-lg sm:text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 flex-1">{q}</span>
        <ChevronRight className={`ml-4 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="px-6 pb-6 pt-2 text-gray-700 text-base sm:text-lg bg-gradient-to-br from-gray-50/60 to-white/80 border-t border-gray-100"
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
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contactus');
  };

  useEffect(() => {
    // Add event listeners to all "Book Now" buttons
    const bookNowButtons = document.querySelectorAll('.book-now-button');
    bookNowButtons.forEach(button => {
      button.addEventListener('click', handleContactNavigation);
    });

    // Cleanup function to remove event listeners
    return () => {
      bookNowButtons.forEach(button => {
        button.removeEventListener('click', handleContactNavigation);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 min-h-screen text-gray-900 overflow-x-hidden relative">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-60px] left-[-60px] w-60 h-60 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-gradient-to-br from-red-300/20 to-pink-300/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <Navbar />
      <ParallaxSection speed={0.15} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 sm:mt-2 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-xl sm:text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
         Ecommerce FAQs: Everything Sellers Ask Before Partnering with The Ecom Monks
        </motion.h1>
        <motion.p className="text-md sm:text-xl text-center mb-12 text-gray-600 font-semibold" variants={fadeInUp}>
          Have questions about selling on Amazon, Flipkart, or Blinkit with The Ecom Monks? We've answered the most common ones here. Transparent. Simple. Seller-first.
        </motion.p>
        <div className="flex flex-col gap-6">
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
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default FAQs; 