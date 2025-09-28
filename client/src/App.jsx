
import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Featuresection from './components/Featuresection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import PriceSection from './components/PriceSection.jsx';
import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <>
    <div className="min-h-screen bg-[#151424] text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Header /> 
        {/* <Navbar/> */}
        <HeroSection />
        
    </div>
    </div>
        <div className="min-h-screen bg-[#232048] text-white font-sans overflow-x-hidden">
        <Featuresection/>
        </div>
      <div className="min-h-screen bg-[#190f31] text-white font-sans overflow-x-hidden">
      <AboutSection/>
      </div>
      <div className="min-h-screen bg-[#151424] text-white font-sans overflow-x-hidden">
      <ContentSection/>
      </div>
      <div className="min-h-screen bg-[#190f31] text-white font-sans overflow-x-hidden">
      <PriceSection/>
      </div>
       <div className=" bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <Footer/>
      </div>
      </>
  );
}

export default App;