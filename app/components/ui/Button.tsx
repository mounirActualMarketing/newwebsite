import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'base' | 'large';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'base',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-primary-red text-white hover:bg-red-600',
    secondary: 'bg-primary-cyan text-primary hover:bg-cyan-400',
    outline: 'border border-white/50 text-white hover:bg-white/10',
  };
  
  const sizeStyles = {
    base: 'px-6 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


