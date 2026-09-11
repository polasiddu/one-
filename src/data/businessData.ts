import { ServiceItem, ReviewTheme } from '../types';

export const BUSINESS_INFO = {
  name: 'ONE STOP CAR SERVICES',
  shortName: 'ONE STOP',
  tagline: 'TRUST US… WE DO CARE',
  phone: '096031 95555',
  phoneRaw: '+919603195555',
  phoneFormatted: '096031 95555',
  whatsapp: '9603195555',
  whatsappFormatted: '96031 95555',
  whatsappRaw: '919603195555',
  whatsappUrl: 'https://wa.me/919603195555?text=Hello%20ONE%20STOP%20CAR%20SERVICES,%20I%20need%20car%20service%20assistance%20in%20Sadashivpet.',
  address: 'Near Ayyapa Temple, Ravindra Nagar, Sadashivpet, Telangana 502291',
  hours: 'Open 24 Hours (Day & Night Service Available)',
  openStatus: 'Open 24 Hours / 7 Days',
  experienceYears: 4,
  website: 'onestopcarservice.com',
  locationCoordinates: {
    lat: 17.6186,
    lng: 77.9542,
  },
  googleMapsUrl: 'https://maps.google.com/?q=ONE+STOP+CAR+SERVICES+Near+Ayyapa+Temple+Ravindra+Nagar+Sadashivpet+Telangana+502291',
  ratings: {
    google: {
      stars: 4.9,
      reviewCount: 44,
      platform: 'Google Reviews',
    },
    justdial: {
      stars: 4.9,
      reviewCount: 47,
      platform: 'Justdial',
    },
    totalReviews: 91,
    averageRating: 4.9,
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  // Car Services
  {
    id: 'car-servicing',
    category: 'car',
    title: 'Multibrand Car Servicing',
    description: 'Comprehensive periodic maintenance and servicing for all passenger car brands and models, ensuring peak engine efficiency, safety, and performance.',
    vehicleTypes: 'All Car Brands & Models (Hatchbacks, Sedans, SUVs)',
    highlights: [
      'Complete engine oil and filter change',
      'Coolant, brake fluid & transmission fluid check',
      'Spark plug, air filter & cabin filter replacement',
      'Battery health, electrical and lighting inspection',
      'Comprehensive under-chassis and suspension check',
    ],
    duration: 'Scheduled or Same-Day',
  },
  {
    id: 'car-inspection',
    category: 'car',
    title: 'Car Inspection',
    description: 'Thorough bumper-to-bumper vehicle diagnosis, pre-trip inspection, and computerised error scanning to identify potential faults before they become major breakdowns.',
    vehicleTypes: 'All Car Makes & Transmissions',
    highlights: [
      'Engine health & OBD-II diagnostic scanning',
      'Brake pad, rotor, and hydraulic pressure testing',
      'Steering, suspension, and alignment inspection',
      'Fluid leakage and hose integrity checks',
      'Exhaust and emissions system evaluation',
    ],
    duration: 'Rapid Diagnostic Report',
  },
  {
    id: 'car-repair',
    category: 'car',
    title: 'Car Repair',
    description: 'Reliable repair solutions for worn components, engine overheating, clutch wear, electrical faults, and brake issues with authentic replacement parts.',
    vehicleTypes: 'Petrol, Diesel & CNG Cars',
    highlights: [
      'Clutch plate replacement & gearbox repair',
      'Brake overhaul, disc surfacing & master cylinder repair',
      'Cooling system, radiator, and water pump repair',
      'Suspension overhaul (shocks, bushes, ball joints)',
      'Starter motor, alternator & auto-electrical repair',
    ],
    duration: 'Timely Turnaround',
  },
  {
    id: 'mechanical-services',
    category: 'car',
    title: 'Mechanical / Mechanic Services',
    description: 'Specialised hands-on mechanical diagnostics and master technician troubleshooting for heavy engine work, noise resolution, and drivetrain repairs.',
    vehicleTypes: 'Multibrand Automobiles',
    highlights: [
      'Engine tuning, timing belt & chain inspection',
      'Fuel system overhaul & injector cleaning',
      'Exhaust manifold and emission issue fixes',
      'Vibration, knocking & abnormal noise diagnosis',
      'Precision mechanical fitment & calibration',
    ],
    duration: 'Expert Workmanship',
  },

  // Bike Services
  {
    id: 'bike-servicing',
    category: 'bike',
    title: 'Bike Servicing',
    description: 'Regular general servicing and tune-ups for all two-wheelers, scooters, and commuter or performance motorcycles for smooth riding and optimal mileage.',
    vehicleTypes: 'All Two-Wheelers (Bikes, Scooters, Superbikes)',
    highlights: [
      'Engine oil replacement & oil filter servicing',
      'Chain cleaning, tension adjustment & lubrication',
      'Carburetor / FI tuning & spark plug cleaning',
      'Brake shoe/pad cleaning and adjustment',
      'Wheel alignment, tyre pressure & cable lubing',
    ],
    duration: 'Quick Service Options',
  },
  {
    id: 'two-wheeler-repair',
    category: 'bike',
    title: 'Two-Wheeler Repair',
    description: 'Dependable repairs for starting troubles, clutch slipping, fork oil leakage, wiring glitches, and brake responsiveness for all bike brands.',
    vehicleTypes: 'All Makes & Models of Two-Wheelers',
    highlights: [
      'Starting issue troubleshooting & battery checks',
      'Clutch plate and clutch wire replacements',
      'Front fork oil seal replacement & shock repair',
      'Electrical wiring, indicator & headlight repairs',
      'Silencer & exhaust problem rectifications',
    ],
    duration: 'Fast Workshop Delivery',
  },

  // Additional Support
  {
    id: 'car-towing',
    category: 'support',
    title: 'Car Towing Services',
    description: '24-hour car towing and recovery support for vehicles stranded due to breakdown, engine seizure, puncture, or accident in and around Sadashivpet.',
    vehicleTypes: 'Cars, SUVs & Light Passenger Vehicles',
    highlights: [
      '24/7 round-the-clock emergency dispatch',
      'Safe flatbed / wheel-lift vehicle recovery',
      'Rapid response along Sadashivpet & connecting highways',
      'Direct towing to our fully equipped service centre',
      'Immediate phone assistance at 096031 95555',
    ],
    duration: '24/7 Immediate Response',
  },
  {
    id: 'garage-services',
    category: 'support',
    title: 'Garage Services',
    description: 'Full-fledged workshop support equipped with hydraulic bays, pneumatic tools, diagnostic equipment, and dedicated car washing facilities.',
    vehicleTypes: 'Cars & Bikes (Multibrand)',
    highlights: [
      'Open, spacious multibrand workshop premises',
      'Automotive washing and interior detailing',
      'Genuine spare parts sourcing & fitment',
      'Under-body coating & rust protection',
      'Emergency day & night repair assistance',
    ],
    duration: 'Open 24 Hours',
  },
];

export const CUSTOMER_FEEDBACK_THEMES = [
  {
    title: 'Honest Staff',
    description: 'Customers highlight our straightforward, genuine advice without false parts replacement or pushy upsells.',
    badge: 'Integrity First',
  },
  {
    title: 'Professional Service',
    description: 'Trained automotive technicians handle both cars and two-wheelers with meticulous attention to detail.',
    badge: 'Skilled Team',
  },
  {
    title: 'Clear Explanations',
    description: 'Our team shows you exactly what is wrong, explaining every required repair simply before any work begins.',
    badge: 'Transparent Process',
  },
  {
    title: 'Timely Work',
    description: 'Prompt turnaround so you get your car back on the road without unnecessary workshop delays.',
    badge: 'On-Time Delivery',
  },
  {
    title: 'Good Response',
    description: 'Quick assistance whenever you call 096031 95555, whether for routine maintenance or 24-hour emergency support.',
    badge: '24/7 Availability',
  },
  {
    title: 'Fair Pricing',
    description: 'Reasonable, clear labor and parts charges tailored to multibrand vehicles with zero hidden fees.',
    badge: 'True Value',
  },
];

export const VERIFIED_REVIEWS: ReviewTheme[] = [
  {
    theme: 'Clear Explanations & Honest Service',
    rating: 5,
    highlight: 'Honest staff and transparent diagnostics',
    quote: 'Very honest staff and professional work. They clearly explained the issue with my car before starting work and did not suggest unnecessary parts replacement. Pricing is very fair.',
    platform: 'Google',
    author: 'Verified Local Customer (Sadashivpet)',
  },
  {
    theme: '24-Hour Availability & Emergency Towing',
    rating: 5,
    highlight: 'Saved us during midnight breakdown',
    quote: 'Our car broke down late at night near Sadashivpet. Called their 24-hour number 096031 95555 and they provided immediate towing support to their garage. Outstanding emergency response.',
    platform: 'Google',
    author: 'Highway Traveler',
  },
  {
    theme: 'Multibrand Car Specialist Expertise',
    rating: 5,
    highlight: 'Car serviced smoothly with proper diagnostics',
    quote: 'Got my car serviced and engine inspected here. Great mechanic skills, prompt delivery, and courteous behavior. Truly a dedicated one-stop car centre in Sadashivpet.',
    platform: 'Justdial',
    author: 'Regular Customer',
  },
  {
    theme: 'Timely Work & Fair Pricing',
    rating: 5,
    highlight: 'Delivered exactly on promised time',
    quote: 'Very good response and timely completion of work. The mechanics are skilled and the billing was completely transparent with fair rates. Highly recommend them.',
    platform: 'Justdial',
    author: 'Local Vehicle Owner',
  },
];

export const WORKSHOP_STATS = [
  { label: 'Customer Rating', value: '4.9★', subtext: 'Based on 91+ verified reviews' },
  { label: 'Google Reviews', value: '44', subtext: '4.9/5 star public rating' },
  { label: 'Justdial Ratings', value: '47', subtext: '4.9/5 star community rating' },
  { label: 'Years in Business', value: '4+ Years', subtext: 'Serving Sadashivpet motorists' },
  { label: 'Operational Hours', value: '24 Hours', subtext: 'Day & Night emergency support' },
];
