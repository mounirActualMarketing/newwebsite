import TopBar from '../components/navigation/TopBar';
import MainNav from '../components/navigation/MainNav';
import HeroSection from '../components/sections/blog/HeroSection';
import BlogGridSection from '../components/sections/blog/BlogGridSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <HeroSection />
        <BlogGridSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

