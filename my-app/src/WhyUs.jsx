"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Settings, TrendingUp, Eye, Shield, Star, ArrowRight, X, Check } from "lucide-react"
import Navbar from "./components/Navbar"
import { FaCheck } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

function Card({ className = "", children }) {
  return <div className={`rounded-3xl ${className}`}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", children, ...props }) {
  return <button className={className} {...props}>{children}</button>;
}

// TestimonialCarousel for founder testimonials
const SLIDE_ANIMATION = {
  enter: 'opacity-0 translate-x-10',
  active: 'opacity-100 z-10 translate-x-0',
  exit: 'opacity-0 z-0 -translate-x-10',
};

function TestimonialCarousel({ testimonials, large }) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [index, testimonials.length]);
  return (
    <div className={`relative h-32 sm:h-36 flex items-center justify-center overflow-hidden ${large ? 'md:h-64 sm:ml-[165px] sm:mt-4' : ''}`}>
      {testimonials.map((text, i) => {
        let base = 'absolute left-0 right-0 mx-auto min-w-full transition-all duration-700 ease-in-out';
        let state = '';
        if (i === index) {
          state = 'opacity-100 z-10 translate-x-0';
        } else if (i === prevIndex) {
          state = `opacity-0 z-0 ${direction === 1 ? '-translate-x-10' : 'translate-x-10'}`;
        } else {
          state = 'opacity-0 z-0 translate-x-10';
        }
        return (
          <div
            key={i}
            className={`${base} ${state}`}
            style={{ pointerEvents: i === index ? 'auto' : 'none' }}
          >
            <div className={`bg-white border border-green-200 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[6rem] sm:min-h-[7rem] ${large ? 'md:px-24 md:py-16 md:min-h-[16rem] md:max-w-2xl' : 'px-6 py-8 sm:px-10 sm:py-10'}`}>
              <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">"{text}"</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function WhyUs() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contactus');
  };

  return (
    <div className="bg-white min-h-screen text-[#222] overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <motion.main
        className="max-w-7xl mt-7 sm:mt-0 mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-16 md:py-24"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-2xl sm:text-6xl md:text-7xl font-black text-center mb-6 bg-gradient-to-r from-green-700 via-black to-green-400 bg-clip-text text-transparent leading-tight"
          variants={fadeInUp}
        >
          Why Hundreds of Founders Trust The Ecom Monks With Their Brand
        </motion.h1>

        {/* Main Why Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <Card className="bg-white border border-slate-200 shadow-2xl shadow-green-100/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/10 to-green-50/10 pointer-events-none" />
            <CardContent className="relative p-4 sm:p-12 md:p-16">
              <div className="hidden sm:block absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-green-600 rounded-r-full" />

              <motion.h2
                className="text-2xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Why The Ecom Monks?
              </motion.h2>

              <motion.div className="space-y-6" variants={staggerContainer}>
                <motion.p
                  className="text-xl sm:text-2xl text-[#222] font-semibold leading-relaxed"
                  variants={fadeInUp}
                >
                  You've tried the SPNs. You've been ghosted by agencies.
                  <br />
                  Now, it's time to work with people who've built brands, bled through glitches, and cracked growth on
                  every major platform.
                </motion.p>

                <motion.p className="text-lg sm:text-xl text-green-700 leading-relaxed" variants={fadeInUp}>
                  We're not here to "service" your account.
                  <br />
                  We're here to build your brand — with skin in the game, clear roadmaps, and zero fluff.
                </motion.p>

                <motion.div className="text-center py-3" variants={fadeInUp}>
                  <div className="inline-block bg-gradient-to-r from-black to-green-700 text-white text-2xl sm:text-3xl font-black px-2 sm:px-8 py-4 rounded-2xl shadow-lg">
                    We're Not Just Another Ecom Agency.
                  </div>
                </motion.div>

                <motion.div
                  className="text-lg sm:text-2xl font-bold text-center text-[#222] mb-3"
                  variants={fadeInUp}
                >
                  We're the ones you call after the others fail.
                </motion.div>

                <motion.ul className="space-y-2 text-[#222] text-base sm:text-xl" variants={staggerContainer}>
                  {[
                    "We've fought suppressed ASINs that sellers gave up on.",
                    "We've fixed RTO fraud cases that even Flipkart wouldn't explain.",
                    "We've recovered ₹5Cr+ in Safe-T, returns, and revenue bleed.",
                    "We've built performance layers so predictable — they scale like clockwork.",
                  ].map((item, index) => (
                    <motion.li key={index} className="flex items-start gap-3" variants={fadeInUp}>
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>

        {/* The Monk Way Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <motion.h2
            className="text-2xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-black to-green-700 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            OUR DIFFERENCE: THE MONK WAY
          </motion.h2>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={staggerContainer}>
            {/* Card 1 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12  bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-4 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">BUILT BY SELLERS. FOR SELLERS.</span>
                  </div>
                  <p className="text-[#222] mb-3 leading-relaxed">
                    Other agencies hire interns to manage your account.
                    <br />
                    We've lived it ourselves — from getting suspended on Amazon to getting no resolution from Myntra
                    support for 14 days straight.
                    <br />
                    So when we say we understand your pain, we mean it.
                    <br />
                    And that's why we show up — every single week.
                  </p>
                  <Card className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400">
                    <CardContent className="p-4">
                      <blockquote className="italic text-green-700">
                        "They helped us with issues we didn't even know could be fixed."
                        <br />
                        <span className="text-sm font-medium">– Ayurvedic D2C Brand, 2.5× Sales in 4 Months</span>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">OUR FRAMEWORKS {">"} YOUR GUESSWORK</span>
                  </div>
                  <p className="text-[#222] mb-4 leading-relaxed">
                    We don't offer 'custom strategies' that change every week.
                    <br />
                    We offer battle-tested systems:
                  </p>
                  <ul className="space-y-2 text-green-700 mb-4">
                    {[
                      "A.U.D.I.T. SPRINT™: Pinpoints every revenue leak",
                      "S.O.S. LISTING SYSTEM™: Fixes listings that look pretty but don't convert",
                      "AD SMARTSET™: Turns chaotic ads into layered performance funnels",
                      "TRIPLE-T ENGINE™: Gives you an accountable, proactive squad",
                      "CONVERSION LOOP™: Integrates marketplace + q-commerce + social channels",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="inline text-green-500 text-base md:text-lg mr-1 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-green-700 font-medium">
                    Each one is a plug-and-perform machine, engineered over ₹100Cr in ecom sales.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">YOU GET A REAL TEAM, NOT A HELPLINE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-red-50 border-red-200">
                      <CardContent className="p-4">
                        <div className="font-bold text-red-700 mb-2">Typical Agencies</div>
                        <ul className="space-y-1 text-red-600 text-sm">
                          <li>• 1 manager → 20 accounts</li>
                          <li>• Delays & ghosting</li>
                          <li>• Intern-driven grunt work</li>
                          <li>• One-size-fits-all plans</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="font-bold text-green-700 mb-2">The Ecom Monks</div>
                        <ul className="space-y-1 text-green-600 text-sm">
                          <li>• 3-member pod → Max 10 brands</li>
                          <li>• Weekly calls + Slack + real-time nudges</li>
                          <li>• Senior talent trained across marketplaces</li>
                          <li>• Custom tracks tied to your product lifecycle</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400">
                    <CardContent className="p-4">
                      <blockquote className="italic text-green-700">
                        "They're not an agency. They're my brand's growth department."
                        <br />
                        <span className="text-sm font-medium">– Fashion Seller, 4× Zepto sales in 6 weeks</span>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">WE FIX WHAT OTHERS DON'T EVEN SEE</span>
                  </div>
                  <p className="text-[#222] mb-4">If you've ever faced:</p>
                  <ul className="space-y-2 text-green-700 mb-4">
                    {[
                      "Stuck listings with no resolution",
                      "Duplicate child SKUs that won't merge",
                      "Category misclassifications on Flipkart",
                      "FBA/FBF mismatch",
                      "Search suppressed ASINs",
                      "Invisible ad spends with 0 attribution",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="inline text-green-500 text-base md:text-lg mr-1 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-green-700 font-medium">
                    We don't tell you it's "a platform issue."
                    <br />
                    We fix it. Or escalate it. Or escalate until it's fixed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 5 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">OUR GROWTH PHILOSOPHY</span>
                  </div>
                  <p className="text-[#222] mb-4">
                    We don't just track ROAS.
                    <br />
                    We monitor:
                  </p>
                  <ul className="space-y-2 text-green-700 mb-4">
                    {[
                      "CTR → CVR → Margin progression",
                      "Organic rank gains post-listing revamp",
                      "LTV across platforms",
                      "Review velocity & Buy Box win %",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="inline text-green-500 text-base md:text-lg mr-1 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-green-700 font-medium">
                    And yes, we also care about something most agencies don't: Your sanity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 6 */}
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200 shadow-xl shadow-green-100/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-xl text-[#222]">TRANSPARENCY ≠ TEMPLATES</span>
                  </div>
                  <ul className="space-y-2 text-green-700 mb-4">
                    {[
                      "We don't believe in locking you into ₹XX packages before we understand your stage",
                      "Pushing you ads before fixing your funnel",
                      'Selling you on "views" when what you need is sales',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="inline text-green-500 text-base md:text-lg mr-1 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#222] mb-6">
                    If you're an early-stage brand without budget, but with fire — we still want to talk.
                  </p>

                  <Card className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-200">
                    <CardContent className="p-6">
                      <div className="font-black text-green-700 mb-4 text-lg">THE ECOM MONKS GROWTH GRANT</div>
                      <ul className="space-y-2 text-green-700 mb-4">
                        {[
                          "For 1 brand every quarter, we waive base fees.",
                          "No monthly retainer",
                          "No hourly billing",
                          "We only take a % of net sales we help you generate",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-green-700 mb-4">
                        This is NOT open to all. You must apply.
                        <br />
                        We pick based on:
                      </p>
                      <ul className="space-y-2 text-green-700 mb-6">
                        {["Product potential", "Team intent", "Brand story"].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={handleContactNavigation}
                        className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-3 rounded-xl shadow-lg">
                       Apply Now <span className="text-xs ml-2"><br></br>(Limited to 1 brand/quarter)</span>
                      </Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Founder Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <motion.h2
            className="text-2xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-black to-green-700 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            FROM THE FOUNDER
          </motion.h2>
          <motion.div {...scaleOnHover}>
            <Card className="bg-white border border-slate-200 shadow-2xl shadow-green-100/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5" />
              <CardContent className="relative p-8 sm:p-12 md:p-16">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-green-600 rounded-r-full" />
                <blockquote className="italic text-green-700 text-xl sm:text-2xl mb-8 leading-relaxed">
                  "I started The Ecom Monks not as an agency…
                  <br />
                  but as a rebellion.
                  <br />
                  Because I was tired of being treated like a ticket — and wanted to build a team that worked like a
                  tribe."
                </blockquote>
                <div className="text-green-700 font-bold text-right text-lg">
                  – Arun R. Chachan, Founder, ISB Alumnus, Entrepreneur
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Who This Is For Section */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer}>
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="font-black text-green-700 mb-6 text-xl flex items-center gap-3">
                    <CheckCircle className="w-8 h-8" />
                    WHO THIS IS FOR
                  </div>
                  <ul className="space-y-3 text-green-700">
                    {[
                      "You're launching your first 5 SKUs",
                      "You've scaled to ₹50L/month but hit a ceiling",
                      "You want platform + ad + q-commerce synergy",
                      "You're tired of babysitting agencies",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-red-50 border border-red-200">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600" />
                  <div className="font-black text-red-700 mb-6 text-xl flex items-center gap-3">
                    <X className="w-8 h-8 text-red-600" />
                    WHO THIS IS NOT FOR
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    {["DIY-only founders", "7-day miracle seekers", "Price shoppers with no brand direction"].map(
                      (item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <motion.h2
            className="text-2xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            REAL WORDS FROM FOUNDERS
          </motion.h2>
          <div className="max-w-2xl md:max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <TestimonialCarousel testimonials={[
              "We switched from a top agency. In 90 days, The Ecom Monks helped us 3× sales on Flipkart and rank for 7 new keywords on Amazon.",
              "It's the first time I've felt supported — not sold to.",
              "I message them like they're my team. Because they are.",
            ]} />
          </div>
        </motion.section>

        {/* Monk Vows */}
        <motion.section className="mb-8" variants={fadeInUp}>
          <motion.h2
            className="text-2xl sm:text-4xl font-black text-center mb-4 bg-gradient-to-r from-black to-green-700 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            THE MONK VOWS <br></br> (We Stand By This)
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerContainer}>
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-red-50 border border-red-200">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600" />
                  <div className="font-black text-red-700 mb-6 text-xl flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    We will never:
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Overpromise in proposals",
                      "Hide behind jargon",
                      "Delegate you to interns",
                      "Offer cookie-cutter strategies",
                      "Take on your competitor",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="h-full bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-600" />
                  <div className="font-black text-green-700 mb-6 text-xl flex items-center gap-3">
                    <CheckCircle className="w-8 h-8" />
                    We always:
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Take full ownership of your growth",
                      "Show you what others won't",
                      "Refuse brands that don't align",
                      "Invest in long-term relationships",
                      "Respect your budgets like they're ours",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Final CTA */}
        <motion.section className="text-center" variants={fadeInUp}>
          <motion.h2
            className="text-2xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-black to-green-700 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            SO — WHY NOT YOU?
          </motion.h2>
          <motion.p className="text-lg font-bold sm:text-2xl text-green-700 mb-12 leading-relaxed text-left max-w-2xl mx-auto" variants={fadeInUp}>
            Whether you're stuck or scaling, we'll give you the map. We'll build the machine. And we'll scale with you like we mean it.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 w-full max-w-xs mx-auto"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Button
                onClick={handleContactNavigation}
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
               Claim Your Free Growth Audit
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                onClick={handleContactNavigation}
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                 Apply for Growth Grant
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                onClick={handleContactNavigation}
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                 Book Your Founder Call
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  )
}

export default WhyUs
