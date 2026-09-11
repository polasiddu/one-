import React, { useState } from 'react';
import { Car, Bike, Truck, Check, ArrowRight, ShieldCheck, Clock, Wrench } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'car' | 'bike' | 'support'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-display uppercase tracking-widest text-red-500 font-bold">
            Complete Vehicle Care in Sadashivpet
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Services for <span className="text-red-500">Cars</span>, <span className="text-emerald-400">Bikes</span> &amp; Breakdown Support
          </h2>
          <p className="text-base text-neutral-300">
            We handle <strong className="text-white font-semibold">both cars and two-wheelers</strong> across all major automotive makes. 
            From scheduled multibrand servicing to urgent mechanical repair and 24-hour car towing.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 border-b border-neutral-800 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            id="tab-all-services"
            className={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <span>All Services</span>
            <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 font-mono">8</span>
          </button>

          <button
            onClick={() => setActiveTab('car')}
            id="tab-car-services"
            className={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'car'
                ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Car Services</span>
            <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 font-mono">4</span>
          </button>

          <button
            onClick={() => setActiveTab('bike')}
            id="tab-bike-services"
            className={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'bike'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Bike className="w-4 h-4" />
            <span>Bike Services</span>
            <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 font-mono">2</span>
          </button>

          <button
            onClick={() => setActiveTab('support')}
            id="tab-support-services"
            className={`px-4 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'support'
                ? 'bg-neutral-100 text-neutral-950 shadow-lg'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Additional Support &amp; Towing</span>
            <span className="text-xs px-1.5 py-0.2 rounded bg-black/30 font-mono">2</span>
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const isCar = service.category === 'car';
            const isBike = service.category === 'bike';
            const isSupport = service.category === 'support';

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all p-6 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Top Category Badge & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isCar
                          ? 'bg-red-950/80 border border-red-800/60 text-red-400'
                          : isBike
                          ? 'bg-emerald-950/80 border border-emerald-800/60 text-emerald-400'
                          : 'bg-neutral-800 border border-neutral-700 text-neutral-200'
                      }`}
                    >
                      {isCar && <Car className="w-3.5 h-3.5" />}
                      {isBike && <Bike className="w-3.5 h-3.5" />}
                      {isSupport && <Truck className="w-3.5 h-3.5" />}
                      <span>
                        {isCar ? 'Car Service' : isBike ? 'Two-Wheeler Service' : 'Additional Support'}
                      </span>
                    </span>

                    {service.duration && (
                      <span className="text-xs text-neutral-400 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-neutral-500" />
                        {service.duration}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-emerald-400/90 font-medium mt-1">
                      {service.vehicleTypes}
                    </p>
                    <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 border-t border-neutral-800/80">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">
                      Service Scope Includes:
                    </div>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    Quick call: <strong className="text-neutral-200">{BUSINESS_INFO.phone}</strong>
                  </a>

                  <button
                    onClick={() => onSelectService(service)}
                    id={`book-service-${service.id}-btn`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-red-600 text-white text-xs sm:text-sm font-bold transition-all group-hover:bg-red-600 cursor-pointer shadow-md"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multibrand Confidence Strip */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Multibrand Automobile &amp; Bike Coverage</div>
              <p className="text-xs text-neutral-400">
                Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, Hero, TVS, Bajaj, Royal Enfield &amp; all other brands.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-white text-xs sm:text-sm font-bold border border-neutral-700 text-center transition-colors"
          >
            Call Mechanic: {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
