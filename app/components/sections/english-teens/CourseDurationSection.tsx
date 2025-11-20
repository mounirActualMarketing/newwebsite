'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = ['Week 1', 'Week 2', 'Repeat'];

const weeklyActivities = {
  'Week 1': [
    {
      title: 'Watch TV Series',
      description: 'Watch an episode of our English TV series and role play parts',
    },
    {
      title: 'Interactive Exercises',
      description: 'Complete interactive activities to learn and review words and grammar',
    },
    {
      title: 'Social Activities',
      description: 'Join social activities to practice',
    },
  ],
};

export default function CourseDurationSection() {
  const [activeTab, setActiveTab] = useState('Week 1');

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 px-4 md:px-24 py-16 md:py-28 flex flex-col justify-center gap-14">
          {/* Header */}
          <div className="flex flex-col gap-2 max-w-[351px]">
            <p className="text-primary-blue text-lg md:text-xl font-heading font-bold">
              A Study Plan for Teens
            </p>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
              How Long is the course?
            </h2>
            <p className="text-text-sub text-base leading-relaxed mt-2">
              Having taught English since 1972, we have developed a study cycle that is quick, fun and 100% effective
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col gap-6 max-w-[528px]">
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-base font-heading font-bold whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-primary-red border-b-2 border-primary-red'
                      : 'text-text-strong'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Activities List */}
            <div className="flex flex-col">
              {weeklyActivities[activeTab as keyof typeof weeklyActivities]?.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 pb-6"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 shrink-0 bg-bg-soft rounded-md flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#C9EEF7] rounded-full" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-0.5 pt-2">
                    <h4 className="text-text-strong text-sm font-heading font-bold">
                      {activity.title}
                    </h4>
                    <p className="text-text-strong opacity-70 text-sm leading-relaxed max-w-[263px]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[724px] h-[400px] md:h-auto bg-bg-soft overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/905x805"
              alt="Study Schedule"
              fill
              className="object-cover -ml-24"
            />
          </div>
        </div>
      </div>

      {/* Decorative Accent - Bottom Right */}
      <div 
        className="absolute bottom-0 right-0 w-[466px] h-[34px] bg-[#FF8E7E] rounded-tl-2xl"
        style={{ transform: 'rotate(180deg)', transformOrigin: 'top left' }}
      />
    </section>
  );
}

