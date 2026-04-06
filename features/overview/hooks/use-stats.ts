import { useMemo } from "react";
import { useOverview } from "@/features/overview/hooks/hooks";

type Timeframe = "today" | "week" | "month" | "year";

interface StatsData {
  lable: string;
  value: string;
}

interface Stats {
  booking: {
    percentage: number;
    startsData: StatsData[];
  };
  service: {
    percentage: number;
    startsData: StatsData[];
  };
  staff: {
    percentage: number;
    startsData: StatsData[];
  };
}

export function useOverviewStats(timeframe: Timeframe) {
  const { data, isLoading, error } = useOverview(timeframe);

  const stats = useMemo<Stats | null>(() => {
    if (!data?.data) return null;

    const overviewData = data.data;

    return {
      booking: {
        percentage: overviewData.totalBookings.change,
        startsData: [
          {
            lable: "Booked",
            value: overviewData.totalBookings.current.toString(),
          },
          { lable: "CheckIn", value: overviewData.checkIns.current.toString() },
        ],
      },
      service: {
        percentage: overviewData.totalServicesBooked.change,
        startsData: [
          { lable: "Services", value: overviewData.totalServices.toString() },
          {
            lable: "Booked",
            value: overviewData.totalServicesBooked.current.toString(),
          },
        ],
      },
      staff: {
        percentage: overviewData.activeStaff.change,
        startsData: [
          { lable: "Staff", value: overviewData.totalStaff.toString() },
          {
            lable: "Active",
            value: overviewData.activeStaff.current.toString(),
          },
        ],
      },
    };
  }, [data?.data]);

  return { stats, isLoading, error };
}
