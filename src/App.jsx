import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Philosophy from "./components/philosophy";
import Service from "./components/Service";
import Journey from "./components/journey";
import Process from "./components/process";
import Growth from "./components/Growth.jsx";
import Compare from "./components/Compare";
import Testimonial from "./components/Testimonials";
import Cat  from "./components/Cat";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#fafdfa]">
      <HeroSection />
      <Philosophy />
      <Service /> {/* Added the Growth performance dashboard section */}
      <Journey />
      <Process />
      <Compare />
      <Growth />
      <Testimonial />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;