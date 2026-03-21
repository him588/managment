import React from "react";
import { Ic } from "@/features/onboarding/components/icons/icons";

function StepThree() {
  return (
    <div key="step3" className="flex flex-col gap-3 flex-1 my-2 fade-up d2">
      {[
        "Real-time occupancy & revenue",
        "Automated check-in alerts",
        "Staff & housekeeping tracker",
        "Channel manager included",
        "White-label booking widget",
      ].map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white/60 border border-stone-100 rounded-xl px-4 py-3"
        >
          <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
            <Ic.Check />
          </div>
          <p className="font-jakarta text-sm text-stone-600">{f}</p>
        </div>
      ))}
    </div>
  );
}

export default StepThree;
