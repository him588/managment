/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Users, Layers, Wrench, CheckCircle2, CalendarX2 } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Room {
  id: string;
  roomNumber: string;
  category: string;
  floor: string;
  images: string[];
  maxGuest: number;
  status: "available" | "booked" | "maintenance";
}

interface RoomCardProps {
  room: Room;
  onClick?: () => void;
  onToggleMaintenance?: (roomId: string, value: boolean) => void;
}

// ── Status config ──────────────────────────────────────────────────────────────
const statusConfig = {
  available: {
    label: "Available",
    icon: CheckCircle2,
    bg: "#f0fdf4",
    color: "#15803d",
    dot: "#22c55e",
    stripColor: "#22c55e",
  },
  booked: {
    label: "Booked",
    icon: CalendarX2,
    bg: "#fef3c7",
    color: "#92400e",
    dot: "#f59e0b",
    stripColor: "#f59e0b",
  },
  maintenance: {
    label: "Maintenance",
    icon: Wrench,
    bg: "#fff1f2",
    color: "#be123c",
    dot: "#f43f5e",
    stripColor: "#f43f5e",
  },
};

// ── RoomCard ───────────────────────────────────────────────────────────────────
export function RoomCard({ room, onClick }: RoomCardProps) {
  const cfg = statusConfig[room.status];
  const StatusIcon = cfg.icon;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer pb-[10px]"
      style={{
        background: "#ffffff",
        borderRadius: 18,
        border: "1px solid #e7e5e4",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 32px rgba(120,83,30,0.11)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* ── Image carousel ── */}
      <div style={{ position: "relative" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          style={{ height: 190, width: "100%" }}
        >
          {room.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Room ${room.roomNumber}`}
                style={{
                  width: "100%",
                  height: 190,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Room number pill — top-left */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 10,
            background: "rgba(28,25,23,0.62)",
            backdropFilter: "blur(6px)",
            borderRadius: 20,
            padding: "4px 11px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            # {room.roomNumber}
          </span>
        </div>

        {/* Status pill — top-right */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10,
            background: cfg.bg,
            borderRadius: 20,
            padding: "4px 10px",
            display: "flex",
            alignItems: "center",
            gap: 5,
            border: `1px solid ${cfg.dot}30`,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: cfg.dot,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 11, fontWeight: 500, color: cfg.color }}>
            {cfg.label}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: "15px 18px 0" }}>
        {/* Category + name */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 18,
                fontWeight: 400,
                color: "#1c1917",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              {room.category}
            </h3>
            <p style={{ fontSize: 12, color: "#a8a29e", margin: "2px 0 0" }}>
              Room {room.roomNumber}
            </p>
          </div>

          {/* Maintenance icon badge */}
          {room.status === "maintenance" && (
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#fff1f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <StatusIcon size={15} color="#f43f5e" strokeWidth={1.8} />
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#f0edea", marginBottom: 12 }} />

        {/* Meta pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <MetaPill
            icon={<Layers size={12} color="#a8a29e" strokeWidth={1.8} />}
          >
            Floor {room.floor}
          </MetaPill>
          <MetaPill
            icon={<Users size={12} color="#a8a29e" strokeWidth={1.8} />}
          >
            Max {room.maxGuest} guests
          </MetaPill>
        </div>
      </div>
    </div>
  );
}

// ── MetaPill ───────────────────────────────────────────────────────────────────
function MetaPill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 12,
        fontWeight: 500,
        color: "#57534e",
        background: "rgba(255,251,235,0.55)",
        border: "1px solid #e7e5e4",
        borderRadius: 20,
        padding: "4px 10px",
      }}
    >
      {icon}
      {children}
    </span>
  );
}
