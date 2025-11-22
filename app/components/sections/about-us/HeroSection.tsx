'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about/hero.png"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[714px] px-4 md:px-6 lg:px-8 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[70.4px] text-white font-heading">
            Your Journey to English Mastery Starts Here
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] text-white max-w-[592px]">
            As part of a trusted global network, we&apos;re proud to serve learners across KSA with world-class education, local expertise, and a passion for student success.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-6 py-3 bg-primary-red text-white text-base md:text-lg font-bold rounded-full hover:bg-primary-red/90 transition-colors">
            Explore Our Programs
          </button>
          <button className="px-6 py-3 border border-white/60 text-white text-base md:text-lg font-bold rounded-full hover:bg-white/10 transition-colors">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

