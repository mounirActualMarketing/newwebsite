import TopBar from './components/navigation/TopBar';
import MainNav from './components/navigation/MainNav';
import Hero from './components/sections/Hero';
import StatsSection from './components/sections/StatsSection';
import ValuesSection from './components/sections/ValuesSection';
import MethodologySection from './components/sections/MethodologySection';
import CoursesSection from './components/sections/CoursesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import CentersSection from './components/sections/CentersSection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import FAQSection from './components/sections/FAQSection';
import CollaborationsSection from './components/sections/CollaborationsSection';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navigation */}
      <TopBar />
      <MainNav />

      {/* Main Content */}
      <main className="w-full">
        <Hero />
        <StatsSection />
        <ValuesSection />
        <MethodologySection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <CentersSection />
        <ActivitiesSection />
        <FAQSection />
        <CollaborationsSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
