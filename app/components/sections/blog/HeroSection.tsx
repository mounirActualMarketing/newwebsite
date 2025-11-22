'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[407px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/blog/hero.png"
          alt="Blog Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-24 py-16">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-heading font-bold leading-tight">
            Blog
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            We share insights, practical tips, case studies, and inspiration — drawn from our experience designing and building digital products across industries.
          </p>
        </div>
      </div>
    </section>
  );
}

