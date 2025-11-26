export default function HeroSection() {
  return (
    <section className="relative h-[280px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/blog/hero.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1a2332]/70" />
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-sm leading-relaxed opacity-90">
          We share insights, practical tips, case studies, and inspiration — drawn from our experience designing and
          building digital products across industries.
        </p>
      </div>
    </section>
  );
}

