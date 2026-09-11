import React from 'react';
import { Phone, Wrench, Navigation, ShieldCheck, Star, Clock, AlertTriangle, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ASSET_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: (serviceCategory?: string) => void;
  onEmergencyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onEmergencyClick }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-850">
      {/* Background Workshop Image with High-Contrast Dark Gradient & Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSET_IMAGES.onestopCarServices}
          alt="ONE STOP CAR SERVICES workshop background"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.15] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrims for pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/92 to-neutral-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/40 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/25 via-transparent to-neutral-950/80" />
      </div>

      {/* Automotive Mesh & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Badges: Location & 24H Status */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-750 text-neutral-300 text-xs font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-white font-bold">Sadashivpet, Telangana</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">Near Ayyapa Temple, Ravindra Nagar</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-red-400" />
            <span>24-Hour Service &amp; Breakdown Recovery</span>
          </div>

          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/50 text-amber-300 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9★ Rating</span>
            <span className="text-amber-400/70 font-normal">(44 Google + 47 Justdial)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Copy & CTAs (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-block">
                <span className="px-3 py-1 text-xs font-display tracking-widest uppercase font-bold text-red-400 bg-red-950/50 border border-red-800/40 rounded-md">
                  Multibrand Car Automobile Workshop
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-[1.08]">
                ONE STOP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
                  CAR SERVICES
                </span>
              </h1>

              {/* Tagline from User Fact Sheet */}
              <div className="flex items-center gap-2 pt-1">
                <div className="h-0.5 w-8 bg-emerald-500 rounded" />
                <p className="text-base sm:text-lg font-heading font-bold text-emerald-400 tracking-wider uppercase">
                  “TRUST US… WE DO CARE”
                </p>
                <div className="h-0.5 w-8 bg-emerald-500 rounded" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Sadashivpet’s trusted 24-hour service centre for <strong className="text-white font-semibold">multibrand cars</strong>. 
              We deliver complete vehicle inspection, periodic maintenance, mechanic repairs, and round-the-clock towing support — backed by 4 years of proven local workmanship.
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">Multibrand Cars Handled</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">24/7 Car Towing</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium">Honest &amp; Fair Pricing</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3.5">
              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="hero-call-cta-btn"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-base shadow-xl shadow-red-950/60 border border-red-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-red-100 uppercase tracking-wider font-semibold">24-Hour Direct Line</div>
                  <div className="text-lg font-extrabold">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              {/* WhatsApp Chat Button */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta-btn"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base shadow-xl shadow-emerald-950/50 border border-emerald-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-emerald-100 uppercase tracking-wider font-semibold">Direct WhatsApp</div>
                  <div className="text-lg font-extrabold">{BUSINESS_INFO.whatsapp}</div>
                </div>
              </a>

              {/* Get Service */}
              <button
                onClick={() => onOpenBooking()}
                id="hero-book-cta-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white font-heading font-bold text-base border border-neutral-750 hover:border-emerald-500/50 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Wrench className="w-5 h-5 text-emerald-400" />
                <span>Get Car Service</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>

              {/* Get Directions */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-cta-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-neutral-900/70 hover:bg-neutral-850 text-neutral-200 hover:text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Emergency Towing Bar Prompt */}
            <div className="pt-2">
              <button
                onClick={onEmergencyClick}
                id="hero-emergency-towing-banner-btn"
                className="w-full text-left p-3.5 rounded-xl bg-red-950/40 border border-red-900/60 hover:bg-red-950/60 transition-colors flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-400 flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wide">Vehicle Breakdown on Road?</span>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      Need emergency car towing in or around Sadashivpet? We respond 24 hours.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                  Request Towing &rarr;
                </span>
              </button>
            </div>
          </div>

          {/* Authentic Workshop & 3D Logo Showcase (Right Column) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Real Workshop Card */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl group">
              {/* Badge Overlay */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-700 text-neutral-200 text-xs font-semibold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  ONE STOP CAR SERVICES • Sadashivpet
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 text-white text-xs font-bold shadow-lg">
                  Open 24 Hours
                </span>
              </div>

              {/* Exterior Workshop Image */}
              <div className="aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={ASSET_IMAGES.onestopCarServices}
                  alt="ONE STOP CAR SERVICES real multibrand car workshop in Sadashivpet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Workshop Credentials Footnote */}
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Workshop Location:</span>
                  <span className="text-neutral-200 font-semibold">Near Ayyapa Temple, Ravindra Nagar</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Dedicated Facilities:</span>
                  <span className="text-emerald-400 font-semibold">Multibrand Cars, Diagnostics &amp; 24h Towing</span>
                </div>
              </div>
            </div>

            {/* Side-by-Side Dual Badge: 3D Wall Logo & Reputation */}
            <div className="grid grid-cols-2 gap-3">
              {/* Logo Emblem Card */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-neutral-750 flex-shrink-0 bg-neutral-950">
                  <img
                    src={ASSET_IMAGES.carServiceLogo}
                    alt="ONE STOP CAR SERVICES 3D Emblem"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase leading-tight">ONE STOP CARS</div>
                  <div className="text-[11px] text-neutral-400">4 Years of Local Trust</div>
                </div>
              </div>

              {/* Google & Justdial Rating Card */}
              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-sm font-extrabold text-white">4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Google (44) + Justdial (47)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
