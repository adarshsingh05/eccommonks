import Navbar from "./Navbar"
import RunningText from "./RunningText"
import ParallaxSection from "./ParallaxSection"
import ScrollParallax from "./ScrollParallax"
import ThreeDCard from "./ThreeDCard"
import { Helmet } from "react-helmet"

import React, { useRef } from "react"
import { 
  Check, 
  X, 
  Video, 
  BarChart3, 
  Users, 
  Search, 
  Eye, 
  Expand, 
  Calendar, 
  Target 
} from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";
import { useNavigate } from "react-router-dom";

// Animation helper for sliding testimonials (copied from LandingPage)
const SLIDE_ANIMATION = {
  enter: 'opacity-0 translate-x-10',
  active: 'opacity-100 translate-x-0',
  exit: 'opacity-0 -translate-x-10',
};

function ServicesPage() {
  const navigate = useNavigate();
  const ctaRef = useRef(null);

  const handleCardClick = () => {
    navigate('/contactus#contact-form');
  };

  const handleGoToCTA = () => {
    navigate('/contactus#contact-form');
  };

  const handleContactNavigation = () => {
    navigate('/contactus#contact-form');
  };

  const handleApplicationNavigation = () => {
    navigate('/application');
  };

  return (
    <>
      <Helmet>
        <title>Amazon to Blinkit: Full-Service Ecommerce and QCommerce Management in India | The Ecom Monks</title>
        <meta name="description" content="Scale your brand with full-stack ecommerce services across Amazon, Flipkart, Blinkit & more. Listings, Ads, Creatives, Influencers — all done for you." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="bg-white text-[#222] overflow-x-hidden">
        {/* Parallax Background Elements */}
        <div className="fixed inset-0 z-0">
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

        <main className="bg-white text-[#222] mt-9 sm:mt-9 overflow-x-hidden">
          <h1 className="sr-only ">End-to-End Ecommerce Services That Drive Sales Across Every Major Platform</h1>
          {/* Hero Section with Parallax */}
          <ParallaxSection speed={0.3} direction="up" className="w-full">
            <section className="py-6 sm:py-16 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
              <div className="max-w-5xl w-full mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center">
                {/* Main Headline */}
                <div className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 sm:mb-6 md:mb-8">
                  <span className="text-[#222]">END-TO-END </span>
                  <span className="text-green-500">ECOMMERCE</span>
                  <span className="text-green-400"> SERVICES</span>
                </div>

                {/* Subheadline */}
                <div className="text-base sm:text-lg md:text-2xl lg:text-3xl text-green-500 font-semibold mb-2 sm:mb-4 md:mb-6">
                  Built for Sellers. Backed by Strategy.
                </div>

                {/* Supporting Text */}
                <div className="text-base sm:text-lg md:text-2xl lg:text-4xl text-[#222] font-extrabold mb-2 sm:mb-4 md:mb-6">
                  <div>Your <span className="text-green-500">Marketplace.</span> <br></br> Your <span className="text-green-400">Momentum.</span></div>
                  <div>Our Mission.</div>
                </div>

              

                <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-[#222] mb-3 sm:mb-6 md:mb-8">
                  We handle your listings, ads, creatives, campaigns, and brand growth across every major e-commerce and quick-commerce platform — all with proactive support and real ROI ownership.
                </div>

                {/* CTA */}
                <button 
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-4 sm:px-8 md:px-12 py-2 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-2xl lg:text-3xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-2 animate-bounce mb-2 sm:mb-4">
                  <span className="group-hover:animate-bounce inline-block mr-2 sm:mr-3 md:mr-4 text-xl sm:text-2xl md:text-3xl">🎯</span>
                  Get Your Free Growth Audit
                </button>

                <span className="text-xs text-bold sm:text-sm md:text-lg text-green-400 max-w-2xl leading-relaxed mt-1 sm:mt-2">
                  Complete  analysis, tailored growth blueprint in 48 hours.
                </span>
              </div>
            </section>
          </ParallaxSection>

          {/* Sliding Banner */}
          <RunningText className='mt-[-10]' text="Platform Management (Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart | Shopify)  •  Performance Marketing  •  Creative Studio  •  Quick Commerce Blitz  •  Social Media  •  Influencer Marketing" speed={15} />


          {/* Journey Tracks Section */}
          <section className="py-6 sm:py-16  relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-6 md:mb-10 text-[#222] text-center w-full">
                WHERE ARE YOU IN YOUR JOURNEY?
              </h2>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-green-500 mb-3 sm:mb-8 md:mb-16 font-bold text-center">
                Choose your track — we'll tailor it from there
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 md:gap-12">
                {[
                  {
                    track: "TRACK 1",
                    title: "The Launchpad",
                    subtitle: "My listings are weak. Ads aren't converting. I'm just not growing.",
                    description: "For brands getting started or stuck with setup",
                    tagline: "Get your foundations right the first time.",
                    target: "For sellers doing ₹0–₹5L/month or migrating from a bad experience",
                    color: "from-green-200/80 to-green-400/40",
                    icon: "🚀",
                  },
                  {
                    track: "TRACK 2",
                    title: "The Growth Engine",
                    subtitle:
                      "I'm selling — but my ads are inefficient, my store looks outdated, and I'm unsure where I'm leaking money.",
                    description: "For growing sellers ready to scale with clarity",
                    tagline: "Dial in ads, fix listings, unlock next-stage revenue.",
                    target: "For sellers doing ₹5L–₹30L/month needing stronger execution",
                    color: "from-green-200/80 to-green-400/40",
                    icon: "⚡",
                  },
                  {
                    track: "TRACK 3",
                    title: "The Market Domination Program",
                    subtitle: "I want to dominate my niche, build brand equity, and expand across q-comm + social.",
                    description: "For ambitious brands aiming for multi-channel blitz",
                    tagline: "Take over marketplaces, build buzz, and drive profitable scale.",
                    target: "For brands doing ₹30L+/month or looking to blitzscale",
                    color: "from-green-200/80 to-green-400/40",
                    icon: "👑",
                  },
                ].map((track, idx) => (
                  <div
                    key={idx}
                    onClick={handleCardClick}
                    className="cursor-pointer bg-gradient-to-br w-full max-w-xs sm:max-w-none from-green-200/80 to-green-400/40 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 min-h-[220px] sm:min-h-[220px] mx-auto mb-4 sm:mb-0"
                  >
                  
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-green-900 mb-2 sm:mb-3 md:mb-4 leading-tight">{track.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-green-800 mb-2 sm:mb-3 md:mb-4 italic leading-snug">{`"${track.subtitle}"`}</p>
                    <p className="text-xs sm:text-sm md:text-base text-green-700 font-semibold mb-2 sm:mb-2 leading-normal">{track.description}</p>
                    <p className="text-sm sm:text-sm md:text-base font-semibold text-green-800 mb-2 sm:mb-3 md:mb-4 leading-normal">→ {`"${track.tagline}"`}</p>
                    <div className="text-xs sm:text-sm md:text-base text-black font-bold mt-1">{track.target}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-8 md:mt-12 text-center">
                <p className="text-xs sm:text-base md:text-xl text-green-600 mb-2 sm:mb-4">Not sure which suits you?</p>
                <button 
                  ref={ctaRef} 
                  onClick={handleContactNavigation}
                  className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-300">
                  Get Your Free Growth Audit
                </button>
                <p className="text-xs sm:text-sm md:text-base text-green-500 mt-1 sm:mt-2">We'll match you to the perfect fit in 48 hours.</p>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className="py-6 sm:py-8 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-2xl md:text-5xl  font-black mb-6 md:mb-8 text-[#222]">CORE SERVICES — YOUR BRAND, EVERYWHERE</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-8 md:mt-16">
                {[
                  {
                    icon: "🛒",
                    title: "Marketplace Management",
                    subtitle: "Amazon | Flipkart | Shopify | Myntra | Meesho | Nykaa | Jiomart",
                    bullets: [
                      "Listing creation + SEO copywriting",
                      "A+ content, infographics, and videos",
                      "Brand Registry, Category Approvals",
                      "Safe-T / Return claims resolution",
                      "Storefront setup + optimization",
                    ],
                  },
                  {
                    icon: "📈",
                    title: "Performance Marketing",
                    subtitle: "Amazon Ads | Meta Ads | Flipkart PLA | Google Ads",
                    bullets: [
                      "Full campaign setup: Auto | Target | Video",
                      "Bid optimization & ROAS tuning",
                      "ACOS tracking, weekly dashboards",
                      "Funnel-based ad structure (cold → warm → retarget)",
                    ],
                  },
                  {
                    icon: "🧠",
                    title: "Creative & Content",
                    subtitle: "Visual storytelling that converts",
                    bullets: [
                      "Infographic sets (3-slide packs)",
                      "Premium A+ pages",
                      "Brand store with storytelling blocks",
                      "Motion graphics + UGC video production",
                      "Amazon video uploads + reel adaptations",
                    ],
                  },
                  {
                    icon: "🛍️",
                    title: "Quick Commerce Growth",
                    subtitle: "Blinkit | Zepto | Instamart",
                    bullets: [
                      "Listing + card optimization",
                      "Promo planning for visibility spikes",
                      "Influencer + ad integration for q-comm success",
                      "Weekly inventory insights + creative refresh",
                    ],
                  },
                  {
                    icon: "📢",
                    title: "Social Media & Influencer Growth",
                    subtitle: "Build buzz beyond marketplaces",
                    bullets: [
                      "Content calendar (6–24 monthly posts)",
                      "Product storytelling, reels, carousels, captions",
                      "Influencer shortlisting + outreach + script briefs",
                      "Paid, barter, or hybrid creator activations",
                      "UGC repurposed for Amazon/Meta/Website",
                    ],
                  },
                ].map((service, idx) => (
                  <ThreeDCard
                    key={idx}
                    className="bg-white w-[320px] border border-green-200 rounded-xl sm:rounded-3xl shadow-xl p-3 sm:p-6 md:p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400"
                  >
                    {/* Icon removed as per request */}
                    <h3 className="text-base sm:text-lg md:text-2xl font-black text-green-700 mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-base md:text-lg text-green-500 mb-2 sm:mb-3 md:mb-4 font-semibold">{service.subtitle}</p>
                    <ul className="w-full text-left text-green-700 space-y-1 sm:space-y-2 md:space-y-2">
                      {service.bullets.map((point, i) => (
                        <li key={i} className="text-xs sm:text-sm md:text-base">
                          <Check className="inline text-green-500 text-base md:text-lg mr-1" />{point}
                        </li>
                      ))}
                    </ul>
                  </ThreeDCard>
                ))}
              </div>
            </div>
          </section>

          {/* Plug & Play Modules Section */}
          <section className="py-6 sm:py-16  relative z-10 mt-4 sm:mt-8">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">PLUG & PLAY GROWTH MODULES</h2>
              <p className="text-lg md:text-2xl lg:text-3xl text-green-500 mb-8 md:mb-16 font-bold">
                Want a custom mix? We offer modular services to solve specific challenges — whether it's just A+ content, a video, listing optimization, or a high-ROI ad refresh.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
                {[
                  { label: "Product Video Creation", icon: <Video className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Infographic Packs", icon: <BarChart3 className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Influencer Setup + UGC", icon: <Users className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Advanced Keyword Research", icon: <Search className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Competitor Monitoring", icon: <Eye className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Marketplace Expansion", icon: <Expand className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Social Media Content Calendar", icon: <Calendar className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                  { label: "Performance Ad Audits", icon: <Target className="mx-auto text-green-500 text-2xl md:text-3xl mb-2" /> },
                ].map((module, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-green-100 to-green-100 rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300 border border-green-200"
                  >
                    {module.icon}
                    <div className="text-sm md:text-base font-semibold text-green-800">{module.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50/60 rounded-2xl p-4 max-w-4xl mx-auto">
                <p className="text-base md:text-xl text-green-700 mb-4">
                  Just tell us what's keeping you stuck — we'll plug in the exact module you need.
                </p>
                <button 
                  onClick={handleContactNavigation}
                  className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all duration-300">
                  Talk to Our Team
                </button>
                <p className="text-xs md:text-sm text-green-500 mt-2">Get a same-day recommendation.</p>
              </div>
            </div>
          </section>

          {/* Sliding Banner */}
          <RunningText
            text="Listings • Ads • Creatives • Social • Influencers • Quick Commerce • Brand Building"
            speed={15}
          />

          {/* Why Brands Switch Section */}
          <section className="py-6 sm:py-16  relative z-10 mt-4 sm:mt-8">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-12 text-[#222]">WHY BRANDS SWITCH TO THE ECOM MONKS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
                <ThreeDCard className="bg-red-400/40 p-6 md:p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-xl md:text-3xl font-black text-red-600 mb-6 md:mb-8">What Most Agencies Do</h3>
                  <ul className="space-y-3 md:space-y-6 text-left">
                    {[
                      "Overpromise, underdeliver",
                      "Hide behind dashboards",
                      "Offer generic services",
                      "Focus on vanity metrics",
                      "Assign one person to 50 brands",
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm md:text-xl text-[#222] flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2 md:mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>

                <ThreeDCard className="bg-green-900/40 p-6 md:p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-xl md:text-3xl font-black text-green-500 mb-6 md:mb-8">What We Do</h3>
                  <ul className="space-y-3 md:space-y-6 text-left">
                    {[
                      "Underpromise, over-deliver",
                      "Weekly calls + complete visibility",
                      "Build tailored growth systems",
                      "Obsessed with sales & ROAS",
                      "Limit to 10 clients per cohort",
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm md:text-xl text-[#222] flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>
              </div>

              <div className="bg-green-50/60 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                <p className="text-lg md:text-2xl font-bold text-green-800 italic">
                  "It felt like hiring an in-house growth team — not an agency."
                </p>
              </div>
            </div>
          </section>

          {/* WHAT WE DON'T DO Section */}
          <section className="py-3 relative z-10 mt-4 sm:mt-8">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-red-400/10 to-orange-500/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">
                
                WHAT WE DON'T DO
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
                <ThreeDCard className="bg-red-400/40 p-6 md:p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-xl md:text-3xl font-black text-red-600 mb-6 md:mb-8">We don't:</h3>
                  <ul className="space-y-3 md:space-y-6 text-left">
                    {[
                      "Lock you into long-term retainers",
                      "Work with your competitors",
                      "Push templated work",
                      "Run ads without explaining why",
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm md:text-xl text-[#222] flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2 md:mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>

                <ThreeDCard className="bg-green-400/40 p-6 md:p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-xl md:text-3xl font-black text-green-600 mb-6 md:mb-8">We do:</h3>
                  <ul className="space-y-3 md:space-y-6 text-left">
                    {[
                      "Build with empathy",
                      "Customize every action",
                      "Work with you, not just for you",
                      "Take responsibility for results",
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm md:text-xl text-[#222] flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>
              </div>
            </div>
          </section>

          {/* Growth Grant Section */}
          <section className="py-6 sm:py-16  relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-lg md:text-5xl font-black mb-6 md:mb-8 text-[#222]"> THE ECOM MONKS GRANT</h2>
              <p className="text-base md:text-xl text-green-600 mb-6 md:mb-8">We know not every promising brand has a budget upfront.</p>
              <p className="text-lg md:text-2xl text-green-700 font-bold mb-8 md:mb-12">
                Every quarter, we choose one high-potential brand to work with on a pure performance basis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-green-200">
                  <h3 className="text-lg md:text-2xl font-bold text-green-700 mb-4 md:mb-6">What You Get:</h3>
                                      <ul className="text-left space-y-2 md:space-y-3">
                      {[
                        "No base fees",
                        "100% full-stack support",
                        "Small % of sales as success fee",
                        "90-day blitz model",
                      ].map((item, idx) => (
                        <li key={idx} className="text-sm md:text-lg text-green-600 flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-200">
                  <h3 className="text-lg md:text-2xl font-bold text-green-700 mb-4 md:mb-6">How to Apply:</h3>
                  <button 
                    onClick={handleApplicationNavigation}
                    className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all duration-300 mb-4">
                    Request an Invite
                  </button>
                  <p className="text-xs md:text-sm text-green-500">
                    Limited to one brand per quarter. Selection based on founder story, product potential, and vision
                    alignment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-6 sm:py-14 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-14 text-[#222]">OUR PRICING</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12">
                {[
                  {
                    name: "Starter? Launch Pad",
                    monthly: "₹6,999/mo",
                    features: ["For new sellers", "All essentials covered"],
                    color: "from-green-400 to-green-500",
                  },
                  {
                    name: "Scaling? Growth Engine",
                    monthly: "₹14,999/mo",
                    features: ["For growing brands", "Advanced optimization"],
                    color: "from-green-400 to-green-500",
                  },
                  {
                    name: "Aggressive? Brand Dominator",
                    monthly: "₹29,999/mo",
                    features: ["For market leaders", "Full-stack growth"],
                    color: "from-green-400 to-green-500",
                  },
                ].map((pricing, idx) => (
                  <ThreeDCard
                    key={idx}
                    className="bg-white border border-green-200 rounded-3xl shadow-xl p-6 md:p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 cursor-pointer"
                    onClick={handleContactNavigation}
                  >
                    {/* Split the name for desktop and mobile: first part big, second part smaller, both stacked */}
                    {(() => {
                      const [first, ...rest] = pricing.name.split('? ');
                      const second = rest.join('? ');
                      return (
                        <div className="mb-2 text-center">
                          <span className="block text-2xl sm:text-3xl font-bold text-green-900 leading-tight">{first}?</span>
                          <span className="block text-lg sm:text-xl font-semibold text-green-700 leading-tight mt-1">{second}</span>
                        </div>
                      );
                    })()}
                    <div className="text-3xl sm:text-4xl font-extrabold text-green-500 mb-4">{pricing.monthly}</div>
                    <ul className="text-green-700 text-base sm:text-lg md:text-base mb-4 pl-0">
                      {pricing.features.map((f, i) => (
                        <li key={i} className="flex items-start md:text-base md:whitespace-nowrap">
                          <Check className="inline text-green-500 mr-2 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={handleContactNavigation}
                      className={`bg-gradient-to-r ${pricing.color} text-white font-black px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-110 transition-all duration-500`}
                    >
                      Get Started
                    </button>
                  </ThreeDCard>
                ))}
              </div>

              <div className="bg-green-50/60 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-sm md:text-lg text-green-700 mb-4">🎯 We also work on Base+Sales% models for select brands.</p>
                <p className="text-sm md:text-lg text-green-700">💬 Want custom pricing? Book a call.</p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-6 sm:py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-12 text-[#222]"> YOU'RE IN GOOD COMPANY</h2>

              <TestimonialCarousel />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-20">
            <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-r from-green-400/30 via-green-900/80 to-green-500/30 blur-2xl"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 text-[#222]">
                LET'S GROW <span className="text-green-500">SMARTER</span>
              </h2>

              <p className="text-md md:text-2xl lg:text-3xl text-green-500 mb-6 md:mb-8 font-bold">
                You're already spending on listings, ads, and operations. <span className="text-black">Now spend it with people who make every rupee count.</span> 
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
                <button 
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-4  py-4 md:py-6 rounded-2xl text-lg md:text-2xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center">
                  Choose your Track
                </button>

                <div className="flex items-center justify-center text-lg md:text-2xl font-bold text-green-600 my-1 md:my-0">
                  or
                </div>

                <button 
                  onClick={handleContactNavigation}
                  className="group bg-white border-2 border-green-400 text-green-600 font-black px-8  py-3 md:py-6 rounded-2xl text-lg md:text-2xl hover:scale-110 hover:shadow-2xl hover:bg-green-50 transition-all duration-500 flex items-center text-center">
                  Book a Strategy Call
                </button>
              </div>

              <div className="bg-green-50/60 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                <h3 className="text-lg md:text-2xl font-bold text-green-700 mb-3 md:mb-4">🧭 NOT SURE WHAT TO CHOOSE?</h3>
                <p className="text-sm md:text-lg text-green-600 mb-3 md:mb-4">
                  We built a diagnostic audit to tell you exactly where you're losing sales — and how to fix it.
                </p>
                <div className="text-xs md:text-base text-green-500 mb-4 md:mb-6 text-left">
                  <span className="font-bold">Get a 48-hour personalized growth plan:</span>
                  <ul className="mt-2 space-y-1 pl-0 mr-[-30px]">
                    <li className="flex items-start"><Check className="inline text-green-500 mr-2 mt-0.5" /><span>Listing gaps</span></li>
                    <li className="flex items-start"><Check className="inline text-green-500 mr-2 mt-0.5" /><span>Ad performance review</span></li>
                    <li className="flex items-start"><Check className="inline text-green-500 mr-2 mt-0.5" /><span>Marketplace expansion playbook</span></li>
                    <li className="flex items-start"><Check className="inline text-green-500 mr-2 mt-0.5" /><span>Recommended plan (Starter, Scaling or Aggressive)</span></li>
                    <li className="flex items-start"><Check className="inline text-green-500 mr-2 mt-0.5" /><span>Custom quote</span></li>
                  </ul>
                </div>
                <button 
                  onClick={handleContactNavigation}
                  className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all duration-300">
                  👉 CLAIM MY FREE GROWTH AUDIT
                </button>
                <p className="text-xs md:text-sm text-green-500 mt-2">No pushy sales. Just pure value.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
 
    </>
  )
}

export default ServicesPage
