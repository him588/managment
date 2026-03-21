import { CSSProperties } from "react";
import { MetricItem, RoomStatusItem } from "./types/types";

export const DashboardCard = () => {
  const bars: number[] = [55, 72, 48, 88, 65, 92, 78];
  const days: string[] = ["M", "T", "W", "T", "F", "S", "S"];

  const metrics: MetricItem[] = [
    { k: "Occupancy", v: "87%", up: true },
    { k: "Rev. Today", v: "$24.8k", up: true },
    { k: "Check-ins", v: "38", up: false },
  ];

  const rooms: RoomStatusItem[] = [
    { label: "Occupied", pct: 87, color: "#d97706" },
    { label: "Available", pct: 9, color: "#86efac" },
    { label: "Maintenance", pct: 4, color: "#fca5a5" },
  ];

  return (
    <div className="card-glass border border-white/90 rounded-3xl p-5 shadow-2xl shadow-stone-200/60">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400">
            Operations Dashboard
          </p>
          <p className="font-playfair text-stone-800 text-lg font-medium">
            Grand Meridian · Live
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          <span className="font-jakarta text-[10px] text-emerald-600 uppercase tracking-wide">
            Live
          </span>
        </div>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {metrics.map((m: MetricItem) => (
          <div
            key={m.k}
            className="bg-white/80 rounded-2xl p-3 border border-stone-100"
          >
            <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-400 mb-1">
              {m.k}
            </p>
            <p className="font-playfair text-xl text-stone-800">{m.v}</p>
            <p
              className={`font-jakarta text-[9px] mt-0.5 ${m.up ? "text-emerald-500" : "text-rose-400"}`}
            >
              {m.up ? "↑ 4% today" : "↓ 2% today"}
            </p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-white/60 rounded-2xl p-3.5 border border-stone-100 mb-3">
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-400 mb-2">
          Weekly Bookings
        </p>
        <div className="flex items-end gap-1.5 h-14">
          {bars.map((h: number, i: number) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={
                {
                  height: `${h}%`,
                  background:
                    i === 5
                      ? "linear-gradient(to top,#d97706,#fbbf24)"
                      : "linear-gradient(to top,#e5c88a,#fef3c7)",
                  animation: `progressBar 1s ${0.1 * i + 0.8}s ease both`,
                  transformOrigin: "bottom",
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {days.map((d: string, i: number) => (
            <span
              key={i}
              className="flex-1 text-center font-jakarta text-[8px] text-stone-300"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Room status */}
      <div className="bg-white/60 rounded-2xl p-3.5 border border-stone-100">
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-400 mb-2.5">
          Room Status
        </p>
        {rooms.map((r: RoomStatusItem) => (
          <div key={r.label} className="flex items-center gap-2 mb-1.5">
            <span className="font-jakarta text-[9px] text-stone-400 w-20 flex-shrink-0">
              {r.label}
            </span>
            <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full progress-bar"
                style={
                  {
                    "--progress-w": `${r.pct}%`,
                    width: `${r.pct}%`,
                    background: r.color,
                  } as CSSProperties
                }
              />
            </div>
            <span className="font-jakarta text-[9px] text-stone-500 w-7 text-right">
              {r.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
