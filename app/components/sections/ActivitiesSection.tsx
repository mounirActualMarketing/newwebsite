import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function ActivitiesSection() {
  return (
    <div className="w-full relative bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 pb-12 md:pb-24 flex flex-col items-center gap-3 md:gap-4">
        <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
          Our Activities
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong text-center capitalize font-heading max-w-[500px] px-4">
          More than a course - it&apos;s a community
        </h2>
      </div>

      {/* Full Width Image/Video */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[880px]">
        <Image
          src="/home/activities/image 14.png"
          alt="Community activities"
          fill
          className="object-cover"
        />

        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
          <Play className="w-5 h-5 md:w-6 md:h-6 fill-black" />
          <span className="text-lg md:text-2xl text-black font-normal">Play Reels</span>
        </button>
      </div>
    </div>
  );
}

