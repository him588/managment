"use client";
import { useServiceContext } from "@/context/service-context";
import ToggleHeader from "./toggle-header";
import Service from "./service/service";
import Staff from "./staff/staff";

export default function Services() {
  const { activeTab } = useServiceContext();
  return (
    <div className=" relative p-[1.5rem] ">
      {/* Toggle Container */}
      <ToggleHeader />

      {/* Content */}
      <div className="w-full   ">
        {activeTab === "Services" ? <Service /> : <Staff />}
      </div>
    </div>
  );
}
