'use client';

import Image from 'next/image';
import { Users, Award, Lightbulb, Target, MessageCircle } from 'lucide-react';

const values = [
  {
    title: 'Student-Centricity',
    description: 'We put learners first — tailoring every experience to their needs, pace, and goals.',
    bgColor: 'bg-[#FF8E7E]',
    iconBg: 'bg-[#C9EEF7]/30',
    textColor: 'text-white',
    icon: Users,
  },
  {
    title: 'Excellence',
    description: 'We uphold the highest standards in our teaching and team.',
    bgColor: 'bg-accent-orange-light',
    iconBg: 'bg-white',
    textColor: 'text-text-strong',
    icon: Award,
  },
  {
    title: 'Innovation',
    description: 'Perfect for work, study, or travel goals',
    bgColor: 'bg-accent-orange-light',
    iconBg: 'bg-white',
    textColor: 'text-text-strong',
    icon: Lightbulb,
  },
  {
    title: 'Immediate action steps',
    description: 'Perfect for work, study, or travel goals',
    bgColor: 'bg-white',
    iconBg: 'bg-[#C9EEF7]',
    textColor: 'text-text-strong',
    icon: Target,
  },
  {
    title: 'Practice real conversations',
    description: 'It&apos;s about engaging with the language meaningfully.',
    bgColor: 'bg-white',
    iconBg: 'bg-[#C9EEF7]',
    textColor: 'text-text-strong',
    icon: MessageCircle,
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-[523px]">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
            Guiding Principles for Your Success
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-strong/64">
            At Wall Street English KSA, our values aren&apos;t just words on a page — they&apos;re what guide how we teach, support, and grow together.
          </p>
        </div>

        {/* Values Grid with Background */}
        <div className="relative w-full h-[600px] md:h-[730px] rounded overflow-hidden">
          {/* Background Image */}
          <Image
            src="/about/ab1.png"
            alt="Our Values Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* Value Cards - Vertical Scroll on Mobile, Grid on Desktop */}
          <div className="absolute right-4 md:right-8 top-4 md:top-8 bottom-4 md:bottom-8 flex flex-col gap-4 overflow-y-auto scrollbar-hide md:grid md:grid-cols-1 md:auto-rows-min w-[calc(100%-2rem)] md:w-auto md:max-w-[403px]">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`p-6 md:p-8 ${value.bgColor} rounded flex-shrink-0 flex flex-col gap-6`}
                >
                  {/* Icon */}
                  <div className="w-20 h-20 relative overflow-hidden">
                    <div className={`w-14 h-14 ${value.iconBg} rounded-full flex items-center justify-center m-3`}>
                      <Icon className="w-8 h-8 text-text-strong" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <h3 className={`text-lg md:text-xl font-bold font-heading capitalize ${value.textColor}`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${value.textColor} opacity-70`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

