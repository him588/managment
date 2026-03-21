"use client";

import { CalendarDays, Hotel, Users } from "lucide-react";
import BookingListCard from "./booking-card";
import { BookingChart } from "./chart";
import StatsCard from "./stat-cards";
import { useBaseContext } from "@/context/base-context";
import ServicesHeatmap from "./service-heat";
import QuickActions from "./quick-actions";

// ── Types ─────────────────────────────────────────────────────────────────────

// ── Stats Card ────────────────────────────────────────────────────────────────

export default function OverviewSection() {
  const { userDetails } = useBaseContext();
  return (
    <section className="w-full space-y-8 pb-8">
      <div>
        <p className="font-playfair text-4xl text-stone-200 font-semibold leading-none">
          Welcome,{" "}
          <span className="text-stone-800">
            {userDetails && userDetails.name}
          </span>
        </p>
        <p className="font-jakarta text-sm text-stone-400 mt-1.5">
          You have{" "}
          <span className="text-amber-600 underline underline-offset-2 cursor-pointer decoration-amber-300">
            10 rooms free
          </span>{" "}
          at Grand Meridian today.
        </p>
      </div>

      {/* ── Stats cards ── */}
      <div className="flex gap-4">
        <StatsCard
          title="Booking"
          percentage="4%"
          isUp
          bg="#f0fdf4"
          accent="#4ade80"
          icon={<CalendarDays size={18} />}
          stats={[
            { label: "Booked", value: 30 },
            { label: "Check In", value: 10 },
          ]}
        />
        <StatsCard
          title="Services"
          percentage="50%"
          isUp
          bg="#faf5ff"
          accent="#c084fc"
          icon={<Hotel size={18} />}
          stats={[
            { label: "Total", value: 10 },
            { label: "Booked", value: 5 },
          ]}
        />
        <StatsCard
          title="Staff"
          percentage="4%"
          isUp={false}
          bg="#fff1f2"
          accent="#fb7185"
          icon={<Users size={18} />}
          stats={[
            { label: "Total", value: 30 },
            { label: "Active", value: 10 },
          ]}
        />
      </div>

      {/* ── Chart + Booking list ── */}
      <div className="grid grid-cols-3 gap-4">
        {/* Row 1 col 1-2: Booking chart */}
        <div className="col-span-2">
          <BookingChart />
        </div>

        {/* Row 1 col 3: Quick actions */}
        <div>
          <QuickActions />
        </div>

        {/* Row 2 col 1-2: Services heatmap */}
        <div className="col-span-2">
          <ServicesHeatmap />
        </div>

        {/* Row 2 col 3: Booking list */}
        <div>
          <BookingListCard />
        </div>
      </div>
    </section>
  );
}
