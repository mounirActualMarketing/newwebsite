'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const methodologyItems = [
  {
    title: 'Blended Learning Experience',
    description: 'Learn through a mix of self-paced multimedia lessons and teacher-led sessions — designed to fit your schedule and learning style.',
  },
  {
    title: 'Native-Level Teachers',
    description: 'Our experienced instructors bring authentic language expertise and cultural insights to every lesson.',
  },
  {
    title: 'Real-World Application',
    description: 'Practice English in contexts that matter - from business meetings to everyday conversations.',
  },
  {
    title: 'Personalized Learning Paths',
    description: 'Your learning journey is tailored to your goals, pace, and proficiency level.',
  },
];

export default function MethodologySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#C9EEF7] flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Image Side */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[738px] relative bg-bg-soft overflow-hidden">
        <Image
          src="https://placehold.co/1107x738"
          alt="Our Methodology"
          fill
          className="object-cover"
        />
        {/* Play Button Overlay */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-1" />
        </button>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 py-12 md:py-16 lg:py-28 px-6 md:px-12 lg:pr-24 flex flex-col gap-12 lg:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-6 max-w-[475px]">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Our Unique Methodology
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
            How We Ensure Your Success
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col max-w-[479px]">
          {methodologyItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`py-4 border-b ${
                activeIndex === index
                  ? 'border-primary-blue'
                  : 'border-primary-blue/30'
              } flex flex-col gap-2 text-left transition-all`}
            >
              <h3 className="text-base font-bold text-text-strong font-heading">
                {item.title}
              </h3>
              {activeIndex === index && (
                <p className="text-base text-text-strong/70 leading-relaxed">
                  {item.description}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

