import { CSSProperties, FC } from "react";
import { MetricChipProps } from "./types/types";
import { Icons } from "./icons/icons";

export const MetricChip: FC<MetricChipProps> = ({
  icon,
  label,
  value,
  sub,
  color,
  className = "",
  animClass = "",
}) => (
  <div
    className={`card-glass border border-white/80 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 ${className} ${animClass}`}
  >
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
      style={{ background: color } as CSSProperties}
    >
      {icon}
    </div>
    <div>
      <p className="font-jakarta text-xs text-stone-400 leading-none mb-0.5">
        {label}
      </p>
      <p className="font-playfair text-lg font-semibold text-stone-800 leading-none">
        {value}
      </p>
      {sub && (
        <p className="font-jakarta text-[10px] text-emerald-500 mt-0.5 flex items-center gap-0.5">
          <Icons.TrendUp />
          {sub}
        </p>
      )}
    </div>
  </div>
);
