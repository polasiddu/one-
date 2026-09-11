export interface ServiceItem {
  id: string;
  category: 'car' | 'bike' | 'support';
  title: string;
  description: string;
  highlights: string[];
  vehicleTypes: string;
  duration?: string;
}

export interface ReviewTheme {
  theme: string;
  rating: number;
  highlight: string;
  quote: string;
  platform: 'Google' | 'Justdial';
  author: string;
}

export interface BookingFormData {
  vehicleType: 'car' | 'bike';
  serviceType: string;
  vehicleModel: string;
  customerName: string;
  phone: string;
  preferredTime: string;
  locationDetails?: string;
  isEmergency: boolean;
  notes?: string;
}
