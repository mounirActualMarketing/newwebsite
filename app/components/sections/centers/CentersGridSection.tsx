'use client';

import { useState } from 'react';
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

const centersData: Center[] = [
  {
    id: 1,
    name: 'Abha - Men',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 2,
    name: 'Abha - Women',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 3,
    name: 'Jeddah - Main',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 4,
    name: 'Riyadh - Central',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 5,
    name: 'Dammam - East',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 6,
    name: 'Mecca - North',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 7,
    name: 'Medina - South',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 8,
    name: 'Taif - West',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 9,
    name: 'Khobar - Mall',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
  {
    id: 10,
    name: 'Jubail - Industrial',
    address: 'Abha – Ring Road, In front of Civil Affairs Office',
    city: 'Abha, 62524',
    phone: '0172280003',
    image: 'https://placehold.co/187x199',
  },
];

export default function CentersGridSection() {
  const [displayCount, setDisplayCount] = useState(10);
  const displayedCenters = centersData.slice(0, displayCount);
  const hasMore = displayCount < centersData.length;

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, centersData.length));
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Centers Grid */}
      <div className="w-full flex flex-col gap-6">
        {/* Create rows of 2 columns */}
        {Array.from({ length: Math.ceil(displayedCenters.length / 2) }).map((_, rowIndex) => {
          const startIndex = rowIndex * 2;
          const rowCenters = displayedCenters.slice(startIndex, startIndex + 2);

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

      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={loadMore}
          className="px-6 py-2.5 bg-primary-red text-white text-base font-bold rounded-full hover:bg-primary-red/90 transition-colors font-heading"
        >
          Load More
        </button>
      )}
    </div>
  );
}

