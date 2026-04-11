import apiClient from "@/components/api/service-provider";
import { Services, Staff } from "../types/types";

export async function getServicesInfo() {
  return apiClient.get("/services");
}

export async function getStaffInfo() {
  return apiClient.get("/staff");
}

export async function createService(serviceData: Services) {
  return apiClient.post("/services/", { ...serviceData });
}

export async function createStaff(staff: Staff) {
  return apiClient?.post("/staff", { ...staff });
}
