export interface Services {
  id?: string;
  name: string;
  description: string;
  color: string;
  isActive: boolean;
  isPaid: boolean;
}

export interface Staff {
  id?: string;
  name: string;
  email: string;
  mobileNo: string;
  password: string;
  isAvailable: boolean;
  isActive: boolean;
}
