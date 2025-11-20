'use client';

import { useState } from 'react';

const levels = [
  { id: 'A1', label: 'A1', active: false },
  { id: 'A2', label: 'A2', active: true },
  { id: 'B1', label: 'B1', active: false },
  { id: 'B2', label: 'B2', active: false },
  { id: 'C1', label: 'C1', active: false },
];

const levelData: Record<string, any> = {
  A2: {
    wseLevel: '6-9',
    scores: [
      { name: 'TOEIC (Listening)', value: '110' },
      { name: 'TOEIC (Reading)', value: '115' },
      { name: 'TOEIC (Speaking)', value: '90' },
      { name: 'TOEIC (Writing)', value: '70' },
    ],
    description: 'At this level you can socialize with other English speakers. You can use English in some situations as long as you are very familiar with what others are talking about, and you&apos;ll be able to use your English to network with other students. You can&apos;t study fully in English, but you will be able to understand some messages and social media posts if you are familiar with the topic.',
  },
};

export default function WhatYouLearnSection() {
  const [activeLevel, setActiveLevel] = useState('A2');
  const currentData = levelData[activeLevel];

  return (
    <section className="w-full bg-bg-soft">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 px-4 md:px-24 py-16 md:py-28 flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-[471px]">
            <p className="text-primary-blue text-lg font-heading font-bold">
              What Will I Learn
            </p>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
              Study the English You Need
            </h2>
            <p className="text-text-strong/60 text-base md:text-lg leading-relaxed">
              All Wall Street English levels are aligned to the global standards that you need to get into college or university. We have 20 specific levels that means you&apos;ll know exactly where you are and what you need to improve and start studying in English.
            </p>
          </div>

          {/* Level Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  level.id === activeLevel
                    ? 'bg-primary-red text-bg-soft'
                    : 'bg-text-strong/10 text-text-strong'
                }`}
              >
                <span className="text-xl md:text-2xl font-bold">{level.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-full md:w-[649px] bg-bg-soft overflow-hidden">
          <div className="absolute top-0 md:top-28 right-0 md:left-0 w-full h-full md:h-[694px] p-8 md:p-12 bg-primary rounded-tl-3xl overflow-hidden flex flex-col gap-6">
            {/* Large Background Number */}
            <div 
              className="absolute right-0 md:left-[309px] top-[-42px] text-white/5 font-bold pointer-events-none"
              style={{ fontSize: '219.3px', lineHeight: '243.43px' }}
            >
              {activeLevel}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col gap-6 py-4 border-b border-primary-blue/30">
                <h3 className="text-[#A6D3E1] text-3xl md:text-4xl font-heading font-bold">
                  {activeLevel} Level
                </h3>
                <div className="flex flex-col gap-0.5">
                  <p className="text-white text-base font-medium">
                    Wall Street English Levels
                  </p>
                  <p className="text-white text-3xl font-heading font-bold">
                    {currentData.wseLevel}
                  </p>
                </div>
              </div>

              {/* Scores Table */}
              <div className="flex flex-col rounded-2xl">
                {currentData.scores.map((score: any, index: number) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 ${
                      index !== currentData.scores.length - 1
                        ? 'border-b border-[#3B7DAF]'
                        : ''
                    }`}
                  >
                    <span className="text-white text-base">{score.name}</span>
                    <span className="text-white text-base">{score.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-white text-base leading-relaxed">
                {currentData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

