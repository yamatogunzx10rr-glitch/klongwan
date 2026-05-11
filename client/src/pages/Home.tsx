import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import BookingSection from '@/components/BookingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663418720708/c8Tr2Ej4Sn95uJ7Cw7Dzvi/hero-beach-resort-7F5Lunp4vhhk6YE9PAzxBv.png';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero backgroundImage={heroImage} />
        <BookingSection />
        <RoomsSection />
        <AmenitiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
