import React, { useState, useEffect } from 'react';
import { X, Check, Wrench, Car, Bike, Truck, Phone, MessageSquare, AlertTriangle, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/businessData';
import { BookingFormData, ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: 'car' | 'bike' | 'support';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialCategory = 'car',
}) => {
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>(
    initialCategory === 'bike' ? 'bike' : 'car'
  );
  const [serviceType, setServiceType] = useState<string>(initialService || 'Multibrand car servicing');
  const [vehicleModel, setVehicleModel] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Today / Earliest Available');
  const [isEmergency, setIsEmergency] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialCategory === 'bike') {
      setVehicleType('bike');
      if (!initialService) setServiceType('Bike servicing');
    } else if (initialCategory === 'car') {
      setVehicleType('car');
      if (!initialService) setServiceType('Multibrand car servicing');
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Service Enquiry - ONE STOP CAR SERVICES*
- *Vehicle:* Car (${vehicleModel || 'Model Not Specified'})
- *Service Needed:* ${serviceType}
- *Customer Name:* ${customerName || 'Customer'}
- *Contact Number:* ${phone || 'Not provided'}
- *Preferred Time:* ${preferredTime}
- *Emergency Breakdown:* ${isEmergency ? 'YES - URGENT' : 'No'}
- *Notes:* ${notes || 'None'}`;

    const url = `https://wa.me/919603195555?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-neutral-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-white">
                Service Request Received!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{customerName || 'Customer'}</strong>. 
                Our team at <strong className="text-white">ONE STOP CAR SERVICES</strong> will reach you at <strong className="text-emerald-400">{phone}</strong> shortly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-400">Service:</span>
                <span className="font-semibold text-white">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Vehicle:</span>
                <span className="font-semibold text-white">Car {vehicleModel ? `(${vehicleModel})` : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Workshop Hours:</span>
                <span className="font-semibold text-emerald-400">Open 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Direct Helpline:</span>
                <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleWhatsAppSend}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Details via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm border border-neutral-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call Workshop Now</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-neutral-400 hover:text-white underline cursor-pointer mt-2"
            >
              Done &amp; Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider font-display">
                ONE STOP CAR SERVICES
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white">
                Book Car Inspection or Service
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Sadashivpet, Telangana • Open 24 Hours • Call 096031 95555
              </p>
            </div>

            {/* Service Type Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300">Required Car Service</label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
              >
                <option value="Multibrand car servicing">Multibrand car servicing</option>
                <option value="Car inspection">Car inspection &amp; diagnostics</option>
                <option value="Car repair">Car repair (engine, clutch, brake)</option>
                <option value="Mechanical / mechanic services">Mechanical / mechanic services</option>
                <option value="Car towing services">24/7 Emergency Car Towing</option>
                <option value="Garage services">Full Garage &amp; Periodic Maintenance</option>
              </select>
            </div>

            {/* Vehicle Model & Customer Details */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Vehicle Brand &amp; Model</label>
                <input
                  type="text"
                  required
                  placeholder={vehicleType === 'car' ? 'e.g., Swift, Creta, WagonR' : 'e.g., Splendor, Activa, Pulsar'}
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Your Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Preferred Visit Time</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500"
                >
                  <option value="Immediately / Today">Immediately / Today</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  <option value="Night / 24-Hour Emergency">Night / 24-Hour Emergency</option>
                </select>
              </div>
            </div>

            {/* Emergency Checkbox */}
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className={`w-4 h-4 ${isEmergency ? 'text-red-500' : 'text-neutral-500'}`} />
                <span className="text-xs text-neutral-200 font-medium">Vehicle is Broken Down / Emergency Assistance</span>
              </div>
              <input
                type="checkbox"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="w-4 h-4 accent-red-600 rounded cursor-pointer"
              />
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300">Issues Observed (Optional)</label>
              <textarea
                rows={2}
                placeholder="Describe any strange noise, warning light, starting trouble, or specific repair needed..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                id="submit-booking-form-btn"
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-sm shadow-lg shadow-red-950/60 transition-all cursor-pointer"
              >
                Confirm Request
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Directly</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
