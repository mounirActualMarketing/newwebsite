'use client';

import Image from 'next/image';

export default function VideoShowcaseSection() {
  return (
    <section className="w-full h-[400px] md:h-[600px] lg:h-[800px] relative overflow-hidden bg-white">
      <Image
        src="/about/ab3.png"
        alt="Wall Street English Showcase"
        fill
        className="object-cover"
      />
    </section>
  );
}

