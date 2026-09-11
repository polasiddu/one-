import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WorkshopShowcase } from './components/WorkshopShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EmergencyTowingBanner } from './components/EmergencyTowingBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { QuickEnquirySection } from './components/QuickEnquirySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<'car' | 'bike' | 'support' | undefined>();

  const handleOpenBooking = (serviceName?: string, category?: 'car' | 'bike' | 'support') => {
    setSelectedServiceName(serviceName);
    setSelectedCategory(category);
    setIsBookingOpen(true);
  };

  const handleEmergencyClick = () => {
    setSelectedServiceName('Car towing services');
    setSelectedCategory('support');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Authority & Hero Presentation */}
        <Hero
          onOpenBooking={(category) => handleOpenBooking(undefined, category as any)}
          onEmergencyClick={handleEmergencyClick}
        />

        {/* Verified Proof & Stats Bar */}
        <TrustBar />

        {/* Authentic Physical Workshop Showcase */}
        <WorkshopShowcase />

        {/* Why Choose Us: 6 Core Customer Feedback Themes */}
        <WhyChooseUs />

        {/* 24-Hour Emergency Towing & Roadside Recovery */}
        <EmergencyTowingBanner onCallTowing={handleEmergencyClick} />

        {/* Verified Customer Reviews & Ratings (Google 4.9★, Justdial 4.9★) */}
        <ReviewsSection />

        {/* Quick In-Page Callback & Quote Request */}
        <QuickEnquirySection />

        {/* Physical Location, Landmark Guide & Google Maps Directions */}
        <LocationSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Service Booking & Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedServiceName}
        initialCategory={selectedCategory}
      />

      {/* Mobile Sticky Conversion Action Bar */}
      <MobileStickyBar
        onOpenBooking={() => handleOpenBooking()}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Floating Direct WhatsApp Button: 9603195555 */}
      <FloatingWhatsApp />
    </div>
  );
}
