import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import AnimatedCounter from "./components/AnimatedCounter";
import ParallaxSection from "./components/ParallaxSection";

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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen text-slate-800 overflow-x-hidden">
      <Navbar />
      <ParallaxSection speed={0.2} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["Results That Speak Louder Than Words", "Real Growth. Real Fixes. Real Fast."]} className="inline-block" />
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-center">
          <ThreeDCard className="w-full md:w-1/2 p-6 bg-gradient-to-br from-white to-blue-50/30">
            <motion.blockquote className="italic text-slate-700 text-xl sm:text-2xl leading-relaxed text-center" variants={fadeInUp}>
              “Before The Ecom Monks, our brand was invisible on Flipkart.<br />After? We became a category bestseller in 40 days. With fewer SKUs.”
            </motion.blockquote>
          </ThreeDCard>
          <ThreeDCard className="w-full md:w-1/2 p-6 bg-gradient-to-br from-white to-purple-50/30">
            <motion.p className="text-lg sm:text-xl text-center text-slate-600 font-semibold" variants={fadeInUp}>
              We don't pitch possibilities.<br />We engineer proof.
            </motion.p>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          From Stuck to Scaling — Our Clients' Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-2 mb-2"><span className="text-2xl">🚦</span><span className="font-bold">Newbie</span></div>
            <div className="text-slate-700">Ayurveda Wellness</div>
            <div className="text-slate-700">Amazon + Flipkart</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={2.1} duration={1500} suffix="×" /> sales in 90 days with 5 SKUs</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-center gap-2 mb-2"><span className="text-2xl">📉</span><span className="font-bold">Plateaued</span></div>
            <div className="text-slate-700">Fashion Footwear</div>
            <div className="text-slate-700">Meesho + Myntra</div>
            <div className="text-green-700 font-black text-xl">RTO down <AnimatedCounter end={20} duration={1500} suffix="%" />, ads CTR up <AnimatedCounter end={2.2} duration={1500} suffix="×" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-2 mb-2"><span className="text-2xl">⚙️</span><span className="font-bold">Scaling</span></div>
            <div className="text-slate-700">Health Supplements</div>
            <div className="text-slate-700">Amazon + Q-commerce</div>
            <div className="text-green-700 font-black text-xl">CVR up <AnimatedCounter end={40} duration={1500} suffix="%" />, TACoS cut in half</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 flex flex-col gap-2 bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-center gap-2 mb-2"><span className="text-2xl">🏆</span><span className="font-bold">Market Leader</span></div>
            <div className="text-slate-700">Skincare</div>
            <div className="text-slate-700">Amazon + Nykaa</div>
            <div className="text-green-700 font-black text-xl">Became Top 10 in Nykaa, <AnimatedCounter end={5} duration={1500} suffix="×" /> Zepto visibility</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          Before & After The Ecom Monks
        </motion.h2>
        <ThreeDCard className="p-8 mb-8 bg-gradient-to-br from-white to-blue-50/30">
          <motion.blockquote className="italic text-slate-700 text-xl sm:text-2xl leading-relaxed text-center max-w-3xl mx-auto" variants={fadeInUp}>
            “We spent ₹2L/month on ads for 4 months with no tracking, no strategy.<br />The Monks rebuilt our funnel. ROAS doubled. Clarity returned. Peace of mind too.”
          </motion.blockquote>
          <motion.p className="text-lg sm:text-xl text-center text-slate-600 mt-6" variants={fadeInUp}>
            We don't start with media plans.<br />We start with cleaning up the mess others left behind.
          </motion.p>
        </ThreeDCard>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          What No One Fixed — We Did
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">Suppressed Listings</div>
            <div className="text-slate-700 mb-2">Others Said: <span className="italic">"Platform glitch"</span></div>
            <div className="text-green-700 font-black">Recovered 120+ ASINs in 45 days</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">30% Return Rate</div>
            <div className="text-slate-700 mb-2">Others Said: <span className="italic">"Customer issue"</span></div>
            <div className="text-green-700 font-black">Fixed title-image mismatch, RTO dropped 50%</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">Invisible on Zepto</div>
            <div className="text-slate-700 mb-2">Others Said: <span className="italic">"Too niche"</span></div>
            <div className="text-green-700 font-black">Used local-language meta + reviews, 4× conversions</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">Ad Burn, No Sales</div>
            <div className="text-slate-700 mb-2">Others Said: <span className="italic">"Increase budget"</span></div>
            <div className="text-green-700 font-black">Restructured full funnel, ROAS went from 1.9× → 4.8×</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          Frameworks That Delivered
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">A.U.D.I.T. SPRINT™</div>
            <div className="text-green-700 font-black">Unlocked <AnimatedCounter end={4.3} duration={1500} suffix="Cr+" /> in hidden opportunities</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">S.O.S. LISTING SYSTEM™</div>
            <div className="text-green-700 font-black">Turned dead SKUs into top-performers</div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">AD SMARTSET™</div>
            <div className="text-green-700 font-black">Boosted average CTR by <AnimatedCounter end={2.5} duration={1500} suffix="×" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">TRIPLE-T TEAM ENGINE™</div>
            <div className="text-green-700 font-black">Reduced resolution time by <AnimatedCounter end={80} duration={1500} suffix="%" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">CONVERSION LOOP™</div>
            <div className="text-green-700 font-black">Aligned q-commerce + ads + SEO into one flywheel</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          What Founders Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              quote:
                "No one explained why my ads weren't converting — until these guys reverse engineered my entire listing structure.",
              author: "– FMCG Brand, Zepto + BlinkIt",
            },
            {
              quote:
                "We were stuck for 6 months with flat sales. They fixed our catalog, listings, and ads within 8 weeks. Sales doubled.",
              author: "– Beauty Brand, Flipkart",
            },
            {
              quote:
                "Everyone told us Amazon returns couldn't be reduced. They proved otherwise.",
              author: "– Home Decor Seller, Tier 3",
            },
          ].map((t, i) => (
            <ThreeDCard key={i} className="h-full bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl p-8 text-center flex flex-col justify-between">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-slate-700 text-lg italic leading-relaxed mb-4">"{t.quote}"</p>
              <div className="text-blue-700 font-bold text-right text-base">{t.author}</div>
            </ThreeDCard>
          ))}
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          What We Unlocked for Our Clients
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">Recovered Ad Spend</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={4.1} duration={1500} suffix="Cr+" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">Lost Listings Fixed</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={120} duration={1500} suffix="+ ASINs" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">RTO Reduction</div>
            <div className="text-green-700 font-black text-xl">Avg. <AnimatedCounter end={40} duration={1500} suffix="–55%" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="font-bold text-purple-700 mb-2">Catalog Cleanup</div>
            <div className="text-green-700 font-black text-xl"><AnimatedCounter end={300} duration={1500} suffix="+ backend issues resolved" /></div>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="font-bold text-blue-700 mb-2">Category Rank Jump</div>
            <div className="text-green-700 font-black text-xl">Top 10 within 90–125 days</div>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          You're Next — If This Sounds Like You:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ThreeDCard className="p-6 bg-gradient-to-br from-green-50 to-white flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 font-black text-green-700 text-xl"><CheckCircle className="w-8 h-8" />Who This Is For</div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />Your sales are stuck or shrinking</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You're running ads, but can't see why they're failing</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You suspect your listings are off, but don't know what to fix</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />You want someone who treats your brand like a business, not a ticket</li>
            </ul>
          </ThreeDCard>
          <ThreeDCard className="p-6 bg-gradient-to-br from-red-50 to-white flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2 font-black text-red-700 text-xl">Who This Is Not For</div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>DIY-only founders</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>7-day miracle seekers</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>Price shoppers with no brand direction</li>
            </ul>
          </ThreeDCard>
        </div>
        <motion.h2 className="text-2xl sm:text-3xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={fadeInUp}>
          Your Next Step: Let's Build This Together
        </motion.h2>
        <motion.p className="text-lg sm:text-xl text-center text-slate-600 mb-8" variants={fadeInUp}>
          We only onboard 6 brands/month to protect focus and avoid platform conflicts.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#apply"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            📩 Apply for Our Results-Only Growth Grant
          </a>
          <a
            href="#strategy"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            💬 Book a Strategy Call
          </a>
          <a
            href="#audit"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-center text-lg transition-all duration-300"
          >
            🔍 Claim Your Free Marketplace Audit
          </a>
        </div>
        <motion.p className="text-xl sm:text-2xl text-center text-slate-700 mb-4 font-semibold" variants={fadeInUp}>
          Let's make you the next brand on this page.
        </motion.p>
      </motion.main>
      <Footer />
    </div>
  );
}

export default Results; 