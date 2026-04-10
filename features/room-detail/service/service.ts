import apiClient from "@/components/api/service-provider";

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
