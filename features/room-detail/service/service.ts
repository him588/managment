import apiClient from "@/components/api/service-provider";

export function getRoomDetails(roomId: string) {
  return apiClient.get(`/room/get-room-details/${roomId}`);
}
