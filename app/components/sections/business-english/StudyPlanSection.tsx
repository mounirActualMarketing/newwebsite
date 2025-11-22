'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StudyPlanSection() {
  const [activeTab, setActiveTab] = useState('online');

  const tabs = [
    { id: 'online', label: 'Online' },
    { id: 'in-center', label: 'In-center' },
    { id: 'on-site', label: 'On-site' },
  ];

  const content = {
    online: {
      description: 'Flexible learning with the proven Wall Street English method allowing your employees to adapt their programme to their daily commitments. Digital classroom access for online classes and follow up.',
      features: [
        'Online English course',
        'Digital classroom classes',
        'Online support sessions',
        'Extra online practice classes',
      ],
    },
    'in-center': {
      description: 'Learn in our dedicated learning centers with access to all resources and face-to-face interaction with teachers and other students.',
      features: [
        'In-person classes',
        'Access to learning centers',
        'Face-to-face support',
        'Social learning activities',
      ],
    },
    'on-site': {
      description: 'We bring our proven method directly to your workplace, making it convenient for your team to learn during their workday.',
      features: [
        'On-site classes',
        'Customized schedule',
        'Dedicated instructor',
        'Company-specific materials',
      ],
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 lg:w-[466px] h-8 bg-accent-orange rounded-br-2xl hidden lg:block" />

      <div className="flex flex-col lg:flex-row">
        {/* Content Side */}
        <div className="flex-1 px-4 md:px-8 lg:px-24 py-16 lg:py-28 flex flex-col justify-center gap-14">
          <div className="max-w-lg flex flex-col gap-2">
            <span className="text-primary-blue text-xl font-heading font-bold">
              A Study Plan for Team
            </span>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Choose how your staff learn English
            </h2>
            <p className="text-text-sub text-base leading-relaxed mt-2">
              Having taught English since 1972, we have developed a study cycle that is quick, fun and 100% effective
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-xl">
            {/* Tabs */}
            <div className="flex items-center gap-0 border-b border-stroke-soft overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-base font-heading font-bold whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary-red border-b-2 border-primary-red -mb-[1px]'
                      : 'text-text-strong'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-col gap-5">
              <p className="text-text-sub text-base leading-relaxed">
                {content[activeTab as keyof typeof content].description}
              </p>
              <div className="flex flex-col gap-2">
                {content[activeTab as keyof typeof content].features.map((feature, index) => (
                  <p key={index} className="text-text-sub text-base">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-[724px] relative bg-bg-soft min-h-[400px] lg:min-h-[788px]">
          <Image
            src="/business-english/sec2.png"
            alt="Study Plan"
            fill
            className="object-cover"
          />
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-64 lg:w-[421px] h-8 bg-primary-blue rounded-br-2xl" />
        </div>
      </div>
    </section>
  );
}

