import { useMutation } from "@tanstack/react-query";
import { PropertyDetails } from "../types/types";
import { onbaording } from "../services/service";
import { useUIContext } from "@/context/ui-context";
import { useRouter } from "next/navigation";

export function useOnboarding() {
  const { setToastMessage, setToastType } = useUIContext();
  const router = useRouter();

  return useMutation({
    mutationFn: (propertyDetails: PropertyDetails) =>
      onbaording(propertyDetails),
    onSuccess: () => {
      setToastType("success");
      setToastMessage("Property registered successfully!");
      router.push("/overview");
    },
    onError: (error) => {
      setToastType("error");
      setToastMessage(error.message);
      console.log("Error registering property", error);
    },
  });
}
