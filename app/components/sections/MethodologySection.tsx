'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Monitor, BookOpen, Users } from 'lucide-react';

export default function MethodologySection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['The Method', 'The Modules', 'Learning Journey'];

  const methodContent = {
    title: 'Learning vs Acquiring',
    description:
      "Most students try to learn English - we help you acquire it, just like your native language. That's why we use a blended learning approach, combining:",
    features: [
      {
        icon: Monitor,
        title: 'Multimedia Exercises',
        description: 'build vocabulary, pronunciation, and understanding',
      },
      {
        icon: BookOpen,
        title: 'Workbooks',
        description: 'reinforce your progress with guided practice',
      },
      {
        icon: Users,
        title: 'Teacher-led Classes',
        description: "apply what you've learned in real conversations",
      },
    ],
  };

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <div className="flex-1 relative bg-bg-soft min-h-[300px] lg:min-h-0 order-2 lg:order-1">
        <Image
          src="/home/sections/sec2.png"
          alt="Methodology"
          fill
          className="object-cover"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full hover:scale-110 transition-transform">
          <Play className="w-6 h-6 md:w-8 md:h-8 fill-black" />
        </button>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col justify-center gap-6 md:gap-8 order-1 lg:order-2">
        <div className="flex flex-col gap-4">
          <span className="text-base md:text-lg font-bold text-primary-blue font-heading">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong capitalize font-heading max-w-[479px]">
            From First Words to Full Fluency
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center border-b border-stroke-soft overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 text-sm md:text-base font-bold font-heading transition-colors whitespace-nowrap ${
                activeTab === index
                  ? 'text-primary-red border-b-2 border-primary-red'
                  : 'text-text-strong hover:text-primary-red'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 0 && (
          <div className="flex flex-col gap-5 max-w-[479px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-text-strong font-heading">
                {methodContent.title}
              </h3>
              <p className="text-sm md:text-base text-text-sub leading-relaxed">
                {methodContent.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {methodContent.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-white/50 rounded-full flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-text-strong font-heading">
                        {feature.title}
                      </h4>
                      <p className="text-base text-text-strong/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="max-w-[479px]">
            <p className="text-base text-text-sub">
              Content for The Modules tab will be displayed here.
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="max-w-[479px]">
            <p className="text-base text-text-sub">
              Content for Learning Journey tab will be displayed here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


