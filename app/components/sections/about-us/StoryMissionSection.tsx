'use client';

import Image from 'next/image';

export default function StoryMissionSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[705px]">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Our Story & Mission
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
            Our Journey to Empowering English Learners
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-strong/64 max-w-[546px]">
            Concise narrative on the origins of Wall Street English (globally and in KSA), our enduring mission, and why we are passionate about English language education. Include key milestones if relevant
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative w-full max-w-[913px] h-[400px] md:h-[524px]">
          {/* Center Large Image */}
          <div className="absolute left-1/2 top-[46px] -translate-x-1/2 w-[280px] h-[280px] md:w-[438px] md:h-[438px] rounded">
            <Image
              src="/about/1.png"
              alt="Main story"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Top Right Image */}
          <div className="hidden md:block absolute right-0 -top-3 w-[260px] h-[260px] rounded">
            <Image
              src="/about/2.png"
              alt="Story 1"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="hidden md:block absolute left-0 bottom-0 w-[260px] h-[260px] rounded">
            <Image
              src="/about/3.png"
              alt="Story 2"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Small Top Left Image */}
          <div className="hidden lg:block absolute left-[65px] top-[118px] w-[158px] h-[158px] rounded-md">
            <Image
              src="/about/4.png"
              alt="Story 3"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Small Bottom Right Image */}
          <div className="hidden lg:block absolute right-0 bottom-[124px] w-[158px] h-[158px] rounded">
            <Image
              src="/about/5.png"
              alt="Story 4"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

