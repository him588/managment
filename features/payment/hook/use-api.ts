import { useQuery } from "@tanstack/react-query";
import { getPaymentDetails } from "../services/service";

export function usePaymentInfo(id: string) {
  return useQuery({
    queryKey: ["paymentInfo", id],
    queryFn: () => getPaymentDetails(id),
    enabled: !!id,
  });
}
