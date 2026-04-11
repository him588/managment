import { ServiveContextProvider } from "@/context/service-context";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <ServiveContextProvider>{children}</ServiveContextProvider>;
}

export default Layout;
