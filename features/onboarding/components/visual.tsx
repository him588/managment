import { FC } from "react";
import { Ic } from "@/features/onboarding/components/icons/icons";
import { PropertyDetails } from "@/features/onboarding/components/types/types";

export const Visual1 = () => (
  <div className="float-y flex flex-col items-center gap-3">
    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl shadow-amber-200 text-4xl">
      🏨
    </div>
    <div className="flex gap-2">
      {["🌴", "🏢", "🏡"].map((e, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-lg shadow-sm"
        >
          {e}
        </div>
      ))}
    </div>
  </div>
);

export const Visual2: FC<{ details: PropertyDetails }> = ({ details }) => (
  <div className="float-y w-full max-w-[230px] space-y-2">
    <div className="bg-white/90 border border-stone-100 rounded-2xl p-4 shadow-lg">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Ic.Hotel />
        </div>
        <div className="min-w-0">
          <p className="font-playfair text-stone-800 text-sm truncate">
            {details.name || "Your Hotel"}
          </p>
          <p className="font-jakarta text-[10px] text-stone-400 truncate">
            {details.city || "City"} · {details.country || "Country"}
          </p>
        </div>
      </div>
      {[
        { l: "Address", v: details.address || "—" },
        { l: "Phone", v: details.phone || "—" },
      ].map((r) => (
        <div
          key={r.l}
          className="flex justify-between py-1.5 border-b border-stone-50 last:border-0"
        >
          <span className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300">
            {r.l}
          </span>
          <span className="font-jakarta text-[10px] text-stone-600 truncate max-w-[110px]">
            {r.v}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const Visual3 = () => (
  <div className="float-y w-full max-w-[220px]">
    <div className="bg-white/90 border border-stone-100 rounded-2xl p-3.5 shadow-lg">
      <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mb-2">
        Operations
      </p>
      {[
        { label: "Occupancy", val: "87%", w: "w-[87%]", color: "bg-amber-400" },
        {
          label: "Revenue",
          val: "$24.8k",
          w: "w-[75%]",
          color: "bg-emerald-400",
        },
        { label: "Check-ins", val: "38", w: "w-[60%]", color: "bg-blue-400" },
      ].map((r) => (
        <div key={r.label} className="mb-2 last:mb-0">
          <div className="flex justify-between mb-1">
            <span className="font-jakarta text-[10px] text-stone-400">
              {r.label}
            </span>
            <span className="font-playfair text-[11px] text-stone-700">
              {r.val}
            </span>
          </div>
          <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${r.color} ${r.w}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Visual4 = () => (
  <div className="float-y flex flex-col items-center gap-3">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-100 text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <div className="flex gap-1.5">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-emerald-400"
          style={{ opacity: 1 - i * 0.25 }}
        />
      ))}
    </div>
  </div>
);
