'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[564px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://placehold.co/1486x981"
          alt="Learning Centers"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[714px] px-4 md:px-6 lg:px-8 flex flex-col items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[70.4px] text-white font-heading">
            Our Learning Centers Around You
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] text-white max-w-[592px]">
            Our English course centers are closer than you think — explore locations and join a supportive community of learners.
          </p>
        </div>
      </div>
    </section>
  );
}

