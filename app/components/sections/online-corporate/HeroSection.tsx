'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about/hero.png"
          alt="Corporate English"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 114.60% 262.73% at 110.76% 17.16%, rgba(0, 0, 0, 0) 41%, #013359 100%)'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-24 h-full flex flex-col justify-center gap-12 md:gap-20 pt-6 pb-24 md:pb-30">
        <div className="w-full max-w-[714px] flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full bg-white/20 backdrop-blur-sm self-start">
            <div className="w-6 h-6 relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="0.75" y="1.5" width="22.5" height="19.5" fill="white" />
              </svg>
            </div>
            <span className="text-white text-sm md:text-base">English for Corporate</span>
          </div>

          {/* Main Heading */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-white text-3xl md:text-5xl lg:text-[64px] font-heading font-bold leading-tight md:leading-[70.4px]">
              Empower Your Team with English Skills That Deliver Results
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-[628px]">
              Our Corporate English Online training course is a modern tool that allows employees to perform simple exercises and consolidate their skills under the constant guidance of our native teachers.
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="large" className="self-start">
            Start Learning
          </Button>
        </div>

        {/* Company Logos Section */}
        <div className="absolute bottom-8 md:bottom-20 left-4 md:left-24 right-4 md:right-auto opacity-70">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-white text-sm font-medium max-w-[247px]">
              Our students now work at top companies across Saudi Arabia
            </p>
            
            {/* Horizontal scroll for mobile */}
            <div className="flex items-center gap-6 md:gap-8 overflow-x-auto scrollbar-hide w-full md:w-auto">
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded" />
              <div className="w-24 h-13 shrink-0 bg-gradient-to-r from-transparent via-white/20 to-white/20" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

