export interface CreateRoomTypePayload {
  type: string;
  price: number;
  maxGuest: number;
  image: string;
  isShared: boolean;
  tags: string[];
}

export interface RoomCategoryType {
  _id: string;
  type: string;
  price: number;
  maxGuest: number;
  image: string;
  isShared: boolean;
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
