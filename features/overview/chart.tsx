import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";
import { useBookingCount } from "./hooks/hooks";
type Filter = "Week" | "Month" | "Year";

const chartData: Record<
  Filter,
  { label: string; online: number; walkin: number }[]
> = {
  Week: [
    { label: "Mon", online: 12, walkin: 8 },
    { label: "Tue", online: 18, walkin: 11 },
    { label: "Wed", online: 15, walkin: 14 },
    { label: "Thu", online: 22, walkin: 10 },
    { label: "Fri", online: 28, walkin: 16 },
    { label: "Sat", online: 35, walkin: 20 },
    { label: "Sun", online: 25, walkin: 13 },
  ],
  Month: [
    { label: "Wk 1", online: 62, walkin: 41 },
    { label: "Wk 2", online: 78, walkin: 55 },
    { label: "Wk 3", online: 91, walkin: 48 },
    { label: "Wk 4", online: 105, walkin: 63 },
  ],
  Year: [
    { label: "Jan", online: 210, walkin: 140 },
    { label: "Feb", online: 185, walkin: 120 },
    { label: "Mar", online: 240, walkin: 160 },
    { label: "Apr", online: 270, walkin: 175 },
    { label: "May", online: 310, walkin: 195 },
    { label: "Jun", online: 290, walkin: 180 },
    { label: "Jul", online: 325, walkin: 210 },
    { label: "Aug", online: 350, walkin: 225 },
    { label: "Sep", online: 300, walkin: 190 },
    { label: "Oct", online: 280, walkin: 170 },
    { label: "Nov", online: 260, walkin: 155 },
    { label: "Dec", online: 340, walkin: 220 },
  ],
};

export function BookingChart() {
  const [filter, setFilter] = useState<Filter>("Week");
  const [onlineTotal, setOnlineTotal] = useState(0);
  const [walkinTotal, setWalkInTotal] = useState(0);
  const { data: bookingData } = useBookingCount(filter.toLowerCase());
  const data = chartData[filter];

  useEffect(() => {
    console.log(bookingData?.data);
  }, [bookingData]);

  // const onlineTotal = data.reduce((s, d) => s + d.online, 0);
  // const walkinTotal = data.reduce((s, d) => s + d.walkin, 0);

  return (
    <div className="flex-1 min-w-0 bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
      {/* Chart header */}
      <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
        <div>
          <p className="font-playfair text-stone-800 text-lg leading-snug">
            Booking Sources
          </p>
          <p className="font-jakarta text-xs text-stone-400 mt-0.5">
            Online vs walk-in comparison
          </p>
        </div>

        {/* Summary pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="font-jakarta text-xs text-amber-700">
              {onlineTotal} Online
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-100 rounded-xl px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-stone-400 flex-shrink-0" />
            <span className="font-jakarta text-xs text-stone-500">
              {walkinTotal} Walk-in
            </span>
          </div>
        </div>
      </div>

      {/* Filter toggle */}
      <div className="flex bg-stone-100 rounded-xl p-1 w-fit mb-6">
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

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f5f5f4"
            vertical={false}
          />
          <XAxis
            dataKey="label"
            tick={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: 10,
              fill: "#a8a29e",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: 10,
              fill: "#a8a29e",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="online"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ fill: "#f59e0b", r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "#f59e0b", strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="walkin"
            stroke="#a8a29e"
            strokeWidth={2.5}
            strokeDasharray="5 4"
            dot={{ fill: "#a8a29e", r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "#a8a29e", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="font-jakarta bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-xl shadow-stone-200/60 text-xs">
      <p className="text-stone-400 mb-2 uppercase tracking-widest text-[9px]">
        {label}
      </p>
      {payload.map((p: any) => (
        <div key={p.name} className="flex items-center gap-2 mb-1 last:mb-0">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: p.color }}
          />
          <span className="text-stone-500">
            {p.name === "online" ? "Online" : "Walk-in"}
          </span>
          <span className="ml-auto font-semibold text-stone-800 pl-4">
            {p.value}
          </span>
        </div>
      ))}
    </div>
  );
};
