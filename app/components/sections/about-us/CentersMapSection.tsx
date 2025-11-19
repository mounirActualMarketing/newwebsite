'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const centers = [
  {
    name: 'Abha - Men',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
    mapPosition: { left: '465px', top: '458px' },
  },
  {
    name: 'Abha - Women',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
    mapPosition: { left: '372px', top: '478px' },
  },
  {
    name: 'Jeddah - Main',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
    mapPosition: { left: '270px', top: '348px' },
  },
];

export default function CentersMapSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % centers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + centers.length) % centers.length);
  };

  return (
    <section className="w-full relative bg-white overflow-hidden">
      {/* Header */}
      <div className="py-12 md:py-16 lg:pt-28 lg:pb-16 px-4 md:px-12 lg:px-24 bg-white flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[630px]">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Our Centres
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
            Find a Centre Near You
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-sub max-w-[540px]">
            We have English schools all over Saudi Arabia. Visit us and find out how we can help you go further with English.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[600px] md:h-[880px] overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1440x1386"
            alt="Saudi Arabia Map"
            fill
            className="object-cover"
          />
        </div>

        {/* Map Pins (Hidden on Mobile) */}
        {centers.map((center, index) => (
          <button
            key={index}
            className="hidden md:block absolute w-10 h-10 hover:scale-110 transition-transform"
            style={{ left: center.mapPosition.left, top: center.mapPosition.top }}
            onClick={() => setCurrentIndex(index)}
          >
            <MapPin className="w-full h-full text-primary-red fill-primary-red" />
          </button>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Center Cards - Carousel */}
        <div className="absolute bottom-16 md:bottom-20 left-4 md:left-12 lg:left-24 right-4 md:right-12 lg:right-24 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {centers.map((center, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white border border-stroke-soft p-2 flex gap-4 md:gap-[18px]"
              >
                <div className="relative w-[140px] md:w-[187px] h-[160px] md:h-[199px] bg-bg-soft shrink-0">
                  <Image
                    src={center.image}
                    alt={center.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 py-3 md:py-4 flex flex-col gap-3 md:gap-4">
                  <h3 className="text-xl md:text-[26px] font-bold text-black leading-tight">
                    {center.name}
                  </h3>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#5D5E74] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#5D5E74] leading-relaxed">
                        {center.address}<br />{center.city}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#5D5E74]" />
                      <a
                        href={`tel:${center.phone}`}
                        className="text-sm text-[#5D5E74] underline hover:text-primary-blue transition-colors"
                      >
                        {center.phone}
                      </a>
                    </div>
                  </div>

                  <button className="px-6 py-2 border border-black/50 rounded-sm text-sm font-bold text-text-strong hover:bg-black/5 transition-colors self-start">
                    Book Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

