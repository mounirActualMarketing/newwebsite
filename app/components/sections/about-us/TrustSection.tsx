'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const awards = [
  {
    title: 'Wall Street English wins Education Provider of the year 2024',
    image: 'https://placehold.co/450x482',
  },
  {
    title: 'Excellence in Language Education Award 2023',
    image: 'https://placehold.co/450x482',
  },
  {
    title: 'Best Learning Innovation Award 2022',
    image: 'https://placehold.co/450x482',
  },
];

export default function TrustSection() {
  const [currentAward, setCurrentAward] = useState(0);

  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 bg-bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Trust & Credibility
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize max-w-[512px]">
            Trusted by Thousands, Recognized by Leaders
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Awards Carousel */}
          <div className="w-full lg:w-[446px] h-[500px] md:h-[600px] lg:h-[636px] relative bg-primary rounded-lg overflow-hidden shrink-0">
            <Image
              src={awards[currentAward].image}
              alt="Award"
              fill
              className="object-cover rounded-lg"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/0" />

            {/* Award Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <p className="text-base md:text-lg font-bold text-white/70 font-heading">
                Awards
              </p>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-heading max-w-[355px]">
                  {awards[currentAward].title}
                </h3>

                <button className="px-4 py-2 bg-white rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors self-start">
                  <span className="text-sm font-bold text-black font-heading">
                    Read News
                  </span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5">
                  {awards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAward(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentAward === index ? 'bg-bg-soft' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Accreditations Card */}
            <div className="h-[300px] md:h-[369px] relative bg-white rounded-lg p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-4 max-w-[278px]">
                <p className="text-base md:text-lg font-bold text-primary/70 font-heading">
                  Accreditations
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-text-strong leading-tight font-heading">
                  Backed by Global Standards in Education
                </h3>
                <p className="text-base text-text-sub leading-relaxed max-w-[337px]">
                  Wall Street English International&apos;s method is ISO 9001: 2015 certified by Det Norske Veritas (DNV), the independent certification body.
                </p>
              </div>

              {/* ISO Logo */}
              <div className="absolute right-3 top-3 w-[280px] md:w-[348px] h-[280px] md:h-[348px]">
                <Image
                  src="https://placehold.co/348x348"
                  alt="ISO Certification"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white rounded-lg p-6 flex flex-col justify-between gap-4">
                <p className="text-base md:text-lg font-bold text-primary/70 font-heading">
                  Year of Operations
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-primary">
                    50+
                  </p>
                  <p className="text-base text-black">
                    Years of Excellence in KSA
                  </p>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 flex flex-col justify-between gap-4">
                <p className="text-base md:text-lg font-bold text-primary/70 font-heading">
                  Number of Students
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-primary">
                    15K+
                  </p>
                  <p className="text-base text-black">
                    learners worldwide have joined our programme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="pt-10 flex flex-col gap-2">
          <p className="text-center text-base md:text-lg font-bold text-text-sub/60 font-heading">
            Trusted by Leading Employers in Saudi Arabia
          </p>
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[702px]">
            <Image
              src="https://placehold.co/1248x702"
              alt="Partner Companies"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

