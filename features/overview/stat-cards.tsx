import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import React from "react";

type StatItem = {
  lable: string;
  value: number | string;
};

type StatsCardProps = {
  title: string;
  percentage?: number | string;
  isUp?: boolean;
  stats?: StatItem[];
  bg: string;
  accent: string;
  icon: React.ReactNode;
  isLoading?: boolean;
};

export default function StatsCard({
  title,
  percentage = 0,
  isUp = true,
  stats = [],
  bg,
  accent,
  icon,
  isLoading = false,
}: StatsCardProps) {
  // Handle empty stats array
  const safeStats = stats.length > 0 ? stats : [{ lable: "N/A", value: "0" }];
  const primaryStat = safeStats[0];
  const secondaryStats = safeStats.slice(1);
  const safePercentage = percentage ?? 0;

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

        {/* Percentage badge with loading state */}
        {isLoading ? (
          <div className="w-16 h-6 rounded-full bg-stone-200 animate-pulse" />
        ) : (
          <div
            className="flex items-center gap-1 font-jakarta text-[10px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: bg, color: accent }}
          >
            {isUp ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
            {Math.abs(Number(safePercentage))}%
          </div>
        )}
      </div>

      {/* Title */}
      <p className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 mb-1">
        {title}
      </p>

      {/* Primary stat with loading state */}
      {isLoading ? (
        <div className="h-9 w-32 bg-stone-200 rounded animate-pulse mb-4" />
      ) : (
        <p
          className="font-playfair text-3xl font-semibold leading-none mb-4"
          style={{ color: accent }}
        >
          {primaryStat?.value ?? "0"}
          <span className="font-jakarta text-sm font-normal text-stone-400 ml-1.5">
            {primaryStat?.lable ?? ""}
          </span>
        </p>
      )}

      {/* Divider */}
      <div className="h-px bg-stone-100 mb-3.5" />

      {/* Secondary stats + sparkline */}
      <div className="flex items-center justify-between">
        {isLoading ? (
          <>
            <div className="space-y-1">
              <div className="h-5 w-12 bg-stone-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-stone-200 rounded animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="h-5 w-12 bg-stone-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-stone-200 rounded animate-pulse" />
            </div>
          </>
        ) : secondaryStats.length > 0 ? (
          secondaryStats.map((s, index) => (
            <div key={`${s.lable}-${index}`}>
              <p className="font-playfair text-lg font-medium text-stone-700">
                {s.value ?? "0"}
              </p>
              <p className="font-jakarta text-[10px] text-stone-400 mt-0.5">
                {s.lable ?? "N/A"}
              </p>
            </div>
          ))
        ) : (
          <div>
            <p className="font-jakarta text-xs text-stone-400">
              No data available
            </p>
          </div>
        )}

        {/* Mini sparkline - always visible */}
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
