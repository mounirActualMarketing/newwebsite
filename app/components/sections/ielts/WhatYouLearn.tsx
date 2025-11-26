'use client';

import { useState } from 'react';

const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

const levelData = {
  A1: {
    level: 'A1 Level',
    subtitle: 'Wall Street English Levels',
    range: '3-5',
    skills: {
      listen: 'You can understand basic phrases and expressions related to everyday life.',
      talk: 'You can introduce yourself and answer simple questions.',
      reading: 'You can read simple texts and find specific information.',
      writing: 'You can write short, simple postcards and fill out forms.',
    },
    examples:
      'You can introduce yourself to new colleagues. You can understand basic instructions. You can order food at a restaurant.',
  },
  A2: {
    level: 'A2 Level',
    subtitle: 'Wall Street English Levels',
    range: '6-9',
    skills: {
      listen: 'You can understand useful information, such as travel announcements and directions.',
      talk: 'You can communicate during daily tasks, make plans, give instructions, and exchange information.',
      reading:
        'You can read short texts and emails, and you can find specific information in everyday materials such as brochures or websites.',
      writing: 'You can write short personal emails, letters, notes, and summaries.',
    },
    examples:
      'You work for an international organization. You can attend online meetings with other English speakers as long as you are familiar with the subject. During the meeting, you can discuss future plans and offer some basic suggestions for what to do next. You can also arrange the next meeting, and after the meeting, you can email a simple written summary of the main points discussed.',
  },
  B1: {
    level: 'B1 Level',
    subtitle: 'Wall Street English Levels',
    range: '10-13',
    skills: {
      listen: 'You can understand the main points of clear standard speech on familiar matters.',
      talk: 'You can deal with most situations likely to arise while traveling.',
      reading: 'You can understand texts that consist mainly of high frequency everyday language.',
      writing: 'You can write simple connected text on topics which are familiar.',
    },
    examples:
      'You can participate in meetings and express your opinions on familiar topics. You can travel independently in English-speaking countries.',
  },
  B2: {
    level: 'B2 Level',
    subtitle: 'Wall Street English Levels',
    range: '14-17',
    skills: {
      listen: 'You can understand extended speech and lectures and follow complex lines of argument.',
      talk: 'You can interact with a degree of fluency and spontaneity with native speakers.',
      reading: 'You can read articles and reports concerned with contemporary problems.',
      writing: 'You can write clear, detailed text on a wide range of subjects.',
    },
    examples:
      'You can negotiate and present arguments professionally. You can understand most TV news and current affairs programs.',
  },
  C1: {
    level: 'C1 Level',
    subtitle: 'Wall Street English Levels',
    range: '18-20',
    skills: {
      listen: 'You can understand extended speech even when it is not clearly structured.',
      talk: 'You can express yourself fluently and spontaneously without much searching for expressions.',
      reading: 'You can understand long and complex factual and literary texts.',
      writing: 'You can express yourself in clear, well-structured text on complex subjects.',
    },
    examples: 'You can use language flexibly and effectively for social, academic and professional purposes.',
  },
};

export default function WhatYouLearn() {
  const [activeLevel, setActiveLevel] = useState<keyof typeof levelData>('A2');

  const currentData = levelData[activeLevel];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side */}
          <div>
            <p className="text-sm text-gray-600 mb-2">What Will I Learn</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Study The English You Need
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              All Wall Street English levels are aligned to the global standards that you need to get into college or
              university. We have 20 specific levels that means you&apos;ll know exactly where you are and what you need
              to improve and start studying in English.
            </p>
            {/* Level tabs */}
            <div className="flex gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level as keyof typeof levelData)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    activeLevel === level
                      ? 'bg-[#0d4f5f] text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#0d4f5f]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          {/* Right side - Level card */}
          <div className="bg-[#123256] rounded-lg shadow-lg p-6 relative overflow-hidden">
            {/* Large watermark */}
            <div className="absolute top-0 right-0 text-[120px] font-bold text-white/10 leading-none -mr-4 -mt-4 select-none">
              {activeLevel}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#A6D3E1] mb-1">{currentData.level}</h3>
              <p className="text-sm text-white/70 mb-1">{currentData.subtitle}</p>
              <p className="text-3xl font-bold text-white mb-6">{currentData.range}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">To Listen</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{currentData.skills.listen}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">To Talk</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{currentData.skills.talk}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">Reading</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{currentData.skills.reading}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">Writing</h4>
                  <p className="text-xs text-white/80 leading-relaxed">{currentData.skills.writing}</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold text-white text-sm mb-2">Examples</h4>
                <p className="text-xs text-white/80 leading-relaxed">{currentData.examples}</p>
              </div>
              <button className="mt-4 text-sm font-semibold text-white hover:text-[#A6D3E1] transition-colors">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

