import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import FeatureHighlight from './components/FeatureHighlight';
import BenefitSection from './components/BenefitSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Hero />
          <FeaturesGrid />
          <FeatureHighlight />
          <BenefitSection />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
