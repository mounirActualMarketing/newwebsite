'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function TopBar() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div className="w-full h-[72px] px-4 md:px-12 lg:px-24 bg-primary flex items-center">
      <div className="flex items-center justify-between w-full gap-2 md:gap-6">
        {/* Empty space for layout */}
        <div className="flex-1 hidden md:block" />

        {/* Start Learning Button */}
        <Button variant="secondary" size="base" className="text-sm md:text-base">
          Start Learning
        </Button>

        {/* Right side items */}
        <div className="flex items-center gap-3 md:gap-8">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1 text-text-soft hover:text-white transition-colors"
            >
              <span className="text-sm md:text-base">English</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {languageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-stroke-soft py-2 min-w-[150px] z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-bg-soft text-text-strong">
                  English
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-bg-soft text-text-strong">
                  العربية
                </button>
              </div>
            )}
          </div>

          {/* Student Login */}
          <a
            href="#"
            className="text-sm md:text-base text-text-soft hover:text-white transition-colors hidden sm:block"
          >
            Student Login
          </a>
        </div>
      </div>
    </div>
  );
}


