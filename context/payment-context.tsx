"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

export interface PaymentInfo {
  bookingId: string;
  roomType: string;
  totalNights: string;
  pricePerNight: string;
  checkInDate: string;
  checkOutDate: string;
  guestName: string;
  guestEmail: string;
  totalAmount: string;
  roomNumber: string;
  orderId: string;
  paymentSecret: string;
}

interface PaymentContextValue {
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
}

const PaymentContext = createContext<null | PaymentContextValue>(null);

export default function PaymentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paymentInfo, setPaymentInfo] = useState({
    bookingId: "",
    roomType: "",
    totalNights: "",
    pricePerNight: "",
    checkInDate: "",
    checkOutDate: "",
    guestName: "",
    guestEmail: "",
    totalAmount: "",
    roomNumber: "",
    orderId: "",
    paymentSecret: "",
  });

  const contextValue = useMemo(() => {
    return {
      paymentInfo,
      setPaymentInfo,
    };
  }, [paymentInfo]);
  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const payment = useContext(PaymentContext);
  if (payment === null) {
    throw new Error(
      "usePaymentContext must be used within a RoomContextProvider",
    );
  }
  return payment;
}
