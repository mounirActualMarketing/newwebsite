'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  label: string;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export default function Select({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  required,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-text-strong">
        {label}
        {required && <span className="text-primary-red">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-3 bg-white border rounded-lg outline-none appearance-none transition-colors ${
            error
              ? 'border-primary-red focus:border-primary-red'
              : 'border-stroke-sub focus:border-primary-blue'
          } ${!value ? 'text-text-soft' : 'text-text-strong'}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
      </div>
      {error && <span className="text-sm text-primary-red">{error}</span>}
    </div>
  );
}


