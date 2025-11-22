'use client';

import Button from '../../ui/Button';
import { Award } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full bg-accent-orange overflow-hidden">
      <div className="relative w-full min-h-[600px] bg-primary-red rounded-tr-[82px] flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-24 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
            {/* Icon */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-primary-red/40 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                The course that you need for your employees
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Get the skills you need to compete into today&apos;s world. You&apos;ll learn an array of skills that are useful in the office or in business in general, from giving presentations to writing professional emails in English.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              size="base"
              className="bg-primary hover:bg-primary/90"
            >
              Start Learning
            </Button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 left-0 w-full lg:w-[716px] h-8 bg-primary-cyan rounded-tr-2xl" />
      </div>
    </section>
  );
}

