import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-neutral-900 border-b border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-xs font-display uppercase tracking-widest text-amber-400 font-bold">
              Ratings &amp; Reputation
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              4.9★ Backed by 91+ Customer Ratings
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Verified customer feedback across Google and Justdial reflecting our commitment to honest work, fair pricing, and 24-hour service.
            </p>
          </div>

          {/* Platform Summary Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Google Badge */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-heading font-bold text-blue-400 text-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-extrabold text-white">4.9</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                </div>
                <div className="text-xs text-neutral-400">44 Google Reviews</div>
              </div>
            </div>

            {/* Justdial Badge */}
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center font-heading font-bold text-orange-400 text-sm">
                JD
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-extrabold text-white">4.9</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                </div>
                <div className="text-xs text-neutral-400">47 Justdial Ratings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Review Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {VERIFIED_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-950/80 border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified {review.platform}
                  </span>
                </div>

                <div className="text-base font-heading font-bold text-white">
                  &ldquo;{review.highlight}&rdquo;
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-300">{review.author}</span>
                <span className="text-neutral-500 font-mono text-[11px]">{review.theme}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Notice */}
        <div className="mt-8 text-center text-xs text-neutral-400">
          Have you had your car serviced at ONE STOP in Sadashivpet? We appreciate your genuine feedback!
        </div>
      </div>
    </section>
  );
};
