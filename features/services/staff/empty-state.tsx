import React from "react";
import { twMerge } from "tailwind-merge";
import { Plus, LucideIcon, Inbox } from "lucide-react";

type EmptyStateProps = {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  buttonClassName?: string;
};

function EmptyState({
  icon: Icon = Inbox,
  title = "No Services Found",
  description = "This property doesn't have any services yet.",
  buttonText,
  onButtonClick,
  className,
  buttonClassName,
}: EmptyStateProps) {
  return (
    <div
      className={twMerge(
        "h-full w-full flex flex-col items-center justify-center text-center px-6 py-14",
        className,
      )}
    >
      {/* ── Icon illustration ── */}
      <div className="relative mb-7">
        {/* Outer ring */}
        <div className="w-24 h-24 rounded-3xl bg-stone-100 border border-stone-200 flex items-center justify-center">
          {/* Inner ring */}
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">
            <Icon size={28} className="text-amber-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Decorative dots */}
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-amber-300/60 border border-amber-200" />
        <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 rounded-full bg-orange-300/60 border border-orange-200" />
      </div>

      {/* Eyebrow */}
      <p className="text-[10px] uppercase tracking-widest text-amber-500 font-jakarta mb-2">
        Nothing here yet
      </p>

      {/* Title */}
      <h2 className="font-playfair text-xl text-stone-800 mb-2">{title}</h2>

      {/* Description */}
      <p className="font-jakarta text-sm text-stone-400 max-w-xs leading-relaxed mb-7">
        {description}
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-7" />

      {/* CTA */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={twMerge(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium font-jakarta text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-md shadow-amber-100 hover:opacity-90 transition-all duration-200 border-0 cursor-pointer",
            buttonClassName,
          )}
        >
          <Plus size={14} />
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
