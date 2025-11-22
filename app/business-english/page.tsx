import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/business-english/HeroSection';
import MethodologySection from '../components/sections/business-english/MethodologySection';
import StudyPlanSection from '../components/sections/business-english/StudyPlanSection';
import CTASection from '../components/sections/business-english/CTASection';
import CentersSection from '../components/sections/business-english/CentersSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function BusinessEnglishPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        <MethodologySection />
        <StudyPlanSection />
        <CTASection />
        <CentersSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

