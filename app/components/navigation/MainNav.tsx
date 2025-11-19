'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from '../ui/Dropdown';

export default function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: 'How You Learn',
      items: [
        { label: 'Our Method', href: '#methodology' },
        { label: 'Learning Journey', href: '#journey' },
        { label: 'Success Stories', href: '#testimonials' },
      ],
    },
    {
      label: 'English Courses',
      items: [
        { label: 'Adult English', href: '#courses' },
        { label: 'Business English', href: '#courses' },
        { label: 'IELTS Preparation', href: '#courses' },
        { label: 'Online Courses', href: '#courses' },
      ],
    },
    {
      label: 'Corporate',
      href: '#corporate',
    },
    {
      label: 'Centers',
      href: '#centers',
    },
    {
      label: 'Resources',
      items: [
        { label: 'Blog', href: '#blog' },
        { label: 'FAQs', href: '#faq' },
        { label: 'Downloads', href: '#downloads' },
      ],
    },
    {
      label: 'Franchise',
      href: '#franchise',
    },
  ];

  return (
    <div className="w-full h-[72px] px-4 md:px-12 lg:px-24 bg-white border-b border-stroke-soft sticky top-0 z-40 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center h-8 md:h-10">
          <Image
            src="/logo.png"
            alt="Wall Street English"
            width={53}
            height={41}
            className="w-auto h-full"
          />
        </div>

        {/* Navigation Items */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.items ? (
                <Dropdown
                  trigger={<span className="text-base text-text-strong">{item.label}</span>}
                  items={item.items}
                  isOpen={activeDropdown === item.label}
                  onToggle={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                  onClose={() => setActiveDropdown(null)}
                />
              ) : (
                <a
                  href={item.href}
                  className="text-base text-text-strong hover:text-primary-blue transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}


