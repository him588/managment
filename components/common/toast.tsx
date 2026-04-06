"use client";

import { ToastType } from "@/components/types/types";

export function Toast({
  toastType,
  toastMessage,
}: {
  toastType: ToastType;
  toastMessage: string;
}) {
  const isSuccess = toastType === "success";

  return (
    <div
      className={`inline-flex items-center gap-2.5 fixed z-[999] left-1/2 -translate-x-1/2 
        px-4 py-2.5 rounded-2xl border shadow-lg shadow-stone-200/60 font-jakarta  translate-all duration-200
        ${
          isSuccess
            ? "bg-amber-50 border-amber-200 text-amber-900"
            : "bg-red-50 border-red-200 text-red-900"
        }
        ${toastMessage ? "translate-y-3" : "-translate-y-[3rem]"}
        `}
    >
      {/* icon */}
      <div
        className={`w-5 h-5 rounded-lg flex items-center justify-center text-white flex-shrink-0
        ${
          isSuccess
            ? "bg-gradient-to-br from-amber-400 to-amber-600"
            : "bg-gradient-to-br from-red-400 to-red-600"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3"
        >
          {isSuccess ? (
            <path d="M20 6 9 17l-5-5" />
          ) : (
            <>
              <line x1="12" y1="7" x2="12" y2="13" />
              <circle cx="12" cy="16.5" r=".6" fill="currentColor" />
            </>
          )}
        </svg>
      </div>

      {/* message */}
      <p className="text-xs font-medium whitespace-nowrap">{toastMessage}</p>
    </div>
  );
}
