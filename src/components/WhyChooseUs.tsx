import React from 'react';
import { ShieldCheck, UserCheck, HelpCircle, Clock, PhoneCall, BadgePercent, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_FEEDBACK_THEMES, BUSINESS_INFO } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <UserCheck className="w-5 h-5 text-emerald-400" />,
    <ShieldCheck className="w-5 h-5 text-red-500" />,
    <HelpCircle className="w-5 h-5 text-sky-400" />,
    <Clock className="w-5 h-5 text-amber-400" />,
    <PhoneCall className="w-5 h-5 text-emerald-400" />,
    <BadgePercent className="w-5 h-5 text-red-400" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-display uppercase tracking-widest text-emerald-400 font-bold">
            Customer Feedback &amp; Workshop Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Why Sadashivpet Vehicle Owners Trust Us
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Our 4.9★ reputation across 91 Google &amp; Justdial ratings is built on authentic customer satisfaction. Here are the core feedback themes shared by motorists who visit our centre:
          </p>
        </div>

        {/* 6 Feedback Themes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_FEEDBACK_THEMES.map((theme, index) => (
            <div
              key={index}
              className="rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all hover:bg-neutral-900 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[index % icons.length]}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {theme.badge}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white group-hover:text-red-400 transition-colors">
                  {theme.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Consistently reflected in verified reviews</span>
              </div>
            </div>
          ))}
        </div>

        {/* Proven Motto Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-emerald-950/30 border border-neutral-800 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold font-display">
            Our Official Tagline &amp; Commitment
          </span>
          <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            “TRUST US… WE DO CARE”
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            From two-wheeler oil service to major multibrand car repairs, we treat every vehicle with genuine responsibility and transparent communication.
          </p>
        </div>
      </div>
    </section>
  );
};
