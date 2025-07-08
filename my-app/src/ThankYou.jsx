import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { Mail, Users, CheckCircle, BookOpen, Flame, HeartHandshake } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

function ThankYou() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50/40 to-green-200/20 min-h-screen text-green-900 overflow-x-hidden relative">
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
        className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-green-400 to-green-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["You're In. We'll Be In Touch Soon."]} className="inline-block" />
        </motion.h1>
        <motion.div className="mb-4 sm:mb-10 text-center" variants={fadeInUp}>
          <div className="text-xl sm:text-3xl font-bold text-green-700 mb-2">Thank You for Applying to the Monk Growth Grant</div>
          <div className="text-lg sm:text-xl text-green-700">We've received your pitch. And we're genuinely excited to read your story.<br />This isn't just a formality — it's the first step in a partnership that could change your brand's trajectory.</div>
        </motion.div>
        <motion.div className="flex flex-col gap-4 sm:gap-8 mb-12" variants={staggerContainer}>
          <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 flex flex-col gap-2 border border-green-100">
            <div className="flex items-center gap-3 mb-2 text-green-600 font-bold text-lg"><Users className="w-7 h-7" />What Happens Now?</div>
            <div className="font-black text-green-700 mb-1">Step 1: We Dive Deep Into Your Application</div>
            <div className="text-green-700">Our senior team personally reviews each application, focusing on:</div>
            <ul className="list-disc ml-6 text-green-700">
              <li>Founder intent and backstory</li>
              <li>Product-market clarity</li>
              <li>Platform readiness and category potential</li>
            </ul>
            <div className="text-green-700 mt-2">We look beyond numbers. We look for grit, vision, and momentum.</div>
          </div>
          <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 flex flex-col gap-2 border border-green-100">
            <div className="flex items-center gap-3 mb-2 text-green-600 font-bold text-lg"><CheckCircle className="w-7 h-7" />Step 2: If Shortlisted…</div>
            <div className="text-green-700">You'll hear from us within 7–10 days to set up a 1-on-1 discovery call. This will help us understand your challenges, product strengths, and growth goals.</div>
          </div>
          <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 flex flex-col gap-2 border border-green-100">
            <div className="flex items-center gap-3 mb-2 text-green-600 font-bold text-lg"><CheckCircle className="w-7 h-7" />Step 3: Final Selection</div>
            <div className="text-green-700">We only choose 1 brand per quarter. If you're selected, we'll handle your full-stack ecommerce growth for 90 days — with zero base fees and 100% commitment from our Monk team.<br />No shortcuts. No excuses. Just pure hustle + performance.</div>
          </div>
          <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 flex flex-col gap-2 border border-green-100">
            <div className="flex items-center gap-3 mb-2 text-green-600 font-bold text-lg"><HeartHandshake className="w-7 h-7" />Even If You're Not Selected</div>
            <div className="text-green-700">We'll still:</div>
            <ul className="list-disc ml-6 text-green-700">
              <li>Send you a basic brand audit</li>
              <li>Share 2–3 actionable insights to implement on your own</li>
              <li>Keep you in the loop for the next cohort</li>
            </ul>
            <div className="text-green-700 mt-2">Because if you showed up for your brand today, we want to show up for you.</div>
          </div>
        </motion.div>
        <motion.div className="mb-12 flex justify-center" variants={fadeInUp}>
          <div className="w-full max-w-md bg-green-50/70 border border-green-100 rounded-2xl p-4 flex flex-col items-center gap-3 shadow-md">
            <div className="text-lg sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-1"><span className="text-xl">💬</span> Got Questions?</div>
            <a href="mailto:hello@theecommonks.com" className="flex items-center gap-3 w-full bg-white rounded-xl px-3 py-2 text-green-700 font-semibold shadow hover:bg-green-100 transition mb-1">
              <Mail className="w-5 h-5 text-green-500" />
              <span className="flex-1 text-left break-all">hello@theecommonks.com</span>
            </a>
            <a href="/services" className="flex items-center gap-3 w-full bg-white rounded-xl px-3 py-2 text-green-700 font-semibold shadow hover:bg-green-100 transition">
              <Users className="w-5 h-5 text-green-500" />
              <span className="flex-1 text-left">Explore what we do: <span className="underline">Our Services</span></span>
            </a>
          </div>
        </motion.div>
        <motion.div className="mb-12 text-center" variants={fadeInUp}>
          <div className="text-xl sm:text-2xl font-bold text-green-700 mb-2">🔥 In the Meantime…</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/results" className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300">Get inspired by brands we've scaled → View Results</a>
            <a href="/ourframeworks" className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300">Understand our playbook → Explore Frameworks</a>
            <a href="/aboutus" className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-400 hover:from-green-500 hover:to-green-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300">Meet the Monks behind the method → About Us</a>
          </div>
        </motion.div>
        <motion.div className="mb-[-20px] text-center" variants={fadeInUp}>
          <div className="text-lg sm:text-xl text-green-700 font-semibold">Remember: This isn't a pitch. It's a belief.<br />We believe in brands that are built with heart, not hype.<br />And we can't wait to see what we build together.</div>
        </motion.div>
      </motion.main>
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default ThankYou; 