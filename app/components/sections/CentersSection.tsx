'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export default function CentersSection() {
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null);

  const centers = [
    {
      id: '1',
      name: 'Abha - Men',
      address: 'Abha - Ring Road, In front of Civil Affairs Office',
      city: 'Abha, 62524',
      phone: '0172280003',
      image: '/home/centers/Rectangle 7.png',
      position: { left: 465, top: 458 },
    },
    {
      id: '2',
      name: 'Jeddah - Women',
      address: 'Jeddah - King Road, Near Shopping Center',
      city: 'Jeddah, 21442',
      phone: '0122234567',
      image: '/home/centers/Rectangle 8.png',
      position: { left: 372, top: 478 },
    },
    {
      id: '3',
      name: 'Riyadh - Main',
      address: 'Riyadh - Olaya Street, Business District',
      city: 'Riyadh, 11564',
      phone: '0112345678',
      image: '/home/centers/Rectangle 9.png',
      position: { left: 270, top: 348 },
    },
  ];

  return (
    <div className="w-full relative bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 pb-8 md:pb-16 flex flex-col items-center gap-3 md:gap-4">
        <span className="text-base md:text-xl font-bold text-primary-blue font-heading">Our Centres</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong text-center capitalize font-heading">
          Find a Centre Near You
        </h2>
        <p className="text-base md:text-lg text-text-sub text-center leading-relaxed max-w-[540px] px-4">
          We have English schools all over Saudi Arabia. Visit us and find out how we can help
          you go further with English.
        </p>
      </div>

      {/* Map Section with Overlaying Cards */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Map Background */}
        <Image
          src="/home/centers/image.png"
          alt="Saudi Arabia Map"
          fill
          className="object-cover"
        />
        
        {/* Map Pins - Desktop Only */}
        <div className="hidden lg:block">
          {centers.map((center) => (
            <button
              key={center.id}
              onClick={() => setSelectedCenter(center.id)}
              className="absolute w-10 h-10 -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform z-10"
              style={{ left: center.position.left, top: center.position.top }}
            >
              <MapPin className="w-full h-full text-primary-red fill-primary-red drop-shadow-lg" />
            </button>
          ))}
        </div>

        {/* Overlay Cards - Bottom 30% on Mobile, Grid on Desktop */}
        <div className="absolute bottom-0 left-0 right-0 lg:bottom-12 lg:left-24 lg:right-24">
          {/* Mobile/Tablet: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide px-4 pb-6">
            <div className="flex gap-4 min-w-min">
              {centers.map((center) => (
                <div
                  key={center.id}
                  onClick={() => setSelectedCenter(center.id)}
                  className={`shrink-0 w-[280px] sm:w-[320px] bg-white rounded-xl shadow-xl border-2 transition-all cursor-pointer hover:shadow-2xl ${
                    selectedCenter === center.id 
                      ? 'border-primary-blue shadow-2xl' 
                      : 'border-white'
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full h-[160px]">
                    <Image
                      src={center.image}
                      alt={center.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2.5 bg-white rounded-b-xl">
                    <h3 className="text-lg font-bold text-text-strong">
                      {center.name}
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" />
                        <div className="text-xs text-text-sub leading-snug">
                          {center.address}<br />{center.city}
                        </div>
                      </div>
                      
                      <a
                        href={`tel:${center.phone}`}
                        className="flex items-center gap-2 text-xs text-primary-blue font-semibold hover:underline transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-4 h-4" />
                        {center.phone}
                      </a>
                    </div>

                    <button 
                      className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary/90 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Book visit for:', center.name);
                      }}
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {centers.map((center) => (
              <div
                key={center.id}
                onClick={() => setSelectedCenter(center.id)}
                className={`bg-white rounded-xl shadow-xl border-2 transition-all cursor-pointer hover:shadow-2xl ${
                  selectedCenter === center.id 
                    ? 'border-primary-blue shadow-2xl' 
                    : 'border-white'
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-[200px]">
                  <Image
                    src={center.image}
                    alt={center.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5 flex flex-col gap-3 bg-white rounded-b-xl">
                  <h3 className="text-2xl font-bold text-text-strong">
                    {center.name}
                  </h3>
                  
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                      <div className="text-sm text-text-sub leading-snug">
                        {center.address}<br />{center.city}
                      </div>
                    </div>
                    
                    <a
                      href={`tel:${center.phone}`}
                      className="flex items-center gap-2 text-sm text-primary-blue font-semibold hover:underline transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-5 h-5" />
                      {center.phone}
                    </a>
                  </div>

                  <button 
                    className="w-full mt-2 px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Book visit for:', center.name);
                    }}
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

