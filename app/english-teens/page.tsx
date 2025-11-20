import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/english-teens/HeroSection';
import HowYouStudySection from '../components/sections/english-teens/HowYouStudySection';
import WhatYouLearnSection from '../components/sections/english-teens/WhatYouLearnSection';
import EnglishTestSection from '../components/sections/english-teens/EnglishTestSection';
import CourseDurationSection from '../components/sections/english-teens/CourseDurationSection';
import CoursePlanSection from '../components/sections/english-teens/CoursePlanSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function EnglishTeensPage() {
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
        <CoursePlanSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

