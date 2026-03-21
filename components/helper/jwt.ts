import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "../types/types";

export function isTokenValid(token: string) {
  const decodedToken = jwtDecode<TokenPayload>(token);
  if (Date.now() > decodedToken.exp * 1000) {
    return false;
  } else {
    return true;
  }
}

export function tokenPayload(token: string) {
  const decodedToken = jwtDecode<TokenPayload>(token);
  if (Date.now() < decodedToken.exp * 1000) {
    return decodedToken;
  } else {
    return null;
  }
}
