import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RunningText from "./components/RunningText";
import ParallaxSection from "./components/ParallaxSection";
import ScrollParallax from "./components/ScrollParallax";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDCard from "./components/ThreeDCard";
import AnimatedText from "./components/AnimatedText";
import CursorFollower from "./components/CursorFollower";
import { 
  Check, 
  X, 
  RefreshCw, 
  Search, 
  Brain, 
  PenTool, 
  Globe, 
  ShoppingCart, 
  TrendingUp, 
  Palette, 
  Zap, 
  Smartphone, 
  Handshake, 
  BarChart3, 
  Droplets, 
  Activity, 
  Package, 
  User, 
  Lightbulb,
  Target,
  Package2,
  BarChart
} from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contactus');
  };

  return (
    <>
      <Helmet>
        <title>Top Ecommerce Agency India | Amazon, Flipkart, Blinkit Experts – The Ecom Monks</title>
        <meta name="description" content="Struggling with your e-commerce growth? The Ecom Monks is India's most trusted agency for Amazon, Flipkart, Blinkit, Zepto & more. Scale faster with our expert-led solutions." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-white text-[#222] overflow-x-hidden pointer-events-auto">
        {/* Parallax Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ScrollParallax speed={0.1} className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.07) 1px, transparent 1px)
              `,
                backgroundSize: "120px 120px",
              }}
            ></div>
          </ScrollParallax>

          <ScrollParallax speed={0.2} className="absolute top-20 left-20">
            <div className="w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
          </ScrollParallax>

          <ScrollParallax speed={0.15} className="absolute top-40 right-32">
            <div className="w-24 h-24 bg-green-200/10 rounded-full blur-xl"></div>
          </ScrollParallax>

          <ScrollParallax speed={0.25} className="absolute bottom-40 left-40">
            <div className="w-40 h-40 bg-green-400/10 rounded-full blur-xl"></div>
          </ScrollParallax>
        </div>
        <Navbar />

        <main className="bg-white text-[#222] overflow-x-hidden">
          <h1 className="sr-only">We're Not Just an Agency. We're Your Ecommerce Growth Partner.</h1>
          {/* Hero Section with Parallax */}
          <ParallaxSection speed={0.3} direction="up" className="w-full">
            <section className="py-4 sm:py-16 md:py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
              <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
                {/* Main Headline */}
                <div className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 sm:mb-6 md:mb-8Scale Commerce the Conscious Way">
                  <span className="text-[#222]">THE </span>
                  <span className="text-green-500">ECOM</span>
                  <span className="text-green-400"> MONKS</span>
                </div>
                {/* Subheadline */}
                <div className="text-2xl sm:text-3xl md:text-4xl text-green-500 font-semibold mb-6">
                  Scale Commerce the Conscious Way
                </div>
                {/* Supporting Text */}
                <div className="text-2xl sm:text-4xl md:text-5xl text-[#222] font-extrabold mb-6">
                  Your All-in-One Growth Engine for <span className="text-green-500">Amazon</span>, <span className="text-green-400">Flipkart</span> &amp; Beyond
                </div>
                <div className="text-sm sm:text-base md:text-lg text-green-400 mb-8">
                  From listings to sales to followers — we don't just manage accounts. 
                  <span  className="text-sm sm:text-base md:text-lg font-bold text-[#222] mb-8"> We build brands, scale visibility, and drive conversions across all channels.</span>
                </div>
               
                {/* CTA */}
                <button
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 text-base sm:text-xl md:text-2xl rounded-2xl flex flex-row items-center justify-center shadow-xl hover:scale-105 hover:shadow-green-400/50 transition-all duration-500 relative overflow-hidden animate-ctaPulse min-w-[220px]"
                  style={{ minHeight: '48px', boxShadow: '0 8px 32px 0 rgba(34,197,94,0.18)' }}
                >
                  <span className="text-center leading-tight">Get My Free Growth Audit Now →</span>
                  <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:animate-glowPulse"></span>
                </button>
                <style>{`
                  @keyframes ctaPulse {
                    0%, 100% { box-shadow: 0 8px 32px 0 rgba(34,197,94,0.18); }
                    50% { box-shadow: 0 0 48px 8px rgba(34,197,94,0.25); }
                  }
                  .animate-ctaPulse {
                    animation: ctaPulse 2.5s infinite;
                  }
                  @keyframes glowPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.18); }
                    50% { box-shadow: 0 0 32px 8px rgba(34,197,94,0.25); }
                  }
                  .group:hover .animate-glowPulse {
                    animation: glowPulse 1.2s infinite;
                  }
                `}</style>
                <span className="text-green-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
                  <span className="font-bold text-green-500">Full listing, ad & social review</span> + a 3-month growth blueprint. No fluff.
                </span>
              </div>
            </section>
          </ParallaxSection>

          {/* Sliding Banner: Marketplace Management */}
          <div className="mt-8 sm:mt-[-60px]">
            <RunningText text="Platform Management (Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart | Shopify)  •  Performance Marketing  •  Creative Studio  •  Quick Commerce Blitz  •  Social Media  •  Influencer Marketing" speed={15} />
          </div>

          {/* Pain Points Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10 mt-6" id="services">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
              {/* Section Heading Full Width */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-6 md:mb-10 text-[#222] text-center w-full">
                THE PAIN – WHAT SELLERS ARE FACING TODAY
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Image - slightly wider */}
                <div className="md:w-6/12 w-full flex justify-center items-center">
                  <img
                    src="/depressedseller.jpeg"
                    alt="Frustrated Seller"
                    className="rounded-3xl shadow-2xl object-cover max-h-[500px] w-full md:w-auto"
                    style={{ minHeight: 380, maxWidth: 540 }}
                  />
                </div>
                {/* Text Content */}
                <div className="md:w-6/12 w-full flex flex-col items-center md:items-start">
                  <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-4 text-center md:text-left">
                    <span className="hidden md:inline">The Brutal Truth About<br/>Most SPN Agencies?</span>
                    <span className="md:hidden">The Brutal Truth About Most SPN Agencies?</span>
                  </h3>
                  <p className="text-xl md:text-2xl text-green-500 mb-10 text-center md:text-left">
                    They're either overloaded, unaccountable, or both.
                  </p>
                  {/* Pain Cards */}
                  <div className="flex flex-row md:flex-col gap-2 sm:gap-6 w-full mb-10 justify-center md:justify-start">
                    {[
                      "My ads are running, but no one is watching.",
                      "My listings are live, but no one's clicking.",
                      "My brand is good, but no one knows it exists."
                    ].map((pain, idx) => (
                      <div
                        key={idx}
                        className="w-[100px] sm:w-[140px] md:w-auto bg-gradient-to-br from-green-200/80 to-green-400/40 rounded-2xl shadow-lg p-2 sm:p-4 flex flex-col items-center justify-center text-center hover:animate-shake mx-0"
                      >
                        <span className="text-xs sm:text-sm font-bold text-green-900 leading-snug">{pain}</span>
                      </div>
                    ))}
                  </div>
                  {/* Checklist */}
                  <div className="w-full sm:w-[800px] bg-green-50/60 rounded-2xl p-8 sm:p-4 sm:ml-[-100px] shadow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {["SPNs are slow, overloaded, and full of templated work", "Ads are outsourced with no ROI clarity", "You get sold big promises — and delivered zero strategy.", "You're stuck between poor creatives, weak campaigns, and zero clarity.", "Social media? Untouched", "Influencers? Unused"].map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-green-700 leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Final Note - centered, wide */}
              <div className="mt-14 p-10 mx-auto bg-green-400/20 rounded-3xl border-2 border-green-400/30 max-w-5xl text-center">
                <p className="text-xl md:text-2xl font-bold">
                  <span className="text-green-500">And let's not forget:</span><br/>
                  <span className="text-[#222]">
                    Most agencies don't care about your ROI. <span className='text-red-600'>They just want retainers,</span><br/>
                    <span className='font-bold'>Not Responsibility.</span>
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mt-[-120px] md:mb-10 text-[#222]">
                <span className="hidden md:inline">THE SOLUTION —<br/>WHAT MAKES US DIFFERENT</span>
                <span className="md:hidden">THE SOLUTION — WHAT MAKES US DIFFERENT</span>
              </h2>
              <p className="text-2xl sm:text-3xl text-green-500 mb-16 font-bold">
                We're The Ecom Monks – India's most proactive, full-stack growth agency for digital sellers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <ThreeDCard className="bg-green-400/40 p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-3xl font-black text-green-500 mb-8">Others Do This</h3>
                  <ul className="space-y-6 text-left">
                    {["One team, 100 clients", "Generic listings", "Ad reporting", "No accountability", "Zero brand building"].map((item, idx) => (
                      <li key={idx} className="text-xl text-[#222] flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>
                <ThreeDCard className="bg-green-900/40 p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-3xl font-black text-green-500 mb-8">We Do This</h3>
                  <ul className="space-y-6 text-left">
                    {[
                      "One team, 10 clients only per cohort",
                      "Behavioral-copywriting + USP hooks",
                      "Real-time dashboards + daily ROAS tuning",
                      "Weekly calls + seller-first mindset",
                      "Creative storytelling + influencer buzz"
                    ].map((item, idx) => (
                      <li key={idx} className="text-xl text-[#222] flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="whitespace-normal break-words max-w-xs sm:max-w-none">{item}</span>
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>
              </div>
              <div className="mt-12">
                <p className="text-2xl sm:text-3xl font-bold text-green-500">
                  Our mission is to make your brand feel heard — while actually delivering results that move the needle.
                </p>
              </div>
            </div>
          </section>

          {/* Frameworks Section */}
          <section className="py-6 sm:py-4 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-6 md:mb-10 text-[#222]">
                <Link to="/ourframeworks" className="hover:underline text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
                  OUR UNIQUE FRAMEWORKS
                </Link>
              </h2>
              <p className="text-xl sm:text-3xl text-green-500 mb-2 font-bold">
                We don't "try", We follow
              </p>
              <p className="text-xl sm:text-3xl text-green-500 mb-8 sm:mb-16 font-bold">
                science-based frameworks that actually grow
              </p>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 w-full">
                  {[
                    {
                      icon: <RefreshCw className="w-8 h-8 text-green-500" />,
                      title: 'TRIPLE-T: Your Dedicated Growth Squad',
                      bullets: [
                        'Team → Not freelancers, but our in-house ecom soldiers',
                        'Tech → Helium10, AdReports, Keyword Trackers, Analytics',
                        "Touchpoint → Weekly calls. Monthly reviews. You'll never be ghosted.",
                      ],
                    },
                    {
                      icon: <Search className="w-8 h-8 text-green-500" />,
                      title: 'A.U.D.I.T SPRINT – The Seller Deep Dive',
                      intro: 'Delivered within 48 hours:',
                      bullets: [
                        'Listings graded with copy + keyword feedback',
                        'Ad report card (ROAS, ACOS, gaps)',
                        'Competitor brand breakdown',
                        'Inventory / return / rating risk zones',
                        'Platform expansion checklist',
                      ],
                    },
                    {
                      icon: <Brain className="w-8 h-8 text-green-500" />,
                      title: 'AD SMARTSET – Our Media Buying Philosophy',
                      intro: "We don't run ads. We create compounding performance:",
                      bullets: [
                        'Meta + Amazon synergy',
                        'Auto | Exact | ASIN Target campaigns',
                        'Retargeting creatives with UGC',
                        'Cross-channel ROAS maximization',
                        'Zero-waste ad budget monitoring',
                      ],
                    },
                    {
                      icon: <PenTool className="w-8 h-8 text-green-500" />,
                      title: 'S.O.S Listings – Built to Sell, Not Just Exist',
                      bullets: [
                        'SEO-backed titles, CTA bullets, and lifestyle imagery',
                        'F-shaped scan copy',
                        'First-impression optimization',
                        'Infographics + emotional punch',
                        'A+ Pages → Brand Store → Video funneling',
                      ],
                    },
                    {
                      icon: <Globe className="w-8 h-8 text-green-500" />,
                      title: 'INFLUENCE TO IMPACT – Influencer Engine',
                      bullets: [
                        'Influencer discovery for your category',
                        'Reel scripts, briefs, tracking links',
                        'UGC + PR-style content',
                        'Cross-use for ads & Amazon videos',
                      ],
                    },
                  ].map((item, idx) => (
                    <ThreeDCard
                      key={item.title}
                      className="bg-white border border-green-200 rounded-2xl sm:rounded-3xl shadow-xl p-2 py-4 sm:p-8 md:p-10 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard w-full max-w-[95vw] sm:max-w-none overflow-hidden"
                    >
                      <div className="flex items-center justify-center mb-4 md:mb-6">
                        <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-green-700 text-center leading-tight break-words mx-auto md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] sm:max-w-none" style={{display: 'block', overflowWrap: 'break-word'}}>{item.title}</h3>
                      </div>
                      {item.intro && (
                        <div className="flex items-center mb-1 sm:mb-2 text-green-500 text-xs sm:text-base md:text-lg lg:text-xl whitespace-normal" style={{ lineHeight: '1.2', wordBreak: 'break-word' }}>
                          <Check className="w-4 h-4 text-green-500 mr-1 sm:mr-2" />
                          <span className="ml-1 sm:ml-2">{item.intro}</span>
                        </div>
                      )}
                      <ul className="w-full pl-0 text-left text-green-500 space-y-1 sm:space-y-2 text-xs sm:text-base md:text-lg lg:text-xl flex-1 flex flex-col justify-center">
                        {item.bullets.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center pl-0 bg-transparent px-0 sm:px-4 md:px-2 py-1 sm:py-2 text-xs sm:text-base md:text-lg lg:text-xl mb-0 sm:mb-1 rounded-r-xl leading-snug max-w-full break-words text-green-500"
                            style={{ lineHeight: '1.2', wordBreak: 'break-word' }}
                          >
                            <Check className="w-4 h-4 text-green-500 mr-1 sm:mr-2 md:mr-1 flex-shrink-0" />
                            <span className="ml-1 sm:ml-2 md:ml-1 break-words whitespace-normal">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </ThreeDCard>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10 mt-6">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-10 text-[#222]">
                <Link to="/services" className="hover:underline text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
                  OUR SERVICES
                </Link>  Ecommerce
                Q-commerce brand building
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full">
                {[
                  {
                    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
                    title: 'Platform Management',
                    bullets: [
                      'Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart | Shopify',
                      'Listings, A+ Content, Videos, Reviews, Safe-T Claims, Category Approvals',
                    ],
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
                    title: 'Performance Marketing',
                    bullets: [
                      'Amazon Ads | Meta Ads | Google Ads | Flipkart PLA | DSP',
                      'Campaign Setup, ROAS Optimization, Bid Management, Keyword Harvesting',
                    ],
                  },
                  {
                    icon: <Palette className="w-8 h-8 text-green-500" />,
                    title: 'Creative Studio',
                    bullets: [
                      'Infographics, Product Videos, A+ Pages',
                      'Brand Stores, Storytelling Assets, Seasonal Rebrands',
                    ],
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-green-500" />,
                    title: 'Quick Commerce Blitz',
                    bullets: [
                      'Blinkit | Zepto | Instamart',
                      'Product Card Design, Promo Planning, Brand Integration',
                    ],
                  },
                  {
                    icon: <Smartphone className="w-8 h-8 text-green-500" />,
                    title: 'Social Media Management',
                    bullets: [
                      'Personalized Social Post Packages',
                      'Product storytelling, visual feed planning, captions + scheduling',
                    ],
                  },
                  {
                    icon: <Handshake className="w-8 h-8 text-green-500" />,
                    title: 'Influencer Marketing',
                    bullets: [
                      'Shortlist + Collab + Script + Launch',
                      'Niche creators in beauty, health, food, fashion',
                      'Measurable traffic + UGC asset creation',
                    ],
                  },
                ].map((item, idx) => (
                  <ThreeDCard
                    key={item.title}
                    className="bg-white border border-green-200 rounded-3xl shadow-xl p-3 md:p-10 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard md:w-[520px] lg:w-[600px] md:min-h-[260px] lg:min-h-[280px]"
                  >
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-green-700 text-center leading-tight break-words max-w-xs mx-auto md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] sm:max-w-none" style={{display: 'block', overflowWrap: 'break-word'}}>{item.title}</h3>
                    </div>
                    <ul className="w-full pl-0 text-left text-green-500 space-y-2 md:text-lg lg:text-xl flex-1 flex flex-col justify-center">
                      {item.bullets.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center pl-0 bg-transparent px-4 md:px-2 py-2 text-xs sm:text-base md:text-lg lg:text-xl mb-1 rounded-r-xl leading-snug max-w-full break-words text-green-500"
                          style={{ fontSize: '1.05rem', lineHeight: '1.2', wordBreak: 'break-word' }}
                        >
                          <Check className="w-4 h-4 text-green-500 mr-2 md:mr-1 flex-shrink-0" />
                          <span className="ml-2 md:ml-1 break-words whitespace-normal">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </ThreeDCard>
                ))}
              </div>
            </div>
          </section>

          {/* Sliding Banner: Services */}
          <div className="mt-8 sm:mt-[-60px]">
            <Link to="/services" className="block">
              <RunningText text="Platform Management (Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart | Shopify)  •  Performance Marketing  •  Creative Studio  •  Quick Commerce Blitz  •  Social Media  •  Influencer Marketing" speed={15} />
            </Link>
          </div>

          {/* Proof/Case Studies Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10 mt-6">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-6 md:mb-10 text-[#222]">
                PROOF THAT BUILDS TRUST
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-stretch">
                {[
                  {
                    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
                    title: 'Fashion Accessories Brand',
                    points: [
                      'Increased ROAS from 3.4x to 10.3x in 150 days and ACOS down from 68.7% to 19.2%',
                    ],
                  },
                  {
                    icon: <Droplets className="w-8 h-8 text-green-500" />,
                    title: 'Heritage Skincare Brand',
                    points: [
                      'Boosted online ROAS to 4.2× while keeping ACOS stable across 3 platforms',
                    ],
                  },
                  {
                    icon: <Activity className="w-8 h-8 text-green-500" />,
                    title: 'Health & Wellness Brand',
                    points: [
                      'Drove a 30%+ revenue jump in 3 months via telemedicine + q-commerce integrations',
                    ],
                  },
                  {
                    icon: <Package className="w-8 h-8 text-green-500" />,
                    title: 'D2C Grocery Startup',
                    points: [
                      'Reduced CAC by 18% and doubled repeat order retention with funnel fixes',
                    ],
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-green-200 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 group"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <span className="mr-2 flex items-center" style={{marginTop: '-2px'}}>{item.icon}</span>
                      <div className="font-bold text-green-900 text-lg sm:text-xl text-center">{item.title}</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-2 items-center">
                      {item.points.map((point, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 w-full${item.title === 'D2C Grocery Startup' && point === 'Reduced CAC by 18% and doubled repeat order retention with funnel fixes' ? ' sm:mt-7' : ''}`}
                        >
                          <Check className={`w-4 h-4 text-green-500 ${item.title === 'D2C Grocery Startup' || item.title==='Health & Wellness Brand' || item.title==='Heritage Skincare Brand' ? 'sm:mb-1' : ''}`} />
                          <span className="text-green-700 text-sm sm:text-base md:text-lg text-left leading-snug font-semibold">
                            {item.title === 'Fashion Accessories Brand' ? (
                              <>
                                Increased ROAS from <span className="font-bold text-green-800">3.4x</span> to <span className="font-bold text-green-800">10.3x</span> in <span className="font-bold text-green-800">150 days</span> and ACOS down from <span className="font-bold text-red-600">68.7%</span> to <span className="font-bold text-green-700">19.2%</span>
                              </>
                            ) : point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What Our Clients Say Section */}
          <section className="py-6 relative z-10">
            <div className="max-w-2xl md:max-w-5xl mx-auto px-4 sm:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-[#222]">What Our Clients Say</h2>
              {/* Mobile: Carousel, Desktop: Row */}
              <div className="block md:hidden">
                <TestimonialCarousel />
              </div>
              <div className="hidden md:block">
                <TestimonialCarousel large />
              </div>
            </div>
          </section>

          {/* Founder's Note Section */}
          <section className="py-12 sm:py-16 md:py-20 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
              <div className="bg-white rounded-2xl border-l-8 border-green-400 shadow-xl p-6 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-6 relative" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-8 h-8 text-green-500" />
                  <h2 className="text-lg sm:text-2xl font-extrabold text-green-700">FOUNDER'S NOTE – FROM THE DESK OF ARUN R. CHACHAN</h2>
                </div>
                <div className="text-green-900/90 text-sm sm:text-base leading-relaxed space-y-4">
                  <p className="mb-2"><span className="font-semibold">I've been where you are — as a brand founder, a growth head, a seller.</span><br/><span className="font-semibold">And honestly? Most service providers care more about ticking boxes than moving revenue.</span></p>
                  <p className="mb-2">Founders and sellers were stuck with average agencies, lean SPNs, or freelancers who lacked ownership. <span className="font-semibold">That's why I created The Ecom Monks — to be the agency I wish existed when I was on the other side.</span></p>
                  <p className="mb-2"><span className="font-semibold">We care. We respond. We're not perfect. But we're obsessed with performance, transparent with feedback, and driven by our clients' success.</span></p>
                  <p className="mb-2">We bring <span className="font-semibold">12+ years of data-backed, funnel-obsessed, copy-smart execution</span> to the table. Whether you're doing ₹50,000 or ₹5 crore a month — we bring clarity, firepower, and a no-BS approach that actually gets results.</p>
                </div>
                <div className="mt-4 sm:mt-6 text-green-600 font-semibold italic text-base sm:text-lg text-left pl-2 border-l-4 border-green-300">We won't just manage your account. We'll scale your success.</div>
                <div className="mt-4 text-green-700 font-bold text-xs sm:text-sm italic text-right pr-2">— Arun R. Chachan, Founder, The Ecom Monks</div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-6 sm:py-16 relative z-10" id="pricing">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-12 text-green-700">OUR PRICING</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[200px] mb-8 sm:ml-[-152px]">
                {[
                  { name: "Starter? Launch Pad", price: "₹6,999/mo", features: ["For new sellers", "All essentials covered"] },
                  { name: "Scaling? Growth Engine", price: "₹14,999/mo", features: ["For growing brands", "Advanced optimization"] },
                  { name: "Aggressive? Brand Dominator", price: "₹29,999/mo", features: ["For market leaders", "Full-stack growth"] },
                ].map((plan, idx) => {
                  // Split the name for desktop
                  const [main, sub] = plan.name.split(/\? | /).length === 2
                    ? plan.name.split(/\? /)
                    : plan.name.split(/\? | /);
                  let first, second;
                  if (plan.name.startsWith('Starter?')) {
                    first = 'Starter?';
                    second = 'Launch Pad';
                  } else if (plan.name.startsWith('Scaling?')) {
                    first = 'Scaling?';
                    second = 'Growth Engine';
                  } else {
                    first = 'Aggressive?';
                    second = 'Brand Dominator';
                  }
                  return (
                    <div key={plan.name} className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-transform duration-300 md:hover:scale-105 md:hover:shadow-green-400/40 hover:shadow-2xl hover:border-green-400 md:w-[350px]">
                      <div className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
                        <span className="block md:hidden">{plan.name}</span>
                        <span className="hidden md:block">
                          {first}<br />{second}
                        </span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-green-500 mb-4">{plan.price}</div>
                      <ul className="text-green-700 text-base sm:text-lg md:text-base mb-4 pl-0">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start md:text-base md:whitespace-nowrap">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-green-900 font-semibold text-base sm:text-lg">👉 Or plug & play:</div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-2 w-full items-center">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-md w-full sm:w-auto text-center">• Only Ads?</span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-md w-full sm:w-auto text-center">• Only Listing Fixes?</span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-md w-full sm:w-auto text-center">• Only Influencers?</span>
              </div>
              <div className="mt-2 text-green-500 text-sm sm:text-base text-center">We've got à-la-carte options too.</div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-10 sm:py-20 md:py-28 bg-green-50 border-t-2 border-green-400" id="final-cta">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg sm:text-xl font-bold text-green-500 uppercase tracking-widest mb-2">CONVERT THEM NOW</h2>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-green-700 mb-4">Don't Let Another Month Burn Your Budget.</h1>
                <p className="text-green-900 mb-6 text-base sm:text-lg md:text-xl leading-relaxed">You've already spent money on platforms.<br/>Now, spend intelligently with people who care — and who convert.</p>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-end w-full md:w-auto">
                <button
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 text-base sm:text-xl md:text-2xl rounded-2xl flex flex-row items-center justify-center shadow-xl hover:scale-105 hover:shadow-green-400/50 transition-all duration-500 relative overflow-hidden animate-ctaPulse min-w-[220px]"
                  style={{ minHeight: '48px', boxShadow: '0 8px 32px 0 rgba(34,197,94,0.18)' }}
                >
                  <Lightbulb className="w-8 h-8 text-yellow-400 animate-bounce mr-3" />
                  <span className="text-center leading-tight">Get My Free Growth Audit Now →</span>
                  <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:animate-glowPulse"></span>
                </button>
                <style>{`
                  @keyframes ctaPulse {
                    0%, 100% { box-shadow: 0 8px 32px 0 rgba(34,197,94,0.18); }
                    50% { box-shadow: 0 0 48px 8px rgba(34,197,94,0.25); }
                  }
                  .animate-ctaPulse {
                    animation: ctaPulse 2.5s infinite;
                  }
                  @keyframes glowPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.18); }
                    50% { box-shadow: 0 0 32px 8px rgba(34,197,94,0.25); }
                  }
                  .group:hover .animate-glowPulse {
                    animation: glowPulse 1.2s infinite;
                  }
                `}</style>
                <div className="text-green-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2 md:text-right flex items-center justify-center md:justify-end gap-2">
                  <Search className="w-4 h-4" />
                  <span>Listings.</span>
                  <BarChart className="w-4 h-4" />
                  <span>Ads.</span>
                  <Package2 className="w-4 h-4" />
                  <span>Products.</span>
                  <Target className="w-4 h-4" />
                  <span>Strategy.</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// Animation helper for sliding testimonials
const SLIDE_ANIMATION = {
  enter: 'opacity-0 translate-x-10',
  active: 'opacity-100 translate-x-0',
  exit: 'opacity-0 -translate-x-10',
};

function TestimonialCarousel({ large }) {
  const testimonials = [
    "They don't just manage our account — they think like owners.",
    "They scaled us on Flipkart and Amazon while fixing our returns mess. Legends.",
    "They don't just talk numbers — they explain, optimize, and own it.",
  ];
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1); // 1 for next, -1 for prev (future-proof)
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
              <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">{text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage; 