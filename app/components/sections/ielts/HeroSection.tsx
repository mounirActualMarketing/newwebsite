import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[450px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ielts/hero.jpg"
          alt="English Language Levels"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
          Guide to English language certificates and levels A1, A2, B1, B2, C1, and C2
        </h1>
        <p className="text-sm md:text-base text-white/90 max-w-3xl leading-relaxed">
          Wall Street English offers 20 levels of English, from beginner to advanced, aligned with the Common European
          Framework of Reference for Languages (CEFR). The CEFR is divided into six levels: A1, A2, B1, B2, C1, and C2.
          These levels assess writing, listening, reading, speaking, and pronunciation skills.
        </p>
      </div>
    </section>
  );
}

