import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { User, Target, Layers, MessageCircle, HeartHandshake } from "lucide-react";

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
  return (
    <div className="bg-gradient-to-br from-white via-purple-50/40 to-blue-50/20 min-h-screen text-slate-800 overflow-x-hidden relative">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-60px] left-[-60px] w-60 h-60 bg-gradient-to-br from-purple-300/30 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-gradient-to-br from-blue-300/30 to-purple-200/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <Navbar />
      <ParallaxSection speed={0.15} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["Built by Sellers. Backed by Grit. Designed to Grow You."]} className="inline-block" />
        </motion.h1>
        {/* Why We Started Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-blue-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
              <AnimatedText texts={["Why We Started The Ecom Monks"]} className="inline-block" />
            </motion.h2>
            <motion.blockquote className="italic text-slate-700 text-xl sm:text-2xl leading-relaxed mb-4" variants={fadeInUp}>
              <AnimatedText texts={["This is personal. Because I've lived the chaos too."]} className="inline-block" />
            </motion.blockquote>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              When I first tried selling online, I made every mistake a seller could make:
            </motion.p>
            <ul className="list-none ml-0 text-slate-700 text-base sm:text-lg mb-2 flex flex-wrap gap-3">
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Wrong listings.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ No traction.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Paid agencies that overpromised and ghosted me once the contract was signed.</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Zero hand-holding, and even less care.</li>
            </ul>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              Back then, I thought the platforms were broken.<br />But I realised — it's not the platforms. It's the people who are supposed to guide you through them.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Problem Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-purple-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" variants={fadeInUp}>
              <AnimatedText texts={["The Problem No One Wants to Fix"]} className="inline-block" />
            </motion.h2>
            <ul className="list-none ml-0 text-slate-700 text-base sm:text-lg mb-2 flex flex-wrap gap-3">
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ SPN partners don't care once they get paid</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Agencies are juggling 200 clients with 7-8 interns</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Listing + Ads + Content are handled by different vendors</li>
              <li className="bg-red-100/60 px-3 py-1 rounded-xl flex items-center gap-2 animate-fadeInUp">✖️ Nobody thinks like a founder — only like a vendor</li>
            </ul>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              <span className="font-bold text-red-500">📉 Result?</span> Missed growth. Burnt founders. Suspended accounts.<br />And a lot of great products that never get the chance they deserve.
            </motion.p>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              I saw this happen again and again — not just to me, but to friends, D2C brands, and even ₹10Cr+ players.<br />So we built something radically different.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Mission Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-blue-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
              <AnimatedText texts={["Our Mission"]} className="inline-block" />
            </motion.h2>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              To bring clarity, performance, and ownership back to ecommerce growth.<br />We help sellers stop guessing and start scaling — across Amazon, Flipkart, Meesho, Nykaa, Zepto, Blinkit, and beyond.<br />We're not consultants. We're your outsourced founding team, armed with dashboards, expertise, obsession, and heart.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Monk Principles Timeline/Stepper */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <motion.h2 className="text-2xl sm:text-3xl font-black mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" variants={fadeInUp}>
            <AnimatedText texts={["🧘 The Monk Operating Principles"]} className="inline-block" />
          </motion.h2>
          <div className="relative flex flex-col gap-8 md:gap-12 before:hidden sm:before:absolute sm:before:left-4 md:before:left-8 sm:before:top-0 sm:before:bottom-0 sm:before:w-1 sm:before:bg-gradient-to-b sm:before:from-purple-300 sm:before:to-blue-300 sm:before:rounded-full">
            {principles.map((p, idx) => (
              <div key={idx} className="relative flex items-start gap-4 md:gap-8 group">
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 shadow-lg border-4 border-white -ml-2 md:-ml-4">
                  {principleIcons[idx]}
                </div>
                <ThreeDCard className="flex-1 p-6 bg-gradient-to-br from-white to-purple-50/30 flex flex-col gap-2 shadow-xl group-hover:scale-[1.03] transition-transform duration-300">
                  <div className="font-bold text-lg text-purple-700 mb-2">{p.title}</div>
                  {p.desc.map((d, i) => (
                    <div key={i} className="text-slate-700 text-base sm:text-lg mb-1 animate-fadeInUp delay-[.1s]">{d}</div>
                  ))}
                </ThreeDCard>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Meet the Monk Section */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-blue-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300 items-center text-center">
            <div className="flex flex-col items-center mb-4">
              <img src="/logo.png" alt="Arun R. Chachan" className="w-24 h-24 rounded-full border-4 border-purple-300 shadow-lg mb-2 object-cover" />
              <span className="font-black text-lg text-blue-700">Arun R. Chachan</span>
              <span className="text-slate-500 text-sm">Founder, Seller, Strategist, Monk at Heart</span>
            </div>
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
              <AnimatedText texts={["Meet the Monk"]} className="inline-block" />
            </motion.h2>
            <motion.blockquote className="italic text-slate-700 text-xl sm:text-2xl leading-relaxed mb-4" variants={fadeInUp}>
              <AnimatedText texts={["If no one had believed in me, I wouldn't be here. Now I build for those no one believed in."]} className="inline-block" />
            </motion.blockquote>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              I'm Arun R. Chachan — a seller, strategist, and monk at heart.<br />From tea to tech, I've helped build brands across categories. And every time I failed, I learned how not to build an agency.<br />The Ecom Monks isn't a project. It's a purpose:<br />To give sellers a real shot at success.<br />To build a no-bullshit, high-conviction growth system.<br />To bring back integrity in execution.<br />If you're ready to scale, we're ready to show up.<br />Let's build something unforgettable.
            </motion.p>
          </ThreeDCard>
        </motion.section>
        {/* Why Us & CTA Section */}
        <motion.section className="mb-[-100px] " variants={fadeInUp}>
          <ThreeDCard className="p-8 bg-gradient-to-br from-white to-purple-50/30 flex flex-col gap-4 shadow-xl group hover:scale-[1.03] transition-transform duration-300">
            <motion.h2 className="text-2xl sm:text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" variants={fadeInUp}>
              <AnimatedText texts={["So, Why Us?"]} className="inline-block" />
            </motion.h2>
            <motion.p className="text-base sm:text-lg text-slate-700 mb-2" variants={fadeInUp}>
              You won't find us running Google Ads to 100 SKUs.<br />You'll find us helping 10 brands crack platform psychology, ads flywheel, and full-funnel growth that actually converts.<br />We don't speak jargon. We show proof. And we care. Deeply.<br />If that's the kind of partner you're looking for — let's begin.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
              <a
                href="#audit"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300 animate-ctaPulse"
              >
                🔮 Apply for a Free Brand Audit
              </a>
              <a
                href="#call"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300 animate-ctaPulse"
              >
                📞 Book a Call with Arun
              </a>
              <a
                href="mailto:hello@theecommonks.com"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300 animate-ctaPulse"
              >
                📧 Write to Us: hello@theecommonks.com
              </a>
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
        @keyframes ctaPulse { 0%, 100% { box-shadow: 0 8px 32px 0 rgba(124,58,237,0.12); } 50% { box-shadow: 0 0 48px 8px rgba(124,58,237,0.18); } }
      `}</style>
    </div>
  );
}

export default About; 