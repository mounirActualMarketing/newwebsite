import React from 'react';
import { Star } from 'lucide-react';

export default function TrustSection() {
  const stats = [
    {
      number: '30K+',
      label: 'Learners joined our program',
    },
    {
      number: '97%',
      label: 'Students report increased confidence',
    },
    {
      number: '85%',
      label: 'Course completion rate across KSA',
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col items-center gap-12 md:gap-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 max-w-[615px] text-center">
        <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
          Trust & Credibility
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-text-strong capitalize font-heading">
          Trusted by Learners Across Saudi Arabia and Beyond
        </h2>
      </div>

      {/* Stats Box */}
      <div className="w-full max-w-[1152px] p-8 md:p-14 bg-bg-soft rounded-lg flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-7xl lg:text-[104px] font-extrabold text-black font-heading leading-tight">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-text-sub leading-relaxed max-w-[158px] mt-2">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-32 bg-[#D9D9D9]" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Reviews & Testimonial */}
      <div className="flex flex-col items-center gap-6">
        {/* Reviews Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stroke-soft">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Star className="w-5 h-5 fill-transparent text-primary" strokeWidth={2} />
          </div>
          <div className="text-text-strong text-base md:text-xl leading-tight">
            <span className="font-normal">4.7 ★ on Reviews.io </span>
            <span className="text-text-sub">968 Reviews</span>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col items-center gap-4 max-w-[540px] text-center px-4">
          <p className="text-sm md:text-base text-text-sub italic leading-relaxed">
            The flexibility of the program was absolutely perfect for my busy schedule. I found that I could easily study after work, allowing me to balance my professional commitments while still making significant progress in my learning journey.
          </p>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-black font-heading">
              Sara Al-Harbi
            </span>
            <span className="text-xs text-text-sub">
              HR Coordinator at Siemens
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

