'use client';

import { useState } from 'react';
import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/centers/HeroSection';
import SearchFilterSection from '../components/sections/centers/SearchFilterSection';
import MapSection from '../components/sections/centers/MapSection';
import CentersGridSection from '../components/sections/centers/CentersGridSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function CentersPage() {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        
        {/* Main Content Section */}
        <section className="w-full py-12 md:py-16 lg:py-28 px-4 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
            {/* Search & Filter */}
            <SearchFilterSection
              showMap={showMap}
              onToggleMap={() => setShowMap(!showMap)}
              totalCenters={27}
              displayedCenters={10}
            />

            {/* Map */}
            <MapSection show={showMap} />

            {/* Centers Grid */}
            <CentersGridSection />
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

