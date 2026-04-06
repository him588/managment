import apiClient from "@/components/api/service-provider";

type timeframe = "week" | "month" | "year";

export function getOverview(timeframe: "today" | "week" | "month" | "year") {
  return apiClient.get(`/overview?timeframe=${timeframe}`);
}

export function bookingCount(timeframe: timeframe) {
  return apiClient.get(`/overview/room-bookings?timeframe=${timeframe}`);
}

export function serviceBookings(timeframe: timeframe) {
  return apiClient.get(`/overview/service-bookings?timeframe=${timeframe}`);
}

export function getLatestBookings() {
  return apiClient.get("/overview/latest-bookings");
}
