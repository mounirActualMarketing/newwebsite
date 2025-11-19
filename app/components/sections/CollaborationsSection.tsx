import React from 'react';
import Image from 'next/image';

export default function CollaborationsSection() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-bg-soft flex flex-col items-center gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 md:gap-4 max-w-[630px] px-4">
        <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
          Our Collaborations
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong text-center capitalize font-heading">
          Trusted by Leading Employers in Saudi Arabia
        </h2>
        <p className="text-base md:text-lg text-text-strong/60 text-center leading-relaxed max-w-[540px]">
          Companies across Saudi Arabia choose Wall Street English to elevate communication,
          improve employee performance, and invest in long-term success.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="w-full relative h-[400px] md:h-[550px] lg:h-[702px]">
        <Image
          src="/home/collaboration/colab.png"
          alt="Partner companies"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}


