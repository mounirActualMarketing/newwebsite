'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface CityHeroSectionProps {
  cityName: string;
  pinPositions?: Array<{ left: string; top: string }>;
}

export default function CityHeroSection({ cityName, pinPositions = [] }: CityHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* Hero Content with Background */}
      <div className="relative w-full py-16 md:py-20 lg:py-[120px] px-4 md:px-12 lg:px-24 flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://placehold.co/1552x1034"
            alt={`${cityName} Background`}
            fill
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div className="relative z-10 w-full max-w-[714px] flex flex-col items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[70.4px] text-white font-heading">
              Start Learning English in {cityName}
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] text-white max-w-[592px]">
              Our English course centers are closer than you think — explore locations and join a supportive community of learners.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative z-10 w-full max-w-7xl h-[400px] md:h-[500px] lg:h-[539px] bg-white rounded-lg overflow-hidden">
          <Image
            src="https://placehold.co/1679x1386"
            alt={`${cityName} Map`}
            fill
            className="object-cover"
          />

          {/* Map Pins */}
          {pinPositions.map((pin, index) => (
            <div
              key={index}
              className="hidden md:block absolute w-10 h-10"
              style={{ left: pin.left, top: pin.top }}
            >
              <MapPin className="w-full h-full text-primary-red fill-primary-red" />
            </div>
          ))}
        </div>
      </div>

      {/* White background extension for spacing */}
      <div className="w-full h-24 md:h-32 lg:h-[335px] bg-white" />
    </section>
  );
}

