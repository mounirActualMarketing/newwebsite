'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchFilterSectionProps {
  showMap: boolean;
  onToggleMap: () => void;
  totalCenters: number;
  displayedCenters: number;
}

export default function SearchFilterSection({
  showMap,
  onToggleMap,
  totalCenters,
  displayedCenters,
}: SearchFilterSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-16">
        {/* Header */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize max-w-[658px]">
            Find a Centre Near You
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-text-strong/64 max-w-[546px]">
            We have English schools all over Saudi Arabia. Visit us and find out how we can help you go further with English.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="w-full lg:flex-1 flex items-center gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white/10 border border-stroke-soft/20 rounded-full">
              <Search className="w-5 h-5 text-text-soft shrink-0" />
              <input
                type="text"
                placeholder="Search for your location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-base text-text-strong placeholder:text-text-soft outline-none"
              />
            </div>
          </div>

          {/* Filter Button */}
          <button className="px-3.5 py-2.5 bg-white/10 border border-stroke-soft/20 rounded-full flex items-center gap-12 hover:bg-white/20 transition-colors">
            <span className="text-base text-text-soft">Filter</span>
            <ChevronDown className="w-4 h-4 text-[#8B8C9B]" />
          </button>
        </div>
      </div>

      {/* Results Counter & Map Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-text-strong font-heading">{displayedCenters}</span>
          <span className="text-base text-text-sub">Centers of</span>
          <span className="text-base font-bold text-text-strong font-heading">{totalCenters}</span>
        </div>

        {/* Map Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-black">Hide Map</span>
          <button
            onClick={onToggleMap}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              showMap ? 'bg-[#335CFF]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                showMap ? 'translate-x-[22px]' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

