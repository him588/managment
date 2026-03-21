import apiClient from "@/components/api/service-provider";

export function getOverview(timeframe: "today" | "week" | "month" | "year") {
  return apiClient.get(`/overview?timeframe=${timeframe}`);
}
