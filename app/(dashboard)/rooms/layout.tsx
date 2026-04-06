import { RoomContextProvider } from "@/context/room-context";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <RoomContextProvider>{children}</RoomContextProvider>;
}

export default Layout;
