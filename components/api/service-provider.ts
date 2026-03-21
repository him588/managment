import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "@/components/lib/token-store";
import axios from "axios";
import { ENV } from "@/components/config/env";

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${ENV.API_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true },
        );

        const newAccessToken = res.data.accessToken;

        setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);
      } catch (err) {
        console.log("Session expired. Redirecting to login.", err);
        window.location.href = "/login";
        sessionStorage.setItem(
          "auth_error",
          "Session expired. Please login again",
        );

        clearAccessToken();
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
