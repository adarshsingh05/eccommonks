import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { User, Target, Layers, MessageCircle, HeartHandshake, CheckCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const principleIcons = [
  <Target className="w-8 h-8 text-blue-500" />, // 1
  <Layers className="w-8 h-8 text-purple-500" />, // 2
  <HeartHandshake className="w-8 h-8 text-green-500" />, // 3
  <MessageCircle className="w-8 h-8 text-blue-400" />, // 4
  <User className="w-8 h-8 text-yellow-500" />, // 5
];

const principles = [
  {
    title: "Start With Strategy, Not Services",
    desc: [
      'Other agencies sell "packages." We build growth engines. Tailored. Modular. Based on real platform logic.',
      "Internal Team's Insight: We study your competition, category norms, price anchoring, and algorithm favorability — before touching your ads.",
    ],
  },
  {
    title: "Full-Funnel Thinking",
    desc: [
      'Your problem may seem like "low orders" — but we look deeper:',
      'Are your listings searchable? Are your images CTA-driven? Is your A+ content indexed for Amazon SEO? Are you unknowingly cannibalizing with the wrong ad types?',
      'We don\'t fix symptoms. We solve systems.',
    ],
  },
  {
    title: "Fewer Clients, Higher Ownership",
    desc: [
      'We cap onboarding at 6 brands per platform per category per quarter. Because deep work takes time, attention, and care.',
      'Your team gets a dedicated pod for Listing + Ads + Creatives + Analytics. No juggling.',
      'And if we ever mess up, we own it and fix it fast. That\'s rare. That\'s Monk Code.',
    ],
  },
  {
    title: "Real Communication",
    desc: [
      'You\'ll never be in the dark. Your AM talks to you like a co-founder — clear, fast, no BS.',
      '📊 Weekly dashboards, 🎯 Fortnightly strategy reviews, 🧘 WhatsApp access (no chasing down account managers)',
    ],
  },
  {
    title: "Help Those Who Hustle (Even Without Money)",
    desc: [
      'Great products die because growth is expensive. We don\'t want that.',
      'Early-stage founder with potential? We\'ll talk. Can\'t afford retainers? We\'ll explore hybrid % models. Need mentorship before money? We\'ll give you a roadmap.',
      'And every quarter, we take on one brand pro-bono — 90 days of deep execution, with no base fee. You pay only a small % of actual sales.',
      'Apply for the Monk Growth Grant',
    ],
  },
];

function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-white via-green-50/40 to-green-50/20 min-h-screen text-slate-800 overflow-x-hidden relative">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-60px] left-[-60px] w-60 h-60 bg-gradient-to-br from-green-300/30 to-green-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-gradient-to-br from-green-300/30 to-green-200/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <Navbar />
      <ParallaxSection speed={0.15} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-5xl sm:mt-0 mt-6 md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-green-500 to-green-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          Built by Sellers. Backed by Grit. Designed to Grow You.
        </motion.h1>
        {/* Why We Started Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-lg sm:text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent" variants={fadeInUp}>
              Why We Started The Ecom Monks
            </motion.h2>
            <motion.blockquote className="italic text-slate-700 text-md sm:text-2xl leading-relaxed mb-4" variants={fadeInUp}>
            "This is personal. Because I've lived the chaos too.""
            </motion.blockquote>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              When I first tried selling online, I made every mistake a seller could make:
            </motion.p>
            <ul className="list-none ml-0 text-slate-700 text-sm sm:text-lg mb-2 flex flex-wrap gap-3">
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />Wrong listings.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />No traction.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-10 h-5 text-red-500" />Paid agencies that overpromised and ghosted me once the contract was signed.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />Zero hand-holding, and even less care.</li>
            </ul>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              Back then, I thought the platforms were broken. But I realised — it's not the platforms. It's the people who are supposed to guide you through them.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Problem Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-md sm:text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent" variants={fadeInUp}>
             The Problem No One Wants to Fix
            </motion.h2>
            <ul className="list-none ml-0 text-slate-700 text-sm sm:text-lg mb-2 flex flex-wrap gap-3">
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />SPN partners don't care once they get paid</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />Agencies are juggling 200 clients with 7-8 interns</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />Listing + Ads + Content are handled by different vendors</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp"><X className="w-5 h-5 text-red-500" />Nobody thinks like a founder — only like a vendor</li>
            </ul>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              <span className="font-bold text-red-500">📉 Result?</span> Missed growth. Burnt founders. Suspended accounts.<br />And a lot of great products that never get the chance they deserve.
            </motion.p>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              I saw this happen again and again — not just to me, but to friends, D2C brands, and even ₹10Cr+ players.<span className="text-green-600 font-bold"> So we built something radically different.</span>
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Mission Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-lg sm:text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent flex items-center gap-2" variants={fadeInUp}>
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" /> Our Mission
            </motion.h2>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              To bring clarity, performance, and ownership back to ecommerce growth. We help sellers stop guessing and start scaling — across Amazon, Flipkart, Meesho, Nykaa, Zepto, Blinkit, and beyond. We're not consultants. We're your outsourced founding team, armed with dashboards, expertise, obsession, and heart.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Monk Principles Timeline/Stepper */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <motion.h2 className="text-xl sm:text-3xl font-black mb-8 text-center bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent" variants={fadeInUp}>
            🧘 The Monk Operating Principles
          </motion.h2>
          <div className="relative flex flex-col gap-8 md:gap-12 before:hidden sm:before:absolute sm:before:left-4 md:before:left-8 sm:before:top-0 sm:before:bottom-0 sm:before:w-1 sm:before:bg-gradient-to-b sm:before:from-green-300 sm:before:to-green-300 sm:before:rounded-full">
            {principles.map((p, idx) => (
              <div key={idx} className="relative flex items-start gap-4 md:gap-8 group">
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 shadow-lg border-4 border-white -ml-2 md:-ml-4">
                  {principleIcons[idx]}
                </div>
                <ThreeDCard className="flex-1 p-6 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-2 shadow-xl group-hover:scale-[1.03] transition-transform duration-300">
                  <div className="font-bold text-dm text-green-700 mb-2">{p.title}</div>
                  {p.desc.map((d, i) => (
                    <div key={i} className="text-slate-700 text-sm sm:text-lg mb-1 animate-fadeInUp delay-[.1s]">{d}</div>
                  ))}
                </ThreeDCard>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Meet the Monk Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <div className="max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
            <div className="bg-white rounded-2xl border-l-8 border-green-400 shadow-xl p-4 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-6 relative" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-md sm:text-2xl font-extrabold text-green-700">MEET THE MONK – ARUN R. CHACHAN</h2>
              </div>
              <div className="text-green-900/90 text-sm sm:text-base leading-relaxed space-y-4">
                <motion.blockquote className="italic text-slate-700 text-md sm:text-2xl leading-relaxed mb-4" variants={fadeInUp}>
                  If no one had believed in me, I wouldn't be here. Now I build for those no one believed in.
                </motion.blockquote>
                <p className="mb-2">
                  <span className="font-semibold">I'm Arun R. Chachan — a seller, strategist, and monk at heart.</span> From tea to tech, I've helped build brands across categories. And every time I failed, I learned how not to build an agency. The Ecom Monks isn't a project. It's a purpose: To give sellers a real shot at success. To build a no-bullshit, high-conviction growth system. To bring back integrity in execution. If you're ready to scale, we're ready to show up. Let's build something unforgettable.
                </p>
              </div>
              <div className="mt-4 text-green-700 font-bold text-xs sm:text-sm italic text-right pr-2">— Arun R. Chachan, Founder, The Ecom Monks</div>
            </div>
          </div>
        </motion.section>
        {/* Why Us & CTA Section */}
        <motion.section className="mb-[-100px] " variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent" variants={fadeInUp}>
            So, Why Us?
            </motion.h2>
            <motion.p className="text-sm sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              You won't find us running Google Ads to 100 SKUs. You'll find us helping 10 brands crack platform psychology, ads flywheel, and full-funnel growth that actually converts. We don't speak jargon. We show proof. And we care. Deeply. If that's the kind of partner you're looking for — let's begin.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
              <button
                onClick={() => navigate("/application")}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-700 text-white font-bold py-3 px-3 sm:px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300 animate-ctaPulse"
              >
               Apply for the monk grant
              </button>
              <button
                onClick={() => navigate("/contactus#contact-form", { state: { scrollTo: "application" } })}
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300 animate-ctaPulse"
              >
                 Book a Call with Arun
              </button>
            </div>
          </ThreeDCard>
        </motion.section>
      </motion.main>
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1s both; }
        .animate-ctaPulse { animation: ctaPulse 2.5s infinite; }
        @keyframes ctaPulse { 0%, 100% { box-shadow: 0 8px 32px 0 rgba(34,197,94,0.12); } 50% { box-shadow: 0 0 48px 8px rgba(34,197,94,0.18); } }
      `}</style>
    </div>
  );
}

export default About; 