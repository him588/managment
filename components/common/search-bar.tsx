"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// ── Types ──────────────────────────────────────────────────────────────────────
interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
  width?: string;
}

// ── SearchBar ──────────────────────────────────────────────────────────────────
function SearchBar({
  placeholder = "Search…",
  value,
  onChange,
  onClear,
  width = "w-[400px]",
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const [focused, setFocused] = useState(false);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  }

  function handleClear() {
    if (!isControlled) setInternalValue("");
    onChange?.("");
    onClear?.();
  }

  return (
    <div
      className={twMerge(
        `
        relative flex items-center h-10 ${width}
        bg-amber-50/50 border rounded-xl transition-all duration-150
        ${focused ? "border-amber-400 ring-2 ring-amber-500/10" : "border-stone-200 hover:border-stone-300"}
      `,
        className,
      )}
    >
      {/* Search icon */}
      <div className="absolute left-3 pointer-events-none">
        <Search
          size={14}
          className={`transition-colors duration-150 ${focused ? "text-amber-500" : "text-stone-400"}`}
        />
      </div>

      {/* Input */}
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="
          w-full h-full bg-transparent outline-none
          pl-9 pr-8 text-sm text-stone-800
          placeholder:text-stone-400 font-jakarta
        "
      />

      {/* Clear button */}
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 w-5 h-5 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors"
        >
          <X size={10} className="text-stone-500" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
