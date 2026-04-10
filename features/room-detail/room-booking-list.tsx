/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { CalendarX, Plus } from "lucide-react";
import SearchBar from "@/components/common/search-bar";
import {
  FilterType,
  RoomBookingsListProps,
  RoomBookingStatus,
} from "./types/types";
import { useRoomBookingsCount } from "./hooks/use-rooms";
import { useRoomsContext } from "@/context/room-context";
import { bookingStatusConfig } from "./types/const";

export function RoomBookingsList({
  roomId,
  roomNumber,
}: RoomBookingsListProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | RoomBookingStatus>(
    "all",
  );
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [search, setSearch] = useState("");
  const { data } = useRoomBookingsCount(roomId);
  const { setActiveRoom, setCurrentModal } = useRoomsContext();
  // Summary counts

  function handleNewBooking() {
    setCurrentModal("BookRoom");
    setActiveRoom({
      activeRoomNumber: roomNumber,
      activeRoomId: roomId,
    });
  }

  useEffect(() => {
    if (data?.data) {
      const bookings = data.data.bookings || [];
      if (bookings) {
        setFilters(() => {
          const updatedFilter = bookings.map(
            (item: { type: string; count: number }) => {
              const modifyType = (item.type || "")
                .split("_")
                .map(
                  (text) =>
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
                )
                .join(" ");
              return { type: modifyType, value: item.type, count: item.count };
            },
          );
          const allCount = updatedFilter.reduce(
            (acc: number, curr: FilterType) => {
              return acc + curr.count;
            },
            0,
          );
          return [
            { type: "all", value: "all", count: allCount },
            ...updatedFilter,
          ];
        });
      }
    }
  }, [data?.data]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <section className="space-y-4">
      {/* ── Section header ── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-jakarta">
            Bookings
          </p>
          {/* <p className="text-sm font-medium text-stone-700 mt-0.5">
            {bookings.length} total booking{bookings.length !== 1 ? "s" : ""}
          </p> */}
        </div>
        <button
          onClick={handleNewBooking}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm shadow-amber-100 hover:opacity-90 transition-all border-0"
        >
          <Plus size={12} />
          New booking
        </button>
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
          {filters.map((f) => {
            const active = activeFilter === f.value;
            const cfg =
              f.value !== "all" &&
              bookingStatusConfig[f.value as RoomBookingStatus]
                ? bookingStatusConfig[f.value as RoomBookingStatus]
                : null;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value as RoomBookingStatus)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all
                  ${
                    active
                      ? cfg
                        ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                        : "bg-amber-50 text-amber-800 border-amber-200"
                      : "bg-white text-stone-500 border-stone-200 hover:border-stone-300"
                  }`}
              >
                {f.type}
                {f.value !== "all" && f.count > 0 && (
                  <span className="ml-1.5 opacity-60">{f.count}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {filters.find((item) => item.type === "all")?.count === 0 && (
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
      )}
    </section>
  );
}
