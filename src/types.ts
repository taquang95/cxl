export interface BookingLead {
  name: string;
  phone: string;
  apartmentType?: string;
  sourceForm?: string;
  timestamp: string;
}

export interface ProductType {
  id: string;
  title: string;
  image: string;
  description: string;
  bullets: string[];
}

export interface FloorPlanItem {
  index: number;
  image: string;
  title: string;
}

export interface FacilityItem {
  id: string;
  image: string;
  title: string;
}

export interface ProgressItem {
  id: string;
  image: string;
  title: string;
}

export interface BrochurePage {
  page: number;
  image: string;
}
