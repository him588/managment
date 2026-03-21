import { BedDouble, ConciergeBell, UserPlus, CalendarPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const actions = [
  {
    label: "Book a Room",
    sub: "New reservation",
    icon: <BedDouble size={18} />,
    route: "/rooms/book",
    bg: "#fef3c7",
    accent: "#d97706",
  },
  {
    label: "Book a Service",
    sub: "Add service",
    icon: <ConciergeBell size={18} />,
    route: "/services/book",
    bg: "#fdf4ec",
    accent: "#c2410c",
  },
  {
    label: "Add Guest",
    sub: "Walk-in check-in",
    icon: <UserPlus size={18} />,
    route: "/guests/add",
    bg: "#f5f0eb",
    accent: "#92400e",
  },
  {
    label: "New Booking",
    sub: "Manual entry",
    icon: <CalendarPlus size={18} />,
    route: "/bookings/new",
    bg: "#fef9f0",
    accent: "#b45309",
  },
];

export default function QuickActions() {
  const router = useRouter();

  return (
    <div className="flex flex-col  gap-[10px] p-4  flex-wrap">
      <p className="font-jakarta text-[10px] uppercase text-left tracking-widest text-stone-300 mr-1">
        Quick Actions
      </p>
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          onClick={() => router.push(a.route)}
          className="flex w-full items-center cursor-pointer gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
          style={{
            background: a.bg,
            borderColor: `${a.accent}30`,
          }}
        >
          <span
            className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
            style={{ background: `${a.accent}18`, color: a.accent }}
          >
            {a.icon}
          </span>
          <div className="text-left">
            <p className="font-jakarta text-xs font-medium text-stone-700 leading-none">
              {a.label}
            </p>
            <p className="font-jakarta text-[10px] text-stone-400 mt-0.5">
              {a.sub}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
