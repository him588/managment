import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import React from "react";

type StatItem = {
  label: string;
  value: number | string;
};

type StatsCardProps = {
  title: string;
  percentage: string;
  isUp?: boolean;
  stats: StatItem[];
  bg: string;
  accent: string;
  icon: React.ReactNode;
};

export default function StatsCard({
  title,
  percentage,
  isUp = true,
  stats,
  bg,
  accent,
  icon,
}: StatsCardProps) {
  return (
    <div className="flex-1 min-w-0 bg-white border border-stone-100 rounded-2xl p-5 shadow-sm relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30 pointer-events-none"
        style={{ background: accent }}
      />
      <div
        className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none"
        style={{ background: accent }}
      />

      {/* Top row: icon + badge */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
          style={{ background: bg, color: accent }}
        >
          {icon}
        </div>
        <div
          className="flex items-center gap-1 font-jakarta text-[10px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: bg, color: accent }}
        >
          {isUp ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
          {percentage}
        </div>
      </div>

      {/* Title */}
      <p className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 mb-1">
        {title}
      </p>

      {/* Primary stat */}
      <p
        className="font-playfair text-3xl font-semibold leading-none mb-4"
        style={{ color: accent }}
      >
        {stats[0].value}
        <span className="font-jakarta text-sm font-normal text-stone-400 ml-1.5">
          {stats[0].label}
        </span>
      </p>

      {/* Divider */}
      <div className="h-px bg-stone-100 mb-3.5" />

      {/* Secondary stats + sparkline */}
      <div className="flex items-center justify-between">
        {stats.slice(1).map((s) => (
          <div key={s.label}>
            <p className="font-playfair text-lg font-medium text-stone-700">
              {s.value}
            </p>
            <p className="font-jakarta text-[10px] text-stone-400 mt-0.5">
              {s.label}
            </p>
          </div>
        ))}

        {/* Mini sparkline */}
        <div className="flex items-end gap-0.5 h-6">
          {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                height: `${h}%`,
                background: i === 6 ? accent : `${accent}40`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
