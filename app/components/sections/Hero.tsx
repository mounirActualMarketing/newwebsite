import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const features = [
    '12 Weeks Learning',
    'Proven Methodology',
    'Native-speaking teachers',
    'Flexible scheduling',
  ];

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[800px] px-4 md:px-12 lg:px-24 py-12 md:py-24 pb-20 md:pb-[120px] flex flex-col justify-center items-start gap-12 md:gap-20 overflow-hidden bg-[url('https://placehold.co/1440x800')] bg-cover bg-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[721px] flex flex-col gap-6 md:gap-8">
        {/* Reviews Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/30 w-fit">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
            <Star className="w-3 h-3 fill-transparent text-primary" strokeWidth={2} />
          </div>
          <div className="text-white text-sm leading-tight">
            <span className="font-normal">4.7 ★ on Reviews.io </span>
            <span className="text-white/60">968 Reviews</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] text-white font-heading">
            Learn English.<br />
            Dream of more<br />
            Go further with English
          </h1>

          {/* Features List */}
          <div className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="flex items-center justify-center w-6 h-6">
                  <Check className="w-5 h-5 text-[#8BDBEF]" strokeWidth={3} />
                </div>
                <span className="text-base md:text-xl text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
          <Button variant="primary" size="large" className="w-full sm:w-auto">
            Start Learning
          </Button>
          <Button variant="outline" size="large" className="w-full sm:w-auto">
            Our Programs
          </Button>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="absolute bottom-8 md:bottom-16 left-4 md:left-12 lg:left-24 right-4 md:right-auto flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 opacity-70">
        <p className="text-white text-xs md:text-sm max-w-[200px] md:max-w-[247px]">
          Our students now work at top companies across Saudi Arabia
        </p>
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-20 md:w-[114px] h-10 md:h-[52px] bg-white/20 rounded flex items-center justify-center flex-shrink-0"
            >
              <div className="w-16 md:w-24 h-4 md:h-6 bg-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


