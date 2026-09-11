import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside 
      aria-label="WhatsApp Quick Support"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-end flex-col gap-2"
    >
      {/* Floating Prompt Bubble (dismissible or auto-open) */}
      {showTooltip && (
        <div className="relative bg-neutral-900/95 backdrop-blur-md border border-emerald-500/40 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl max-w-[220px] animate-bounce-subtle flex items-start justify-between gap-2">
          <div>
            <span className="font-bold text-emerald-400 block">Chat on WhatsApp</span>
            <span className="text-neutral-300 text-[11px] block">
              Direct to <strong>9603195555</strong> • Instant reply
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss WhatsApp hint"
            className="text-neutral-400 hover:text-white p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with ONE STOP CAR SERVICES at 9603195555"
        className="group flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.6)] transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        
        <span className="hidden sm:inline font-heading tracking-wide">
          WhatsApp: <span className="text-emerald-100 font-extrabold">9603195555</span>
        </span>
        <span className="sm:hidden font-heading text-xs">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
