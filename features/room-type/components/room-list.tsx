/* eslint-disable @next/next/no-img-element */
import {
  Plus,
  DoorOpen,
  CalendarX2,
  CheckCircle2,
  ImageOff,
  Layers,
  Pencil,
  Wrench,
} from "lucide-react";
import React, { useState } from "react";
import { RoomInfoType, RoomsByStatus } from "../types/type";
import { useRoomsContext } from "@/context/room-context";
import { useRouter } from "next/navigation";

function RoomList({ detail }: { detail: RoomInfoType }) {
  const { setSelectedCategory, setCurrentModal } = useRoomsContext();

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <SectionLabel>Rooms</SectionLabel>
          <p className="text-sm font-medium text-stone-700 mt-0.5">
            {detail.roomCount} room{+detail.roomCount !== 1 ? "s" : ""} in this
            type
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedCategory({
              categoryId: detail.roomTypeId,
              categoryName: detail.type,
            });
            setCurrentModal("createRoom");
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm shadow-amber-100 hover:opacity-90 transition-all border-0"
        >
          <Plus size={12} />
          Add room
        </button>
      </div>

      {detail.rooms.length === 0 ? (
        <div className="bg-white border border-dashed border-stone-200 rounded-2xl py-12 flex flex-col items-center gap-3">
          <DoorOpen size={28} className="text-stone-300" />
          <p className="text-sm text-stone-400">No rooms added yet</p>
          <button
            // onClick={onAddRoom}
            className="text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            + Add your first room
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {detail.rooms.map((room) => (
            <RoomCard key={room.roomId} room={room} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RoomList;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-jakarta">
      {children}
    </p>
  );
}

const statusConfig = {
  available: {
    label: "Available",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  upcoming: {
    label: "Available",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  occupied: {
    label: "Booked",
    icon: CalendarX2,
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  maintenance: {
    label: "Maintenance",
    icon: Wrench,
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    dot: "bg-rose-400",
  },
};

function RoomCard({ room }: { room: RoomsByStatus }) {
  const cfg = statusConfig[room.status];
  const StatusIcon = cfg.icon;
  const [imgError, setImgError] = useState(false);
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/rooms/${room.roomId}`);
      }}
      className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:shadow-stone-100 transition-all cursor-pointer group"
    >
      <div className="relative h-36 bg-stone-100">
        {room.images[0] && !imgError ? (
          <img
            src={room.images[0]}
            alt={`Room ${room.roomNumber}`}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageOff size={22} className="text-stone-300" />
          </div>
        )}
        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span className="text-xs font-medium text-white">
            # {room.roomNumber}
          </span>
        </div>
        <div
          className={`absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.border}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          <span className={`text-[10px] font-medium ${cfg.text}`}>
            {cfg.label}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-stone-800">
              Room {room.roomNumber}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-stone-400">
                <Layers size={11} />
                Floor {room.floor}
              </span>
              <span className="flex items-center gap-1 text-xs text-stone-400">
                <StatusIcon size={11} />
                {cfg.label}
              </span>
            </div>
          </div>
          <button className="opacity-0 group-hover:opacity-100 w-7 h-7 rounded-lg border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600 transition-all">
            <Pencil size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
