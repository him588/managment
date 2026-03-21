export type PropertyType = "Hotel" | "Villa" | "Apartment" | "Dorm" | null;

export interface PropertyDetails {
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  propType: PropertyType;
}
