"use client";
import { Toast } from "@/components/common/toast";
import { ToastType, UIContext } from "@/components/types/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const UiContext = createContext<UIContext | null>(null);

export function UiContextProvider({ children }: { children: React.ReactNode }) {
  const [toastType, setToastType] = useState<ToastType>(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = setTimeout(() => {
      setToastMessage("");
      setToastType(null);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [toastMessage]);

  const UiProvider = useMemo<UIContext>(() => {
    return {
      toastType,
      setToastType,
      toastMessage,
      setToastMessage,
    };
  }, [toastMessage, toastType]);

  return (
    <UiContext.Provider value={UiProvider}>
      <Toast toastType={toastType} toastMessage={toastMessage} />
      {children}
    </UiContext.Provider>
  );
}

export function useUIContext() {
  const uiContext = useContext(UiContext);
  if (uiContext === null) {
    throw new Error("UI context should not be empty");
  }
  return uiContext;
}
