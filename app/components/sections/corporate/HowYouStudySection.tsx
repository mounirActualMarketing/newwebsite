'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

export default function HowYouStudySection() {
  const steps = [
    {
      color: 'bg-accent-orange-light',
      accentColor: 'bg-accent-orange-dark',
      title: 'Self-Paced Online Learning',
      description: 'Access interactive modules designed for business professionals. Learn at your own pace with real-world scenarios and practical exercises that directly apply to your workplace.',
    },
    {
      color: 'bg-[#FFD8D2]',
      accentColor: 'bg-[#FFAA9F]',
      title: 'Expert Teacher Support',
      description: 'Get personalized guidance from native-level teachers with corporate experience. Schedule live sessions that fit your team\'s calendar and receive immediate feedback on your progress.',
    },
    {
      color: 'bg-[#A6D3E1]',
      accentColor: 'bg-[#3FA1BE]',
      title: 'Track Team Progress',
      description: 'Monitor your team\'s advancement with detailed analytics and reporting. Celebrate milestones and ensure everyone is meeting their learning objectives with our comprehensive dashboard.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-28 px-4 md:px-24 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[705px]">
          <p className="text-primary-blue text-lg md:text-xl font-heading font-bold">
            How You Study Business English
          </p>
          <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center capitalize leading-tight">
            How does the corporate program work?
          </h2>
          <p className="text-text-strong text-base text-center leading-relaxed mt-4">
            Our proven methodology combines self-paced learning with expert guidance, specifically designed for busy professionals who need to improve their business English skills efficiently.
          </p>
        </div>

        {/* Main Content - Image and Stacked Cards */}
        <div className="relative w-full max-w-[1104px] h-[730px] rounded-tl-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -left-9">
            <Image
              src="/online-corporate/sec1.png"
              alt="Corporate English Training"
              fill
              className="object-cover"
            />
          </div>

          {/* Stacked Cards - Desktop */}
          <div className="hidden md:block absolute right-0 top-0 w-[523px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute ${index === 0 ? 'top-0' : index === 1 ? 'top-24' : 'top-60'} right-0 w-full ${
                  index === 0 ? 'h-[730px]' : index === 1 ? 'h-[631px]' : 'h-[494px]'
                } ${step.color} rounded-tr-3xl p-10 flex flex-col gap-6`}
              >
                <div className={`w-18 h-33 ${step.accentColor}`} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-text-strong text-3xl font-heading font-bold">
                    {step.title}
                  </h3>
                  <p className="text-text-strong opacity-70 text-base leading-relaxed max-w-[413px]">
                    {step.description}
                  </p>
                </div>
                {index === 2 && (
                  <Button variant="primary" className="self-start">
                    Get Started
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Cards - Stack vertically */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-4">
            {steps.map((step, index) => (
              <div key={index} className={`${step.color} rounded-lg p-6 flex flex-col gap-4`}>
                <h3 className="text-text-strong text-xl font-heading font-bold">
                  {step.title}
                </h3>
                <p className="text-text-strong opacity-70 text-sm">
                  {step.description}
                </p>
                {index === 2 && (
                  <Button variant="primary" className="self-start">
                    Get Started
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Below - Desktop only */}
        <div className="hidden md:flex gap-8 mt-20">
          <div className="w-[402px] p-8 bg-white rounded border border-stroke-soft flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-soft rounded flex items-center justify-center">
              <div className="w-10 h-10 bg-[#C9EEF7] rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-text-strong text-xl font-heading font-bold capitalize">
                Business-Focused Content
              </h4>
              <p className="text-text-strong opacity-70 text-base">
                Practice real business scenarios including presentations, negotiations, and professional communication
              </p>
            </div>
          </div>

          <div className="w-[402px] p-8 bg-white rounded border border-stroke-soft flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-soft rounded flex items-center justify-center">
              <div className="w-10 h-10 bg-[#C9EEF7] rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-text-strong text-xl font-heading font-bold capitalize">
                Flexible Schedule
              </h4>
              <p className="text-text-strong opacity-70 text-base">
                Learn anytime, anywhere with 24/7 access to course materials and flexible live session scheduling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

