import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  required,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-text-strong">
        {label}
        {required && <span className="text-primary-red">*</span>}
      </label>
      <input
        className={`px-3 py-3 bg-white border rounded-lg outline-none transition-colors ${
          error
            ? 'border-primary-red focus:border-primary-red'
            : 'border-stroke-sub focus:border-primary-blue'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-primary-red">{error}</span>}
    </div>
  );
}


