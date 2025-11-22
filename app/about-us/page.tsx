import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/about-us/HeroSection';
import StoryMissionSection from '../components/sections/about-us/StoryMissionSection';
import MethodologySection from '../components/sections/about-us/MethodologySection';
import ValuesSection from '../components/sections/about-us/ValuesSection';
import VideoShowcaseSection from '../components/sections/about-us/VideoShowcaseSection';
import TeamSection from '../components/sections/about-us/TeamSection';
import ImpactSection from '../components/sections/about-us/ImpactSection';
import CentersSection from '../components/sections/CentersSection';
import CultureSection from '../components/sections/about-us/CultureSection';
import TrustSection from '../components/sections/about-us/TrustSection';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        <StoryMissionSection />
        <MethodologySection />
        <ValuesSection />
        <VideoShowcaseSection />
        <TeamSection />
        <ImpactSection />
        <CentersSection />
        <CultureSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

