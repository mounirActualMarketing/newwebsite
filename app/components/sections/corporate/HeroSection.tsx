'use client';

import Image from 'next/image';
import Button from '../../ui/Button';
import { Check } from 'lucide-react';

export default function HeroSection() {
  const features = [
    'Flexible online learning for busy professionals',
    'Business-focused English for real workplace scenarios',
    'Native-level teachers with corporate experience',
    'Progress tracking and certification for your team',
  ];

  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/online-corporate/hero.png"
          alt="Corporate English Training"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-24 h-full flex flex-col justify-center gap-12 md:gap-20 pt-6 pb-24 md:pb-30">
        <div className="w-full max-w-[714px] flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm self-start">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" fill="white" />
              </svg>
            </div>
            <span className="text-white text-sm md:text-base font-medium">Business English</span>
          </div>

          {/* Main Heading */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-white text-3xl md:text-5xl lg:text-[64px] font-heading font-bold leading-tight md:leading-[70.4px]">
              Transform Your Team&apos;s English Skills Online
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-[592px]">
              Wall Street English Online for Corporates delivers flexible, effective business English training that fits your team&apos;s schedule and drives real results.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-3 mt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 shrink-0">
                    <Check className="w-5 h-5 text-[#8BDBEF]" strokeWidth={3} />
                  </div>
                  <span className="text-base md:text-lg text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="large" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="secondary" size="large" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="absolute bottom-8 md:bottom-20 left-4 md:left-24 right-4 md:right-auto opacity-70">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-white text-sm font-medium max-w-[247px]">
              Trusted by leading companies across Saudi Arabia
            </p>
            
            {/* Horizontal scroll for mobile */}
            <div className="flex items-center gap-6 md:gap-8 overflow-x-auto scrollbar-hide w-full md:w-auto">
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded backdrop-blur-sm" />
              <div className="w-24 h-13 shrink-0 bg-gradient-to-r from-transparent via-white/20 to-white/20" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded backdrop-blur-sm" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded backdrop-blur-sm" />
              <div className="w-28 h-13 shrink-0 bg-white/10 rounded backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


