'use client';

import Image from 'next/image';

const topTeamMembers = [
  {
    name: 'Ahmed Al-Qahtani',
    role: 'Senior English Instructor',
    description: 'Known for his energy and empathy in the classroom, Ahmed helps learners overcome fear and start speaking English with confidence — fast.',
    image: 'https://placehold.co/309x300',
  },
  {
    name: 'Reem Al-Mutairi',
    role: 'Student Support Advisor',
    description: 'Reem guides students through their learning plans and assessments, making sure they stay on track, motivated, and supported every step of the way.',
    image: 'https://placehold.co/309x300',
  },
];

const bottomTeamMembers = [
  {
    name: 'Yasir Al-Jabari',
    role: 'Language Assessment Coordinator',
    description: 'Yasir oversees the assessment processes for English proficiency, ensuring fairness and accuracy while providing feedback to help students improve.',
    image: 'https://placehold.co/288x300',
  },
  {
    name: 'Khaled Al-Zahrani',
    role: 'Cultural Exchange Coordinator',
    description: 'Khaled facilitates cultural exchange programs that immerse students in real-life English-speaking environments, enhancing their language and cultural awareness.',
    image: 'https://placehold.co/288x300',
  },
  {
    name: 'Omar Al-Hassan',
    role: 'ESL Instructor',
    description: 'Omar specializes in teaching English as a second language, utilizing innovative methods to engage students and enhance their linguistic skills.',
    image: 'https://placehold.co/288x300',
  },
  {
    name: 'Tariq Al-Nasser',
    role: 'Technology Integration Specialist',
    description: 'Tariq incorporates digital tools and resources into English language teaching, enhancing the learning experience through technology-driven methodologies.',
    image: 'https://placehold.co/288x300',
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Header & Top Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10">
          {/* Header */}
          <div className="flex-1 flex flex-col gap-4 max-w-[558px]">
            <p className="text-lg md:text-xl font-bold text-primary-blue font-heading">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58.08px] text-text-strong font-heading capitalize">
              Meet the Passionate Team Behind Your Progress
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-text-strong/64 max-w-[446px]">
              At Wall Street English KSA, our people make the difference. From experienced instructors to supportive advisors, our team is passionate about helping learners across Saudi Arabia gain confidence in English — and unlock new opportunities in life, work, and education.
            </p>
          </div>

          {/* Top Team Members */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
            {topTeamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-4 w-full sm:w-[280px] md:w-[309px]">
                <div className="relative w-full h-[300px] rounded overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg md:text-xl font-bold text-text-strong font-heading capitalize">
                      {member.name}
                    </h3>
                    <p className="text-base text-text-strong">
                      {member.role}
                    </p>
                  </div>
                  <div className="h-px bg-[#D9D9D9]" />
                  <p className="text-sm leading-relaxed text-text-strong/70">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Team Members */}
        <div className="w-full overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-w-max md:min-w-0">
            {bottomTeamMembers.map((member, index) => (
              <div key={index} className="flex flex-col gap-4 w-[280px] md:w-auto shrink-0 md:shrink">
                <div className="relative w-full h-[300px] rounded overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg md:text-xl font-bold text-text-strong font-heading capitalize">
                      {member.name}
                    </h3>
                    <p className="text-base text-text-strong">
                      {member.role}
                    </p>
                  </div>
                  <div className="h-px bg-[#D9D9D9]" />
                  <p className="text-sm leading-relaxed text-text-strong/70">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

