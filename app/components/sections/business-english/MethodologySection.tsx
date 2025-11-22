'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function MethodologySection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div className="flex-1 relative bg-bg-soft min-h-[400px] lg:min-h-[786px] order-2 lg:order-1">
          <Image
            src="/business-english/sec1.png"
            alt="Methodology"
            fill
            className="object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 lg:w-20 lg:h-20 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors">
              <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
            </button>
          </div>
          {/* Decorative Corner */}
          <div className="absolute bottom-0 right-0 w-64 lg:w-[421px] h-8 bg-accent-orange-dark rounded-tl-2xl" />
        </div>

        {/* Content Side */}
        <div className="flex-1 px-4 md:px-8 lg:px-24 py-16 lg:py-28 bg-white flex flex-col justify-center gap-8 order-1 lg:order-2">
          <div className="flex flex-col gap-4">
            <span className="text-primary-blue text-lg font-heading font-bold">
              Our Methodology
            </span>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              An English course that adapts to your business needs
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-text-sub text-base leading-relaxed">
            <p>
              At Wall Street English we serve multinationals and small and medium businesses across the globe through our partner network in 29 countries. These businesses choose us because our course is based on a proven method, is extremely flexible and can adapt easily to your company&apos;s needs.
            </p>
            <p>
              Our corporate educational consultants will help you building a unique programme tailored to your specific business needs and will accompany you closely in your progress throughout the course, guaranteeing you reach your objective.
            </p>
            <p>
              No matter where they have their classes, your employees will learn English in the same way with our educational TV series, interactive lessons and teacher-led classes and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

