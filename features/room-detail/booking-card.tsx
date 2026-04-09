"use client";

import {
  Phone,
  Mail,
  Users,
  CalendarDays,
  MoonStar,
  IndianRupee,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  User,
} from "lucide-react";
import { IRoomBooking, RoomBookingStatus } from "./types/types";
import dayjs from "dayjs";
import { useState } from "react";

// ── Status config ──────────────────────────────────────────────────────────────
export const bookingStatusConfig: Record<
  RoomBookingStatus,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  [RoomBookingStatus.PENDING]: {
    label: "Pending",
    bg: "bg-stone-50",
    text: "text-stone-600",
    border: "border-stone-200",
    dot: "bg-stone-400",
  },
  [RoomBookingStatus.CONFIRMED]: {
    label: "Confirmed",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    dot: "bg-blue-400",
  },
  [RoomBookingStatus.CHECKED_IN]: {
    label: "Checked in",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    dot: "bg-amber-400",
  },
  [RoomBookingStatus.CHECKED_OUT]: {
    label: "Checked out",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-100",
    dot: "bg-emerald-400",
  },
  [RoomBookingStatus.CANCELLED]: {
    label: "Cancelled",
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-100",
    dot: "bg-rose-400",
  },
};

// ── Status pipeline ────────────────────────────────────────────────────────────
const STATUS_PIPELINE = [
  RoomBookingStatus.PENDING,
  RoomBookingStatus.CONFIRMED,
  RoomBookingStatus.CHECKED_IN,
  RoomBookingStatus.CHECKED_OUT,
];

function StatusPipeline({ current }: { current: RoomBookingStatus }) {
  if (current === RoomBookingStatus.CANCELLED) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-400" />
        <span className="text-xs text-rose-600 font-medium">Cancelled</span>
      </div>
    );
  }

  const currentIdx = STATUS_PIPELINE.indexOf(current);

  return (
    <div className="flex items-center gap-1">
      {STATUS_PIPELINE.map((step, i) => {
        const cfg = bookingStatusConfig[step];
        const done = i <= currentIdx;
        const active = i === currentIdx;
        return (
          <div key={step} className="flex items-center gap-1">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border transition-all
                ${active ? `${cfg.bg} ${cfg.text} ${cfg.border}` : done ? "bg-stone-50 text-stone-400 border-stone-100" : "bg-white text-stone-300 border-stone-100"}
              `}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${active ? cfg.dot : done ? "bg-stone-300" : "bg-stone-200"}`}
              />
              {cfg.label}
            </div>
            {i < STATUS_PIPELINE.length - 1 && (
              <div
                className={`w-3 h-px ${i < currentIdx ? "bg-stone-300" : "bg-stone-100"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── BookingCard ────────────────────────────────────────────────────────────────
interface BookingCardProps {
  booking: IRoomBooking;
  onUpdateStatus?: (bookingId: string, status: RoomBookingStatus) => void;
}

export function BookingCard({ booking, onUpdateStatus }: BookingCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cfg = bookingStatusConfig[booking.status];
  const guestName = booking.guest?.name ?? booking.guestName;
  const guestEmail = booking.guest?.email ?? booking.guestEmail;
  const initials = guestName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const checkIn = dayjs(booking.checkIn);
  const checkOut = dayjs(booking.checkOut);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-sm hover:shadow-stone-100 transition-all">
      {/* ── Left accent strip by status ── */}
      <div className={`h-1 w-full ${cfg.dot}`} />

      <div className="p-5">
        {/* ── Top row ── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          {/* Guest avatar + name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-white">
                {initials}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-800">
                {guestName}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">{guestEmail}</p>
            </div>
          </div>

          {/* Status + booking id */}
          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </span>
            <span className="text-[10px] text-stone-400 font-mono">
              #{booking._id.slice(-6).toUpperCase()}
            </span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-stone-100 my-4" />

        {/* ── Dates + stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MiniStat
            icon={<CalendarDays size={12} />}
            label="Check-in"
            value={checkIn.format("D MMM YYYY")}
          />
          <MiniStat
            icon={<CalendarDays size={12} />}
            label="Check-out"
            value={checkOut.format("D MMM YYYY")}
          />
          <MiniStat
            icon={<MoonStar size={12} />}
            label="Nights"
            value={`${booking.totalNights} night${booking.totalNights > 1 ? "s" : ""}`}
          />
          <MiniStat
            icon={<Users size={12} />}
            label="Guests"
            value={`${booking.numberOfGuests} guest${booking.numberOfGuests > 1 ? "s" : ""}`}
          />
        </div>

        {/* ── Amount row ── */}
        <div className="mt-3 flex items-center justify-between bg-amber-50/60 border border-amber-100 rounded-xl px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <IndianRupee size={12} className="text-amber-500" />
            {booking.totalNights} nights × ₹
            {booking.pricePerNight.toLocaleString("en-IN")}
          </div>
          <p className="text-base font-bold text-amber-700">
            ₹{booking.totalAmount.toLocaleString("en-IN")}
          </p>
        </div>

        {/* ── Status pipeline ── */}
        <div className="mt-4 overflow-x-auto">
          <StatusPipeline current={booking.status} />
        </div>

        {/* ── Expand / collapse ── */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Less details" : "More details"}
        </button>

        {/* ── Expanded section ── */}
        {expanded && (
          <div className="mt-4 space-y-4 border-t border-stone-100 pt-4">
            {/* Contact info */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                Contact
              </p>
              <div className="space-y-2">
                <ContactRow icon={<User size={12} />} value={guestName} />
                <ContactRow icon={<Mail size={12} />} value={guestEmail} />
                <ContactRow
                  icon={<Phone size={12} />}
                  value={booking.guestPhone}
                />
              </div>
            </div>

            {/* Notes */}
            {booking.notes && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  Notes
                </p>
                <div className="flex gap-2 bg-stone-50 border border-stone-100 rounded-xl p-3">
                  <MessageSquare
                    size={13}
                    className="text-stone-300 shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {booking.notes}
                  </p>
                </div>
              </div>
            )}

            {/* Status actions */}
            {booking.status !== RoomBookingStatus.CANCELLED &&
              booking.status !== RoomBookingStatus.CHECKED_OUT && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                    Update status
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {STATUS_PIPELINE.filter((s) => s !== booking.status).map(
                      (s) => {
                        const c = bookingStatusConfig[s];
                        return (
                          <button
                            key={s}
                            onClick={() => onUpdateStatus?.(booking._id, s)}
                            className={`text-xs font-medium px-3 py-1.5 rounded-xl border transition-all hover:opacity-80 ${c.bg} ${c.text} ${c.border}`}
                          >
                            → {c.label}
                          </button>
                        );
                      },
                    )}
                    <button
                      onClick={() =>
                        onUpdateStatus?.(
                          booking._id,
                          RoomBookingStatus.CANCELLED,
                        )
                      }
                      className="text-xs font-medium px-3 py-1.5 rounded-xl border bg-rose-50 text-rose-600 border-rose-100 hover:opacity-80 transition-all"
                    >
                      Cancel booking
                    </button>
                  </div>
                </div>
              )}

            {/* Created at */}
            <p className="text-[10px] text-stone-300">
              Booked on {dayjs(booking.createdAt).format("D MMM YYYY, h:mm A")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MiniStat ───────────────────────────────────────────────────────────────────
function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#fffbf5] border border-stone-100 rounded-xl px-3 py-2">
      <p className="flex items-center gap-1 text-[10px] text-stone-400 mb-0.5">
        <span className="text-stone-300">{icon}</span>
        {label}
      </p>
      <p className="text-xs font-semibold text-stone-700">{value}</p>
    </div>
  );
}

// ── ContactRow ─────────────────────────────────────────────────────────────────
function ContactRow({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-stone-300">{icon}</span>
      <span className="text-xs text-stone-600">{value}</span>
    </div>
  );
}
