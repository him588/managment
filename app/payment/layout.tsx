import PaymentContextProvider from "@/context/payment-context";
import Script from "next/script";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PaymentContextProvider>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      {children}
    </PaymentContextProvider>
  );
}

export default Layout;
