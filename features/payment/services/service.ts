import { ENV } from "@/components/config/env";
import axios from "axios";

export function getPaymentDetails(id: string) {
  return axios.get(`${ENV.API_BASE_URL}/payment/${id}`);
}
