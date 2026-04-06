"use client";

import { RoomCategoryType } from "@/features/rooms/types/types";
import clsx from "clsx";

interface RoomCategoryListCardProps {
  category: RoomCategoryType;
  onClick?: () => void;
}

export function RoomCategoryListCard({
  category,
  onClick,
}: RoomCategoryListCardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "group relative cursor-pointer overflow-hidden",
        "rounded-2xl border border-stone-200",
        "bg-white/90 backdrop-blur",
        "p-5 transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        "hover:border-amber-200",
      )}
    >
      {/* Accent strip */}
      <div
        className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl"
        style={{
          background: category.color,
          boxShadow: `0 4px 18px ${category.color}40`,
        }}
      />

      {/* HEADER */}
      <div className="flex items-start justify-between mb-3 mt-1">
        <h2 className="text-lg font-semibold capitalize text-stone-900 tracking-tight">
          {category.type && category.type}
        </h2>

        <span
          className={clsx(
            "text-[11px] font-medium px-2.5 py-1 rounded-full border",
            category.isShared
              ? "bg-amber-50 text-amber-700 border-amber-200"
              : "bg-emerald-50 text-emerald-600 border-emerald-200",
          )}
        >
          {category.isShared ? "Shared" : "Private"}
        </span>
      </div>

      {/* TAGS */}
      {category.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {category.tags.map((tag, i) => (
            <span
              key={i}
              className={clsx(
                "text-[11px] px-2.5 py-1 rounded-full",
                "bg-[#fffbeb] text-stone-700 border border-amber-100",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* PRICE */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] text-stone-500 mb-1">Starting from</p>

          <p className="text-2xl font-bold tracking-tight text-stone-900">
            ₹ {category.price.toLocaleString()}
          </p>
        </div>

        {/* Guests */}
        <div className="text-right">
          <p className="text-[11px] text-stone-500 mb-1">Capacity</p>
          <p className="text-sm font-semibold text-stone-800">
            {category.maxGuest} Guests
          </p>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-200" />
      </div>
    </div>
  );
}
