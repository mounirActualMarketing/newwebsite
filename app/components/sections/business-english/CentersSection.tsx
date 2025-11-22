'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../ui/Button';
import { MapPin, Phone } from 'lucide-react';

export default function CentersSection() {
  const centers = [
    {
      name: 'Abha - Men',
      image: '/centers/center1.png',
      address: 'Abha – Ring Road, In front of Civil Affairs Office\nAbha, 62524',
      phone: '0172280003',
      city: 'abha',
    },
    {
      name: 'Riyadh - Main',
      image: '/centers/center2.png',
      address: 'Riyadh – King Fahd Road, Business District\nRiyadh, 11564',
      phone: '0112345678',
      city: 'riyadh',
    },
    {
      name: 'Jeddah - Center',
      image: '/centers/center3.png',
      address: 'Jeddah – Prince Mohammed Bin Abdulaziz Street\nJeddah, 23433',
      phone: '0122345678',
      city: 'jeddah',
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-16 lg:py-28 flex flex-col items-center gap-8">
        <div className="max-w-2xl flex flex-col items-center gap-4 text-center">
          <span className="text-primary-blue text-xl font-heading font-bold">
            Our Centres
          </span>
          <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Study whenever and wherever you want
          </h2>
          <p className="text-text-sub text-lg leading-relaxed max-w-xl">
            Our courses can be tailored around your working schedule. Our content can be delivered online, in your offices, or in our schools.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="relative w-full h-[880px] bg-bg-soft">
        <Image
          src="/centers/map.png"
          alt="Saudi Arabia Map"
          fill
          className="object-cover"
        />
        {/* Location Pins */}
        {[
          { top: '458px', left: '465px' },
          { top: '478px', left: '372px' },
          { top: '348px', left: '270px' },
          { top: '167px', left: '485px' },
          { top: '348px', left: '945px' },
          { top: '421px', left: '905px' },
          { top: '506px', left: '842px' },
          { top: '49px', left: '1010px' },
          { top: '295px', left: '1109px' },
        ].map((pin, index) => (
          <div
            key={index}
            className="absolute hidden lg:block"
            style={{ top: pin.top, left: pin.left }}
          >
            <MapPin className="w-10 h-10 text-primary-red fill-primary-red" />
          </div>
        ))}

        {/* Center Cards */}
        <div className="absolute bottom-32 left-4 md:left-8 lg:left-24 right-4 md:right-8 flex flex-col lg:flex-row gap-6 overflow-x-auto scrollbar-hide lg:overflow-visible">
          {centers.map((center, index) => (
            <div
              key={index}
              className="shrink-0 w-full lg:w-[561px] bg-white border border-stroke-soft p-2 flex flex-col md:flex-row gap-4"
            >
              <div className="w-full md:w-48 h-48 md:h-auto relative bg-bg-soft shrink-0">
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4 gap-4">
                <h3 className="text-text-strong text-2xl font-bold">
                  {center.name}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-text-sub shrink-0 mt-0.5" />
                    <p className="text-text-sub text-sm whitespace-pre-line">
                      {center.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-text-sub" />
                    <a
                      href={`tel:${center.phone}`}
                      className="text-text-sub text-sm underline"
                    >
                      {center.phone}
                    </a>
                  </div>
                </div>
                <Link href={`/centers/${center.city}`}>
                  <Button variant="outline" size="base" className="w-full md:w-auto">
                    Book Visit
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

