import React from 'react';
import { Map, Clock, MessageCircle, Target } from 'lucide-react';
import Button from '../../ui/Button';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Map,
      title: 'A roadmap to fluency',
      description: 'know exactly where to start and what to focus on',
      highlighted: true,
    },
    {
      icon: Clock,
      title: 'Learn on your schedule',
      description: 'study at your own pace, from any device',
      highlighted: false,
    },
    {
      icon: MessageCircle,
      title: 'Practice real conversations',
      description: "It's about engaging with the language meaningfully.",
      highlighted: false,
    },
    {
      icon: Target,
      title: 'Immediate action steps',
      description: 'perfect for work, study, or travel goals',
      highlighted: false,
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col items-center gap-8 md:gap-12">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-16">
        {/* Left: Title */}
        <div className="flex-1 flex flex-col gap-4">
          <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-text-strong capitalize font-heading">
            What You&apos;ll Discover Inside
          </h2>
        </div>

        {/* Right: Description + CTA */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-base md:text-lg text-text-sub/70 leading-relaxed">
            Whether you&apos;re just starting or picking English back up, our online learning approach is built to help you improve faster — with less pressure, more support, and full flexibility.
          </p>
          <div>
            <Button variant="primary" size="base">
              Start Learning
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`p-6 md:p-8 rounded flex flex-col gap-6 border ${
                benefit.highlighted
                  ? 'bg-primary-blue text-white border-primary-blue'
                  : 'bg-white text-text-strong border-stroke-soft'
              }`}
            >
              {/* Icon */}
              <div className="w-20 h-20 relative">
                <div className={`p-3 rounded-full inline-flex ${
                  benefit.highlighted ? 'bg-white/30' : 'bg-[#C9EEF7]'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    benefit.highlighted ? 'text-white' : 'text-black'
                  }`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className={`text-lg md:text-xl font-bold capitalize font-heading leading-tight ${
                  benefit.highlighted ? 'text-white' : 'text-text-strong'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${
                  benefit.highlighted ? 'text-white/70' : 'text-text-strong/70'
                }`}>
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

