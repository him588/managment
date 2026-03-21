import { Ic } from "./icons/icons";
import { PropertyDetails } from "./types/types";
import { PROPERTY_TYPES } from "./types/const";

function StepFour({ details }: { details: PropertyDetails }) {
  return (
    <div key="step4" className="flex flex-col gap-3 flex-1 my-2 fade-up d2">
      <div className="summary-card bg-white/70 border border-stone-100 rounded-2xl p-4 space-y-2.5">
        {[
          {
            icon: <Ic.Hotel />,
            label: "Property",
            val: details.name || "—",
          },
          {
            icon: <Ic.MapPin />,
            label: "Location",
            val:
              details.city && details.country
                ? `${details.city}, ${details.country}`
                : "—",
          },
          {
            icon: <Ic.Phone />,
            label: "Phone",
            val: details.phone || "—",
          },
          {
            icon: <Ic.Mail />,
            label: "Email",
            val: details.email || "—",
          },

          {
            icon: <Ic.Tag />,
            label: "Type",
            val:
              PROPERTY_TYPES.find((p) => p.id === details.propType)?.label ||
              "—",
          },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
              {r.icon}
            </div>
            <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
              <span className="font-jakarta text-[10px] uppercase tracking-widest text-stone-300">
                {r.label}
              </span>
              <span className="font-jakarta text-xs text-stone-600 truncate">
                {r.val}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepFour;
