"use client";

import React, { useState, useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Filter = "Week" | "Month" | "Year";

interface HeatCell {
  label: string;
  sublabel?: string;
  value: number; // 0–100 occupancy %
}

// ── Dummy Data ────────────────────────────────────────────────────────────────

const DUMMY_DATA: Record<Filter, HeatCell[]> = {
  Week: [
    { label: "Mon", sublabel: "Mar 17", value: 32 },
    { label: "Tue", sublabel: "Mar 18", value: 58 },
    { label: "Wed", sublabel: "Mar 19", value: 74 },
    { label: "Thu", sublabel: "Mar 20", value: 91 },
    { label: "Fri", sublabel: "Mar 21", value: 87 },
    { label: "Sat", sublabel: "Mar 22", value: 43 },
    { label: "Sun", sublabel: "Mar 23", value: 18 },
  ],
  Month: [
    { label: "Wk 1", sublabel: "Mar 1–7", value: 41 },
    { label: "Wk 2", sublabel: "Mar 8–14", value: 67 },
    { label: "Wk 3", sublabel: "Mar 15–21", value: 88 },
    { label: "Wk 4", sublabel: "Mar 22–28", value: 55 },
  ],
  Year: [
    { label: "Jan", value: 52 },
    { label: "Feb", value: 61 },
    { label: "Mar", value: 78 },
    { label: "Apr", value: 84 },
    { label: "May", value: 93 },
    { label: "Jun", value: 70 },
    { label: "Jul", value: 47 },
    { label: "Aug", value: 35 },
    { label: "Sep", value: 62 },
    { label: "Oct", value: 88 },
    { label: "Nov", value: 75 },
    { label: "Dec", value: 29 },
  ],
};

// ── Skeleton Loader ───────────────────────────────────────────────────────────

function SkeletonLoader({ count }: { count: number }) {
  return (
    <div className="flex gap-2 items-end w-full h-full">
      {Array.from({ length: count }).map((_, i) => {
        // Vary skeleton bar heights for a natural wave silhouette
        const heights = [48, 72, 56, 96, 80, 40, 64, 88, 52, 76, 60, 44];
        const h = heights[i % heights.length];
        return (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-end gap-1.5"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className="w-full rounded-xl bg-stone-100"
              style={{
                height: `${h}px`,
                animation: `pulse 1.6s ease-in-out ${i * 80}ms infinite`,
              }}
            />
            <div
              className="rounded bg-stone-100"
              style={{
                width: "60%",
                height: "8px",
                animation: `pulse 1.6s ease-in-out ${i * 80 + 200}ms infinite`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────

function EmptyState({ filter }: { filter: Filter }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-3 select-none">
      {/* Icon: bar chart outline with a soft amber tint */}
      <div className="flex items-end gap-1 h-10 opacity-30">
        {[28, 16, 36, 22, 32].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-sm bg-amber-300"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
      <p className="font-jakarta text-xs font-semibold text-stone-400">
        No data for this {filter.toLowerCase()}
      </p>
      <p className="font-jakarta text-[10px] text-stone-300 text-center max-w-[160px] leading-relaxed">
        Service load data will appear here once activity is recorded.
      </p>
    </div>
  );
}

// ── Heat color ────────────────────────────────────────────────────────────────

function heatColor(value: number): {
  bg: string;
  text: string;
  border: string;
} {
  if (value >= 85) return { bg: "#d97706", text: "#fff", border: "#b45309" };
  if (value >= 65) return { bg: "#fbbf24", text: "#78350f", border: "#f59e0b" };
  if (value >= 45) return { bg: "#fde68a", text: "#92400e", border: "#fcd34d" };
  if (value >= 25) return { bg: "#fef3c7", text: "#a16207", border: "#fde68a" };
  return { bg: "#fff9f0", text: "#c8b897", border: "#f5ebe0" };
}

function heatLabel(value: number): string {
  if (value >= 85) return "Full";
  if (value >= 65) return "Busy";
  if (value >= 45) return "Moderate";
  if (value >= 25) return "Light";
  return "Quiet";
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesHeatmap() {
  const [filter, setFilter] = useState<Filter>("Week");
  const [hovered, setHovered] = useState<number | null>(null);
  const [cells, setCells] = useState<HeatCell[]>([]);
  const [loading, setLoading] = useState(false);
  // Toggle to preview the empty state — remove in production
  const [previewEmpty, setPreviewEmpty] = useState(false);

  const skeletonCount = filter === "Year" ? 12 : filter === "Month" ? 4 : 7;

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setCells(previewEmpty ? [] : DUMMY_DATA[filter]);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [filter, previewEmpty]);

  const isEmpty = !loading && cells.length === 0;

  return (
    <div className="bg-white w-full h-full overflow-hidden border border-stone-100 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <p className="font-playfair text-stone-800 text-lg leading-snug">
            Services Load
          </p>
          <p className="font-jakarta text-xs text-stone-400 mt-0.5">
            How busy your services are over time
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Preview-empty toggle — remove in production */}
          <button
            type="button"
            onClick={() => setPreviewEmpty((v) => !v)}
            className={`font-jakarta text-[10px] px-2.5 py-1 rounded-lg border transition-all ${
              previewEmpty
                ? "bg-stone-800 text-white border-stone-800"
                : "bg-white text-stone-400 border-stone-200 hover:border-stone-300"
            }`}
          >
            {previewEmpty ? "Show data" : "Empty state"}
          </button>

          {/* Filter */}
          <div className="flex bg-stone-100 rounded-xl p-1">
            {(["Week", "Month", "Year"] as Filter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`font-jakarta text-xs font-medium px-4 py-1.5 rounded-lg transition-all ${
                  filter === f
                    ? "bg-white text-stone-800 shadow-sm"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Heatmap area */}
      <div className="flex gap-2 items-end mb-4 h-[70%]">
        {loading ? (
          <SkeletonLoader count={skeletonCount} />
        ) : isEmpty ? (
          <EmptyState filter={filter} />
        ) : (
          cells.map((cell, i) => {
            const colors = heatColor(cell.value);
            const isHovered = hovered === i;
            const barHeight = Math.max(cell.value * 1.5, 12);

            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-1.5 cursor-pointer group"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Tooltip */}
                <div
                  className={`font-jakarta text-[9px] font-semibold px-2 py-0.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{
                    background: colors.bg,
                    color: colors.text,
                    borderColor: colors.border,
                  }}
                >
                  {cell.value}% · {heatLabel(cell.value)}
                </div>

                {/* Bar */}
                <div
                  className="w-full rounded-xl border transition-all duration-300"
                  style={{
                    height: `${barHeight}px`,
                    background: isHovered ? colors.bg : `${colors.bg}cc`,
                    borderColor: isHovered ? colors.border : "transparent",
                    transform: isHovered ? "scaleY(1.04)" : "scaleY(1)",
                    transformOrigin: "bottom",
                    boxShadow: isHovered ? `0 4px 16px ${colors.bg}80` : "none",
                  }}
                />

                {/* Label */}
                <p
                  className={`font-jakarta text-[10px] text-center transition-colors ${
                    isHovered ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  {cell.label}
                </p>
                {cell.sublabel && (
                  <p className="font-jakarta text-[9px] text-stone-300 text-center leading-none -mt-1">
                    {cell.sublabel}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-stone-50">
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mr-1">
          Load
        </p>
        {[
          { label: "Quiet", bg: "#fff9f0", border: "#f5ebe0", text: "#c8b897" },
          { label: "Light", bg: "#fef3c7", border: "#fde68a", text: "#a16207" },
          {
            label: "Moderate",
            bg: "#fde68a",
            border: "#fcd34d",
            text: "#92400e",
          },
          { label: "Busy", bg: "#fbbf24", border: "#f59e0b", text: "#78350f" },
          { label: "Full", bg: "#d97706", border: "#b45309", text: "#fff" },
        ].map((l) => (
          <div
            key={l.label}
            className="flex items-center gap-1 font-jakarta text-[9px] px-2 py-0.5 rounded-full border"
            style={{ background: l.bg, borderColor: l.border, color: l.text }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: l.text === "#fff" ? "#fff" : l.border }}
            />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}
