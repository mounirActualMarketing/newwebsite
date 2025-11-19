import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/online-courses/HeroSection';
import BenefitsSection from '../components/sections/online-courses/BenefitsSection';
import WhyChooseSection from '../components/sections/online-courses/WhyChooseSection';
import TrustSection from '../components/sections/online-courses/TrustSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function OnlineCoursesPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navigation */}
      <TopBar />
      <MainNav />

      {/* Main Content */}
      <main className="w-full">
        <HeroSection />
        <BenefitsSection />
        <WhyChooseSection />
        <TrustSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

