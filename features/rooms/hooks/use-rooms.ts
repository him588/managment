import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getRoomTypes,
  createRoomType,
  getRooms,
  getRoomStatus,
  createRoom,
  bookRoom,
} from "@/features/rooms/services/service";
import {
  BookRoomPlayload,
  CreateRoomTypePayload,
} from "@/features/rooms/types/types";

export const useGetRoomTypes = () => {
  return useQuery({
    queryKey: ["room-types"],
    queryFn: () => getRoomTypes(),
  });
};

export const useCreateRoomType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomType: CreateRoomTypePayload) => createRoomType(roomType),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room-types"] });
    },
  });
};

// Hook - Fixed: Include parameters in queryKey
export const useGetRooms = (
  hotelId?: string,
  categoryId?: string,
  pageSize?: number,
  pageNumber?: number,
) => {
  return useQuery({
    queryKey: ["rooms", hotelId, categoryId, pageSize, pageNumber], // Fixed: dynamic query key
    queryFn: () => getRooms(hotelId, categoryId, pageSize, pageNumber),
  });
};

export const useRoomBooking = () => {
  return useQuery({
    queryKey: ["room-status"],
    queryFn: () => getRoomStatus(),
  });
};

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createRoom(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
  });
};

export const useBookRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingData: BookRoomPlayload) => bookRoom(bookingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["room-status"] });
    },
  });
};
