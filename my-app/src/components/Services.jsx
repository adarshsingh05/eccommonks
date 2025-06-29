import Navbar from "./Navbar"
import Footer from "./Footer"
import RunningText from "./RunningText"
import ParallaxSection from "./ParallaxSection"
import ScrollParallax from "./ScrollParallax"
import ThreeDCard from "./ThreeDCard"

function ServicesPage() {
  return (
    <div className="bg-white text-[#222] overflow-x-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0">
        <ScrollParallax speed={0.1} className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.07) 1px, transparent 1px)
            `,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </ScrollParallax>
        <ScrollParallax speed={0.2} className="absolute top-20 left-20">
          <div className="w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        </ScrollParallax>
        <ScrollParallax speed={0.15} className="absolute top-40 right-32">
          <div className="w-24 h-24 bg-teal-200/10 rounded-full blur-xl"></div>
        </ScrollParallax>
        <ScrollParallax speed={0.25} className="absolute bottom-40 left-40">
          <div className="w-40 h-40 bg-cyan-400/10 rounded-full blur-xl"></div>
        </ScrollParallax>
      </div>

      <Navbar />

      <main className="bg-white text-[#222] overflow-x-hidden">
        {/* Hero Section with Parallax */}
        <ParallaxSection speed={0.3} direction="up" className="w-full">
          <section className="py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-blue-50/60 to-white">
            <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
              {/* Main Headline */}
              <div className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                <span className="text-[#222]">END-TO-END </span>
                <span className="text-blue-500">ECOMMERCE</span>
                <span className="text-teal-400"> SERVICES</span>
              </div>

              {/* Subheadline */}
              <div className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6">
                Built for Sellers. Backed by Strategy.
              </div>

              {/* Supporting Text */}
              <div className="text-2xl md:text-4xl text-[#222] font-extrabold mb-6">
                Your <span className="text-blue-500">Marketplace</span>. Your{" "}
                <span className="text-teal-400">Momentum</span>. Our Mission.
              </div>

              <div className="text-lg md:text-xl text-blue-400 mb-2">
                You don't need 5 freelancers. You just need one team that gets it.
              </div>

              <div className="text-lg md:text-xl font-bold text-[#222] mb-8">
                We handle your listings, ads, creatives, campaigns, and brand growth across every major platform.
              </div>

              {/* CTA */}
              <button className="group bg-gradient-to-r from-blue-400 to-teal-500 text-white font-black px-12 py-6 rounded-2xl text-2xl md:text-3xl hover:scale-110 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-2 animate-bounce mb-4">
                <span className="group-hover:animate-bounce inline-block mr-4 text-3xl">🎯</span>
                Get Your Free Growth Audit
              </button>

              <span className="text-blue-400 text-lg max-w-2xl leading-relaxed mt-2">
                <span className="font-bold text-blue-500">Complete marketplace analysis</span> + tailored growth
                blueprint in 48 hours.
              </span>
            </div>
          </section>
        </ParallaxSection>

        {/* Sliding Banner */}
        <RunningText
          text="Amazon • Flipkart • Myntra • Meesho • Nykaa • Jiomart • Blinkit • Zepto • Instamart"
          speed={40}
        />

        {/* Journey Tracks Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-teal-500/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <h2 className="text-5xl md:text-6xl font-black mb-10 text-[#222] text-center w-full">
              WHERE ARE YOU IN YOUR JOURNEY?
            </h2>
            <p className="text-2xl md:text-3xl text-blue-500 mb-16 font-bold text-center">
              Choose your track — we'll tailor everything from there:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  track: "TRACK 1",
                  title: "The Launchpad",
                  subtitle: "My listings are weak. Ads aren't converting. I'm just not growing.",
                  description: "For brands getting started or stuck with setup",
                  tagline: "Get your foundations right the first time.",
                  target: "For sellers doing ₹0–₹5L/month or migrating from a bad agency",
                  color: "from-blue-200/80 to-blue-400/40",
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
                  color: "from-teal-200/80 to-teal-400/40",
                  icon: "⚡",
                },
                {
                  track: "TRACK 3",
                  title: "The Market Domination Program",
                  subtitle: "I want to dominate my niche, build brand equity, and expand across q-comm + social.",
                  description: "For ambitious brands aiming for multi-channel blitz",
                  tagline: "Take over marketplaces, build buzz, and drive profitable scale.",
                  target: "For brands doing ₹30L+/month or looking to blitzscale",
                  color: "from-cyan-200/80 to-cyan-400/40",
                  icon: "👑",
                },
              ].map((track, idx) => (
                <ThreeDCard
                  key={idx}
                  className={`bg-gradient-to-br ${track.color} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300`}
                >
                  <span className="text-4xl mb-4">{track.icon}</span>
                  <div className="text-sm font-bold text-blue-600 mb-2">{track.track}</div>
                  <h3 className="text-2xl font-black text-blue-900 mb-4">{track.title}</h3>
                  <p className="text-lg text-blue-800 mb-4 italic">"{track.subtitle}"</p>
                  <p className="text-base text-blue-700 mb-2">{track.description}</p>
                  <p className="text-base font-semibold text-blue-800 mb-4">→ "{track.tagline}"</p>
                  <div className="text-sm text-blue-600 font-medium">🎯 {track.target}</div>
                </ThreeDCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-blue-600 mb-4">Not sure which suits you?</p>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Get Your Free Growth Audit
              </button>
              <p className="text-base text-blue-500 mt-2">We'll match you to the perfect fit in 48 hours.</p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-l from-teal-500/10 to-blue-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">CORE SERVICES — YOUR BRAND, EVERYWHERE</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
              {[
                {
                  icon: "🛒",
                  title: "Marketplace Management",
                  subtitle: "Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart",
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
                    "Product storytelling, reels, carousels, and captions",
                    "Influencer shortlisting + outreach + script briefs",
                    "Paid, barter, or hybrid creator activations",
                    "UGC repurposed for Amazon/Meta/Website",
                  ],
                },
              ].map((service, idx) => (
                <ThreeDCard
                  key={idx}
                  className="bg-white border border-blue-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-black text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-base text-blue-500 mb-4 font-semibold">{service.subtitle}</p>
                  <ul className="w-full text-left text-blue-700 space-y-2 list-disc list-inside">
                    {service.bullets.map((point, i) => (
                      <li key={i} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </ThreeDCard>
              ))}
            </div>
          </div>
        </section>

        {/* Plug & Play Modules Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">PLUG & PLAY GROWTH MODULES</h2>
            <p className="text-2xl md:text-3xl text-blue-500 mb-16 font-bold">
              Want a custom mix? We offer modular services to solve specific challenges.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                "Product Video Creation",
                "Infographic Packs",
                "Influencer Setup + UGC",
                "Advanced Keyword Research",
                "Competitor Monitoring",
                "Marketplace Expansion",
                "Social Media Content Calendar",
                "Performance Ad Audits",
              ].map((module, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-blue-200"
                >
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-base font-semibold text-blue-800">{module}</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-blue-700 mb-4">
                💬 Just tell us what's keeping you stuck — we'll plug in the exact module you need.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Talk to Our Team
              </button>
              <p className="text-sm text-blue-500 mt-2">Get a same-day recommendation.</p>
            </div>
          </div>
        </section>

        {/* Sliding Banner */}
        <RunningText
          text="Listings • Ads • Creatives • Social • Influencers • Quick Commerce • Brand Building"
          speed={40}
        />

        {/* Why Brands Switch Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-teal-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-[#222]">WHY BRANDS SWITCH TO THE ECOM MONKS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <ThreeDCard className="bg-red-400/40 p-10 rounded-3xl h-full flex flex-col items-center">
                <h3 className="text-3xl font-black text-red-600 mb-8">What Most Agencies Do</h3>
                <ul className="space-y-6 text-left">
                  {[
                    "Overpromise, underdeliver",
                    "Hide behind dashboards",
                    "Offer generic services",
                    "Focus on vanity metrics",
                    "Assign one person to 50 brands",
                  ].map((item, idx) => (
                    <li key={idx} className="text-xl text-[#222] flex items-center">
                      <span className="mr-3">❌</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ThreeDCard>

              <ThreeDCard className="bg-blue-900/40 p-10 rounded-3xl h-full flex flex-col items-center">
                <h3 className="text-3xl font-black text-blue-500 mb-8">What We Do</h3>
                <ul className="space-y-6 text-left">
                  {[
                    "Underpromise, over-deliver",
                    "Weekly calls + complete visibility",
                    "Build tailored growth systems",
                    "Obsessed with sales & ROAS",
                    "Limit to 10 clients per cohort",
                  ].map((item, idx) => (
                    <li key={idx} className="text-xl text-[#222] flex items-center">
                      <span className="mr-3">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ThreeDCard>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-blue-800 italic">
                "It felt like hiring an in-house growth team — not an agency."
              </p>
            </div>
          </div>
        </section>

        {/* Growth Grant Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-teal-400/10 to-cyan-500/10"></div>
          </div>
          <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#222]">🌱 THE ECOM MONKS GROWTH GRANT</h2>
            <p className="text-xl text-blue-600 mb-8">We know not every promising brand has a budget upfront.</p>
            <p className="text-2xl text-blue-700 font-bold mb-12">
              Every quarter, we choose one high-potential brand to work with on a pure performance basis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">What You Get:</h3>
                <ul className="text-left space-y-3">
                  {[
                    "✅ No base fees",
                    "✅ 100% full-stack support",
                    "✅ Small % of sales as success fee",
                    "✅ 90-day blitz model",
                  ].map((item, idx) => (
                    <li key={idx} className="text-lg text-blue-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">How to Apply:</h3>
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 mb-4">
                  Request an Invite
                </button>
                <p className="text-sm text-blue-500">
                  Limited to one brand per quarter. Selection based on founder story, product potential, and vision
                  alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 relative z-10">
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-14 text-[#222]">PRICING TRANSPARENCY</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {[
                {
                  plan: "Launch Pad",
                  monthly: "₹6,999",
                  quarterly: "₹17,999",
                  bonus: "Free Brand Audit + more",
                  color: "from-blue-400 to-blue-500",
                },
                {
                  plan: "Growth Engine",
                  monthly: "₹14,999",
                  quarterly: "₹39,999",
                  bonus: "Free Video or Store Setup + More",
                  color: "from-teal-400 to-teal-500",
                },
                {
                  plan: "Brand Dominator",
                  monthly: "₹29,999",
                  quarterly: "₹79,999",
                  bonus: "2 Videos + Competitor Audit + More",
                  color: "from-cyan-400 to-cyan-500",
                },
              ].map((pricing, idx) => (
                <ThreeDCard
                  key={idx}
                  className="bg-white border border-blue-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400"
                >
                  <h3 className="text-3xl font-black text-blue-700 mb-4">{pricing.plan}</h3>
                  <div className="text-4xl font-black text-[#222] mb-2">{pricing.monthly}/mo</div>
                  <div className="text-2xl font-bold text-blue-500 mb-4">{pricing.quarterly} quarterly</div>
                  <div className="text-base text-blue-600 mb-6 text-center">{pricing.bonus}</div>
                  <button
                    className={`bg-gradient-to-r ${pricing.color} text-white font-black px-8 py-4 rounded-xl hover:scale-110 transition-all duration-500`}
                  >
                    Get Started
                  </button>
                </ThreeDCard>
              ))}
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-blue-700 mb-4">🎯 We also work on Base+Sales% models for select brands.</p>
              <p className="text-lg text-blue-700">💬 Want custom pricing? Book a call.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#222]">✅ YOU'RE IN GOOD COMPANY</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "They fixed our Amazon structure, rewrote our listings, and scaled Flipkart in just 6 weeks.",
                "Their ads outperformed even our internal team's. We've never seen ROAS like this.",
                "I hired them for listings. I stayed for the strategy, creativity, and sheer ownership.",
                "Real people. Real plans. Real accountability.",
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-blue-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400"
                >
                  <span className="text-blue-500 text-4xl mb-4">"</span>
                  <span className="text-xl text-blue-900 italic leading-relaxed">{testimonial}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 relative z-20">
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-r from-blue-400/30 via-teal-900/80 to-cyan-500/30 blur-2xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#222]">
              LET'S GROW <span className="text-blue-500">SMARTER</span>
            </h2>

            <p className="text-2xl md:text-3xl text-blue-500 mb-8 font-bold">
              You're already spending on listings, ads, and operations.
            </p>
            <p className="text-xl text-blue-600 mb-12">Now spend it with people who make every rupee count.</p>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <button className="group bg-gradient-to-r from-blue-400 to-teal-500 text-white font-black px-12 py-6 rounded-2xl text-2xl hover:scale-110 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center">
                <span className="group-hover:animate-bounce inline-block mr-4 text-3xl">🚀</span>
                Get Started with The Ecom Monks
              </button>

              <button className="group bg-white border-2 border-blue-400 text-blue-600 font-black px-12 py-6 rounded-2xl text-2xl hover:scale-110 hover:shadow-2xl hover:bg-blue-50 transition-all duration-500 flex items-center">
                <span className="group-hover:animate-bounce inline-block mr-4 text-3xl">📞</span>
                Book a Strategy Call
              </button>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">🧭 NOT SURE WHAT TO CHOOSE?</h3>
              <p className="text-lg text-blue-600 mb-4">
                We built a diagnostic audit to tell you exactly where you're losing sales — and how to fix it.
              </p>
              <div className="text-base text-blue-500 mb-6">
                🎯 Get a 48-hour personalized growth plan:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Listing gaps</li>
                  <li>Ad performance review</li>
                  <li>Marketplace expansion playbook</li>
                  <li>Recommended plan (Launchpad, Growth Engine, or Domination)</li>
                  <li>Custom quote</li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                CLAIM MY FREE GROWTH AUDIT
              </button>
              <p className="text-sm text-blue-500 mt-2">No pushy sales. Just pure value.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage
