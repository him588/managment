"use client";

import React, { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Filter = "Day" | "Week" | "Month";

interface HeatCell {
  label: string;
  sublabel?: string;
  value: number; // 0–100 occupancy %
}

// ── Data ──────────────────────────────────────────────────────────────────────

const data: Record<Filter, HeatCell[]> = {
  Day: [
    { label: "6am", value: 10 },
    { label: "8am", value: 25 },
    { label: "10am", value: 60 },
    { label: "12pm", value: 90 },
    { label: "2pm", value: 75 },
    { label: "4pm", value: 55 },
    { label: "6pm", value: 80 },
    { label: "8pm", value: 45 },
    { label: "10pm", value: 20 },
  ],
  Week: [
    { label: "Mon", sublabel: "Mar 11", value: 35 },
    { label: "Tue", sublabel: "Mar 12", value: 55 },
    { label: "Wed", sublabel: "Mar 13", value: 80 },
    { label: "Thu", sublabel: "Mar 14", value: 65 },
    { label: "Fri", sublabel: "Mar 15", value: 90 },
    { label: "Sat", sublabel: "Mar 16", value: 95 },
    { label: "Sun", sublabel: "Mar 17", value: 50 },
  ],
  Month: [
    { label: "Wk 1", sublabel: "Mar 1–7", value: 45 },
    { label: "Wk 2", sublabel: "Mar 8–14", value: 68 },
    { label: "Wk 3", sublabel: "Mar 15–21", value: 82 },
    { label: "Wk 4", sublabel: "Mar 22–28", value: 74 },
    { label: "Wk 5", sublabel: "Mar 29–31", value: 55 },
  ],
};

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

  const cells = data[filter];

  return (
    <div className="bg-white w-full h-full overflow-hidden  border border-stone-100 rounded-2xl p-6 shadow-sm">
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

        {/* Filter */}
        <div className="flex bg-stone-100 rounded-xl p-1">
          {(["Day", "Week", "Month"] as Filter[]).map((f) => (
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

      {/* Heatmap cells */}
      <div className="flex gap-2 items-end mb-4 h-[70%]">
        {cells.map((cell, i) => {
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
        })}
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
