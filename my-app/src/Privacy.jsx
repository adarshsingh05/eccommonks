import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ParallaxSection from "./components/ParallaxSection";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

function Privacy() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/40 to-purple-50/20 min-h-screen text-slate-800 overflow-x-hidden relative">
      <Navbar />
      <ParallaxSection speed={0.12} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["Privacy Policy"]} className="inline-block" />
        </motion.h1>
        <motion.div className="mb-8 text-base sm:text-lg text-slate-700" variants={fadeInUp}>
          <div className="mb-2 font-bold">Effective Date: 8th July 2025</div>
          <div className="mb-2 font-bold">Last Updated: 8th July 2025</div>
          At The Ecom Monks (a unit of 93 Communications), your privacy is not just a policy — it's a promise. We value your trust and are committed to protecting the personal information you share with us.
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">1. Information We Collect</div>
          <div>When you interact with our website, apply for services, or contact us, we may collect:</div>
          <ul className="list-disc ml-6 text-slate-700 mb-2">
            <li>Personal Information: Name, email address, phone number, business name, etc.</li>
            <li>Business Data: Product listings, platform performance, campaign metrics (shared during audits/onboarding)</li>
            <li>Technical Data: IP address, browser type, cookies, pages visited, referral source, device data</li>
          </ul>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">2. How We Use Your Information</div>
          <div>We use your data to:</div>
          <ul className="list-disc ml-6 text-slate-700 mb-2">
            <li>Understand your business needs and tailor solutions</li>
            <li>Communicate with you regarding services or onboarding</li>
            <li>Improve our website and service offerings</li>
            <li>Send marketing emails (only if you've opted in)</li>
            <li>Analyze anonymized usage patterns for internal analytics</li>
          </ul>
          <div>We do not sell, rent, or trade your personal data to third parties. Ever.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">3. Data Sharing & Disclosure</div>
          <div>We may share your data with:</div>
          <ul className="list-disc ml-6 text-slate-700 mb-2">
            <li>Internal teams for service delivery</li>
            <li>Trusted technology and payment partners (under NDA)</li>
            <li>Legal or government entities, only when legally required</li>
          </ul>
          <div>All such disclosures are made with care and in line with applicable data protection laws.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">4. Your Rights</div>
          <div>You have full control over your data. You can:</div>
          <ul className="list-disc ml-6 text-slate-700 mb-2">
            <li>Request a copy of your stored information</li>
            <li>Ask us to correct or delete your data</li>
            <li>Unsubscribe from marketing communications at any time</li>
          </ul>
          <div>To make a request, email us at: <a href="mailto:hello@theecommonks.com" className="underline hover:text-blue-600">hello@theecommonks.com</a></div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">5. Data Storage & Security</div>
          <div>We use secure, encrypted systems to store your information.<br />Your data is stored only for as long as needed to serve you or meet legal obligations.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">6. Use of Cookies</div>
          <div>We use cookies (small data files) to:</div>
          <ul className="list-disc ml-6 text-slate-700 mb-2">
            <li>Improve your browsing experience</li>
            <li>Analyze traffic to optimize content</li>
            <li>Remember your preferences</li>
          </ul>
          <div>You can disable cookies via your browser settings if you prefer.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">7. Third-Party Links</div>
          <div>Our website may contain links to other websites or tools. We are not responsible for their content or privacy practices. We recommend reviewing their policies individually.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">8. Children's Privacy</div>
          <div>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">9. Changes to This Policy</div>
          <div>We may update this policy from time to time. All changes will be reflected on this page with a revised "Last Updated" date.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-blue-700 mb-2">10. Contact Us</div>
          <div>For any questions about this Privacy Policy or how we handle your data:<br />📧 <a href="mailto:hello@theecommonks.com" className="underline hover:text-blue-600">hello@theecommonks.com</a><br />📍 A unit of 93 Communications,, Noida, India</div>
        </motion.div>
        <motion.div className="mb-8 text-base sm:text-lg text-slate-700" variants={fadeInUp}>
          🧘 At The Ecom Monks, clarity and trust come first — in growth, and in privacy.
        </motion.div>
      </motion.main>
      <Footer />
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default Privacy; 