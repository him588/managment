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

export async function getRooms(hotelId?: string) {
  return apiClient.get(`/room/get-rooms?id=${hotelId ? hotelId : ""}`, {});
}

export async function getRoomStatus() {
  return apiClient.get("/room/get-room-status", {});
}

export async function bookRoom(bookingData: BookRoomPlayload) {
  return apiClient.post("/room-bookings", { ...bookingData }, {});
}
