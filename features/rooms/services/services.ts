import apiClient from "@/components/api/service-provider";
import {
  BookRoomPlayload,
  CreateRoomTypePayload,
} from "@/features/rooms/types/types";

export async function createRoomType(roomType: CreateRoomTypePayload) {
  return apiClient.post("/room/create-type", { ...roomType }, {});
}

export async function getRoomTypes() {
  return apiClient?.get(`/room/get-type`, {});
}

export async function createRoom(formData: FormData) {
  return apiClient.post("/room/create-room", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

// API - Fixed: Cleaner parameter handling
export async function getRooms(
  hotelId?: string,
  categoryId?: string,
  pageSize: number = 10,
  pageNumber: number = 1,
) {
  const params = new URLSearchParams();

  if (hotelId) params.append("id", hotelId);
  if (categoryId) params.append("categoryId", categoryId);
  params.append("pageSize", pageSize.toString());
  params.append("pageNumber", pageNumber.toString());

  return apiClient.get(`/room/get-rooms?${params.toString()}`, {});
}

export async function getRoomStatus() {
  return apiClient.get("/room/get-room-status", {});
}

export async function bookRoom(bookingData: BookRoomPlayload) {
  return apiClient.post("/room-bookings", { ...bookingData }, {});
}

export async function bookRoomById(bookingData: BookRoomPlayload) {
  return apiClient.post(`/room-bookings/book-room/${bookingData.roomId}`, {
    ...bookingData,
  });
}
