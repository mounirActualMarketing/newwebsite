'use client';

import Image from 'next/image';
import Button from '../../ui/Button';
import { Briefcase } from 'lucide-react';

export default function HeroSection() {
  const companyLogos = [
    '/logo1.svg',
    '/logo2.svg',
    '/logo1.svg',
    '/logo2.svg',
    '/logo2.svg',
  ];

  return (
    <section className="relative w-full min-h-[800px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/business-english/hero.png"
          alt="Business English Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-24 py-16 lg:py-32">
        <div className="max-w-2xl flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-md rounded-full self-start">
            <Briefcase className="w-6 h-6 text-white" />
            <span className="text-white text-sm md:text-base font-normal">
              English for Business
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-heading font-bold leading-tight">
              Give your team the business English skills they need
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl">
              English is the language of business around the world. If you want your company to be competitive in today&apos;s global market, your team needs to be able to use English confidently in their day-to-day work.
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="large" className="self-start">
            Start Learning
          </Button>
        </div>

        {/* Company Logos */}
        <div className="absolute bottom-16 left-4 md:left-8 lg:left-24 right-4 md:right-8 flex flex-col md:flex-row items-start md:items-center gap-4 opacity-70">
          <p className="text-white text-sm font-medium w-full md:w-60">
            Our students now work at top companies across Saudi Arabia
          </p>
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            {companyLogos.map((logo, index) => (
              <div key={index} className="shrink-0 w-28 h-12 bg-white/20 rounded flex items-center justify-center">
                <div className="w-20 h-8 bg-white rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

