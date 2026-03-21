import axios from "axios";

export function returnAxiosError(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "SomeThing went wrong";
  }
  return "SomeThing went wrong";
}
