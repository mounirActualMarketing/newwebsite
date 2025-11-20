'use client';

import Button from '../../ui/Button';

export default function EnglishTestSection() {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Red Background with Border Radius */}
        <div className="absolute inset-0 bg-primary-red rounded-tr-[82px]" />

        {/* Content Card */}
        <div className="relative container mx-auto px-4 md:px-24 h-full flex items-center justify-center">
          <div className="max-w-[1248px] w-full px-6 md:px-12 py-14 rounded-lg flex flex-col items-center gap-6 text-center">
            {/* Icon */}
            <div className="w-[106px] h-[106px] bg-[#F56C79] rounded-full flex items-center justify-center">
              <div className="w-[59px] h-[59px] relative">
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none">
                  <path d="M13.95 0h31.11v37.88H13.95z" fill="white" />
                  <path d="M0 17.29h59v41.71H0z" fill="white" />
                  <path d="M7.03 10.37h20.74v40H7.03z" fill="white" />
                  <path d="M31.23 10.37h20.74v40H31.23z" fill="white" />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-2 max-w-[462px]">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-bold capitalize leading-tight">
                Find your English level
              </h2>
              <p className="text-white text-base leading-relaxed">
                We offer you a complete English test to assess your level and a professional assessment of how to improve. Book an appointment today and find out your exact level for studying English.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="secondary" 
              className="bg-primary text-white hover:bg-primary/90"
            >
              Take an English Test
            </Button>
          </div>
        </div>

        {/* Decorative Accent */}
        <div className="absolute bottom-0 left-0 w-[716px] h-[34px] bg-[#64CFE9] rounded-tr-2xl" />
      </div>
    </section>
  );
}

