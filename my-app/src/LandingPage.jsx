import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RunningText from "./components/RunningText";
import ParallaxSection from "./components/ParallaxSection";
import ScrollParallax from "./components/ScrollParallax";
import ThreeDCard from "./components/ThreeDCard";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Top Ecommerce Agency India | Amazon, Flipkart, Blinkit Experts – The Ecom Monks</title>
        <meta name="description" content="Struggling with your e-commerce growth? The Ecom Monks is India's most trusted agency for Amazon, Flipkart, Blinkit, Zepto & more. Scale faster with our expert-led solutions." />
        <link rel="canonical" href="/" />
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
          <h1 className="sr-only">We're Not Just an Agency. We're Your Ecommerce Growth Partner.</h1>
          {/* Hero Section with Parallax */}
          <ParallaxSection speed={0.3} direction="up" className="w-full">
            <section className="py-4 sm:py-16 md:py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
              <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
                {/* Main Headline */}
                <div className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-8">
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
                <div className="text-sm sm:text-base md:text-lg text-green-400 mb-2">
                  From listings to sales to followers — we don't just manage accounts.
                </div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-[#222] mb-8">
                  We build brands, scale visibility, and drive conversions across all channels.
                </div>
                {/* CTA */}
                <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-6 py-3 text-base sm:px-10 sm:py-5 sm:text-xl md:px-16 md:py-8 md:text-3xl rounded-2xl text-2xl md:text-3xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-2 animate-bounce mb-4">
                  <span className="group-hover:animate-bounce inline-block mr-4 text-3xl">👉</span>
                  Get My Free Ecom Audit
                </button>
                <span className="text-green-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
                  <span className="font-bold text-green-500">Full listing, ad & social review</span> + a 3-month growth blueprint. No fluff.
                </span>
              </div>
            </section>
          </ParallaxSection>

          {/* Sliding Banner: Marketplace Management */}
          <RunningText text="Marketplace Management • Ads • Creatives • Social • Influencers" speed={15} />

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
                    The Brutal Truth About Most SPN Agencies?
                  </h3>
                  <p className="text-xl md:text-2xl text-green-500 mb-10 text-center md:text-left">
                    They're either overloaded, unaccountable, or both.
                  </p>
                  {/* Pain Cards */}
                  <div className="flex flex-col sm:flex-row gap-6 w-full mb-10 justify-center md:justify-start">
                    {["My ads are running, but no one's watching them.", "My listings are live, but no one's clicking.", "My brand is good, but no one knows it exists."].map((pain, idx) => (
                      <div
                        key={idx}
                        className="flex-1 min-w-[220px] bg-gradient-to-br from-green-200/80 to-green-400/40 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:animate-shake"
                      >
                        <span className="text-4xl mb-4">😩</span>
                        <span className="text-sm sm:text-base font-bold text-green-900 leading-snug">{pain}</span>
                      </div>
                    ))}
                  </div>
                  {/* Checklist */}
                  <div className="w-full bg-green-50/60 rounded-2xl p-8 shadow flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {["SPNs are slow, overloaded, and full of templated work", "Ads are outsourced with no ROI clarity", "You get sold big promises — and delivered zero strategy.", "You're stuck between poor creatives, weak campaigns, and zero clarity.", "Social media? Untouched", "Influencers? Unused"].map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-green-500 text-2xl mt-1">✅</span>
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
                  <span className="text-[#222]">Most agencies don't care about your ROI. They just want retainers, not responsibility.</span>
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
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-6 md:mb-10 text-[#222]">
                THE SOLUTION — WHAT MAKES US DIFFERENT
              </h2>
              <p className="text-2xl sm:text-3xl text-green-500 mb-16 font-bold">
                We're The Ecom Monks – India's most proactive, full-stack growth agency for digital sellers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <ThreeDCard className="bg-green-400/40 p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-3xl font-black text-green-500 mb-8">Others Do This</h3>
                  <ul className="space-y-6 text-left">
                    {["One team, 100 clients", "Generic listings", "Ad reporting", "No accountability", "Zero brand building"].map((item, idx) => (
                      <li key={idx} className="text-xl text-[#222] flex items-center"><span className="mr-3">❌</span>{item}</li>
                    ))}
                  </ul>
                </ThreeDCard>
                <ThreeDCard className="bg-green-900/40 p-10 rounded-3xl h-full flex flex-col items-center">
                  <h3 className="text-3xl font-black text-green-500 mb-8">We Do This</h3>
                  <ul className="space-y-6 text-left">
                    {["One team, 10 clients only per cohort", "Behavioral-copywriting + USP hooks", "Real-time dashboards + daily ROAS tuning", "Weekly calls + seller-first mindset", "Creative storytelling + influencer buzz"].map((item, idx) => (
                      <li key={idx} className="text-xl text-[#222] flex items-center"><span className="mr-3">✅</span>{item}</li>
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
          <section className="py-6 sm:py-16 md:py-32 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-6 md:mb-10 text-[#222]">
                OUR UNIQUE FRAMEWORKS
              </h2>
              <p className="text-2xl sm:text-3xl text-green-500 mb-16 font-bold">
                We don't "try." We follow science-backed frameworks that actually grow businesses.
              </p>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                  {[
                    {
                      icon: '🔁',
                      title: 'TRIPLE-T: Your Dedicated Growth Squad',
                      bullets: [
                        'Team → Not freelancers, but our in-house ecom soldiers',
                        'Tech → Helium10, AdReports, Keyword Trackers, Analytics',
                        "Touchpoint → Weekly calls. Monthly reviews. You'll never be ghosted.",
                      ],
                    },
                    {
                      icon: '🔍',
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
                      icon: '🧠',
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
                      icon: '✍️',
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
                      icon: '🌐',
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
                      className="bg-white border border-green-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard"
                    >
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-black text-green-700 mb-4 text-center">{item.title}</h3>
                      {item.intro && <div className="text-green-700 font-semibold mb-2">{item.intro}</div>}
                      <ul className="w-full pl-6 text-left text-green-700 space-y-2 list-disc">
                        {item.bullets.map((point, i) => (
                          <li key={i}>{point}</li>
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
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-6 md:mb-10 text-[#222]">
                Our Services – Ecommerce<br/>
                Q-COMMERCE BRAND BUILDING
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    icon: '🛒',
                    title: 'Platform Management',
                    bullets: [
                      'Amazon | Flipkart | Myntra | Meesho | Nykaa | Jiomart',
                      'Listings, A+ Content, Videos, Reviews, Safe-T Claims, Category Approvals',
                    ],
                  },
                  {
                    icon: '📈',
                    title: 'Performance Marketing',
                    bullets: [
                      'Amazon Ads | Meta Ads | Google Ads | Flipkart PLA | DSP',
                      'Campaign Setup, ROAS Optimization, Bid Management, Keyword Harvesting',
                    ],
                  },
                  {
                    icon: '🎨',
                    title: 'Creative Studio',
                    bullets: [
                      'Infographics, Product Videos, A+ Pages',
                      'Brand Stores, Storytelling Assets, Seasonal Rebrands',
                    ],
                  },
                  {
                    icon: '⚡',
                    title: 'Quick Commerce Blitz',
                    bullets: [
                      'Blinkit | Zepto | Instamart',
                      'Product Card Design, Promo Planning, Brand Integration',
                    ],
                  },
                  {
                    icon: '📱',
                    title: 'Social Media Management',
                    bullets: [
                      'Personalized Social Post Packages',
                      'Product storytelling, visual feed planning, captions + scheduling',
                    ],
                  },
                  {
                    icon: '🤝',
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
                    className="bg-white border border-green-200 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-floatCard"
                  >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-black text-green-700 mb-4">{item.title}</h3>
                    <ul className="w-full pl-6 text-left text-green-700 space-y-2 list-disc list-inside">
                      {item.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </ThreeDCard>
                ))}
              </div>
            </div>
          </section>

          {/* Sliding Banner: Services */}
          <RunningText text="Platform Management  •  Performance Marketing  •  Creative Studio  •  Quick Commerce Blitz  •  Social Media  •  Influencer Marketing" speed={15} />

          {/* Proof/Case Studies Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10 mt-6">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-6 md:mb-10 text-[#222]">
                PROOF THAT BUILDS TRUST
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                {[
                  {
                    icon: '📊',
                    title: 'Fashion Accessories Brand',
                    bullets: [
                      'Increased ROAS from 3.4× → 10.3× in 150 days',
                      'Cut ACOS down to 19.2% while doubling Amazon revenue',
                    ],
                  },
                  {
                    icon: '🧼',
                    title: 'Heritage Skincare Brand',
                    bullets: [
                      'Boosted online ROAS to 4.2× while keeping ACOS stable across 3 platforms',
                    ],
                  },
                  {
                    icon: '🧘‍♀️',
                    title: 'Health & Wellness Brand',
                    bullets: [
                      'Drove a 30%+ revenue jump in 3 months via telemedicine + q-commerce integrations',
                    ],
                  },
                  {
                    icon: '🛒',
                    title: 'D2C Grocery Startup',
                    bullets: [
                      'Reduced CAC by 18% and doubled repeat order retention with funnel fixes',
                    ],
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 group"
                  >
                    <span className="text-4xl mb-4">{item.icon}</span>
                    <div className="font-bold text-green-900 text-xl mb-2">{item.title}</div>
                    <ul className="text-green-700 text-base list-disc list-inside text-left">
                      {item.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What Our Clients Say Section */}
          <section className="py-6 relative z-10">
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-8 md:mb-10 text-[#222] flex items-center justify-center gap-3">
                <span className="text-green-500 text-3xl"></span> What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                  <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                  <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">They don't just manage our account — they think like owners.</span>
                </div>
                <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                  <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                  <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">Finally found an agency that listens, acts, and shows up every week.</span>
                </div>
                <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                  <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                  <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">They scaled us on Flipkart and Amazon while fixing our returns mess. Legends.</span>
                </div>
                <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                  <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                  <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">They don't just talk numbers — they explain, optimize, and own it.</span>
                </div>
                <div className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 animate-fade-in-up group">
                  <span className="text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">“</span>
                  <span className="text-xl sm:text-2xl text-green-900 italic leading-relaxed">Their ad dashboards are magic. So clean, so real.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Founder's Note Section */}
          <section className="py-16 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-3xl border border-green-200 shadow-xl p-10 md:p-16" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-green-900 text-center">FOUNDER'S NOTE – FROM THE DESK OF ARUN R. CHACHAN</h2>
                <div className="space-y-6 text-sm sm:text-base text-green-900/90 leading-relaxed text-center">
                  <p>I've been where you are — as a brand founder, a growth head, a seller.<br/>And honestly? Most service providers care more about ticking boxes than moving revenue.</p>
                  <p>Founders and sellers were stuck with average agencies, lean SPNs, or freelancers who lacked ownership. That's why I created The Ecom Monks — to be the agency I wish existed when I was on the other side.</p>
                  <p>We care. We respond. We're not perfect. But we're obsessed with performance, transparent with feedback, and driven by our clients' success. We bring 12+ years of data-backed, funnel-obsessed, copy-smart execution to the table. Whether you're doing ₹50,000 or ₹5 crore a month — we bring clarity, firepower, and a no-BS approach that actually gets results.</p>
                </div>
                <div className="mt-8 text-green-600 font-semibold italic text-xl sm:text-2xl text-center">We won't just manage your account. We'll scale your success.</div>
                <div className="mt-8 text-right text-green-700 font-bold text-sm sm:text-base italic">— Arun R. Chachan, Founder, The Ecom Monks</div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-6 sm:py-16 md:py-32 relative z-10" id="pricing">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 text-green-700">PRICING</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { name: "Starter? Launch Pad", price: "₹6,999/mo", features: ["For new sellers", "All essentials covered"] },
                  { name: "Scaling? Growth Engine", price: "₹14,999/mo", features: ["For growing brands", "Advanced optimization"] },
                  { name: "Aggressive? Brand Dominator", price: "₹29,999/mo", features: ["For market leaders", "Full-stack growth"] },
                ].map((plan, idx) => (
                  <div key={plan.name} className="bg-white border border-green-200 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
                    <div className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">{plan.name}</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-green-500 mb-4">{plan.price}</div>
                    <ul className="text-green-700 text-base sm:text-lg list-disc list-inside mb-4">
                      {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-green-900 font-semibold text-base sm:text-lg">👉 Or plug & play:</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                {['Only Ads?', 'Only Listing Fixes?', 'Only Influencers?'].map((item, idx) => (
                  <span key={item} className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold text-sm sm:text-base shadow-md">{item}</span>
                ))}
              </div>
              <div className="mt-2 text-green-500 text-sm sm:text-base">We've got à-la-carte options too.</div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-8 sm:py-16 md:py-24 bg-green-50 border-t-2 border-green-400 text-center">
            <div className="max-w-2xl mx-auto px-4 md:px-8">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-green-700 mb-4">Don't Let Another Month Burn Your Budget.</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-green-900 mb-6">You've already spent money on platforms. Now, spend intelligently with people who care — and who convert.</p>
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-white font-black px-4 py-2 text-base sm:px-10 sm:py-5 sm:text-xl md:px-16 md:py-8 md:text-3xl rounded-2xl text-lg sm:text-2xl md:text-3xl hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-500 transform hover:rotate-1 flex items-center mt-2 animate-bounce mb-4 mx-auto w-[calc(100%-22px)] sm:w-auto">
                <span className="group-hover:animate-bounce inline-block mr-3 text-2xl sm:mr-4 sm:text-3xl">💡</span>
                Get My Free Growth Audit Now
              </button>
              <div className="text-green-400 text-sm sm:text-base max-w-2xl leading-relaxed mt-2 mx-auto">
                🔍 Listings. 📊 Ads. 📦 Products. 🎯 Strategy.<br/>
                <span className="font-bold text-green-500">Delivered in 48 hours. No pushy sales. Just value.</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage; 