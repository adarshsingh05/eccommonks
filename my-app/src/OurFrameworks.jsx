import { Helmet } from "react-helmet"
import Navbar from "./components/Navbar"
import RunningText from "./components/RunningText"
import ParallaxSection from "./components/ParallaxSection"
import ScrollParallax from "./components/ScrollParallax"
import ThreeDCard from "./components/ThreeDCard"

function FrameworkPage() {
  const frameworks = [
    {
      id: "audit",
      icon: "🔍",
      title: "A.U.D.I.T. SPRINT™",
      subtitle: "For sellers feeling lost, stuck, or unsure where to start.",
      problem: "I don't know what's wrong, but sales just aren't moving.",
      description:
        "Our 48-hour onboarding sprint diagnoses your entire brand journey — and hands you a 90-day tactical roadmap.",
      steps: [
        { letter: "A", title: "Account Health Check", desc: "(Safe-Ts, warnings, ratings)" },
        { letter: "U", title: "User Behavior Mapping", desc: "(Why they aren't converting)" },
        { letter: "D", title: "Data Analysis", desc: "(ACOS, ROAS, dead ASINs, etc.)" },
        { letter: "I", title: "Inventory & ASIN Deep Dive", desc: "" },
        { letter: "T", title: "Tactical Execution Blueprint", desc: "" },
      ],
      testimonial: "Their A.U.D.I.T. gave more clarity than 6 months of agency work. I knew what to fix, and how.",
      cta: "Run My Free A.U.D.I.T.",
    },
    {
      id: "sos",
      icon: "✍️",
      title: "S.O.S. LISTING SYSTEM™",
      subtitle: "For brands with traffic… but no conversions.",
      problem: "I have 10,000 views but no sales. What's going wrong?",
      description: "Fixes broken listings that are either invisible or uninspiring.",
      steps: [
        { letter: "S", title: "Strategy", desc: "Competitor & Keyword Mapping" },
        { letter: "O", title: "Optimization", desc: "Titles, Bullets, A+, Search Terms" },
        { letter: "S", title: "Sales Psychology", desc: "Emotional Triggers + CRO Heatmaps" },
      ],
      stat: "87% of Indian marketplace listings we audit miss more than 8 core conversion elements.",
      testimonial: "My listings went from flat to fantastic. CTR improved by 44%, and CVR jumped by 32%.",
      cta: "Get My Top 3 Listings Reviewed",
    },
    {
      id: "smartset",
      icon: "📈",
      title: "AD SMARTSET™ SYSTEM",
      subtitle: "For sellers bleeding ad money with no clue why.",
      problem: "My ACOS is 67%. I don't know where the money's going.",
      description: "Turns your ad spend into a structured, layered performance engine.",
      layers: [
        { number: "1", title: "Discovery Campaigns", desc: "Auto, Low Bid, Keyword Mining" },
        { number: "2", title: "Conversion Campaigns", desc: "Exact Match, ASIN-targeted" },
        { number: "3", title: "Brand Equity Campaigns", desc: "Video Ads, Retargeting, Influencer Creatives" },
      ],
      note: "Every ad layer is tracked by ROAS, Margin, and CTR-to-CVR progression.",
      testimonial: "Their ad framework saved ₹72,000/month in bleed. My ROAS is now stable at 5.1.",
      cta: "Optimize My Ad Funnel",
    },
    {
      id: "triple-t",
      icon: "🔁",
      title: "TRIPLE-T DELIVERY ENGINE™",
      subtitle: "For sellers ghosted by their current agency or SPN.",
      problem: "Nobody tells me what's happening. And I'm the one bleeding.",
      description: "Gives you a real team, transparent tools, and proactive touchpoints.",
      elements: [
        { title: "Team", desc: "3-member Growth Pod — Ads, Listings, Strategy" },
        { title: "Tech", desc: "Real-time dashboards, weekly reports, keyword tracking" },
        { title: "Touchpoint", desc: "Weekly syncs, Slack access, ad alerts & nudges" },
      ],
      testimonial: "They caught an inventory outage before Amazon did. That's next-level accountability.",
      cta: "Meet My Growth Pod",
    },
    {
      id: "conversion",
      icon: "🌐",
      title: "CONVERSION LOOP™",
      subtitle: "For brands looking to scale across platforms (Amazon → Meta → Zepto).",
      problem: "I want multi-channel growth — not just Amazon sales.",
      description: "Creates a self-reinforcing flywheel using marketplace, quick commerce, and social strategies.",
      loop: [
        { number: "1", desc: "High-converting listing goes live" },
        { number: "2", desc: "UGC video feeds Meta Ad" },
        { number: "3", desc: "Retargeting on Amazon + Google" },
        { number: "4", desc: "Sale → Review → Repeat Buyer" },
      ],
      includes: "Also includes Blinkit/Zepto onboarding, content and best-seller SKU strategy.",
      testimonial: "I had never imagined cross-channel growth could be this well-orchestrated.",
      cta: "Help Me Build the Flywheel",
    },
  ]

  const frameworkMatcher = [
    { problem: "Sales are flat, I feel stuck.", solution: "A.U.D.I.T. SPRINT" },
    { problem: "Good traffic, poor conversion.", solution: "S.O.S. SYSTEM" },
    { problem: "Ad spends are high, ROAS low.", solution: "AD SMARTSET" },
    { problem: "No communication from agency.", solution: "TRIPLE-T ENGINE" },
    { problem: "I want multi-channel scale.", solution: "CONVERSION LOOP" },
  ]

  return (
    <>
      <Helmet>
        <title>Ecommerce Growth Framework for Amazon & Flipkart | The Ecom Monks | The MonkScale™ System</title>
        <meta
          name="description"
          content="Tired of trial-and-error ecommerce strategies? Discover MonkOS™, our proprietary system that scales Amazon, Flipkart, and Q-commerce brands with precision."
        />
        <link rel="canonical" href="/ourframeworks" />
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

        <main className="bg-white text-[#222] overflow-x-hidden">
          <h1 className="sr-only">Our MonkScale™ Growth Framework — A New Way to Win in Ecommerce</h1>

          {/* Hero Section with Parallax */}
          <ParallaxSection speed={0.3} direction="up" className="w-full">
            <section className="py-6 md:py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
            <div className="max-w-6xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
                <div className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tight mb-3 md:mb-8">
                <span className="text-[#222]">Where Growth Isn't Random. </span>
                <span className="text-green-500">It's Engineered.</span>
              </div>

                <div className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 space-y-2 max-w-4xl">
                <p>You've tried freelancers, SPNs, and half-baked agencies.</p>
                <p>You've spent on ads, rewritten listings, even prayed to the algorithm gods.</p>
                  <p className="font-semibold text-[#222] text-xl md:text-2xl lg:text-3xl">
                  Now it's time for systems — that don't break, don't bluff, and actually build your business.
                </p>
              </div>

                {/* CTA Button */}
                <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-2xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-4 animate-bounce">
                  <span className="group-hover:animate-bounce inline-block mr-3 md:mr-4 text-2xl md:text-3xl">🚀</span>
                  Discover Our Frameworks
                </button>
            </div>
          </section>
          </ParallaxSection>

          {/* Sliding Banner */}
          <RunningText
            text="A.U.D.I.T. SPRINT • S.O.S. LISTING SYSTEM • AD SMARTSET • TRIPLE-T ENGINE • CONVERSION LOOP"
            speed={30}
          />

          {/* Headline Section */}
          <section className="py-6 md:py-32 bg-white relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">
                Growth that feels effortless — because it's backed by{" "}
                <span className="text-green-500">frameworks that work.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                At The Ecom Monks, we don't rely on guesswork. We've built our systems from the trenches: with real
                sellers, across real categories, solving real chaos.
              </p>

              <div className="mb-8">
                <div className="text-xl md:text-2xl font-bold text-green-500 mb-6">
                  💡 And we've battle-tested them across:
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {["Fashion", "Wellness", "FMCG", "Home & Kitchen", "D2C Tech", "Beauty", "Ayurveda"].map(
                    (category) => (
                      <div
                        key={category}
                        className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold text-sm md:text-base hover:scale-105 transition-all duration-300"
                      >
                        ✔️ {category}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Why This Page Matters */}
          <section className="py-6 md:py-32 bg-green-50 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">WHY THIS PAGE MATTERS</h2>
                <div className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 space-y-4 max-w-4xl mx-auto">
                  <p>Before you trust anyone to run your ads, rewrite your listings, or rebuild your brand store…</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-green-600 font-semibold text-xl md:text-2xl">
                    <span>→ You should know how they think</span>
                    <span>→ You should see the method behind the magic</span>
                  </div>
                  <p className="font-semibold text-[#222] text-xl md:text-2xl">
                    Let us walk you through the 5 pillars that power every account we manage.
                  </p>
                  <p className="text-green-600 font-semibold text-xl md:text-2xl">
                    👉 And why they work better than anything you've tried before.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Built From the Ground */}
          <section className="py-6 md:py-32 bg-white relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">
                Built From the Ground. <span className="text-green-500">Refined in the Fire.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12">Every framework you'll see below is the result of:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                <ThreeDCard className="p-6 md:p-8 border-green-200 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">₹100Cr+</div>
                  <p className="text-gray-600 text-base md:text-lg">in tracked marketplace sales</p>
                </ThreeDCard>
                <ThreeDCard className="p-6 md:p-8 border-green-200 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">500+</div>
                  <p className="text-gray-600 text-base md:text-lg">listings overhauled across Amazon, Flipkart, Meesho & Nykaa</p>
                </ThreeDCard>
                <ThreeDCard className="p-6 md:p-8 border-green-200 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">1,000+</div>
                  <p className="text-gray-600 text-base md:text-lg">campaigns optimized across Amazon Ads, Flipkart PLA, Meta & Google</p>
                </ThreeDCard>
                <ThreeDCard className="p-6 md:p-8 border-green-200 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">100+</div>
                  <p className="text-gray-600 text-base md:text-lg">seller convos where we didn't pitch — we solved</p>
                </ThreeDCard>
              </div>
            </div>
          </section>

          {/* Framework Matcher */}
          <section className="py-6 md:py-32 bg-green-50 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">WHICH FRAMEWORK FITS YOU?</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto">
                Not sure where to start? Tell us your biggest pain point, and we'll match you to the perfect framework.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                {frameworkMatcher.map((item, idx) => (
                  <ThreeDCard
                    key={idx}
                    className="bg-white border border-green-200 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400"
                  >
                    <div className="text-lg md:text-xl text-gray-700 mb-4 text-center italic">"{item.problem}"</div>
                    <div className="text-xl md:text-2xl font-bold text-green-600 text-center">→ {item.solution}</div>
                  </ThreeDCard>
                ))}
                </div>

              <div className="bg-green-50/60 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-green-700 mb-4">
                  💬 Still not sure? Let our framework diagnostic tell you exactly what you need.
                  </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all duration-300">
                  Take the Framework Quiz
                </button>
                <p className="text-sm md:text-base text-green-500 mt-2">Get your personalized framework recommendation in 2 minutes.</p>
              </div>
            </div>
          </section>

          {/* Frameworks Grid */}
          <section className="py-6 md:py-32 bg-white relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">OUR PROVEN FRAMEWORKS</h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Each framework is a complete system — not just a checklist, but a methodology that scales.
                </p>
              </div>

              <div className="space-y-12 md:space-y-16">
                {frameworks.map((framework, index) => (
                  <div key={framework.id} className="relative">
                    <ThreeDCard className="bg-white border border-green-200 rounded-2xl shadow-lg p-6 md:p-8 transition-transform duration-500 hover:scale-101 hover:shadow-lg hover:border-green-300 max-w-5xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Left Column */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl md:text-4xl">{framework.icon}</span>
                            <div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-green-700 mb-1">
                                {framework.title}
                              </h3>
                              <p className="text-base md:text-lg text-green-600 font-semibold">
                                {framework.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                            <p className="text-sm md:text-base text-red-700 italic">"{framework.problem}"</p>
                          </div>

                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {framework.description}
                          </p>

                          {framework.stat && (
                            <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                              <p className="text-xs md:text-sm text-green-700 font-semibold">{framework.stat}</p>
                            </div>
                          )}

                          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                            <p className="text-sm md:text-base text-blue-700 italic">"{framework.testimonial}"</p>
                          </div>

                          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 text-sm md:text-base">
                            {framework.cta}
                          </button>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                          {framework.steps && (
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-green-700 mb-3">The Process:</h4>
                              <div className="space-y-2">
                                {framework.steps.map((step, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                      {step.letter}
                                    </div>
                                    <div>
                                      <div className="font-semibold text-gray-900 text-sm md:text-base">{step.title}</div>
                                      {step.desc && <div className="text-xs md:text-sm text-gray-600">{step.desc}</div>}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {framework.layers && (
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-green-700 mb-3">The Layers:</h4>
                              <div className="space-y-2">
                                {framework.layers.map((layer, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                      {layer.number}
                                    </div>
                                    <div>
                                      <div className="font-semibold text-gray-900 text-sm md:text-base">{layer.title}</div>
                                      <div className="text-xs md:text-sm text-gray-600">{layer.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {framework.note && (
                                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                                  <p className="text-xs md:text-sm text-yellow-700">{framework.note}</p>
                                </div>
                              )}
                            </div>
                          )}

                          {framework.elements && (
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-green-700 mb-3">The Elements:</h4>
                              <div className="space-y-2">
                                {framework.elements.map((element, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                      {idx + 1}
                                    </div>
                                    <div>
                                      <div className="font-semibold text-gray-900 text-sm md:text-base">{element.title}</div>
                                      <div className="text-xs md:text-sm text-gray-600">{element.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {framework.loop && (
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-green-700 mb-3">The Loop:</h4>
                              <div className="space-y-2">
                                {framework.loop.map((step, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                      {step.number}
                                    </div>
                                    <div className="text-xs md:text-sm text-gray-700">{step.desc}</div>
                                  </div>
                                ))}
                              </div>
                              {framework.includes && (
                                <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                                  <p className="text-xs md:text-sm text-green-700">{framework.includes}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </ThreeDCard>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-6 md:py-32 bg-green-50 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-8 text-[#222]">
                READY TO <span className="text-green-500">ENGINEER</span> YOUR GROWTH?
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12">
                Most agencies work hard. We work smart — with frameworks that give founders freedom, visibility, and
                predictable results.
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-2xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center">
                  <span className="group-hover:animate-bounce inline-block mr-3 md:mr-4 text-2xl md:text-3xl">🚀</span>
                  Start with Our Frameworks
                </button>

                <button className="group bg-white border-2 border-green-400 text-green-600 font-black px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-2xl hover:scale-110 hover:shadow-2xl hover:bg-green-50 transition-all duration-500 flex items-center">
                  <span className="group-hover:animate-bounce inline-block mr-3 md:mr-4 text-2xl md:text-3xl">📞</span>
                  Book a Framework Call
                </button>
              </div>

              <div className="mt-8 md:mt-12 bg-white rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">🧭 NOT SURE WHICH FRAMEWORK?</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  Take our 2-minute framework diagnostic to get matched with the perfect system for your brand.
                </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all duration-300">
                  👉 TAKE THE FRAMEWORK QUIZ
                </button>
                <p className="text-sm md:text-base text-green-500 mt-2">Get your personalized framework recommendation instantly.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default FrameworkPage
