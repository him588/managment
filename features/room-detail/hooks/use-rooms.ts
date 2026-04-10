import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getBookingsCount,
  getRoomDetails,
  updateRoomStatus,
} from "../service/service";

export function useRoomDetails(id: string) {
  return useQuery({
    queryKey: ["room", id],
    queryFn: () => getRoomDetails(id),
  });
}

export function useRoomBookingsCount(id: string) {
  return useQuery({
    queryKey: ["booking-count", id],
    queryFn: () => getBookingsCount(id),
  });
}

export function useUpdateRoomStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      roomId,
      status,
    }: {
      roomId: string;
      status: "available" | "maintenance";
    }) => updateRoomStatus(roomId, status),
    onSuccess: (data, variable) => {
      queryClient.invalidateQueries({ queryKey: ["room-status"] });
      queryClient.invalidateQueries({ queryKey: ["room", variable.roomId] });
    },
  });
}
