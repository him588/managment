import React from "react";
import { PROPERTY_TYPES } from "@/features/onboarding/components/types/const";
import {
  PropertyDetails,
  PropertyType,
} from "@/features/onboarding/components/types/types";

function StepOne({
  details,
  setDetails,
}: {
  details: PropertyDetails;
  setDetails: React.Dispatch<React.SetStateAction<PropertyDetails>>;
}) {
  return (
    <div key="step1" className="grid grid-cols-2 gap-2.5 flex-1 fade-up d2">
      {PROPERTY_TYPES.map((opt) => (
        <div
          key={opt.id}
          onClick={() =>
            setDetails((prev) => {
              return { ...prev, propType: opt.id as PropertyType };
            })
          }
          className={`option-card border-2 rounded-2xl p-3.5 ${details.propType === opt.id ? "selected" : "border-stone-100 bg-white/60"}`}
        >
          <span className="text-2xl block mb-1.5">{opt.emoji}</span>
          <p
            className={`font-jakarta text-xs font-medium ${details.propType === opt.id ? "text-amber-700" : "text-stone-700"}`}
          >
            {opt.label}
          </p>
          <p className="font-jakarta text-[10px] text-stone-400 mt-0.5">
            {opt.sub}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StepOne;
