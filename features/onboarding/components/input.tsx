import React, { FC, JSX, ChangeEvent, KeyboardEvent } from "react";

export const Field: FC<{
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: JSX.Element;
  type?: string;
  half?: boolean;
}> = ({
  label,
  value,
  onChange,
  placeholder,
  icon,
  type = "text",
  half = false,
  handleKeyDown,
}) => (
  <div className={half ? "" : "col-span-2"}>
    <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        onKeyDown={(e) => handleKeyDown?.(e)}
        placeholder={placeholder}
        className="ob-input w-full font-jakarta text-sm text-stone-700 placeholder-stone-300 bg-amber-50/40 border border-stone-200 rounded-xl pl-9 pr-4 py-2.5"
      />
    </div>
  </div>
);
