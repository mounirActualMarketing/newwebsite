import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/ielts/HeroSection';
import LevelTable from '../components/sections/ielts/LevelTable';
import WhatYouLearn from '../components/sections/ielts/WhatYouLearn';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function IELTSPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        <LevelTable />
        <WhatYouLearn />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

