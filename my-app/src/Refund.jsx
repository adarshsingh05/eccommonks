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

function Refund() {
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
        <motion.h1 className="mt-6 sm:mt-1 text-xl sm:text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-green-600 via-green-400 to-green-800 bg-clip-text text-transparent leading-tight" variants={fadeInUp}>
         Refund Policy – The Ecom Monks
        </motion.h1>
        <motion.div className="mb-8 text-sm sm:text-lg text-black" variants={fadeInUp}>
          At The Ecom Monks, a unit of 93 Communications, we're committed to providing performance-driven, high-impact ecommerce services. Our processes, timelines, and pricing are transparently communicated before onboarding, and every engagement begins with mutual clarity.<br />
          That said, here's our official refund policy:
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-black mb-2">1. Refunds on Service Packages (Retainers)</div>
          <div className="mb-2 text-sm ">We follow a no-refund policy for all monthly, quarterly, or project-based retainers once work has commenced, as resources, time, and strategies are allocated immediately.</div>
          <div className="mb-2 text-sm ">If you have made a payment but:</div>
          <ul className="list-disc ml-6 text-black mb-2 text-sm ">
            <li>No onboarding call has occurred, and</li>
            <li>No work or service has been delivered,</li>
          </ul>
          <div className="mb-2 text-sm ">… You may request a full refund within the first 7 business days of payment.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-black mb-2">2. Performance-Based Agreements</div>
          <div className="text-sm ">If your engagement with us is structured on a performance-linked incentive model (revenue share), the base retainer remains non-refundable, unless otherwise agreed upon in the contract.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold  text-black mb-2">3. Custom or One-Time Projects (e.g., Listing, Design, Onboarding Support)</div>
          <div  className="text-sm ">Due to the nature of custom work, no refunds will be processed once the project has entered the execution phase. In case of delays or dissatisfaction, we offer free revisions within scope as per the project agreement.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-black mb-2">4. Cancellation & Pausing Services</div>
          <div  className="text-sm ">You may cancel any future renewal of services by notifying us 7 days before the next billing cycle. If cancelled mid-cycle, the current month's payment is non-refundable, but no further billing will be done.</div>
        </motion.div>
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="font-bold text-black mb-2">5. Our Fairness Clause</div>
          <div  className="text-sm ">Our mission is to grow with our clients. If you believe there's been a genuine miscommunication or gap in delivery, please write to <a href="mailto:hello@theecommonks.com" className="underline hover:text-green-600">hello@theecommonks.com</a> within first 7 working days of concern — and our senior team will review the case with integrity.</div>
        </motion.div>
        <motion.div className="mb-8 text-base sm:text-lg text-black" variants={fadeInUp}>
          🧘‍♂️ We work like true partners, not vendors. Refunds aren't typically needed — because we ensure value is delivered every step of the way.
        </motion.div>
      </motion.main>
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
}

export default Refund; 