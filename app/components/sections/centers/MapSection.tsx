'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

const mapPins = [
  { id: 1, left: '379px', top: '422px' },
  { id: 2, left: '286px', top: '442px' },
  { id: 3, left: '184px', top: '312px' },
  { id: 4, left: '399px', top: '131px' },
  { id: 5, left: '859px', top: '312px' },
  { id: 6, left: '819px', top: '385px' },
  { id: 7, left: '756px', top: '470px' },
  { id: 8, left: '924px', top: '13px' },
  { id: 9, left: '1023px', top: '259px' },
];

interface MapSectionProps {
  show: boolean;
}

export default function MapSection({ show }: MapSectionProps) {
  if (!show) return null;

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[539px] relative overflow-hidden rounded-lg bg-white">
      {/* Map Background */}
      <Image
        src="https://placehold.co/1473x793"
        alt="Saudi Arabia Map"
        fill
        className="object-cover"
      />

      {/* Map Pins - Hidden on mobile, visible on desktop */}
      {mapPins.map((pin) => (
        <button
          key={pin.id}
          className="hidden lg:block absolute w-10 h-10 hover:scale-110 transition-transform"
          style={{ left: pin.left, top: pin.top }}
        >
          <MapPin className="w-full h-full text-primary-red fill-primary-red" />
        </button>
      ))}
    </div>
  );
}

