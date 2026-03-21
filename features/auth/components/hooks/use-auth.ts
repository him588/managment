import { useUIContext } from "@/context/ui-context";
import {
  AuthMode,
  RegistrationDetails,
} from "@/features/auth/components/types/types";

export function useAuthService() {
  const { setToastMessage, setToastType } = useUIContext();

  function validateForm(mode: AuthMode, userDetails: RegistrationDetails) {
    if (mode === "signup" && userDetails.name.trim().length < 3) {
      setToastType("error");
      setToastMessage("Name should be at least 3 characters");
      return false;
    }

    if (!userDetails.email.includes("@")) {
      setToastType("error");
      setToastMessage("Please enter a valid email");
      return false;
    }

    if (userDetails.password.length < 6) {
      setToastType("error");
      setToastMessage("Password must be at least 6 characters");
      return false;
    }

    if (
      mode === "signup" &&
      userDetails.password !== userDetails.confPassword
    ) {
      setToastType("error");
      setToastMessage("Passwords do not match");
      return false;
    }

    if (mode === "signup" && !userDetails.agreed) {
      setToastType("error");
      setToastMessage("You must agree to the Terms & Privacy Policy");
      return false;
    }

    return true;
  }

  return {
    validateForm,
  };
}
