import React from 'react';
import { MapPin, Clock, Wrench, Shield, CheckCircle, Navigation, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ASSET_IMAGES } from '../assets/images';

export const WorkshopShowcase: React.FC = () => {
  return (
    <section id="workshop" className="py-16 sm:py-20 bg-neutral-900 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-750 bg-neutral-950 shadow-2xl">
              <img
                src={ASSET_IMAGES.onestopCarServices}
                alt="Real physical service workshop of ONE STOP CAR SERVICES in Sadashivpet"
                className="w-full aspect-[16/10] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Physical Car Workshop</span>
                    <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                      ONE STOP CAR SERVICES
                    </h4>
                    <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      Near Ayyapa Temple, Ravindra Nagar, Sadashivpet, Telangana 502291
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 text-xs font-bold">
                    Open 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-gallery with mechanic diagnostics & towing vehicle */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 group">
                <img
                  src={ASSET_IMAGES.mechanicBay}
                  alt="Mechanic diagnostic and repair bays"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent p-3 flex items-end">
                  <div>
                    <div className="text-xs font-bold text-white">Full Mechanic &amp; Diagnostic Bays</div>
                    <div className="text-[11px] text-neutral-400">Precision engine &amp; electrical testing</div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 group">
                <img
                  src={ASSET_IMAGES.towingRecovery}
                  alt="Car towing and breakdown recovery support"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent p-3 flex items-end">
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Roadside Car Towing</div>
                    <div className="text-[11px] text-neutral-400">Prompt recovery in &amp; around Sadashivpet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Details & Facts (Content) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-800 text-xs font-display uppercase tracking-widest text-emerald-400 font-bold">
                Authentic Automobile Garage
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                A Real, Fully-Equipped Service Centre in Sadashivpet
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Unlike online booking intermediaries, <strong className="text-white">ONE STOP CAR SERVICES</strong> operates a real, spacious physical automobile workshop equipped with multi-vehicle bays, hydraulic lifts, mechanic toolkits, and diagnostic gear.
              </p>
            </div>

            {/* Key Infrastructure Pillars */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Multibrand Car Service Bays</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Dedicated stations and hydraulic lifts for hatchbacks, sedans, and SUVs ensure swift turnaround without delay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">24-Hour Continuous Operation</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Open around the clock for late-night highway travelers, early morning commutes, and emergency mechanical fixes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prime Location in Ravindra Nagar</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Conveniently situated near Ayyapa Temple with easy access from town roads and regional highway traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="workshop-navigate-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-red-600" />
                <span>Navigate to Workshop</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-white font-bold text-xs sm:text-sm border border-neutral-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Workshop: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
