'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

export default function HowYouStudySection() {
  return (
    <section className="w-full py-16 md:py-28 px-4 md:px-24 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 max-w-[705px]">
          <p className="text-primary-blue text-lg md:text-xl font-heading font-bold">
            How You Study English
          </p>
          <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center capitalize leading-tight">
            How does the english course work?
          </h2>
          <p className="text-text-strong text-base text-center leading-relaxed mt-4">
            We guarantee you&apos;ll learn English with our proven method. Full-access experience: study in English-only learning centers and join international students in our digital classroom.
          </p>
        </div>

        {/* Main Content - Image and Stacked Cards */}
        <div className="relative w-full max-w-[1104px] h-[730px] rounded-tl-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -left-9">
            <Image
              src="https://placehold.co/1104x736"
              alt="English Course"
              fill
              className="object-cover"
            />
          </div>

          {/* Stacked Cards - Desktop */}
          <div className="hidden md:block absolute right-0 top-0 w-[523px]">
            {/* Card 1 - Watch and learn (Orange) */}
            <div className="absolute top-0 right-0 w-full h-[730px] bg-accent-orange-light rounded-tr-3xl p-10 flex flex-col gap-6">
              <div className="w-18 h-33 bg-accent-orange-dark" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-strong text-3xl font-heading font-bold">
                  Watch and learn
                </h3>
                <p className="text-text-strong opacity-70 text-base leading-relaxed max-w-[413px]">
                  Learn English with a cool TV series, set in New York and based on the lives of interesting characters from all over the globe.
                  <br />
                  Do a variety of interactive activities, based on listening and speaking, whenever and wherever suits your schedule.
                </p>
              </div>
            </div>

            {/* Card 2 - Watch and learn (Pink) */}
            <div className="absolute top-24 right-0 w-full h-[631px] bg-[#FFD8D2] rounded-tr-3xl p-10 flex flex-col gap-6">
              <div className="w-24 h-33 bg-[#FFAA9F]" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-strong text-3xl font-heading font-bold">
                  Watch and learn
                </h3>
                <p className="text-text-strong opacity-70 text-base leading-relaxed max-w-[413px]">
                  Learn English with a cool TV series, set in New York and based on the lives of interesting characters from all over the globe.
                  <br />
                  Do a variety of interactive activities, based on listening and speaking, whenever and wherever suits your schedule.
                </p>
              </div>
            </div>

            {/* Card 3 - Constant feedback (Blue) */}
            <div className="absolute top-60 right-0 w-full h-[494px] bg-[#A6D3E1] rounded-tr-3xl p-10 flex flex-col gap-6">
              <div className="w-24 h-33 bg-[#3FA1BE]" />
              <div className="flex flex-col gap-1">
                <h3 className="text-text-strong text-3xl font-heading font-bold">
                  Constant feedback
                </h3>
                <p className="text-text-strong opacity-70 text-base leading-relaxed max-w-[413px]">
                  Get feedback during and after every learning activity, as well as careful guidance from our expert native teachers. Plus, you receive regular advice and support from your own Personal Coach. Parents get frequent reports about their child&apos;s progress.
                </p>
              </div>
              <Button variant="primary" className="self-start">
                Start Learning
              </Button>
            </div>
          </div>

          {/* Mobile Cards - Stack vertically */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-4">
            <div className="bg-accent-orange-light rounded-lg p-6 flex flex-col gap-4">
              <h3 className="text-text-strong text-xl font-heading font-bold">
                Watch and learn
              </h3>
              <p className="text-text-strong opacity-70 text-sm">
                Learn English with our TV series and interactive activities.
              </p>
            </div>
            <div className="bg-[#A6D3E1] rounded-lg p-6 flex flex-col gap-4">
              <h3 className="text-text-strong text-xl font-heading font-bold">
                Constant feedback
              </h3>
              <p className="text-text-strong opacity-70 text-sm">
                Get expert guidance from native teachers and personal coaches.
              </p>
              <Button variant="primary" size="small" className="self-start">
                Start Learning
              </Button>
            </div>
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
                Immediate action steps
              </h4>
              <p className="text-text-strong opacity-70 text-base">
                perfect for work, study, or travel goals
              </p>
            </div>
          </div>

          <div className="w-[402px] p-8 bg-white rounded border border-stroke-soft flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-soft rounded flex items-center justify-center">
              <div className="w-10 h-10 bg-[#C9EEF7] rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-text-strong text-xl font-heading font-bold capitalize">
                Practice real conversations
              </h4>
              <p className="text-text-strong opacity-70 text-base">
                It&apos;s about engaging with the language meaningfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

