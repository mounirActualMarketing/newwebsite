'use client';

import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

interface Center {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  image: string;
}

interface CityCentersListSectionProps {
  cityName: string;
  centers: Center[];
}

export default function CityCentersListSection({ cityName, centers }: CityCentersListSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[546px]">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize max-w-[382px]">
            Find Your English Center in {cityName}
          </h2>
          <p className="text-base text-text-strong leading-relaxed">
            Explore our {centers.length} trusted locations across {cityName} — designed to support your goals with flexible schedules and expert guidance.
          </p>
        </div>

        {/* Centers Grid - 2 columns */}
        <div className="w-full flex flex-col gap-6">
          {Array.from({ length: Math.ceil(centers.length / 2) }).map((_, rowIndex) => {
            const startIndex = rowIndex * 2;
            const rowCenters = centers.slice(startIndex, startIndex + 2);

            return (
              <div
                key={rowIndex}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {rowCenters.map((center) => (
                  <div
                    key={center.id}
                    className="bg-white border border-stroke-soft p-2 flex flex-col sm:flex-row gap-4 md:gap-[18px]"
                  >
                    {/* Center Image */}
                    <div className="relative w-full sm:w-[140px] md:w-[187px] h-[180px] md:h-[199px] bg-bg-soft shrink-0">
                      <Image
                        src={center.image}
                        alt={center.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Center Info */}
                    <div className="flex-1 py-2 md:py-4 flex flex-col gap-3 md:gap-4">
                      <h3 className="text-xl md:text-[26px] font-bold text-black leading-tight">
                        {center.name}
                      </h3>

                      <div className="flex flex-col gap-2">
                        {/* Address */}
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-[#5D5E74] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#5D5E74] leading-relaxed">
                            {center.address}
                            <br />
                            {center.city}
                          </p>
                        </div>

                        {/* Phone */}
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

                      {/* Book Visit Button */}
                      <button className="px-6 py-2 border border-black/50 rounded-sm text-sm font-bold text-text-strong hover:bg-black/5 transition-colors self-start">
                        Book Visit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

