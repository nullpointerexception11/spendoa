import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import FeatureHighlight from './components/FeatureHighlight';
import BenefitSection from './components/BenefitSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <FeatureHighlight />
      <BenefitSection />
      <Testimonials />
    </>
  );
}

function FAQPage() {
  return <FAQ />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
