import apiClient from "@/components/api/service-provider";

interface RoomBookingParams {
  currentPage?: number;
  pageSize?: number;
  status?: "pending" | "confirmed" | "checked_in" | "checked_out" | "cancelled";
  search?: string;
}

export function getRoomDetails(roomId: string) {
  return apiClient.get(`/room/get-room-details/${roomId}`);
}

export function getBookingsCount(roomId: string) {
  return apiClient.get(`/room-bookings/get-booking-count/${roomId}`);
}

export function updateRoomStatus(
  roomId: string,
  status: "available" | "maintenance",
) {
  return apiClient.post(`/room/change-status`, { roomId, status });
}

export function getRoomBookingsByStatus(params: RoomBookingParams = {}) {
  return apiClient.get("/room-bookings", { params });
}
