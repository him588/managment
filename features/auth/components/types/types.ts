import { ChangeEvent, JSX } from "react";

export type AuthMode = "login" | "signup";

export interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
}

export interface RegistrationDetails {
  name: string;
  email: string;
  password: string;
  confPassword: string;
  agreed: boolean;
}
