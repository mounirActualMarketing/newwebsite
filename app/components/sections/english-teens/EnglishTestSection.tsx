'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

export default function EnglishTestSection() {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Red Background with Border Radius */}
        <div className="absolute inset-0 bg-primary-red rounded-tr-[82px]" />

        {/* Content Card */}
        <div className="relative container mx-auto px-4 md:px-24 h-full flex items-center justify-center">
          <div className="max-w-[1248px] w-full px-6 md:px-12 py-14 rounded-lg flex flex-col items-center gap-6 text-center">
            {/* Icon */}
            <Image
              src="/online-corporate/Frame 250.png"
              alt="English Test Icon"
              width={106}
              height={106}
            />

            {/* Text Content */}
            <div className="flex flex-col items-center gap-2 max-w-[462px]">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
                Find your English level
              </h2>
              <p className="text-white text-base leading-relaxed">
                We offer you a complete English test to assess your level and a professional assessment of how to improve. Book an appointment today and find out your exact level for studying English.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="secondary" 
              className="bg-primary text-white hover:bg-primary/90"
            >
              Take an English Test
            </Button>
          </div>
        </div>

        {/* Decorative Accent */}
        <div className="absolute bottom-0 left-0 w-[716px] h-[34px] bg-[#64CFE9] rounded-tr-2xl" />
      </div>
    </section>
  );
}

