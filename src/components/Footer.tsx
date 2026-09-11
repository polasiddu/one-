import React from 'react';
import { Phone, MapPin, Clock, Globe, ShieldCheck, Star, Navigation, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ASSET_IMAGES } from '../assets/images';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-850 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-850">
          {/* Brand & Credibility Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex-shrink-0">
                <img
                  src={ASSET_IMAGES.carServiceLogo}
                  alt="ONE STOP CAR SERVICES Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                  <span className="text-red-600">ONE STOP</span> CAR SERVICES
                </span>
                <span className="text-xs text-neutral-400 font-semibold tracking-wider uppercase">
                  AUTOMOBILE WORKSHOP
                </span>
              </div>
            </div>

            <div className="text-emerald-400 font-heading font-bold text-sm tracking-wider">
              “TRUST US… WE DO CARE”
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Sadashivpet’s trusted 24-hour multibrand car service centre. 
              Comprehensive diagnostics, repairs, scheduled servicing, and 24/7 towing recovery.
            </p>

            {/* Ratings Summary */}
            <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold text-white text-sm">4.9 / 5.0 Rating</span>
              </div>
              <span className="text-neutral-400 font-medium">91+ Combined Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Workshop &amp; Services
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#workshop" className="hover:text-red-400 transition-colors">Our Physical Workshop</a></li>
              <li><a href="#why-us" className="hover:text-red-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-red-400 transition-colors">Verified Customer Reviews</a></li>
              <li><a href="#towing" className="hover:text-red-400 transition-colors text-red-400 font-semibold">24-Hour Car Towing Services</a></li>
              <li><a href="#location" className="hover:text-red-400 transition-colors">Location &amp; Directions</a></li>
            </ul>
          </div>

          {/* Business Hours & Workshop Verification */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Workshop Status
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-bold">
                Open 24 Hours / 7 Days
              </div>
              <p className="text-neutral-400">
                Day service, evening vehicle pick-up, and midnight emergency assistance.
              </p>
              <div className="pt-2 text-neutral-400">
                <span className="text-white font-semibold">Experience:</span> 4 Years in Automobile Business
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Contact Workshop
            </div>
            <div className="space-y-3 text-xs">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-neutral-300 hover:text-white group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-emerald-400 font-semibold">WhatsApp Chat (Instant)</div>
                  <strong className="text-sm font-bold text-white group-hover:text-emerald-400">{BUSINESS_INFO.whatsapp}</strong>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-2 text-neutral-300 hover:text-white group"
              >
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold">Direct 24/7 Phone</div>
                  <strong className="text-sm font-bold text-white group-hover:text-red-400">{BUSINESS_INFO.phone}</strong>
                </div>
              </a>

              <div className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <a
                href={`https://${BUSINESS_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white"
              >
                <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.website}</span>
              </a>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-500" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. • Multibrand Car Services in Sadashivpet.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
