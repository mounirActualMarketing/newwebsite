import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Button from '../ui/Button';

export default function ValuesSection() {
  const values = [
    {
      title: 'Set your own goals',
      description: 'Work with a Personal Coach to build your study plan - and get the results you need.',
      progress: 50,
    },
    { title: 'Complete flexibility and independence' },
    { title: 'Learn online and in-person' },
    { title: 'Enjoy unbeatable teaching quality' },
    { title: 'Join a global learning community' },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* Left Side - Content */}
      <div className="flex-1 px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-accent-orange-light flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-base md:text-lg font-bold text-accent-orange font-heading">Our Values</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong capitalize font-heading max-w-[479px]">
            A real-life English learning journey.
          </h2>
          <p className="text-base md:text-lg text-text-sub leading-relaxed max-w-[435px]">
            At Wall Street English, you live English. Our method combines coaching, digital tools,
            and practice to build confidence and fluency.
          </p>
        </div>

        {/* Values List */}
        <div className="flex flex-col gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative pl-4 flex flex-col justify-center min-h-[66px]"
            >
              {/* Progress indicator for first item */}
              {index === 0 && (
                <div className="absolute left-0 top-0 h-full w-0.5 bg-accent-orange-dark overflow-hidden">
                  <div className="h-1/2 bg-accent-orange" />
                </div>
              )}
              {index > 0 && <div className="absolute left-0 top-0 h-full w-0.5 bg-accent-orange-dark" />}
              
              <h3 className="text-base font-bold text-text-strong font-heading">
                {value.title}
              </h3>
              {value.description && (
                <p className="text-base text-text-sub leading-relaxed">
                  {value.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Button variant="primary" size="base">
          How You Learn English
        </Button>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative bg-bg-soft min-h-[300px] lg:min-h-0">
        <Image
          src="/home/sections/sec1.png"
          alt="Learning environment"
          fill
          className="object-cover"
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full hover:scale-110 transition-transform">
          <Play className="w-6 h-6 md:w-8 md:h-8 fill-black" />
        </button>
      </div>
    </div>
  );
}

