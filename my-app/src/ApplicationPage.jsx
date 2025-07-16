import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Check, X } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function handleZohoFormMessage(event) {
      // Only handle messages from Zoho forms
      if (typeof event.data === "string" && event.data.indexOf("zf_submit_success") !== -1) {
        setTimeout(() => {
          navigate("/thankyou");
        }, 4000);
      }
    }
    window.addEventListener("message", handleZohoFormMessage);
    return () => window.removeEventListener("message", handleZohoFormMessage);
  }, [navigate]);

  return (
    <div className="bg-white min-h-[2000px] flex flex-col text-[#222]">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-12 py-12 md:py-20 sm:mt-4">
        <section className="">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-700 mb-6 text-center">
            The Monk Grant <span className="text-blue-600 text-4xl">(Pro-Bono)</span>
          </h1>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-[#222] text-center">
              Every quarter, we choose <span className="font-bold text-green-700">1 early-stage brand</span> to work with — <span className="font-bold text-green-700">100% free of base Fees</span>.<br/>
              We only charge a <span className="font-bold text-green-700">% of actual sales</span>.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm md:text-base text-yellow-700">
                But… we don't make this easy. This is not for everyone.
              </p>
              <p className="text-sm md:text-base text-yellow-700 mt-2">
                You need to prove you're obsessed with your product — and ready to scale.
              </p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-green-700 mb-2">Want to Apply?</h2>
              <p className="text-base md:text-lg text-[#222] mb-2">
                Email us directly at 👉 <a href="mailto:hello@theecommonks.com" className="text-green-600 hover:text-green-700 font-semibold underline">hello@theecommonks.com</a> with the subject: <span className="font-mono bg-green-100 px-1 rounded">"Monk Grant Application – [Your Brand Name]"</span>
              </p>
              <p className="text-sm md:text-base text-[#222] mb-4">
                Send us the proposal deck explaining why we should select you for The Ecom Monk Grant. Also ensure to fill the application form (coming below) in detail or send your answers for these questions over email!
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-base md:text-lg font-bold text-red-700 mb-2">⚠️ Monk Grant Application Window:</h3>
              <ul className="list-disc pl-5 text-sm md:text-base text-red-600 space-y-1">
                <li>1st to 15th of the 2nd Month in Every Quarter</li>
                <li>🗓️ For example: To apply for the Apr–May–Jun grant cycle, you must submit your application between Feb 1st and Feb 15th.</li>
                <li>⏳ We evaluate all submissions over the next 15 days and shortlist the Top 5 brands.</li>
                <li>🏆 The final brand selected for the Ecom Monk Grant will be announced one month before the new quarter begins.</li>
                <li className="font-semibold">🚫 No late entries. No exceptions.</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm md:text-base text-blue-700 mb-2">
                This window exists to ensure our focus, fairness, and full commitment to the selected brand each quarter.
              </p>
              <p className="text-sm md:text-base text-blue-700 font-semibold">
                ⚠️ Disclaimer: Selecting Brands for the grant is at our own discretion. We will not disclose our selection methodology to anyone else.
              </p>
              <p className="text-sm md:text-base text-blue-700 mt-2">
                This is a pro-bono service from our end—so please bear with us!
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <iframe
                title="The Monk Grant Application"
                src="https://forms.zohopublic.in/theecommonks/form/TheMonkGrantApplication/formperma/opP1fL-QafP7dRJwBWL04hk0r6KyjrJD-Ja3-_Op2Gg?zf_rszfm=1"
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
        {/* The application form will be added here later */}
        <section className="py-16  bg-green-50 border-t-2 border-green-400  ">
            <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
              
              <div className="text-2xl md:text-2xl text-green-600 mb-8 font-semibold">
                We're not a growth agency.<p className="text-2xl md:text-2xl text-[#222] mb-12 font-bold">
                We're your unfair advantage.
              </p>
              </div>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ml-0 sm:ml-[303px] sm:w-[1100px]">
              
                <button
                  className="bg-gradient-to-r  from-blue-500 to-blue-600 text-white font-bold px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 text-lg"
                  onClick={() => navigate('/contactus#contact-form')}
                >
                  📞 Schedule Your Call
                </button>
           
              </div>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationPage; 