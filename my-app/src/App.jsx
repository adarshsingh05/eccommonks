"use client";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./LandingPage";
import ServicesPage from "./components/Services";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="services" element ={<ServicesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
