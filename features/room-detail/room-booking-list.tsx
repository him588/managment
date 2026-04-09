"use client";

import { useState } from "react";
import { Plus, CalendarX } from "lucide-react";
import SearchBar from "@/components/common/search-bar";
import { IRoomBooking, RoomBookingStatus } from "./types/types";
import { BookingCard } from "./booking-card";

// ── Types ──────────────────────────────────────────────────────────────────────
const bookingStatusConfig: Record<
  RoomBookingStatus,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  [RoomBookingStatus.PENDING]: {
    label: "Pending",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
    dot: "bg-yellow-500",
  },
  [RoomBookingStatus.CONFIRMED]: {
    label: "Confirmed",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    dot: "bg-blue-500",
  },
  [RoomBookingStatus.CHECKED_IN]: {
    label: "Checked in",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    dot: "bg-green-500",
  },
  [RoomBookingStatus.CHECKED_OUT]: {
    label: "Checked out",
    bg: "bg-gray-50",
    text: "text-gray-700",
    border: "border-gray-200",
    dot: "bg-gray-500",
  },
  [RoomBookingStatus.CANCELLED]: {
    label: "Cancelled",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    dot: "bg-red-500",
  },
};
interface RoomBookingsListProps {
  bookings: IRoomBooking[];
  onNewBooking?: () => void;
  onUpdateStatus?: (bookingId: string, status: RoomBookingStatus) => void;
}

const FILTERS: { label: string; value: "all" | RoomBookingStatus }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: RoomBookingStatus.PENDING },
  { label: "Confirmed", value: RoomBookingStatus.CONFIRMED },
  { label: "Checked in", value: RoomBookingStatus.CHECKED_IN },
  { label: "Checked out", value: RoomBookingStatus.CHECKED_OUT },
  { label: "Cancelled", value: RoomBookingStatus.CANCELLED },
];

// ── RoomBookingsList ───────────────────────────────────────────────────────────
export function RoomBookingsList({
  bookings,
  onNewBooking,
  onUpdateStatus,
}: RoomBookingsListProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | RoomBookingStatus>(
    "all",
  );
  const [search, setSearch] = useState("");

  const filtered = bookings.filter((b) => {
    const matchStatus = activeFilter === "all" || b.status === activeFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      b.guestName.toLowerCase().includes(q) ||
      b.guestEmail.toLowerCase().includes(q) ||
      b.guestPhone.includes(q) ||
      b._id.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  // Summary counts
  const counts = Object.values(RoomBookingStatus).reduce(
    (acc, s) => ({
      ...acc,
      [s]: bookings.filter((b) => b.status === s).length,
    }),
    {} as Record<RoomBookingStatus, number>,
  );

  return (
    <section className="space-y-4">
      {/* ── Section header ── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-jakarta">
            Bookings
          </p>
          <p className="text-sm font-medium text-stone-700 mt-0.5">
            {bookings.length} total booking{bookings.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={onNewBooking}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm shadow-amber-100 hover:opacity-90 transition-all border-0"
        >
          <Plus size={12} />
          New booking
        </button>
      </div>

      {/* ── Summary stat pills ── */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(counts).map(([status, count]) => {
          const cfg = bookingStatusConfig[status as RoomBookingStatus];
          if (count === 0) return null;
          return (
            <div
              key={status}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${cfg.bg} ${cfg.text} ${cfg.border}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label}: {count}
            </div>
          );
        })}
      </div>

      {/* ── Search + filter ── */}
      <div className="flex flex-wrap gap-3 items-center">
        <SearchBar
          placeholder="Search guest name, email…"
          value={search}
          onChange={setSearch}
          width="w-full sm:w-72"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => {
            const active = activeFilter === f.value;
            const cfg =
              f.value !== "all"
                ? bookingStatusConfig[f.value as RoomBookingStatus]
                : null;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all
                  ${
                    active
                      ? cfg
                        ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                        : "bg-amber-50 text-amber-800 border-amber-200"
                      : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
                  }`}
              >
                {f.label}
                {f.value !== "all" && counts[f.value] > 0 && (
                  <span className="ml-1.5 opacity-60">{counts[f.value]}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── List ── */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-dashed border-stone-200 rounded-2xl py-14 flex flex-col items-center gap-3">
          <CalendarX size={28} className="text-stone-300" />
          <p className="text-sm text-stone-400">No bookings found</p>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs text-amber-600 hover:text-amber-700 transition-colors"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              onUpdateStatus={onUpdateStatus}
            />
          ))}
        </div>
      )}
    </section>
  );
}
