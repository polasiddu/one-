import React from 'react';
import { Truck, Phone, AlertCircle, Clock, MapPin, ShieldAlert, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ASSET_IMAGES } from '../assets/images';

interface TowingBannerProps {
  onCallTowing?: () => void;
}

export const EmergencyTowingBanner: React.FC<TowingBannerProps> = () => {
  return (
    <section id="towing" className="py-14 sm:py-18 bg-gradient-to-b from-neutral-950 via-red-950/20 to-neutral-950 border-b border-neutral-850 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="rounded-3xl bg-neutral-900/90 border border-red-900/40 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          {/* Subtle Top Red Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-emerald-500 to-red-600" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-700/60 text-xs font-bold text-red-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                24-Hour Breakdown Recovery &amp; Towing Support
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Stranded with a Car Breakdown in or Around Sadashivpet?
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Whether you are on national highway stretches, town roads, or experiencing starting failure at midnight, our 
                <strong className="text-white"> 24-hour car towing support</strong> is available on call. 
                We safely recover your vehicle and transport it straight to our fully equipped service workshop near Ayyapa Temple.
              </p>

              {/* Towing Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>24/7 Day &amp; Night Recovery Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Prompt Response along Sadashivpet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Direct Transport to Workshop Bays</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span>On-the-spot Diagnostics Available</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  id="emergency-call-towing-btn"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-base shadow-xl shadow-red-950/60 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>Call Towing Hotline: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/919603195555?text=${encodeURIComponent('Hello ONE STOP CAR SERVICES, I need emergency car towing / breakdown assistance near Sadashivpet. My vehicle location:')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="emergency-whatsapp-towing-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>WhatsApp Location to 9603195555</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Towing Visual Side */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-xl relative">
                <img
                  src={ASSET_IMAGES.towingRecovery}
                  alt="Car towing vehicle recovery assistance"
                  className="w-full aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Response Area:</span>
                  <span className="text-white font-semibold">Sadashivpet, NH-65 &amp; Nearby Localities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
