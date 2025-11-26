'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../../ui/Button';

const tabs = ['Assessment', 'Learning Plan', 'Progress Tracking'];

const planDetails = {
  'Assessment': [
    {
      title: 'Skills Evaluation',
      description: 'Comprehensive assessment of your team\'s current English proficiency levels across all core skills',
    },
    {
      title: 'Goal Setting',
      description: 'Define clear objectives aligned with your business needs and team development goals',
    },
    {
      title: 'Custom Roadmap',
      description: 'Receive a tailored learning path designed specifically for your organization\'s requirements',
    },
  ],
  'Learning Plan': [
    {
      title: 'Structured Modules',
      description: 'Access business-focused lessons covering essential workplace communication scenarios',
    },
    {
      title: 'Live Sessions',
      description: 'Schedule interactive classes with native teachers at times that suit your team',
    },
    {
      title: 'Practice Activities',
      description: 'Engage with real-world exercises that mirror actual business situations',
    },
  ],
  'Progress Tracking': [
    {
      title: 'Analytics Dashboard',
      description: 'Monitor individual and team progress with detailed performance metrics and insights',
    },
    {
      title: 'Regular Reports',
      description: 'Receive comprehensive reports showing advancement toward learning objectives',
    },
    {
      title: 'Certification',
      description: 'Earn recognized certificates upon successful completion of course milestones',
    },
  ],
};

export default function PersonalizedPlanSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof planDetails>('Assessment');

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="flex-1 px-4 md:px-24 py-16 md:py-28 flex flex-col justify-center gap-14">
          {/* Header */}
          <div className="flex flex-col gap-2 max-w-[520px]">
            <p className="text-primary-blue text-lg md:text-xl font-heading font-bold">
              Customized for Your Business
            </p>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
              Personalized Learning Plans for Teams
            </h2>
            <p className="text-text-sub text-base leading-relaxed mt-2">
              Every organization is unique. Our corporate program adapts to your team&apos;s specific needs, industry requirements, and learning objectives to deliver maximum impact.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col gap-6 max-w-[528px]">
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as keyof typeof planDetails)}
                  className={`px-4 py-2 text-sm md:text-base font-heading font-bold whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-primary-red border-b-2 border-primary-red'
                      : 'text-text-strong hover:text-primary-red transition-colors'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Activities List */}
            <div className="flex flex-col gap-8">
              {planDetails[activeTab]?.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 shrink-0 bg-bg-soft rounded-md flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#C9EEF7] rounded-full" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1 pt-2">
                    <h4 className="text-text-strong text-lg font-heading font-bold">
                      {activity.title}
                    </h4>
                    <p className="text-text-strong opacity-70 text-sm leading-relaxed max-w-[400px]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Button variant="primary" size="large">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[724px] h-[400px] md:h-auto bg-bg-soft overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/online-corporate/sec3.png"
              alt="Personalized Learning"
              fill
              className="object-cover"
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

