'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ title, content, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border-t border-stroke-soft">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-lg font-bold text-text-strong pr-6">{title}</span>
        <ChevronDown
          className={`w-8 h-8 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-base text-text-strong leading-relaxed">{content}</p>
      </div>
    </div>
  );
}


