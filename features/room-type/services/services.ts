import apiClient from "@/components/api/service-provider";

export function getRoomTypeDetails(id: string) {
  return apiClient.get(`/room/get-room-type/${id}`);
}

export async function getRoomStatusById(id: string) {
  return apiClient.get(`/room/get-room-status/room-type/${id}`);
}

export function updateRoomType(data: {
  id: string;
  type: string;
  price: number;
  maxGuest: number;
}) {
  return apiClient.put(`/room/update-room-type`, { ...data });
}
