export interface RoomInfoType {
  roomTypeId: string;
  type: string;
  price: number;
  maxGuest: number;
  roomCount: string;
  occupancyPct: string;
  tags: string[];
  availableRooms: string;
  bookingRooms: string;
  mantainanceRooms: string;
  rooms: RoomsByStatus[];
}

export interface RoomsByStatus {
  images: string[];
  status: "available" | "occupied" | "maintenance" | "upcoming";
  floor: string;
  roomNumber: string;
  roomId: string;
}
