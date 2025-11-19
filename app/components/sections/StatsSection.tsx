import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      number: '3 m+',
      description: 'learners worldwide have joined our programme',
    },
    {
      number: '97%',
      description: 'of students report increased speaking confidence',
    },
    {
      number: '85%',
      description: 'course completion rate across KSA',
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
      {/* Left: Headline */}
      <div className="w-full lg:w-[389px]">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-medium leading-[1.3] text-text-strong">
          Helping ambitious professionals in Saudi Arabia speak English with confidence.
        </h2>
      </div>

      {/* Right: Stats */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 flex flex-col gap-2 py-4 md:py-0">
              <div className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] text-text-strong font-heading">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-text-strong leading-relaxed">
                {stat.description}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="w-full md:w-px h-px md:h-auto bg-[#D9D9D9]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


