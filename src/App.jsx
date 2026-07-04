import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Philosophy from "./components/Philosophy";
import Service from "./components/Service";
import Journey from "./components/Journey";
import Process from "./components/Process.jsx";
import Growth from "./components/Growth.jsx";
import Compare from "./components/Compare";
import Testimonial from "./components/Testimonials";
import OurTeam from "./components/OurTeam.jsx";
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
      <OurTeam />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;