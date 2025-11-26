'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Dropdown from '../ui/Dropdown';

export default function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
        { label: 'English for Teens', href: '/english-teens' },
        { label: 'Online Courses', href: '/online-courses' },
      ],
    },
    {
      label: 'Corporate',
      href: '#corporate',
    },
    {
      label: 'Centers',
      href: '/centers',
    },
    {
      label: 'About Us',
      href: '/about-us',
    },
    {
      label: 'Resources',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQs', href: '#faq' },
        { label: 'Downloads', href: '#downloads' },
      ],
    },
    {
      label: 'Franchise',
      href: '#franchise',
    },
  ];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <>
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-bg-soft rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-text-strong" />
            ) : (
              <Menu className="w-6 h-6 text-text-strong" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[280px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col py-4 overflow-y-auto h-full">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-stroke-soft">
              {item.items ? (
                <div>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between px-6 py-4 text-text-strong hover:bg-bg-soft transition-colors"
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdown === item.label ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-bg-soft/50 py-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-10 py-3 text-sm text-text-strong hover:text-primary-blue hover:bg-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-6 py-4 text-base font-medium text-text-strong hover:bg-bg-soft hover:text-primary-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}


