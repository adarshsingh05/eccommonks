"use client";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
