"use client";

import { useState } from "react";
import {
  BedDouble,
  Users,
  Tag,
  DoorOpen,
  Layers,
  CheckCircle2,
  Wrench,
  CalendarX2,
  Plus,
  Pencil,
  ChevronLeft,
  ImageOff,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Room {
  _id: string;
  roomNumber: string;
  floor: string;
  images: string[];
  status: "available" | "booked" | "maintenance";
  createdAt: string;
}

interface RoomTypeDetail {
  type: string;
  tags: string[];
  price: number;
  maxGuest: number;
  color?: string;
  isShared?: boolean;
  rooms: Room[];
  roomCount: number;
}

// ── Dummy data ─────────────────────────────────────────────────────────────────
const DUMMY: RoomTypeDetail = {
  type: "Deluxe",
  tags: ["Ocean View", "King Bed", "Balcony", "Bathtub"],
  price: 5000,
  maxGuest: 5,
  roomCount: 6,
  rooms: [
    {
      _id: "1",
      roomNumber: "290",
      floor: "5",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      ],
      status: "available",
      createdAt: "2026-03-30T17:09:46.599Z",
    },
    {
      _id: "2",
      roomNumber: "291",
      floor: "5",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
      ],
      status: "booked",
      createdAt: "2026-03-28T10:00:00.000Z",
    },
    {
      _id: "3",
      roomNumber: "292",
      floor: "5",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
      ],
      status: "maintenance",
      createdAt: "2026-03-25T08:30:00.000Z",
    },
    {
      _id: "4",
      roomNumber: "185",
      floor: "3",
      images: [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
      ],
      status: "available",
      createdAt: "2026-03-20T14:00:00.000Z",
    },
    {
      _id: "5",
      roomNumber: "186",
      floor: "3",
      images: [
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80",
      ],
      status: "booked",
      createdAt: "2026-03-18T09:00:00.000Z",
    },
    {
      _id: "6",
      roomNumber: "187",
      floor: "3",
      images: [],
      status: "available",
      createdAt: "2026-03-15T11:00:00.000Z",
    },
  ],
};

// ── Status config ──────────────────────────────────────────────────────────────
const statusConfig = {
  available: {
    label: "Available",
    icon: CheckCircle2,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  booked: {
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

// ── RoomTypeDetailPage ─────────────────────────────────────────────────────────
export default function RoomTypeDetailPage({
  detail = DUMMY,
  onBack,
  onAddRoom,
  onEditRoomType,
}: {
  detail?: RoomTypeDetail;
  onBack?: () => void;
  onAddRoom?: () => void;
  onEditRoomType?: () => void;
}) {
  const available = detail.rooms.filter((r) => r.status === "available").length;
  const booked = detail.rooms.filter((r) => r.status === "booked").length;
  const maintenance = detail.rooms.filter(
    (r) => r.status === "maintenance",
  ).length;
  const occupancyPct =
    detail.roomCount > 0 ? Math.round((booked / detail.roomCount) * 100) : 0;

  return (
    <div className={twMerge("min-h-screen  font-jakarta p-4 sm:p-6 space-y-5")}>
      {/* ── Breadcrumb ── */}

      {/* ── Hero card ── */}

      {/* ── Tags + breakdown ── */}
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
              count={available}
              total={detail.roomCount}
              color="bg-emerald-400"
            />
            <StatusBar
              label="Booked"
              count={booked}
              total={detail.roomCount}
              color="bg-amber-400"
            />
            <StatusBar
              label="Maintenance"
              count={maintenance}
              total={detail.roomCount}
              color="bg-rose-400"
            />
          </div>
        </div>
      </div>

      {/* ── Rooms grid ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <SectionLabel>Rooms</SectionLabel>
            <p className="text-sm font-medium text-stone-700 mt-0.5">
              {detail.roomCount} room{detail.roomCount !== 1 ? "s" : ""} in this
              type
            </p>
          </div>
          <button
            onClick={onAddRoom}
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
              onClick={onAddRoom}
              className="text-xs font-medium text-amber-600 hover:text-amber-700 transition-colors"
            >
              + Add your first room
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── RoomCard ───────────────────────────────────────────────────────────────────
function RoomCard({ room }: { room: Room }) {
  const cfg = statusConfig[room.status];
  const StatusIcon = cfg.icon;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:shadow-stone-100 transition-all cursor-pointer group">
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

// ── Helpers ────────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-jakarta">
      {children}
    </p>
  );
}

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
