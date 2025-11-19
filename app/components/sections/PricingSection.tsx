import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function PricingSection() {
  const plans = [
    {
      id: 'online',
      name: 'Online',
      description: 'Learn flexibly from anywhere in our Online Classroom. Enjoy expert teaching and support.',
      features: [
        'Online',
        'Educational TV series',
        'Interactive English lessons',
        'Classes with 3 other students',
        'Personal coaching sessions',
        'Extra practice classes',
        'Social events',
      ],
      highlighted: false,
    },
    {
      id: 'full-access',
      name: 'Full Access',
      description: 'Study online or in-person with support from qualified teachers. Boost your fluency.',
      features: [
        'Online and in our schools',
        'Educational TV series',
        'Interactive English lessons',
        'Classes with 3 other students',
        'Personal coaching sessions',
        'Extra practice classes',
        'Social events',
        "Access to our school's total English environment",
      ],
      highlighted: true,
      badge: 'MOST POPULAR',
    },
    {
      id: 'private',
      name: 'Private',
      description: 'Join classes with certified teachers online. Improve your skills with other students during events.',
      features: [
        'Online',
        'Educational TV series',
        'Interactive English lessons',
        'Private 1-1 classes with highly-qualified teachers',
        'Personal coaching sessions',
        'Extra practice classes',
        'Social events',
        "Access to our school's total English environment",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-white flex flex-col items-center gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 md:gap-4 max-w-[630px] px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong text-center capitalize font-heading">
          Select the right plan for you
        </h2>
        <p className="text-base md:text-lg text-text-strong/60 text-center leading-relaxed max-w-[554px]">
          All Wall Street English course plans are based on our proven guaranteed learning method.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 rounded-lg overflow-visible bg-transparent md:bg-bg-soft pt-0 md:pt-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex-1 flex flex-col overflow-visible rounded-lg ${
              plan.highlighted
                ? 'bg-primary-blue text-white'
                : 'bg-bg-soft text-text-strong border border-stroke-soft'
            }`}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-white/10 flex flex-col gap-2">
              {plan.badge && (
                <div className="absolute -top-7 left-12 px-2.5 py-1.5 bg-[#FF8E7E] rounded-full">
                  <span className="text-sm font-bold text-white">{plan.badge}</span>
                </div>
              )}
              <h3 className="text-[32px] font-bold leading-tight font-heading">
                {plan.name}
              </h3>
              <p className={`text-base ${plan.highlighted ? 'text-white' : 'text-text-sub'}`}>
                {plan.description}
              </p>
            </div>

            {/* Features */}
            <div className="flex-1 p-6 pt-8 flex flex-col gap-4">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check
                    className={`w-6 h-6 flex-shrink-0 ${
                      plan.highlighted ? 'text-[#EAFAFF]' : 'text-primary-blue'
                    }`}
                  />
                  <span className="text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 flex items-center justify-between">
              {plan.highlighted ? (
                <>
                  <Button
                    variant="outline"
                    size="base"
                    className="!bg-white !text-primary-red hover:!bg-gray-100"
                  >
                    Sign Up Now
                  </Button>
                  <button className="flex items-center gap-0.5 text-base font-bold text-white hover:opacity-80 transition-opacity font-heading">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <Button variant="primary" size="base">
                    Sign Up Now
                  </Button>
                  <button className="flex items-center gap-0.5 text-base font-bold text-primary-red hover:opacity-80 transition-opacity font-heading">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


