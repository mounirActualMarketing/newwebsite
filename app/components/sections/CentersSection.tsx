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

      {/* Map Section */}
      <div className="relative w-full h-[500px] md:h-[700px] lg:h-[880px]">
        {/* Map Background */}
        <Image
          src="/home/centers/image.png"
          alt="Saudi Arabia Map"
          fill
          className="object-cover"
        />

        {/* Map Pins - Hidden on mobile for better UX */}
        <div className="hidden md:block">
          {centers.map((center) => (
            <button
              key={center.id}
              onClick={() => setSelectedCenter(center.id)}
              className="absolute w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform"
              style={{ left: center.position.left, top: center.position.top }}
            >
              <MapPin className="w-full h-full text-primary-red fill-primary-red" />
            </button>
          ))}
        </div>

        {/* Center Cards */}
        <div className="absolute bottom-4 md:bottom-12 lg:bottom-24 left-0 md:left-12 lg:left-24 right-0 md:right-12 lg:right-24 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 md:gap-6 px-4 md:px-0 pb-4 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {centers.map((center) => (
            <div
              key={center.id}
              className={`shrink-0 w-[280px] sm:w-[340px] md:w-auto md:flex-1 md:max-w-[561px] bg-white border border-stroke-soft p-2 flex flex-col sm:flex-row gap-3 md:gap-5 transition-all ${
                selectedCenter === center.id ? 'ring-2 ring-primary-blue' : ''
              }`}
            >
              <div className="relative w-full sm:w-[140px] md:w-[187px] h-[160px] sm:h-[180px] md:h-[199px] shrink-0">
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover bg-gray-200"
                />
              </div>
              
              <div className="flex-1 py-2 md:py-4 flex flex-col gap-3 md:gap-4">
                <h3 className="text-lg sm:text-xl md:text-[26px] font-bold text-text-strong">{center.name}</h3>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#5D5E74] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-[#5D5E74] leading-tight">
                      {center.address}<br />{center.city}
                    </div>
                  </div>
                  
                  <a
                    href={`tel:${center.phone}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#5D5E74] underline hover:text-primary-blue transition-colors"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    {center.phone}
                  </a>
                </div>

                <button className="px-4 md:px-6 py-2 border border-black/50 rounded text-xs sm:text-sm font-bold text-text-strong hover:bg-black/5 transition-colors">
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

