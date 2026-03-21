import { getUserDetails } from "@/components/api/service";
import { useQuery } from "@tanstack/react-query";
import { getOverview } from "@/features/overview/services/services";

export function useUserDetails(isEnable: boolean) {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: () => getUserDetails(),
    enabled: isEnable,
  });
}

export function useOverview(
  timeframe: "today" | "week" | "month" | "year",
  isEnable: boolean,
) {
  return useQuery({
    queryKey: ["overview", timeframe],
    queryFn: () => getOverview(timeframe),
  });
}
