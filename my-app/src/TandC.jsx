import React from "react";
import Navbar from "./components/Navbar";
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

function TandC() {
  return (
    <div className="bg-gradient-to-br from-white via-green-50/40 to-green-200/20 min-h-screen text-green-900 overflow-x-hidden relative">
      <Navbar />
      <ParallaxSection speed={0.12} direction="up" className="relative z-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-400/10 rounded-full blur-2xl z-0" />
      </ParallaxSection>
      <motion.main
        className="max-w-2xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16 md:py-24 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-green-400 to-green-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
          <AnimatedText texts={["📜 Terms & Conditions"]} className="inline-block" />
        </motion.h1>
        <motion.div className="mb-8 text-base sm:text-lg text-green-700" variants={fadeInUp}>
          <div className="mb-2 font-bold">Effective Date: 8th July 2025</div>
          Welcome to The Ecom Monks — a unit of 93 Communications.<br />
          By accessing or using our website, services, consultations, or tools, you agree to the following terms and conditions (“Terms”). If you do not agree to these Terms, please refrain from using our services.
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">1. Company Identity & Structure</div>
          <div>"The Ecom Monks" operates as a business unit under:<br />93 Communications<br />All payments, service agreements, and engagements will be billed via 93 Communications</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">2. Services Offered</div>
          <div>We provide strategic, creative, and execution support for:</div>
          <ul className="list-disc ml-6 text-green-700 mb-2">
            <li>E-commerce (Amazon, Flipkart, Shopify Meesho, etc.)</li>
            <li>Quick commerce (Blinkit, Zepto, Instamart)</li>
            <li>Performance Marketing</li>
            <li>Listing Optimization</li>
            <li>Design & Content</li>
            <li>Brand Store & A+ Setup</li>
            <li>Growth Consulting</li>
          </ul>
          <div>We reserve the right to accept or reject service engagements at our discretion.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">3. Client Responsibility</div>
          <div>By signing up for our services, you agree to:</div>
          <ul className="list-disc ml-6 text-green-700 mb-2">
            <li>Provide accurate brand information and documentation</li>
            <li>Cooperate in onboarding, approvals, and content workflows</li>
            <li>Not misuse, reverse engineer, or resell our strategies without permission</li>
          </ul>
          <div>We expect ethical use of all platforms and transparency from all stakeholders.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">4. Payments & Refunds</div>
          <div>All payments must be made in advance unless otherwise agreed in writing.<br />Our refund policy is listed here: <a href="/refund" className="underline hover:text-green-600">Refund Policy</a><br />Late payments may result in paused services or penalties.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">5. Intellectual Property</div>
          <div>All designs, copy, campaigns, and strategic documents created by The Ecom Monks remain our intellectual property unless explicitly transferred in writing.<br />Clients receive usage rights for assets within the agreed platforms and scope only.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">6. Confidentiality</div>
          <div>We respect your confidentiality and expect the same in return.<br />Mutual NDA clauses are applicable as default, even if not signed, for all sensitive data shared.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">7. Use of Website & Content</div>
          <div>Our website, logos, frameworks, and proprietary concepts may not be copied or republished without prior consent.<br />We reserve the right to update or modify content on the site at any time without notice.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">8. Testimonials, Case Studies, and Performance Data</div>
          <div>By working with us, you allow The Ecom Monks to reference anonymized case studies and performance outcomes for educational and promotional purposes, unless you opt-out via email.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">9. Governing Law & Jurisdiction</div>
          <div>These Terms are governed by the laws of India.<br />Any disputes will be resolved under the jurisdiction of the courts in Noida, Uttar Pradesh.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">10. Updates to Terms</div>
          <div>We may update these Terms occasionally. Continued usage of our services after updates constitutes acceptance.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-green-700 mb-2">Contact</div>
          <div>For queries or concerns, please write to:<br />📩 <a href="mailto:hello@theecommonks.com" className="underline hover:text-green-600">hello@theecommonks.com</a><br />📍 A unit of 93 Communications, Noida, India</div>
        </motion.div>
        <motion.div className="mb-8 text-base sm:text-lg text-green-700" variants={fadeInUp}>
          🧘 The Ecom Monks are built on ethics, energy, and growth. These Terms exist to protect that harmony, for both you and us.
        </motion.div>
      </motion.main>
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default TandC; 