import { BedDouble, Pencil, Plus } from "lucide-react";
import React from "react";
import { RoomInfoType } from "@/features/room-type/types/type";
import { useRoomsContext } from "@/context/room-context";

function RoomTypeInfo({ detail }: { detail: RoomInfoType }) {
  const { setSelectedCategory, setCurrentModal } = useRoomsContext();
  return (
    <section>
      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 px-6 py-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <BedDouble size={22} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-0.5">
                Room type
              </p>
              <h1 className="font-playfair text-xl text-amber-100 leading-tight">
                {detail.type}
              </h1>
            </div>
          </div>

          <div className="flex gap-2 self-start">
            <button
              //   onClick={onEditRoomType}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-stone-300 border border-stone-700 hover:bg-stone-700 hover:text-white transition-all"
            >
              <Pencil size={12} />
              Edit type
            </button>
            <button
              onClick={() => {
                setSelectedCategory({
                  categoryId: detail.roomTypeId,
                  categoryName: detail.type,
                });
                setCurrentModal("createRoom");
              }}
              //   onClick={onAddRoom}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-stone-900 bg-gradient-to-r from-amber-400 to-orange-400 hover:opacity-90 transition-all border-0"
            >
              <Plus size={12} />
              Add room
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-stone-100 border-t border-stone-100">
          <StatCell
            label="Price / night"
            value={`₹${detail.price.toLocaleString("en-IN")}`}
            sub=""
          />
          <StatCell
            label="Max guests"
            value={String(detail.maxGuest)}
            sub={detail.maxGuest === 1 ? "guest" : "guests"}
          />
          <StatCell
            label="Total rooms"
            value={String(detail.roomCount)}
            sub="rooms"
          />
          <StatCell
            label="Occupancy"
            value={`${detail.occupancyPct}%`}
            sub="booked"
          />
        </div>
      </div>
    </section>
  );
}
export default RoomTypeInfo;

function StatCell({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="px-5 py-4">
      <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
        {label}
      </p>
      <p className="text-xl font-semibold text-stone-800">
        {value}
        {sub && (
          <span className="text-xs font-normal text-stone-400 ml-1">{sub}</span>
        )}
      </p>
    </div>
  );
}
