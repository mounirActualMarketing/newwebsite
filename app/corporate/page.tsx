import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/corporate/HeroSection';
import HowYouStudySection from '../components/sections/corporate/HowYouStudySection';
import WhatYouLearnSection from '../components/sections/english-teens/WhatYouLearnSection';
import EnglishTestSection from '../components/sections/english-teens/EnglishTestSection';
import CourseDurationSection from '../components/sections/english-teens/CourseDurationSection';
import PersonalizedPlanSection from '../components/sections/corporate/PersonalizedPlanSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function CorporatePage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        <HowYouStudySection />
        <WhatYouLearnSection />
        <EnglishTestSection />
        <CourseDurationSection />
        <PersonalizedPlanSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

