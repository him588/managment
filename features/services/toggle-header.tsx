"use client";

import { useServiceContext } from "@/context/service-context";
import { Sparkles, Users } from "lucide-react";

function ToggleHeader() {
  const { activeTab, setActiveTab } = useServiceContext();

  return (
    <div className="relative w-64 h-12 bg-stone-100 border border-stone-200 rounded-2xl p-1 shadow-inner">
      {/* ── Sliding amber pill ── */}
      <div
        className={`absolute top-1 left-1 h-10 w-[calc(50%-0.25rem)]
          rounded-xl bg-gradient-to-r from-amber-500 to-orange-500
          shadow-md shadow-amber-200
          transition-transform duration-300 ease-in-out
          ${activeTab === "Staff" ? "translate-x-full" : "translate-x-0"}`}
      />

      {/* ── Buttons ── */}
      <div className="relative z-10 flex h-full">
        <button
          onClick={() => setActiveTab("Services")}
          className={`w-1/2 flex items-center justify-center gap-1.5 cursor-pointer
            font-jakarta text-sm font-medium transition-colors duration-200
            ${activeTab === "Services" ? "text-white" : "text-stone-400 hover:text-stone-600"}`}
        >
          <Sparkles size={13} />
          Services
        </button>

        <button
          onClick={() => setActiveTab("Staff")}
          className={`w-1/2 flex items-center justify-center gap-1.5 cursor-pointer
            font-jakarta text-sm font-medium transition-colors duration-200
            ${activeTab === "Staff" ? "text-white" : "text-stone-400 hover:text-stone-600"}`}
        >
          <Users size={13} />
          Staff
        </button>
      </div>
    </div>
  );
}

export default ToggleHeader;
