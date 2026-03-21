import apiClient from "@/components/api/service-provider";
import { PropertyDetails } from "@/features/onboarding/components/types/types";

export function onbaording(propertyDetails: PropertyDetails) {
  return apiClient.post(
    "/property/register-property",
    { propertyDetails: propertyDetails },
    {
      withCredentials: true,
    },
  );
}
