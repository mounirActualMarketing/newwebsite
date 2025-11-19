import React from 'react';
import Image from 'next/image';
import { Play, User, Monitor, Users } from 'lucide-react';
import Button from '../../ui/Button';

export default function WhyChooseSection() {
  const features = [
    {
      icon: User,
      title: 'A personal learning plan, built around you',
      description: "Begin your English journey at the right level. Our course has 20 levels, so whether you're a beginner or almost-expert, you'll progress.",
    },
    {
      icon: Monitor,
      title: 'Live online classes – accessible everywhere',
      description: 'Our qualified teachers are experts in online English. Log on from anywhere for feedback and knowledge to ensure results.',
    },
    {
      icon: Users,
      title: 'The support you need to go further',
      description: "Our learning system, supportive teachers, and a personal coach ensure you learn. You're never alone with support from Wall Street English.",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row bg-accent-orange-light">
      {/* Left: Image */}
      <div className="flex-1 relative bg-bg-soft min-h-[300px] lg:min-h-0">
        <Image
          src="/online-courses/online.png"
          alt="Online Learning"
          fill
          className="object-cover"
        />
        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full hover:scale-110 transition-transform">
          <Play className="w-6 h-6 md:w-8 md:h-8 fill-black" />
        </button>
      </div>

      {/* Right: Content */}
      <div className="flex-1 px-4 md:px-12 lg:px-16 py-12 md:py-20 lg:py-28 flex flex-col gap-6 md:gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-base md:text-xl font-bold text-[#FF8E7E] font-heading">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-text-strong capitalize font-heading max-w-[495px]">
            Your Path to Fluency with Wall Street English Online
          </h2>
        </div>

        <p className="text-base md:text-lg text-text-sub leading-relaxed max-w-[497px]">
          Tailored study plans for your level and schedule. Learn anytime, anywhere with qualified teachers and personal coaches. Choose us for guaranteed results.
        </p>

        {/* Features List */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4 md:gap-5 max-w-[448px]">
                <div className="p-2 bg-white rounded-full shrink-0">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-text-strong font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-strong/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div>
          <Button variant="primary" size="base">
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}

