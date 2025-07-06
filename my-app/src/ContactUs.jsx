import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxSection from './components/ParallaxSection';
import ScrollParallax from './components/ScrollParallax';
import ThreeDCard from './components/ThreeDCard';
import RunningText from './components/RunningText';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brandName: '',
    platform: '',
    monthlyRevenue: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Let's Grow Your E-Commerce Brand | Contact The Ecom Monks</title>
        <meta name="description" content="Have questions or want to grow your sales on Amazon, Flipkart, or Zepto? Connect with The Ecom Monks — India's trusted ecom growth partner." />
        <link rel="canonical" href="/contactus" />
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
          {/* Hero Section */}
          <ParallaxSection speed={0.3} direction="up" className="w-full">
            <section className="py-16 md:py-32 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-green-50/60 to-white">
              <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 md:mb-8 text-[#222]">
                  Let's Build Something That Sells. Together.
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-green-500 mb-6 font-semibold">
                  Let's Build Something Remarkable
                </div>
                <div className="text-base sm:text-lg md:text-xl text-[#222] mb-8 max-w-4xl leading-relaxed">
                  If you're tired of the same old promises from the same old agencies, you're in the right place.
                </div>
                <div className="text-base sm:text-lg md:text-xl text-green-600 mb-8 max-w-4xl leading-relaxed">
                  At The Ecom Monks, we treat your brand with the same urgency, obsession, and ownership as our own. But we don't work with everyone.
                </div>
                <div className="text-base sm:text-lg md:text-xl text-[#222] mb-8 max-w-4xl leading-relaxed font-semibold">
                  We only onboard 3 new brands/month so that we can go deep, stay focused, and deliver outcomes — not excuses.
                </div>
              </div>
            </section>
          </ParallaxSection>

          {/* Sliding Banner */}
          <div className="mt-8 sm:mt-[-60px]">
            <RunningText text="Limited Onboardings • Maximum Focus • Ultra-focus = Real Results • Quarterly Lock-ins = No Competition" speed={15} />
          </div>

          {/* What Happens Next Section */}
          <section className="py-16 md:py-32 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">
                  What Happens Next?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  {
                    step: "1",
                    title: "Apply Using the Form Below",
                    icon: "📝"
                  },
                  {
                    step: "2",
                    title: "Team Review (Manual — Not AI)",
                    icon: "👥"
                  },
                  {
                    step: "3",
                    title: "Discovery Call Within 48 Hrs",
                    icon: "📞"
                  },
                  {
                    step: "4",
                    title: "Free Audit + Custom Strategy Map",
                    icon: "🎯"
                  }
                ].map((item, idx) => (
                  <ThreeDCard
                    key={idx}
                    className="bg-white border border-green-200 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 hover:scale-101 hover:shadow-xl hover:border-green-300"
                  >
                    <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2">{item.title}</h3>
                  </ThreeDCard>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">If We Align → We Start</h3>
                  <p className="text-base md:text-lg text-green-600">
                    🤝 We believe in relationships, not retainers. If we're not the right fit, we'll tell you honestly — and often point you to someone who is.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 md:py-32 relative z-10 bg-green-50/30">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                
                {/* Left Column - Form */}
                <div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">
                    Contact & Application Form
                  </h2>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-8">
                    <p className="text-base md:text-lg text-red-700 font-semibold">
                      ⚠️ Limited Onboardings. Maximum Focus.
                    </p>
                    <p className="text-sm md:text-base text-red-600 mt-2">
                      Only 6 Brands per Category. Per Platform. Per Quarter.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
                    <p className="text-sm md:text-base text-yellow-700 mb-4">
                      Once a slot is taken, that's it — we do not onboard anyone else in the same category & platform till the next quarter. No exceptions. No overlap. If you're even thinking about working with us, apply early.
                    </p>
                    <p className="text-sm md:text-base text-yellow-700 mb-4">
                      We do this so that every brand we onboard gets our undivided attention, razor-sharp focus, and strategic firepower to win — fast, efficiently, and profitably.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm md:text-base text-yellow-700">🎯 Ultra-focus = Real Results.</p>
                      <p className="text-sm md:text-base text-yellow-700">📅 Quarterly Lock-ins = No Competition Within Our Roster.</p>
                      <p className="text-sm md:text-base text-yellow-700 font-semibold">✅ This isn't scarcity marketing. This is how we guarantee performance.</p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-[#222] mb-8">
                    Please fill this short application (under 5 mins). It helps us prepare better for our first call.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Name *</label>
                        <input
                          type="text"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Platform *</label>
                        <select
                          name="platform"
                          value={formData.platform}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Platform</option>
                          <option value="amazon">Amazon</option>
                          <option value="flipkart">Flipkart</option>
                          <option value="myntra">Myntra</option>
                          <option value="meesho">Meesho</option>
                          <option value="nykaa">Nykaa</option>
                          <option value="jiomart">JioMart</option>
                          <option value="shopify">Shopify</option>
                          <option value="multiple">Multiple Platforms</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Revenue *</label>
                        <select
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Range</option>
                          <option value="0-50000">₹0 - ₹50,000</option>
                          <option value="50000-200000">₹50,000 - ₹2,00,000</option>
                          <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
                          <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
                          <option value="1000000+">₹10,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your brand and goals *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Describe your brand, current challenges, and what you want to achieve..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg md:text-xl"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>

                {/* Right Column - Monk Grant */}
                <div>
                  <ThreeDCard className="bg-white border border-green-200 rounded-2xl shadow-lg p-6 md:p-8 h-fit">
                    <h3 className="text-2xl md:text-3xl font-black text-green-700 mb-6">
                      The Monk Grant (Pro-Bono)
                    </h3>
                    
                    <div className="space-y-6">
                      <p className="text-base md:text-lg text-[#222]">
                        Every quarter, we choose 1 early-stage brand to work with — 100% free of base Fees.
                      </p>
                      <p className="text-base md:text-lg text-[#222]">
                        We only charge a X % of actual sales.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 text-xl">❌</span>
                          <span className="text-base md:text-lg text-[#222]">No base fee.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500 text-xl">✅</span>
                          <span className="text-base md:text-lg text-[#222]">Real growth.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500 text-xl">🎯</span>
                          <span className="text-base md:text-lg text-[#222]">Handheld strategy from Day 0.</span>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm md:text-base text-yellow-700">
                          But… we don't make this easy. This is not for everyone.
                        </p>
                        <p className="text-sm md:text-base text-yellow-700 mt-2">
                          You need to prove you're obsessed with your product — and ready to scale.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-green-700 mb-4">Want to Apply?</h4>
                        <p className="text-base md:text-lg text-[#222] mb-4">
                          Email us directly at 👉 <a href="mailto:hello@theecommonks.com" className="text-green-600 hover:text-green-700 font-semibold">hello@theecommonks.com</a> with the subject: "Monk Grant Application – [Your Brand Name]"
                        </p>
                        <p className="text-sm md:text-base text-[#222] mb-6">
                          Send us the proposal deck explaining why we should select you for The Ecom Monk Grant. Also ensure to fill the below form in detail or sending your answers for these questions over email!
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="text-base md:text-lg font-bold text-red-700 mb-2">⚠️ Monk Grant Application Window:</h5>
                        <p className="text-sm md:text-base text-red-600 mb-2">
                          1st to 15th of the 2nd Month in Every Quarter
                        </p>
                        <p className="text-sm md:text-base text-red-600 mb-2">
                          🗓️ For example: To apply for the Apr–May–Jun grant cycle, you must submit your application between Feb 1st and Feb 15th.
                        </p>
                        <p className="text-sm md:text-base text-red-600 mb-2">
                          ⏳ We evaluate all submissions over the next 15 days and shortlist the Top 5 brands.
                        </p>
                        <p className="text-sm md:text-base text-red-600 mb-2">
                          🏆 The final brand selected for the Ecom Monk Grant will be announced one month before the new quarter begins.
                        </p>
                        <p className="text-sm md:text-base text-red-600 font-semibold">
                          🚫 No late entries. No exceptions.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm md:text-base text-blue-700 mb-2">
                          This window exists to ensure our focus, fairness, and full commitment to the selected brand each quarter.
                        </p>
                        <p className="text-sm md:text-base text-blue-700 font-semibold">
                          ⚠️ Disclaimer: Selecting Brands for the grant is at our own discretion. We will not disclose our selection methodology to anyone else.
                        </p>
                        <p className="text-sm md:text-base text-blue-700 mt-2">
                          This is a pro-brono service from our end- so please bear with us!
                        </p>
                      </div>

                      <a
                        href="mailto:hello@theecommonks.com?subject=Monk Grant Application"
                        className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 text-center"
                      >
                        The Ecom Monks Grant Application Link!
                      </a>
                    </div>
                  </ThreeDCard>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 md:py-32 bg-green-50 border-t-2 border-green-400">
            <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">
                🔥 Final CTA
              </h2>
              <p className="text-xl md:text-2xl text-green-600 mb-8 font-semibold">
                We're not a growth agency.
              </p>
              <p className="text-xl md:text-2xl text-[#222] mb-12 font-bold">
                We're your unfair advantage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg">
                  🎯 Apply Now
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg">
                  📞 Schedule Your Call
                </button>
                <a
                  href="mailto:hello@theecommonks.com?subject=Monk Grant Application"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg inline-block"
                >
                  📬 Apply for the Monk Grant
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactUs; 