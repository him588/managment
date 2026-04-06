import React from "react";
import { RoomInfoType } from "../types/type";
import { Tag } from "lucide-react";

function Stats({ detail }: { detail: RoomInfoType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white border border-stone-200 rounded-2xl p-5">
        <SectionLabel>Tags</SectionLabel>
        <div className="flex flex-wrap gap-2 mt-3">
          {detail.tags.length > 0 ? (
            detail.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800"
              >
                <Tag size={10} className="text-amber-500" />
                {tag}
              </span>
            ))
          ) : (
            <p className="text-xs text-stone-400">No tags added.</p>
          )}
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-2xl p-5">
        <SectionLabel>Room status breakdown</SectionLabel>
        <div className="flex flex-col gap-2.5 mt-3">
          <StatusBar
            label="Available"
            count={+detail.availableRooms}
            total={+detail.roomCount}
            color="bg-emerald-400"
          />
          <StatusBar
            label="Booked"
            count={+detail.bookingRooms}
            total={+detail.roomCount}
            color="bg-amber-400"
          />
          <StatusBar
            label="Maintenance"
            count={+detail.mantainanceRooms}
            total={+detail.roomCount}
            color="bg-rose-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-jakarta">
      {children}
    </p>
  );
}

function StatusBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-stone-500 w-24 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-medium text-stone-600 w-6 text-right shrink-0">
        {count}
      </span>
    </div>
  );
}
