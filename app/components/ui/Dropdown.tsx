'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  trigger: React.ReactNode;
  items?: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Dropdown({ trigger, items, isOpen, onToggle, onClose }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-base hover:opacity-70 transition-opacity"
      >
        {trigger}
        {items && items.length > 0 && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {items && items.length > 0 && isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white rounded-lg shadow-lg border border-stroke-soft py-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-base text-text-strong hover:bg-bg-soft transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


