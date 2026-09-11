import React from 'react';
import { Phone, Navigation, Wrench, MessageSquare, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onEmergencyClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  onEmergencyClick,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-neutral-950/98 backdrop-blur-lg border-t border-neutral-800 p-2 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-4 gap-1.5 items-center">
        {/* Call Now Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          id="mobile-sticky-call-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-600 active:bg-red-700 text-white font-bold text-[11px] leading-tight text-center shadow-lg"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919603195555?text=${encodeURIComponent('Hello ONE STOP CAR SERVICES, I need car service assistance in Sadashivpet.')}`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-[11px] leading-tight text-center"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Service */}
        <button
          onClick={onOpenBooking}
          id="mobile-sticky-book-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-800 active:bg-neutral-700 text-neutral-100 font-bold text-[11px] leading-tight text-center border border-neutral-700 cursor-pointer"
        >
          <Wrench className="w-4 h-4 mb-0.5 text-red-500" />
          <span>Book Service</span>
        </button>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-directions-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 active:bg-neutral-800 text-neutral-200 font-bold text-[11px] leading-tight text-center border border-neutral-800"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-sky-400" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
