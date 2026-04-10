/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import {
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Wrench,
  CheckCircle2,
  Layers,
  CalendarClock,
  Tag,
  Users,
  ImageOff,
} from "lucide-react";
import dayjs from "dayjs";
import { Room } from "./types/types";
import { useRoomDetails } from "./hooks/use-rooms";

interface RoomHeroCardProps {
  roomId: string;
  room: Room;
  onEdit?: () => void;
  onToggleMaintenance?: () => void;
  onBack?: () => void;
}

export function RoomHeroCard({
  roomId,
  onEdit,
  onToggleMaintenance,
  onBack,
}: RoomHeroCardProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});
  const [room, setRoom] = useState<null | Room>(null);
  const { data } = useRoomDetails(roomId);

  const isMaintenance = room?.status === "maintenance";
  const images = room?.images ?? [];

  function prev() {
    setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  useEffect(() => {
    if (data?.data) {
      const room = data.data.room;
      if (room) {
        setRoom(() => {
          const updatedDetails = {
            id: room.id,
            hotelId: room.hotelId,
            roomTypeId: room.roomTypeId._id,
            roomNumber: room.roomNumber,
            floor: room.floor,
            status: room.status,
            images: room.images,
            createdAt: room.createdAt,
            updatedAt: room.updatedAt,
            roomType: {
              type: room.roomTypeId.type,
              price: room.roomTypeId.price,
              maxGuest: room.roomTypeId.maxGuest,
              tags: room.roomTypeId.tags,
            },
          };
          return updatedDetails;
        });
      }
    }
  }, [data?.data]);

  return (
    <section className="space-y-0">
      {/* ── Breadcrumb ── */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors mb-4"
      >
        <ChevronLeft size={13} />
        Rooms
      </button>

      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        {/* ── Dark header ── */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 px-6 py-5 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <BedDouble size={22} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-0.5">
                Room
              </p>
              <h1 className="font-playfair text-xl text-amber-100 leading-tight">
                #{room?.roomNumber}
              </h1>
              <p className="text-xs text-stone-500 mt-0.5">
                Floor {room?.floor}
                {room?.roomType && ` · ${room.roomType.type}`}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 self-start flex-wrap">
            {/* Status badge */}
            <div
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border
                ${
                  isMaintenance
                    ? "bg-rose-500/10 border-rose-500/20 text-rose-300"
                    : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                }`}
            >
              {isMaintenance ? (
                <Wrench size={12} />
              ) : (
                <CheckCircle2 size={12} />
              )}
              {isMaintenance ? "Maintenance" : "Available"}
            </div>

            <button
              onClick={onToggleMaintenance}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all
                ${
                  isMaintenance
                    ? "text-emerald-300 border-stone-700 hover:bg-stone-700 hover:text-white"
                    : "text-rose-300 border-stone-700 hover:bg-stone-700 hover:text-white"
                }`}
            >
              {isMaintenance ? (
                <CheckCircle2 size={12} />
              ) : (
                <Wrench size={12} />
              )}
              {isMaintenance ? "Mark available" : "Mark maintenance"}
            </button>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-stone-100 border-t border-stone-100">
          <StatCell label="Room type" value={room?.roomType?.type ?? "—"} />
          <StatCell
            label="Price / night"
            value={
              room?.roomType
                ? `₹${room.roomType.price.toLocaleString("en-IN")}`
                : "—"
            }
          />
          <StatCell
            label="Max guests"
            value={room?.roomType ? `${room.roomType.maxGuest} guests` : "—"}
          />
          <StatCell
            label="Last updated"
            value={dayjs(room?.updatedAt).format("D MMM YYYY")}
          />
        </div>

        {/* ── Image gallery + tags ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-stone-100">
          {/* Gallery */}
          <div className="md:col-span-2 relative bg-stone-100 h-64 md:h-72">
            {images.length > 0 && !imgError[activeImg] ? (
              <img
                src={images[activeImg]}
                alt={`Room ${room?.roomNumber}`}
                className="w-full h-full object-cover"
                onError={() =>
                  setImgError((p) => ({ ...p, [activeImg]: true }))
                }
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <ImageOff size={28} className="text-stone-300" />
                <p className="text-xs text-stone-400">No image</p>
              </div>
            )}

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`rounded-full transition-all ${
                      i === activeImg
                        ? "w-4 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image count */}
            {images.length > 0 && (
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="text-xs text-white font-medium">
                  {activeImg + 1} / {images.length}
                </span>
              </div>
            )}
          </div>

          {/* Thumbnails + Tags side panel */}
          <div className="border-l border-stone-100 flex flex-col">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-2 gap-1 p-2 border-b border-stone-100">
                {images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeImg
                        ? "border-amber-400"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {i === 3 && images.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">
                          +{images.length - 4}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Tags & room info */}
            <div className="p-4 space-y-4 flex-1">
              {room?.roomType?.tags && room.roomType.tags.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {room.roomType.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800"
                      >
                        <Tag size={9} className="text-amber-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <InfoRow
                  icon={<Layers size={12} />}
                  label="Floor"
                  value={room?.floor || ""}
                />
                <InfoRow
                  icon={<Users size={12} />}
                  label="Max guests"
                  value={`${room?.roomType?.maxGuest ?? "—"}`}
                />
                <InfoRow
                  icon={<CalendarClock size={12} />}
                  label="Added"
                  value={dayjs(room?.createdAt).format("D MMM YYYY")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4">
      <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
        {label}
      </p>
      <p className="text-base font-semibold text-stone-800 truncate">{value}</p>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-xs text-stone-400">
        <span className="text-stone-300">{icon}</span>
        {label}
      </span>
      <span className="text-xs font-medium text-stone-600">{value}</span>
    </div>
  );
}
