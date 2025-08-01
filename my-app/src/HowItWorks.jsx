import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  {
    title: "Step 1: The Discovery Call – 'Let's Align'",
    icon: "📞",
    points: [
      "30-minute strategy session with our core team",
      "We deep-dive into your current platform presence, gaps, goals, and expectations",
      "We never hard-sell — this is a clarity-first call, not a sales trap.",
    ],
    youLeaveWith: [
      "Real-time insights on your current setup",
      "Whether you're platform-ready (or still need work)",
      "A gut check: Are we the right growth partners for you?",
    ],
  },
  {
    title: "Step 2: Free Brand Audit – 'Show Us Your Store'",
    icon: "🛒",
    points: [
      "Once you qualify, our platform specialists (Role Play 1–3) do a 360° diagnostic:",
      "Listing & Catalog Health Check",
      "Ad Structure & Spend Leak Review",
      "Backend Hygiene & Order Flow",
      "Consumer Psychology Gaps (Images, Copy, Ratings)",
      "Competitor Benchmarking",
      "Platform Violation Risks / Hidden Policy Gaps",
    ],
    youGet: [
      "A 12-point audit report + strategic roadmap delivered within 3 working days.",
    ],
  },
  {
    title: "Step 3: Custom Growth Blueprint – 'Let's Plan the Climb'",
    icon: "🧭",
    points: [
      "No copy-paste packages.",
      "We tailor your launch/growth roadmap based on category, competition, and cash flow.",
    ],
    blueprint: [
      "Primary + secondary platform strategy",
      "Listing + Creative + Ads Flow",
      "Quick Commerce Readiness (Zepto / BlinkIt / Swiggy Instamart)",
      "GTM Funnel (with 30–90 day goals)",
      "Cost/effort clarity by function (listing, ads, content, ops)",
      "We unlock what's really needed, and trim the rest.",
    ],
  },
  {
    title: "Step 4: Onboarding & Kickoff – 'Let's Go Monk Mode'",
    icon: "🚀",
    points: [
      "Dedicated Account Manager",
      "Platform-specific Execution Pods (Amazon, Flipkart, Nykaa, Zepto, etc.)",
      "Shared access to custom dashboard (ClickUp/Asana/Notion)",
      "WhatsApp + Email Support",
      "Weekly Growth Calls",
    ],
    first30: [
      "Fix backend issues (catalog, A+ content, ads mess)",
      "Run A/B creative tests + deploy winning stack",
      "Optimize for indexing, visibility, and first set of sales wins",
      "Set up inventory sync + daily reporting",
      "You finally get to breathe.",
    ],
  },
  {
    title: "Step 5: Performance Loop – 'Test. Learn. Scale.'",
    icon: "🔄",
    points: [
      "We don't 'set and forget.' Every week, we run our Monk Performance Loop:",
      "Review – What's working, what's stuck",
      "Refine – Creative, pricing, keywords, funnels",
      "Retarget – Across platforms or to cart abandoners",
      "Reinvest – Your ad budget is moved like capital, not cash burn",
      "This is where the compounding starts.",
    ],
  },
  {
    title: "Step 6: Growth Scaling – 'From Good to Legendary'",
    icon: "🏆",
    points: [
      "Brands that stay with us don't just grow.",
      "They get distribution, PR, D2C traction, and investor attention.",
    ],
    unlock: [
      "Entry into Q-Commerce (Zepto / BlinkIt / Instamart)",
      "Brand Collabs (through our growing partner network)",
      "Paid Media at Scale (Amazon DSP, Flipkart ADX, Meta + Google)",
      "Influencer + Performance + D2C expansion",
      "We evolve with your brand. Not every agency does that. We do — because we plan long-term.",
    ],
  },
];

function HowItWorks() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100/30 to-green-200/20 min-h-screen text-green-900 overflow-x-hidden">
      <Navbar />
      <ParallaxSection speed={0.2} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-7xl mx-auto sm:mt-0 mt-6 px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-xl sm:text-6xl md:text-7xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-700 to-black bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
         Your Ecom Journey Starts Here. Smooth, Simple & Seller-Friendly.
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-5 mb-12 items-center justify-center">
          <ThreeDCard className="w-full md:w-1/2 p-3 sm:p-6 bg-gradient-to-br from-white to-green-50/30">
            <motion.p className="text-sm sm:text-xl text-center text-green-600 font-semibold" variants={fadeInUp}>
              From Chaos to Clarity — Here's What Working With Us Looks Like
            </motion.p>
          </ThreeDCard>
          <ThreeDCard className="w-full md:w-1/2 p-1 sm:p-6 bg-gradient-to-br from-white to-green-50/30">
            <motion.p className="text-sm sm:text-lg text-center text-green-500" variants={fadeInUp}>
              Scaling online shouldn't feel like solving a Rubik's cube in the dark.
              We make your journey structured, simple, and revenue-ready from Day 1.
            </motion.p>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Step-by-Step: How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, idx) => (
            <ThreeDCard key={idx} className="p-6 md:p-10 bg-gradient-to-br from-white to-green-50/30 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-black text-md md:text-2xl text-green-700">{step.title}</span>
              </div>
              {step.points && (
                <ul className="list-none p-1 ml-0 text-green-700 text-sm sm:text-lg mb-2">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                  ))}
                </ul>
              )}
              {step.youLeaveWith && (
                <div className="bg-green-50/60 rounded-xl p-4 mt-2">
                  <div className="font-bold text-green-700 mb-1">You leave with:</div>
                  <ul className="list-none ml-0 text-green-700 text-sm sm:text-lg">
                    {step.youLeaveWith.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.youGet && (
                <div className="bg-green-50/60 rounded-xl p-4 mt-2">
                  <div className="font-bold text-green-700 mb-1">You get:</div>
                  <ul className="list-none ml-0 text-green-700 text-sm sm:text-lg">
                    {step.youGet.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.blueprint && (
                <div className="bg-green-100/40 rounded-xl p-4 mt-2">
                  <div className="font-bold text-green-700 mb-1">Your Blueprint Includes:</div>
                  <ul className="list-none ml-0 text-green-700 text-sm sm:text-lg">
                    {step.blueprint.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.first30 && (
                <div className="bg-green-100/40 rounded-xl p-4 mt-2">
                  <div className="font-bold text-green-700 mb-1">First 30 Days → What We Do:</div>
                  <ul className="list-none ml-0 text-green-700 text-sm sm:text-lg">
                    {step.first30.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
              {step.unlock && (
                <div className="bg-green-100/40 rounded-xl p-4 mt-2">
                  <div className="font-bold text-green-700 mb-1">What We Unlock:</div>
                  <ul className="list-none ml-0 text-green-700 text-sm sm:text-lg">
                    {step.unlock.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 mb-4"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </ThreeDCard>
          ))}
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mt-16 mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Bonus: Monk Mentality
        </motion.h2>
        <ThreeDCard className="p-8 bg-gradient-to-br from-white to-green-50/30 mb-12 flex flex-col gap-4">
          <motion.p className="text-md sm:mb-0 mb-4 text-left sm:text-xl text-center text-green-700 font-semibold" variants={fadeInUp}>
            We take fewer clients — because we take more ownership.
            You won't be ghosted. You won't be confused. You won't need to chase us.
            We're not freelancers. We're growth monks.
          </motion.p>
          <ul className="mx-auto text-green-700 text-sm sm:text-lg max-w-xl">
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You'll always know: What we're doing</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />Why we're doing it</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />What it's producing</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />When to pivot</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />And if something breaks, we'll fix it before you even ask.</li>
          </ul>
        </ThreeDCard>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Ready to Begin?
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => navigate("/contactus#contact-form")}
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-3 px-2 sm:px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
             Apply Now – Get Your Free Audit
          </button>
          <button
            onClick={() => navigate("/contactus#contact-form")}
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            Book a Discovery Call
          </button>
          <button
            onClick={() => navigate("/contactus#contact-form")}
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-3 px-4 sm:px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            Book A Call with Arun
          </button>
        </div>
        <motion.p className="text-md sm:mt-0 mt-[-40px] sm:text-2xl text-center text-green-700  font-semibold" variants={fadeInUp}>
          Let's make your journey the next success story.
        </motion.p>
      </motion.main>
    </div>
  );
}

export default HowItWorks; 