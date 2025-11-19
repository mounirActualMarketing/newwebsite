'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

export default function CoursesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const courses = [
    {
      id: '1',
      title: 'Adult English Course',
      description:
        'Improve your English skills with a proven method and guaranteed results. Perfect for busy people like you.',
      image: '/home/carousel/Rectangle 19 (1).png',
      buttonText: 'Start Learning',
    },
    {
      id: '2',
      title: 'Business English Course',
      description:
        'Our English course improves listening and speaking skills for business professionals.',
      image: '/home/carousel/Rectangle 19 (2).png',
      buttonText: 'Start Learning',
    },
    {
      id: '3',
      title: 'IELTS Preparation',
      description:
        'Study English at college with our method. Build the skills you need to use your English.',
      image: '/home/carousel/Rectangle 19 (3).png',
      buttonText: 'Start Learning',
    },
    {
      id: '4',
      title: 'Online English Course',
      description:
        'Enhance your English skills online with a proven method. Study anytime, anywhere with our course.',
      image: '/home/carousel/Rectangle 19 (4).png',
      buttonText: 'Start Learning',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // card width + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 bg-bg-soft flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3 md:gap-4 max-w-[630px]">
          <span className="text-base md:text-xl font-bold text-primary-blue font-heading">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-strong capitalize font-heading">
            Courses for Every Goal
          </h2>
          <p className="text-base md:text-lg text-text-strong/60 leading-relaxed">
            Tailored Learning Paths for Every Ambition
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Courses Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course) => (
          <div key={course.id} className="flex-shrink-0 w-[280px] md:w-[324px]">
            <Card
              image={course.image}
              title={course.title}
              description={course.description}
              buttonText={course.buttonText}
              onButtonClick={() => console.log('Course clicked:', course.id)}
            />
          </div>
        ))}

        {/* Community Card */}
        <div className="flex-shrink-0 w-[280px] md:w-[324px] bg-white rounded-lg p-6 md:p-8 flex flex-col gap-4">
          <div className="w-[280px] h-[280px] bg-white rounded-lg border-2 border-dashed border-stroke-soft flex items-center justify-center">
            <span className="text-text-soft">Community Image</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-text-strong font-heading max-w-[182px]">
              Join a global learning community
            </h3>
            <p className="text-base text-text-strong/70 leading-relaxed">
              Join a global community of English learners on your journey to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


