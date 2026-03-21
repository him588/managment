import React from "react";

export type TokenPayload = {
  email: string;
  exp: number;
  hotelId: string;
  iat: number;
  userId: string;
};

export type UserDetails = {
  name: string;
  userId: string;
  email: string;
  propertyId: string | null;
  role: string;
  propertyName: string | null;
};

export type BaseContextType = {
  userDetails: UserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  isAuthReady: boolean;
  setIsAuthReady: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToastType = "error" | "success" | null;

export type UIContext = {
  toastType: ToastType;
  setToastType: React.Dispatch<React.SetStateAction<ToastType>>;
  toastMessage: string;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
};
