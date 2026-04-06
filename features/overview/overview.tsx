"use client";

import { CalendarDays, Hotel, Users } from "lucide-react";
import BookingListCard from "./booking-card";
import { BookingChart } from "./chart";
import StatsCard from "./stat-cards";
import { useBaseContext } from "@/context/base-context";
import ServicesHeatmap from "./service-heat";
import QuickActions from "./quick-actions";
import DropDown from "@/components/common/drop-down";
import { useEffect, useState } from "react";
import { useOverview } from "./hooks/hooks";
import { filters } from "./types/const";
import { useOverviewStats } from "./hooks/use-stats";

// ── Types ─────────────────────────────────────────────────────────────────────

// ── Stats Card ────────────────────────────────────────────────────────────────

export default function OverviewSection() {
  const { userDetails } = useBaseContext();
  const [filter, setFilter] = useState("today");
  const { stats, isLoading, error } = useOverviewStats(
    filter as "today" | "week" | "month" | "year",
  );

  return (
    <section className="w-full space-y-8 pb-8">
      <div className=" flex items-center justify-between">
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
        <DropDown
          defaultSelect={true}
          data={filters}
          handleClick={(value) => setFilter(value)}
        />
      </div>

      {/* ── Stats cards ── */}
      <div className="flex gap-4">
        <StatsCard
          title="Booking"
          percentage={`${stats?.booking.percentage}`}
          isUp
          bg="#f0fdf4"
          accent="#4ade80"
          isLoading={isLoading}
          icon={<CalendarDays size={18} />}
          stats={stats?.booking.startsData || []}
        />
        <StatsCard
          title="Services"
          percentage={`${stats?.booking.percentage}`}
          isUp
          bg="#faf5ff"
          accent="#c084fc"
          isLoading={isLoading}
          icon={<Hotel size={18} />}
          stats={stats?.service.startsData || []}
        />
        <StatsCard
          title="Staff"
          percentage={`${stats?.booking.percentage}`}
          isUp={false}
          bg="#fff1f2"
          accent="#fb7185"
          isLoading={isLoading}
          icon={<Users size={18} />}
          stats={stats?.staff.startsData || []}
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
