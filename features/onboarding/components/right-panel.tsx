import React, { FC } from "react";
import { PropertyDetails } from "@/features/onboarding/components/types/types";
import {
  Visual1,
  Visual2,
  Visual3,
  Visual4,
} from "@/features/onboarding/components/visual";

function RightPanel({
  step,
  TOTAL,
  details,
}: {
  step: number;
  TOTAL: number;
  details: PropertyDetails;
}) {
  return (
    <div
      className="hidden md:flex items-center justify-center relative overflow-hidden p-10"
      style={{
        background: "linear-gradient(145deg,#fefce8,#fff7ed)",
      }}
    >
      <div className="absolute w-72 h-72 rounded-full border border-amber-100/60 pointer-events-none" />
      <div className="absolute w-52 h-52 rounded-full border border-amber-200/40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 40%,rgba(251,191,36,.12),transparent 65%)",
        }}
      />

      {/* Progress ring */}
      <div className="absolute top-6 right-6">
        <svg viewBox="0 0 48 48" className="w-12 h-12 -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#f5f5f4"
            strokeWidth="4"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${125.6 * (step / TOTAL)} 125.6`}
            style={{
              transition: "stroke-dasharray .5s ease",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-jakarta text-[10px] font-semibold text-stone-500">
            {step}/{TOTAL}
          </span>
        </div>
      </div>

      <div
        key={`vis-${step}`}
        className="scale-in flex items-center justify-center"
      >
        <StepVisual step={step} details={details} />
      </div>
    </div>
  );
}

export default RightPanel;

const StepVisual: FC<{ step: number; details: PropertyDetails }> = ({
  step,
  details,
}) => {
  if (step === 1) return <Visual1 />;
  if (step === 2) return <Visual2 details={details} />;
  if (step === 3) return <Visual3 />;
  return <Visual4 />;
};
