import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getRoomStatusById,
  getRoomTypeDetails,
  updateRoomType,
} from "@/features/room-type/services/services";

type RoomTypeData = {
  id: string;
  type: string;
  price: number;
  maxGuest: number;
};

export function useRoomTypeDetails(id: string) {
  return useQuery({
    queryKey: ["roomType", id], // Fixed: dynamic query key
    queryFn: () => {
      return getRoomTypeDetails(id);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (room type details change less frequently)
  });
}

export const useRoomStatusByRoomId = (id: string) => {
  return useQuery({
    queryKey: ["room-status", id],
    queryFn: () => {
      return getRoomStatusById(id);
    },
  });
};

export function useRoomTypeEdit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: RoomTypeData }) => updateRoomType(data),
    onSuccess: (data, variables: { data: RoomTypeData }) => {
      queryClient.invalidateQueries({
        queryKey: ["roomType", variables.data.id],
      });
    },
  });
}
