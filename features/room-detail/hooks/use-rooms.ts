import { QueryClient, useQuery } from "@tanstack/react-query";
import { getRoomDetails } from "../service/service";

export function useRoomDetails(id: string) {
  return useQuery({
    queryKey: ["room", id],
    queryFn: () => getRoomDetails(id),
  });
}
