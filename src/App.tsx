import { useCallback, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { type WisoService } from '@/data/wisoData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { ServiceModal } from '@/components/ServiceModal';
import { WhyWisoBento } from '@/components/WhyWisoBento';
import { ProductShowcase } from '@/components/ProductShowcase';
import { ServiceAreaSection } from '@/components/ServiceAreaSection';
import { TipsSection } from '@/components/TipsSection';
import { BookingSection } from '@/components/BookingSection';
import { Footer } from '@/components/Footer';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('rioolreiniging');
  const [modalService, setModalService] = useState<WisoService | null>(null);
  const [prefilledCity, setPrefilledCity] = useState<string>('');

  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('aanvragen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookService = useCallback(
    (serviceId: string) => {
      setSelectedServiceId(serviceId);
      scrollToBooking();
    },
    [scrollToBooking],
  );

  const handleSelectCityAndBook = useCallback(
    (cityName: string) => {
      setPrefilledCity(cityName);
      scrollToBooking();
    },
    [scrollToBooking],
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#2D3134]">
        <Navbar onQuickBook={scrollToBooking} />

        <main>
          <Hero onSelectService={handleBookService} />
          <ServicesSection
            onOpenDetail={(service) => setModalService(service)}
            onBookService={handleBookService}
          />
          <WhyWisoBento onBookService={handleBookService} />
          <ProductShowcase onOrderProduct={handleBookService} />
          <ServiceAreaSection onSelectCityAndBook={handleSelectCityAndBook} />
          <TipsSection onBookMaintenance={handleBookService} />
          <BookingSection
            selectedServiceId={selectedServiceId}
            onServiceChange={setSelectedServiceId}
            prefilledCity={prefilledCity}
          />
        </main>

        <Footer onSelectService={handleBookService} />

        <ServiceModal
          service={modalService}
          onClose={() => setModalService(null)}
          onBookService={handleBookService}
        />
      </div>
    </MotionConfig>
  );
}
