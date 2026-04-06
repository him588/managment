import Script from "next/script";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      {children}
    </>
  );
}

export default Layout;
