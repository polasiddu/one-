import React, { useState } from 'react';
import { Phone, MessageSquare, Wrench, Check, Clock, ShieldCheck, MapPin, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const QuickEnquirySection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Multibrand car servicing');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hi ONE STOP CAR SERVICES, I need an enquiry for my Car (${serviceNeeded}). Please share details.`;
    window.open(`https://wa.me/919603195555?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="enquire" className="py-16 sm:py-20 bg-neutral-900 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct Phone & Trust points */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-display uppercase tracking-widest text-emerald-400 font-bold">
                Fast Response Desk
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                Speak Directly with Our Workshop Mechanic
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Have questions about an unusual engine noise, scheduled service interval, or emergency breakdown in Sadashivpet? 
                Call us 24 hours a day for immediate, honest advice.
              </p>

              {/* Direct Phone Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Primary Workshop Hotline (Open 24 Hours)
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    id="quick-enquiry-call-phone-link"
                    className="text-2xl sm:text-3xl font-heading font-extrabold text-red-500 hover:text-red-400 transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                <div className="text-xs text-neutral-400 flex items-center gap-1.5 pt-1 border-t border-neutral-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Always available for emergency roadside calls &amp; bookings</span>
                </div>
              </div>

              {/* Workshop Tagline */}
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Motto: <strong className="text-white italic">“TRUST US… WE DO CARE”</strong></span>
              </div>
            </div>

            {/* Right Column: Quick In-Page Request Form */}
            <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">Callback Request Sent!</h4>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    We have received your number. Our mechanic will call you back shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleDirectWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Instead</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Request a Callback / Quick Quote
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      No obligation • Clear explanations • Fair pricing
                    </p>
                  </div>

                  {/* Service dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300 font-medium">Car Service Required</label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
                    >
                      <option value="Multibrand car servicing">Multibrand car servicing</option>
                      <option value="Car inspection">Car inspection &amp; diagnostics</option>
                      <option value="Car repair">Car repair (engine, suspension, brakes)</option>
                      <option value="Mechanical / mechanic services">Mechanical / mechanic services</option>
                      <option value="Car towing services">24/7 Car towing services</option>
                      <option value="Garage services">Garage services &amp; periodic checkup</option>
                    </select>
                  </div>

                  {/* Phone input */}
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300 font-medium">Your Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-quick-callback-btn"
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Quick Callback</span>
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline cursor-pointer"
                    >
                      Or tap here to message us directly on WhatsApp &rarr;
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
