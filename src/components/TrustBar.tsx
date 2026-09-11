import React from 'react';
import { Star, Clock, Award, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-neutral-900 border-b border-neutral-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* 4.9 Rating */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/90 flex flex-col justify-between">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">4.9 / 5.0</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">91+ Combined Ratings</div>
          </div>

          {/* Google Reviews */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/90 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Google Reviews
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">44</div>
            <div className="text-xs text-neutral-400 mt-1">4.9★ Public Verification</div>
          </div>

          {/* Justdial Ratings */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/90 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Justdial Ratings
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">47</div>
            <div className="text-xs text-neutral-400 mt-1">4.9★ Verified Experience</div>
          </div>

          {/* 4 Years in Business */}
          <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/90 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              Sadashivpet Local
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 mt-1">4 Years</div>
            <div className="text-xs text-neutral-400 mt-1">In Automobile Business</div>
          </div>

          {/* 24 Hours Availability */}
          <div className="col-span-2 lg:col-span-1 p-4 rounded-xl bg-red-950/20 border border-red-900/40 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              Availability
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">24 Hours</div>
            <div className="text-xs text-red-300/80 mt-1">Day &amp; Night Garage &amp; Towing</div>
          </div>
        </div>
      </div>
    </section>
  );
};
