import TopBar from '../../components/navigation/TopBar';
import MainNav from '../../components/navigation/MainNav';
import CityHeroSection from '../../components/sections/centers/city/CityHeroSection';
import CityCentersListSection from '../../components/sections/centers/city/CityCentersListSection';
import HabitsSection from '../../components/sections/centers/city/HabitsSection';
import ContactForm from '../../components/sections/ContactForm';
import Footer from '../../components/Footer';

// City data configuration
const cityData: Record<string, {
  name: string;
  pinPositions: Array<{ left: string; top: string }>;
  centers: Array<{
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    image: string;
  }>;
}> = {
  riyadh: {
    name: 'Riyadh',
    pinPositions: [
      { left: '645px', top: '295px' },
      { left: '184px', top: '312px' },
      { left: '399px', top: '131px' },
      { left: '924px', top: '13px' },
    ],
    centers: [
      {
        id: 1,
        name: 'Riyadh As-Suwaidi Men',
        address: 'Southern Ring Branch Rd',
        city: 'As Suwaidi, 03599',
        phone: '0172280003',
        image: 'https://placehold.co/187x199',
      },
      {
        id: 2,
        name: 'Riyadh - As Suwaidi - Ladies',
        address: 'Western Ring, Exit 26 Opposite Jarir Bookstore',
        city: 'As Suwaidi, 02513',
        phone: '0172280003',
        image: 'https://placehold.co/187x199',
      },
      {
        id: 3,
        name: 'Riyadh - Salah Ad Din - Men',
        address: 'King Abdulaziz Road, Beside Annafoura Restaurant and Java Time Café.',
        city: 'Salah Ad Din, 12432',
        phone: '0172280003',
        image: 'https://placehold.co/187x199',
      },
      {
        id: 4,
        name: 'Riyadh - Salah Ad Din - Ladies',
        address: 'King Abdulaziz Road, Beside Annafoura Restaurant and Java Time Café.',
        city: 'Salah Ad Din, 12432',
        phone: '0172280003',
        image: 'https://placehold.co/187x199',
      },
    ],
  },
  jeddah: {
    name: 'Jeddah',
    pinPositions: [
      { left: '545px', top: '395px' },
      { left: '284px', top: '212px' },
    ],
    centers: [
      {
        id: 1,
        name: 'Jeddah - Main',
        address: 'King Fahd Road, Al Rawdah District',
        city: 'Jeddah, 23433',
        phone: '0122280003',
        image: 'https://placehold.co/187x199',
      },
      {
        id: 2,
        name: 'Jeddah - North',
        address: 'Prince Sultan Street, Al Zahraa',
        city: 'Jeddah, 23521',
        phone: '0122280004',
        image: 'https://placehold.co/187x199',
      },
    ],
  },
  // Add more cities as needed
};

interface CityPageProps {
  params: {
    city: string;
  };
}

export default function CityPage({ params }: CityPageProps) {
  const citySlug = params.city.toLowerCase();
  const city = cityData[citySlug] || cityData.riyadh; // Default to Riyadh if city not found

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TopBar />
      <MainNav />
      <main>
        <CityHeroSection 
          cityName={city.name} 
          pinPositions={city.pinPositions}
        />
        <CityCentersListSection 
          cityName={city.name}
          centers={city.centers}
        />
        <HabitsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

// Generate static params for known cities
export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }));
}

