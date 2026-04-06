import { useQuery } from "@tanstack/react-query";
import {
  getRoomStatusById,
  getRoomTypeDetails,
} from "@/features/room-type/services/services";

export function useRoomTypeDetails(id: string) {
  return useQuery({
    queryKey: ["roomType", id], // Fixed: dynamic query key
    queryFn: () => {
      console.log("🔴 QUERY FUNCTION CALLED - Fetching from server");

      return getRoomTypeDetails(id);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (room type details change less frequently)
  });
}

export const useRoomStatusByRoomId = (id: string) => {
  return useQuery({
    queryKey: ["room-status", id],
    queryFn: () => {
      console.log("🔴 QUERY FUNCTION CALLED - Fetching from server");
      return getRoomStatusById(id);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (room type details change less frequently)
  });
};
