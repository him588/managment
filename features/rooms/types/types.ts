export interface CreateRoomTypePayload {
  type: string;
  price: number;
  maxGuest: number;
  isShared: boolean;
  tags: string[];
  color: string;
}

export interface RoomCategoryType {
  id: string;
  type: string;
  price: number;
  maxGuest: number;
  isShared: boolean;
  tags: string[];
  color: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  category: string;
  floor: string;
  images: string[];
  maxGuest: number;
  status: "available" | "maintenance";
}

export interface BookRoomPlayload {
  guestName: string;
  phone: string;
  email: string;
  categoryId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
