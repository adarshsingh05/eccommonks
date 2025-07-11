import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, Users, Settings, TrendingUp, Eye, Shield, Star, ArrowRight, X } from "lucide-react";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import AnimatedCounter from "./components/AnimatedCounter";
import ParallaxSection from "./components/ParallaxSection";
import TestimonialCarousel from "./components/TestimonialCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function Results() {
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
          Results That Speak Louder Than Words", "Real Growth. Real Fixes. Real Fast.
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-center">
          <ThreeDCard className="w-full md:w-1/2 p-3 sm:p-6 bg-gradient-to-br from-white to-green-50/30">
            <motion.blockquote className="italic text-green-700 text-md sm:text-2xl leading-relaxed text-center" variants={fadeInUp}>
              "Before The Ecom Monks, our brand was invisible on Flipkart.<br />After? We became a category bestseller in 40 days. With fewer SKUs."
            </motion.blockquote>
          </ThreeDCard>
          <ThreeDCard className="w-full md:w-1/2 p-3 sm:p-6 bg-gradient-to-br from-white to-green-50/30">
            <motion.p className="text-lg sm:text-xl text-center text-green-600 font-semibold" variants={fadeInUp}>
              We don't pitch possibilities.<br />We engineer proof.
            </motion.p>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          From Stuck to Scaling — Our Clients' Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-7 h-7 text-blue-500" /><span className="font-bold text-blue-700">Newbie</span></div>
            <div className="text-green-700">Ayurveda Wellness</div>
            <div className="text-green-700">Amazon + Flipkart</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={2.1} duration={1500} suffix="×" /> sales in 90 days with 5 SKUs</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-red-50 to-white">
            <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-7 h-7 text-red-500" /><span className="font-bold text-red-700">Plateaued</span></div>
            <div className="text-green-700">Fashion Footwear</div>
            <div className="text-green-700">Meesho + Myntra</div>
            <div className="text-green-700 font-black text-xl">RTO down <AnimatedCounter end={20} duration={1500} suffix="%" />, ads CTR up <AnimatedCounter end={2.2} duration={1500} suffix="×" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-2 mb-2"><Settings className="w-7 h-7 text-blue-500" /><span className="font-bold text-blue-700">Scaling</span></div>
            <div className="text-green-700">Health Supplements</div>
            <div className="text-green-700">Amazon + Q-commerce</div>
            <div className="text-green-700 font-black text-xl">CVR up <AnimatedCounter end={40} duration={1500} suffix="%" />, TACoS cut in half</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-yellow-50 to-white">
            <div className="flex items-center gap-2 mb-2"><Star className="w-7 h-7 text-yellow-500" /><span className="font-bold text-yellow-700">Market Leader</span></div>
            <div className="text-green-700">Skincare</div>
            <div className="text-green-700">Amazon + Nykaa</div>
            <div className="text-green-700 font-black text-xl">Became Top 10 in Nykaa, <AnimatedCounter end={5} duration={1500} suffix="×" /> Zepto visibility</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Before & After The Ecom Monks
        </motion.h2>
        <ThreeDCard className="p-4 sm:p-8 mb-8 bg-gradient-to-br from-white to-green-50/30">
          <motion.blockquote className="italic text-green-700 text-sm sm:text-2xl leading-relaxed text-center max-w-3xl mx-auto" variants={fadeInUp}>
            "We spent ₹2L/month on ads for 4 months with no tracking, no strategy.<br />The Monks rebuilt our funnel. ROAS doubled. Clarity returned. Peace of mind too."
          </motion.blockquote>
          <motion.p className="text-sm sm:text-xl text-center text-green-600 mt-6" variants={fadeInUp}>
            We don't start with media plans.<br />We start with cleaning up the mess others left behind.
          </motion.p>
        </ThreeDCard>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          What No One Fixed — We Did
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black mb-2">Suppressed Listings</div>
            <div className="text-green-700 mb-2">Others Said: <span className="italic">"Platform glitch"</span></div>
            <div className="text-green-700 font-black">Recovered 120+ ASINs in 45 days</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black mb-2">30% Return Rate</div>
            <div className="text-green-700 mb-2">Others Said: <span className="italic">"Customer issue"</span></div>
            <div className="text-green-700 font-black">Fixed title-image mismatch, RTO dropped 50%</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black mb-2">Invisible on Zepto</div>
            <div className="text-green-700 mb-2">Others Said: <span className="italic">"Too niche"</span></div>
            <div className="text-green-700 font-black">Used local-language meta + reviews, 4× conversions</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black mb-2">Ad Burn, No Sales</div>
            <div className="text-green-700 mb-2">Others Said: <span className="italic">"Increase budget"</span></div>
            <div className="text-green-700 font-black">Restructured full funnel, ROAS went from 1.9× → 4.8×</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Frameworks That Delivered
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">A.U.D.I.T. SPRINT™</div>
            <div className="text-green-700 font-black">Unlocked <AnimatedCounter end={4.3} duration={1500} suffix="Cr+" /> in hidden opportunities</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">S.O.S. LISTING SYSTEM™</div>
            <div className="text-green-700 font-black">Turned dead SKUs into top-performers</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">AD SMARTSET™</div>
            <div className="text-green-700 font-black">Boosted average CTR by <AnimatedCounter end={2.5} duration={1500} suffix="×" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">TRIPLE-T TEAM ENGINE™</div>
            <div className="text-green-700 font-black">Reduced resolution time by <AnimatedCounter end={80} duration={1500} suffix="%" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">CONVERSION LOOP™</div>
            <div className="text-green-700 font-black">Aligned q-commerce + ads + SEO into one flywheel</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          What Founders Say
        </motion.h2>
        <div className="mb-12">
          <TestimonialCarousel testimonials={[
            "No one explained why my ads weren't converting — until these guys reverse engineered my entire listing structure.",
            "We were stuck for 6 months with flat sales. They fixed our catalog, listings, and ads within 8 weeks. Sales doubled.",
            "Everyone told us Amazon returns couldn't be reduced. They proved otherwise."
          ]} />
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          What We Unlocked for Our Clients
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">Recovered Ad Spend</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={4.1} duration={1500} suffix="Cr+" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">Lost Listings Fixed</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={120} duration={1500} suffix="+ ASINs" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">RTO Reduction</div>
            <div className="text-green-700 font-black text-xl">Avg. <AnimatedCounter end={40} duration={1500} suffix="–55%" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">Catalog Cleanup</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={300} duration={1500} suffix="+ backend issues resolved" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="font-bold text-black  mb-2">Category Rank Jump</div>
            <div className="text-green-700 font-black text-xl">Top 10 within 90–125 days</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          You're Next — If This Sounds Like You:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 font-black text-green-700 text-xl">Who This Is For</div>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />Your sales are stuck or shrinking</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You're running ads, but can't see why they're failing</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You suspect your listings are off, but don't know what to fix</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You want someone who treats your brand like a business, not a ticket</li>
            </ul>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-red-50 to-white flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 font-black text-red-700 text-xl">Who This Is Not For</div>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>DIY-only founders</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>7-day miracle seekers</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>Price shoppers with no brand direction</span>
              </li>
            </ul>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-black bg-clip-text text-transparent" variants={fadeInUp}>
          Your Next Step: Let's Build This Together
        </motion.h2>
        <motion.p className="text-lg sm:text-xl text-center text-green-600 mb-8" variants={fadeInUp}>
          We only onboard 6 brands/month to protect focus and avoid platform conflicts.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#apply"
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-3 px-2 sm:px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
          Apply for Our Results-Only Growth Grant
          </a>
          <a
            href="#strategy"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
           Book a Strategy Call
          </a>
          <a
            href="#audit"
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-bold py-3 px-4 sm:px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            Claim Your Free Marketplace Audit
          </a>
        </div>
        <motion.p className="text-md sm:mt-0 mt-[-40px] sm:text-2xl text-center text-green-700  font-semibold" variants={fadeInUp}>
          Let's make you the next brand on this page.
        </motion.p>
      </motion.main>
    </div>
  );
}

export default Results; 