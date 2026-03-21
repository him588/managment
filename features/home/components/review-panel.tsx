"use client";

import { type FC, type CSSProperties } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FeaturePillProps {
  emoji: string;
  label: string;
  delay: string;
}

interface StatBadgeProps {
  value: string;
  label: string;
  color: string;
}

interface ReviewCardProps {
  name: string;
  hotel: string;
  text: string;
  avatar: string;
}

// ── Tiny reusable pieces ──────────────────────────────────────────────────────

const FeaturePill: FC<FeaturePillProps> = ({ emoji, label, delay }) => (
  <div
    className="inline-flex items-center gap-2 bg-white/80 border border-stone-100 rounded-full px-3.5 py-2 shadow-sm font-jakarta text-xs text-stone-600 anim-fade-up"
    style={{ animationDelay: delay } as CSSProperties}
  >
    <span>{emoji}</span>
    {label}
  </div>
);

const StatBadge: FC<StatBadgeProps> = ({ value, label, color }) => (
  <div className="flex flex-col items-center bg-white/70 border border-stone-100 rounded-2xl px-5 py-4 shadow-sm backdrop-blur-sm">
    <span
      className="font-playfair text-3xl font-semibold mb-0.5"
      style={{ color } as CSSProperties}
    >
      {value}
    </span>
    <span className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400">
      {label}
    </span>
  </div>
);

const ReviewCard: FC<ReviewCardProps> = ({ name, hotel, text, avatar }) => (
  <div className="bg-white/80 border border-stone-100 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
    <div className="flex items-center gap-2.5 mb-3">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold font-jakarta flex-shrink-0"
        style={
          {
            background: "linear-gradient(135deg,#f59e0b,#d97706)",
          } as CSSProperties
        }
      >
        {avatar}
      </div>
      <div>
        <p className="font-jakarta text-xs font-medium text-stone-700 leading-none">
          {name}
        </p>
        <p className="font-jakarta text-[10px] text-stone-400 mt-0.5">
          {hotel}
        </p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 12 12"
            fill="#f59e0b"
            className="w-2.5 h-2.5"
          >
            <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="font-jakarta text-[11px] text-stone-500 leading-relaxed">
      {text}
    </p>
  </div>
);

// ── Main Decorative Panel ─────────────────────────────────────────────────────

export default function ReviewPanel() {
  const pills = [
    { emoji: "📊", label: "Real-time Analytics" },
    { emoji: "🛎️", label: "Concierge Requests" },
    { emoji: "💳", label: "PCI Payments" },
    { emoji: "📅", label: "Smart Scheduling" },
    { emoji: "🌐", label: "Channel Manager" },
    { emoji: "🔔", label: "Instant Alerts" },
    { emoji: "🧾", label: "Auto Invoicing" },
    { emoji: "📍", label: "Multi-property" },
  ];

  return (
    <div className="lg:col-span-3 relative overflow-hidden p-8 md:p-12 flex flex-col justify-between gap-10 min-h-[560px]">
      {/* ── Blurred background blobs ── */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-30 pointer-events-none"
        style={
          {
            background: "radial-gradient(circle, #fde68a, transparent 70%)",
          } as CSSProperties
        }
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={
          {
            background: "radial-gradient(circle, #6ee7b7, transparent 70%)",
          } as CSSProperties
        }
      />

      {/* ── Top: headline + pill cloud ── */}
      <div>
        <p className="font-jakarta text-[10px] uppercase tracking-widest text-amber-500 mb-3 anim-fade-up">
          Everything you need
        </p>
        <h2 className="font-playfair text-4xl text-stone-800 leading-tight mb-6 anim-fade-up delay-1">
          One platform.
          <br />
          <em className="not-italic shimmer-text">Infinite control.</em>
        </h2>

        {/* Pill cloud */}
        <div className="flex flex-wrap gap-2">
          {pills.map((p, i) => (
            <FeaturePill
              key={p.label}
              emoji={p.emoji}
              label={p.label}
              delay={`${0.1 * i + 0.2}s`}
            />
          ))}
        </div>
      </div>

      {/* ── Mid: stat row ── */}
      <div className="grid grid-cols-3 gap-3 anim-fade-up delay-3">
        <StatBadge value="87%" label="Avg. Occupancy" color="#d97706" />
        <StatBadge value="3.2k+" label="Hotels Active" color="#059669" />
        <StatBadge value="4.9★" label="Rated by GMs" color="#3b82f6" />
      </div>

      {/* ── Bottom: two review cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 anim-fade-up delay-4">
        <ReviewCard
          avatar="S"
          name="Sarah M."
          hotel="The Azure Palace, Bali"
          text="ConciergeOS cut our check-in time in half. The dashboard is stunning and the widget took 2 minutes to embed."
        />
        <ReviewCard
          avatar="R"
          name="Rahul D."
          hotel="Skyline Suites, Dubai"
          text="Revenue visibility went from weekly reports to live data. Our team actually enjoys using it now."
        />
      </div>

      {/* ── Floating accent line ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
        style={
          {
            background:
              "linear-gradient(to bottom, transparent, #f59e0b 40%, #34d399 75%, transparent)",
          } as CSSProperties
        }
      />
    </div>
  );
}
