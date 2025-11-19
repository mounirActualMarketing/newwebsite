'use client';

import React, { useState } from 'react';
import Accordion from '../ui/Accordion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I know which course level is right for me?',
      answer:
        "We offer a free English assessment to understand your current level and goals. Based on your results, we'll recommend the right programme for you.",
    },
    {
      question: 'How long does it take to complete a course?',
      answer:
        'The duration depends on your current level, learning pace, and goals. On average, students complete one level in 12 weeks.',
    },
    {
      question: 'Are your teachers native speakers?',
      answer:
        'Yes, all our teachers are native English speakers with professional teaching certifications and extensive experience.',
    },
    {
      question: 'Can I study online or in-person?',
      answer:
        'Yes! We offer flexible learning options including fully online, fully in-person, or a blended approach combining both methods.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Course costs vary depending on the program and duration. Please contact us for a personalized quote based on your needs and goals.',
    },
    {
      question: 'Is Wall Street English recognized in Saudi Arabia?',
      answer:
        'Yes, Wall Street English is an internationally recognized English language training provider with centers across Saudi Arabia and worldwide.',
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-16 py-12 md:py-20 lg:py-28 bg-white flex justify-center">
      <div className="w-full max-w-[768px] flex flex-col gap-12 md:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-black leading-tight text-text-strong text-center">
            FAQ
          </h2>
          <p className="text-sm md:text-base text-text-strong text-center max-w-[422px] px-4">
            Here are some of the most common questions we get - to help you feel confident
            and ready to take the next step.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col border-b border-stroke-soft">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              content={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

