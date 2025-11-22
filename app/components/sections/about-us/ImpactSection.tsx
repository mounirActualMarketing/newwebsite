'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-[108px] px-4 md:px-12 lg:px-24 bg-accent-orange-light overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Testimonial Image */}
        <div className="w-full lg:w-[600px] h-[500px] md:h-[600px] lg:h-[679px] relative rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/about/impact.png"
            alt="Student Testimonial"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Testimonial Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <p className="text-lg md:text-[22px] leading-relaxed text-white font-medium">
              The blended learning method worked perfectly with my busy schedule
            </p>
            
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <p className="text-base font-medium text-white">
                  Sarah Al Harbi
                </p>
                <p className="text-sm text-white/60">
                  HR Coordinator
                </p>
              </div>
              
              <button className="px-4 py-2 bg-white rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <span className="text-sm font-bold text-black font-heading">
                  Read Story
                </span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Impact Content */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl font-bold text-[#FF5E0A] font-heading">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-primary font-heading capitalize">
              Transforming Lives, One English Learner at a Time
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-primary max-w-[552px]">
              At Wall Street English KSA, we&apos;ve helped thousands of learners speak English with confidence — and unlock new possibilities in their careers, studies, and personal lives
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#D4AFAB]/50" />

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight lg:leading-[78px] text-primary">
                15K+
              </p>
              <p className="text-base text-primary">
                Students empowered across Saudi Arabia
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[83.2px] text-primary">
                97%
              </p>
              <p className="text-base text-primary">
                of students report improved speaking confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

