import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Wrench, Menu, X, ShieldCheck, AlertTriangle, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ASSET_IMAGES } from '../assets/images';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
  onEmergencyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onEmergencyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar - 24/7 & Emergency Notice */}
      <div className="bg-neutral-900 border-b border-neutral-800 text-xs sm:text-sm text-neutral-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 font-semibold text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              OPEN 24 HOURS
            </span>
            <span className="hidden sm:inline-block text-neutral-400">
              Trusted Multibrand Automobile Centre in Sadashivpet
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="top-bar-whatsapp-link"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-400" />
              <span>WhatsApp: <strong className="font-bold">9603195555</strong></span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="top-bar-phone-link"
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>24/7 Helpline: <strong className="text-white font-bold">{BUSINESS_INFO.phone}</strong></span>
            </a>
            <span className="text-neutral-700 hidden md:inline">|</span>
            <button
              onClick={onEmergencyClick}
              id="top-bar-emergency-btn"
              className="hidden md:flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              24h Towing Assistance
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-neutral-950 border-b border-neutral-850 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" id="brand-logo-link" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 flex-shrink-0 shadow-lg group-hover:border-red-600/50 transition-colors">
              <img
                src={ASSET_IMAGES.carServiceLogo}
                alt="ONE STOP CAR SERVICES Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  <span className="text-red-600">ONE STOP</span>
                  <span className="text-emerald-500 text-sm sm:text-base font-semibold">CAR SERVICES</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                <span className="text-neutral-400 tracking-wider font-semibold uppercase">AUTOMOBILE WORKSHOP</span>
                <span className="text-neutral-600">•</span>
                <span className="text-red-400 font-medium italic">“TRUST US… WE DO CARE”</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#workshop" className="hover:text-red-400 transition-colors">Our Workshop</a>
            <a href="#why-us" className="hover:text-red-400 transition-colors">Why Choose Us</a>
            <a href="#reviews" className="hover:text-red-400 transition-colors flex items-center gap-1.5">
              <span>Reviews</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                4.9★
              </span>
            </a>
            <a href="#towing" className="hover:text-red-400 transition-colors text-red-400 flex items-center gap-1">
              <span>24h Towing</span>
            </a>
            <a href="#location" className="hover:text-red-400 transition-colors">Location</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 hover:text-emerald-300 font-bold text-sm border border-emerald-500/40 hover:border-emerald-500/70 transition-all shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp: 9603195555</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="header-call-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white font-semibold text-sm border border-neutral-750 hover:border-red-500/50 transition-all shadow-md group"
            >
              <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="header-book-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-lg shadow-red-900/30 hover:shadow-red-800/50 transition-all cursor-pointer"
            >
              <Wrench className="w-4 h-4" />
              <span>Get Service</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp 9603195555"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-red-600 text-white"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-850 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300 font-medium justify-end">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>4.9★ (91+ Reviews)</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-base font-medium text-neutral-200">
              <a
                href="#workshop"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-neutral-900 hover:text-red-400 transition-colors"
              >
                Our Physical Workshop
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-neutral-900 hover:text-red-400 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-neutral-900 hover:text-red-400 transition-colors flex items-center justify-between"
              >
                <span>Customer Reviews</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">4.9★</span>
              </a>
              <a
                href="#towing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-red-950/40 border border-red-900/50 text-red-400 font-semibold flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>24/7 Car Towing &amp; Breakdown</span>
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-neutral-900 hover:text-red-400 transition-colors"
              >
                Workshop Location &amp; Map
              </a>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp: 9603195555</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 border border-neutral-750 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Get Service</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
