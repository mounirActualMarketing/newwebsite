'use client';

import Image from 'next/image';

export default function HabitsSection() {
  return (
    <section className="w-full bg-[#C9EEF7] overflow-hidden flex flex-col lg:flex-row items-center">
      {/* Image Side */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[679px] relative overflow-hidden">
        <Image
          src="https://placehold.co/1178x785"
          alt="Educational Environment"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-auto lg:max-w-[561px] py-8 md:py-12 lg:py-0 px-6 md:px-12 lg:pr-24 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
            Our Habits
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-primary font-heading capitalize">
            A unique educational environment
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-primary">
            In our training centers you will find a fascinating experience of a full immersion in the English-speaking environment. They speak only English, giving students the opportunity to practice English in real situations, in comfortable conditions and with the support of teachers. Students can come to our centers not only to engage in, but also to meet with teachers and employees, or simply communicate with friends. What started with the idea of developing a new way of teaching English has grown to more than 450 training centers that cover 28 countries with a total student population of over 180,000 people. Wall Street English is a global company and a training center near you. Our community is in our centers and in our global online space. Only Wall Street English you can get the best of both.
          </p>
        </div>
      </div>
    </section>
  );
}

