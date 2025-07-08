"use client";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./LandingPage";
import ServicesPage from "./components/Services";
import FrameworkPage from "./OurFrameworks";
import ContactUs from './ContactUs';
import WhyUs from "./WhyUs";
import Results from "./Results";
import HowItWorks from "./HowItWorks";
import About from "./About";
import FAQs from "./FAQs";
import ThankYou from "./ThankYou";
import Refund from "./Refund";
import TandC from "./TandC";
import Privacy from "./Privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar setIsLoading={setIsLoading} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="services" element={<ServicesPage/>}/>
        <Route path="ourframeworks" element={<FrameworkPage/>}/>
        <Route path="contactus" element={<ContactUs />} />
        <Route path="whyus" element={<WhyUs />} />
        <Route path="results" element={<Results />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="aboutus" element={<About />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
