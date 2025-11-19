'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tabs = ['Cultural Events', 'Students activity', 'Our Centres Ambience'];

const images = [
  'https://placehold.co/746x506',
  'https://placehold.co/746x506',
  'https://placehold.co/746x506',
  'https://placehold.co/746x506',
];

export default function CultureSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + images.length) % images.length);
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-12">
          {/* Header */}
          <div className="flex-1 flex flex-col gap-4 max-w-[590px]">
            <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
              Our Culture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
              Our Vibrant Learning Community
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-text-strong/64 max-w-[546px]">
              Concise narrative on the origins of Wall Street English (globally and in KSA), our enduring mission, and why we are passionate about English language education. Include key milestones if relevant
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1.5 rounded-full text-base whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? 'bg-primary-blue text-white'
                    : 'border border-[#D2DADC] text-text-strong hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="flex flex-col items-center gap-8">
          {/* Images */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-4 transition-transform duration-300">
              {/* Show 2 images at a time on desktop, 1 on mobile */}
              <div className="w-full md:w-[calc(50%-8px)] h-[350px] md:h-[450px] lg:h-[506px] relative rounded shrink-0">
                <Image
                  src={images[currentSlide]}
                  alt={`Culture ${currentSlide + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="hidden md:block w-[calc(50%-8px)] h-[450px] lg:h-[506px] relative rounded shrink-0">
                <Image
                  src={images[(currentSlide + 1) % images.length]}
                  alt={`Culture ${currentSlide + 2}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-1.5 bg-bg-soft rounded-full hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1.5 bg-bg-soft rounded-full hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

