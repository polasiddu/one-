import React from 'react';
import { MapPin, Phone, Clock, Navigation, Globe, Shield, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Location Information (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-display uppercase tracking-widest text-red-500 font-bold">
                Visit or Contact
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Workshop Location in Sadashivpet
              </h2>
              <p className="text-sm sm:text-base text-neutral-300">
                Conveniently situated in Ravindra Nagar near Ayyapa Temple, offering effortless access for local town residents and vehicles traveling along regional highways.
              </p>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800/60 flex items-center justify-center text-red-500 flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Full Workshop Address
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    {BUSINESS_INFO.name}
                  </h4>
                  <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    Landmark: Near Ayyapa Temple, Ravindra Nagar
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-3 border-t border-neutral-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Operating Schedule
                  </div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">
                    Open 24 Hours • 7 Days a Week
                  </div>
                  <p className="text-xs text-neutral-400">
                    Day servicing, evening collections &amp; 24h night breakdown towing
                  </p>
                </div>
              </div>

              {/* Phone, WhatsApp & Website */}
              <div className="pt-3 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <div className="text-[11px] text-neutral-400 font-semibold uppercase">Telephone Helpline</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-sm font-bold text-white hover:text-red-400 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-emerald-400 font-semibold uppercase">WhatsApp Chat</div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{BUSINESS_INFO.whatsapp}</span>
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-400 font-semibold uppercase">Official Website</div>
                  <a
                    href={`https://${BUSINESS_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{BUSINESS_INFO.website}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Maps */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp: 9603195555</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-primary-btn"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-sm shadow-xl shadow-red-950/50 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-200" />
              </a>
            </div>
          </div>

          {/* Interactive Map & Route Guidance Card (Right) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl relative">
              {/* Top Map Bar */}
              <div className="p-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-white">Live Workshop Location:</span>
                  <span>Sadashivpet (PIN 502291)</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
                >
                  <span>Expand Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map View / Embed Container */}
              <div className="w-full h-80 sm:h-96 bg-neutral-950 relative">
                <iframe
                  title="ONE STOP CAR SERVICES Location Map in Sadashivpet"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Sadashivpet+Telangana+Ayyapa+Temple+Ravindra+Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />

                {/* Floating Map Pin Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-neutral-950/95 backdrop-blur-md border border-neutral-700 shadow-2xl space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{BUSINESS_INFO.name}</span>
                  </div>
                  <p className="text-[11px] text-neutral-300">
                    Near Ayyapa Temple, Ravindra Nagar, Sadashivpet
                  </p>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-neutral-400">
                    <span className="text-emerald-400 font-bold">24-Hour Gate Access</span>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 underline font-semibold"
                    >
                      Start GPS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Distance / Arrival Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="font-bold text-white">Sadashivpet Main Town</div>
                <div className="text-neutral-400 mt-0.5">Quick 3-5 min drive</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="font-bold text-white">NH-65 Highway Pass</div>
                <div className="text-neutral-400 mt-0.5">Direct link for travelers</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="font-bold text-white">Sangareddy / Zaheerabad</div>
                <div className="text-neutral-400 mt-0.5">24h Towing coverage corridor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
