import { ENV } from "@/components/config/env";
import axios from "axios";
import { RegistrationDetails } from "../types/types";

export const handleRegisterUser = (userDetails: RegistrationDetails) => {
  return axios.post(
    `${ENV.API_BASE_URL}/auth/signup`,
    {
      ...userDetails,
    },
    {
      withCredentials: true,
    },
  );
};

export const handleVerifyUser = (userId: string, otp: string) => {
  return axios.post(
    `${ENV.API_BASE_URL}/auth/verify`,
    {
      userId,
      otp,
    },
    {
      withCredentials: true,
    },
  );
};

export const handleLoginUser = (email: string, password: string) => {
  return axios.post(
    `${ENV.API_BASE_URL}/auth/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );
};

export const handleGoogleAuth = (code: string) => {
  return axios.post(
    `${ENV.API_BASE_URL}/auth/google-auth`,
    {
      code,
    },
    {
      withCredentials: true,
    },
  );
};
