'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

export default function PersonalizedPlanSection() {
  return (
    <section className="w-full bg-accent-orange-light overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Image */}
        <div className="relative w-full md:w-[716px] h-[400px] md:h-[789px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1182x788"
              alt="Personalized Learning"
              fill
              className="object-cover -ml-42"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full md:w-[687px] h-[326px] bg-gradient-to-t from-black/70 to-transparent" />

          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full md:w-[421px] h-[34px] bg-primary-blue rounded-br-2xl" />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 md:px-24 py-16 md:py-28 flex flex-col gap-10 max-w-[561px]">
          <div className="flex flex-col gap-6">
            <p className="text-[#FF5E0A] text-lg md:text-xl font-heading font-bold">
              Course study plans
            </p>
            <h2 className="text-text-strong text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
              Your Personalized English Learning Journey
            </h2>
            
            <p className="text-text-strong text-base md:text-lg leading-relaxed">
              Get a course plan designed around your needs, goals, and schedule – with flexible options that fit your lifestyle.
            </p>

            <div className="text-text-strong text-base md:text-lg leading-relaxed">
              <p>At Wall Street English, we know every learner is different. That&apos;s why we start by understanding your:</p>
              <ul className="list-none ml-0 mt-2">
                <li>Current English level</li>
                <li>Learning goals (academic, career, or personal)</li>
                <li>Preferred pace and schedule</li>
              </ul>
            </div>

            <p className="text-text-strong text-base md:text-lg leading-relaxed">
              From there, we create a tailored learning journey that ensures real progress and lasting results. Whether you&apos;re preparing for IELTS, step exams, or advancing in your career, we&apos;ll guide you every step of the way.
            </p>
          </div>

          <Button variant="primary">
            Plan your English course
          </Button>
        </div>
      </div>
    </section>
  );
}

