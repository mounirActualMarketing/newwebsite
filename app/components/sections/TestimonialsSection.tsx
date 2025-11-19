'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col lg:flex-row items-center gap-8 md:gap-12">
      {/* Left Side - Text Content */}
      <div className="flex-1 w-full flex flex-col justify-between gap-8 min-h-0 lg:min-h-[472px]">
        <div className="flex flex-col gap-3 md:gap-4 max-w-[630px]">
          <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong capitalize font-heading max-w-[569px]">
            What Our Students Say About Learning With Us
          </h2>
          <p className="text-base md:text-lg text-text-strong/70 leading-relaxed max-w-[480px]">
            At Wall Street English, thousands of students across Saudi Arabia have improved
            their English - and their lives.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-bg-soft rounded-full hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2.5 bg-bg-soft rounded-full hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Right Side - Video/Image */}
      <div className="w-full lg:w-[600px] h-[300px] md:h-[400px] lg:h-[472px] relative rounded-lg overflow-hidden">
        <Image
          src="/home/testimonials/image 60.png"
          alt="Student testimonial"
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


