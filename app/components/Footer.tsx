'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Button from './ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="w-full px-4 md:px-12 lg:px-24 py-12 md:py-16 pb-8 md:pb-12 bg-primary text-white flex flex-col gap-8 md:gap-10">
      {/* Top Section */}
      <div className="pb-8 md:pb-10 border-b border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left: Logo and Description */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
          <Image
            src="/footer/logo.png"
            alt="Wall Street English"
            width={184}
            height={141}
            className="w-32 h-auto md:w-[184px]"
          />
          <p className="text-lg md:text-2xl max-w-[281px] leading-relaxed">
            We&apos;re the creators of the world&apos;s most effective English learning system.
          </p>
        </div>

        {/* Right: Review Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 overflow-x-auto w-full lg:w-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4 shrink-0">
              <Image
                src="/footer/Wreath left.svg"
                alt="Wreath left"
                width={29}
                height={65}
                className="w-6 h-auto md:w-[29px]"
              />
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs font-semibold text-white/90 text-center leading-tight">
                    best language training company
                  </span>
                  <span className="text-[8px] md:text-[10px] text-white/70">2,000+ reviews</span>
                </div>
              </div>
              <Image
                src="/footer/Wreath right.svg"
                alt="Wreath right"
                width={29}
                height={65}
                className="w-6 h-auto md:w-[29px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
        {/* Left: Address & Newsletter */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-[613px] w-full">
          {/* Headquarters */}
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-sm md:text-base text-text-soft">OUR HEADQUARTER</span>
            <p className="text-base md:text-lg leading-tight">
              شارع الأمير سعود الفيصل, Ar Rawdah, Jeddah 23433, Arab Saudi
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3 md:gap-4 max-w-[442px]">
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Join our newsletter. We&apos;ll send you a nice letter once per week. No spam.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm md:text-base text-white placeholder:text-white/40 outline-none focus:border-white/40"
                required
              />
              <Button variant="primary" size="base" type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Right: Social & Contact */}
        <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-auto">
          {/* Social Media */}
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-sm md:text-base text-text-soft">SOCIAL MEDIA</span>
            <div className="flex items-center flex-wrap gap-6 md:gap-12">
              <a href="#" className="text-sm md:text-base hover:text-white/70 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm md:text-base hover:text-white/70 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm md:text-base hover:text-white/70 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm md:text-base hover:text-white/70 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-sm md:text-base text-text-soft">CONTACT</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-12">
              <a
                href="mailto:info@wse.edu.sa"
                className="text-sm md:text-base hover:text-white/70 transition-colors"
              >
                info@wse.edu.sa
              </a>
              <a
                href="tel:+966512345678"
                className="text-sm md:text-base hover:text-white/70 transition-colors"
              >
                +966 5 1234 5678
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 md:pt-8 border-t border-[#345C7A]">
        <p className="text-sm md:text-base text-[#8A9FAF] text-center sm:text-left">
          © 2026 Wall street English. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

