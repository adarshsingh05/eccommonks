import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import ParallaxSection from './components/ParallaxSection';
import ScrollParallax from './components/ScrollParallax';
import ThreeDCard from './components/ThreeDCard';
import RunningText from './components/RunningText';
import { Check, X } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleZohoFormMessage(event) {
      if (typeof event.data === "string" && event.data.indexOf("zf_submit_success") !== -1) {
        navigate("/thankyou");
      }
    }
    window.addEventListener("message", handleZohoFormMessage);
    return () => window.removeEventListener("message", handleZohoFormMessage);
  }, [navigate]);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

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
      
      <div className="bg-white text-[#222] overflow-x-hidden min-h-[1800px]">
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
                <h1 className="text-3xl sm:text-5xl  font-black tracking-tight mb-3 text-[#222]">
                  Let's Build Something That Sells Together.
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-green-500 mb-4 font-semibold">
                  Let's Build Something Remarkable
                </div>
                <div className="text-base sm:text-lg text-left md:text-xl text-[#222] mb-2 max-w-4xl leading-relaxed">
                  If you're tired of the same old promises from the old agencies, you're in the right place.
                </div>
                <div className="text-base sm:text-lg text-left md:text-xl text-green-600 mb-3 max-w-4xl leading-relaxed">
                  At The Ecom Monks, we treat your brand with the same urgency, obsession, and ownership as our own. But we don't work with everyone.
                </div>
                <div className="text-base sm:text-lg md:text-xl text-[#222] mb-4 max-w-4xl leading-relaxed font-semibold">
                  We only onboard 3 new brands/month so that we can go deep, stay focused, and deliver outcomes — not excuses.
                </div>
              </div>
            </section>
          </ParallaxSection>

          {/* Sliding Banner */}
          <div className="mt-[-70px] sm:mb-0 mb-5">
            <RunningText text="Limited Onboardings • Maximum Focus • Ultra-focus = Real Results • Quarterly Lock-ins = No Competition" speed={15} />
          </div>

          {/* What Happens Next Section */}
          <section className="py-6 md:py-16 relative z-10">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400/10 to-green-500/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#222]">
                  What Happens Next?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                  {
                    title: "Apply Using the Form Below",
                    icon: <Check className="w-7 h-7 text-green-500 mr-3" />
                  },
                  {
                    title: "Team Review (Manual — Not AI)",
                    icon: <Check className="w-7 h-7 text-green-500 mr-3" />
                  },
                  {
                    title: "Discovery Call Within 48 Hrs",
                    icon: <Check className="w-7 h-7 text-green-500 mr-3" />
                  },
                  {
                    title: "Free Audit + Custom Strategy Map",
                    icon: <Check className="w-7 h-7 text-green-500 mr-3" />
                  }
                ].map((item, idx) => (
                  <ThreeDCard
                    key={idx}
                    className="bg-white border border-green-200 rounded-2xl shadow-lg p-3 md:p-8 flex flex-row items-center justify-start text-left transition-transform duration-500 hover:scale-101 hover:shadow-xl hover:border-green-300"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <h3 className="text-base md:text-xl font-bold text-green-700 mb-0 md:mb-0">{item.title}</h3>
                    </div>
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
          <section id="contact-form" className="py-16 relative z-10 bg-green-50/30">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none -z-10">
              <div className="w-full h-full bg-gradient-to-l from-green-500/10 to-green-400/10"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="w-full">
                  {/* Contact & Application Form - Full Width */}
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-center mb-6 md:mb-8 text-[#222]">
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
                      <p className="text-sm md:text-base text-yellow-700 font-semibold">
                        <Check className="w-4 h-4 text-green-500 inline mr-2" />
                        This isn't scarcity marketing. This is how we guarantee performance.
                      </p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-[#222] mb-8">
                    Please fill this short application (under 5 mins). It helps us prepare better for our first call.
                  </p>

                  <iframe
                    title="Contact Us Form"
                    src="https://forms.zohopublic.in/theecommonks/form/ContactUs1/formperma/RwwIM3mY4J-kzCt4Pg4zU8ioBlLPWH7Me_fzmocSceU?zf_rszfm=1"
                    style={{
                      border: "none",
                      width: "100%",
                      minHeight: "1800px",
                      transition: "all 0.5s ease"
                    }}
                    allowFullScreen
                  />
                
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16  bg-green-50 border-t-2 border-green-400">
            <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
              
              <div className="text-2xl md:text-2xl text-green-600 mb-8 font-semibold">
                We're not a growth agency.<p className="text-2xl md:text-2xl text-[#222] mb-12 font-bold">
                We're your unfair advantage.
              </p>
              </div>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg"
                  onClick={() => navigate('/contactus#contact-form')}
                >
                  📞 Schedule Your Call
                </button>
           
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default ContactUs; 