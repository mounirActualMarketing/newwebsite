'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

const mapPins = [
  { id: 1, left: '379px', top: '422px', city: 'Riyadh' },
  { id: 2, left: '286px', top: '442px', city: 'Jeddah' },
  { id: 3, left: '184px', top: '312px', city: 'Mecca' },
  { id: 4, left: '399px', top: '131px', city: 'Tabuk' },
  { id: 5, left: '859px', top: '312px', city: 'Dammam' },
  { id: 6, left: '819px', top: '385px', city: 'Al Khobar' },
  { id: 7, left: '756px', top: '470px', city: 'Jubail' },
  { id: 8, left: '924px', top: '13px', city: 'Arar' },
  { id: 9, left: '1023px', top: '259px', city: 'Hafar Al-Batin' },
];

export default function CentersMapSection() {
  return (
    <section className="w-full py-16 md:py-28 px-4 md:px-24 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[800px]">
          <p className="text-primary-blue text-lg md:text-xl font-heading font-bold">
            Our Locations
          </p>
          <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center capitalize leading-tight">
            Find Wall Street English Centers Across Saudi Arabia
          </h2>
          <p className="text-text-strong text-base text-center leading-relaxed mt-4">
            With centers strategically located throughout the Kingdom, quality English education is always within reach. Visit us and experience the Wall Street English difference.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-[1200px] h-[400px] md:h-[500px] lg:h-[539px] relative overflow-hidden rounded-lg bg-bg-soft shadow-lg">
          {/* Map Background */}
          <Image
            src="https://placehold.co/1473x793"
            alt="Saudi Arabia Map with Wall Street English Centers"
            fill
            className="object-cover"
          />

          {/* Map Pins - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            {mapPins.map((pin) => (
              <button
                key={pin.id}
                className="absolute w-10 h-10 hover:scale-125 transition-all duration-200 group"
                style={{ left: pin.left, top: pin.top }}
                aria-label={`Wall Street English ${pin.city}`}
              >
                <MapPin className="w-full h-full text-primary-red fill-primary-red drop-shadow-lg" />
                {/* Tooltip on hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-text-strong text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {pin.city}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile view - List of cities */}
          <div className="lg:hidden absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              {mapPins.map((pin) => (
                <div key={pin.id} className="flex items-center gap-2 text-text-strong">
                  <MapPin className="w-5 h-5 text-primary-red" />
                  <span className="text-sm font-medium">{pin.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or CTA */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center text-center">
          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary-red">9+</p>
            <p className="text-text-sub text-sm md:text-base">Cities Across KSA</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary-red">15+</p>
            <p className="text-text-sub text-sm md:text-base">Learning Centers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-5xl font-heading font-bold text-primary-red">50+</p>
            <p className="text-text-sub text-sm md:text-base">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}














