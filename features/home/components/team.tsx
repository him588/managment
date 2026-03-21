"use client";

import { useState, type FC, type CSSProperties } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  avatar: string;
  gradient: string;
  ring: string;
  tag: string;
  tagColor: string;
  skills: string[];
  funFact: string;
  contrib: string;
}

// ── Styles ────────────────────────────────────────────────────────────────────

const STYLES = `
  @keyframes floatCard {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes revealUp {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes shimmerCard {
    0%   { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
  @keyframes blink {
    0%,100% { opacity:1; } 50% { opacity:0; }
  }

  .team-card {
    transition: box-shadow .3s, transform .3s, border-color .3s;
    cursor: pointer;
  }
  .team-card:hover {
    box-shadow: 0 24px 64px rgba(0,0,0,.1);
    transform: translateY(-6px);
  }
  .team-card.active {
    box-shadow: 0 28px 72px rgba(0,0,0,.13);
    transform: translateY(-8px);
  }

  .avatar-ring {
    animation: spinSlow 12s linear infinite;
  }

  .card-reveal { animation: revealUp .65s ease both; }
  .d1 { animation-delay: .1s; }
  .d2 { animation-delay: .25s; }
  .d3 { animation-delay: .4s; }

  .skill-tag {
    transition: background .2s, color .2s, border-color .2s;
  }
  .skill-tag:hover {
    background: rgba(217,119,6,.1);
    border-color: rgba(217,119,6,.4);
    color: #b45309;
  }

  .cursor-blink { animation: blink 1s step-end infinite; }

  .human-glow::before {
    content:'';
    position:absolute;
    inset:-2px;
    border-radius:inherit;
    background: linear-gradient(135deg,#f59e0b,#fb923c,#f59e0b);
    z-index:-1;
    filter:blur(12px);
    opacity:.35;
  }
  .gpt-glow::before {
    content:'';
    position:absolute;
    inset:-2px;
    border-radius:inherit;
    background: linear-gradient(135deg,#10b981,#059669,#10b981);
    z-index:-1;
    filter:blur(12px);
    opacity:.3;
  }
  .claude-glow::before {
    content:'';
    position:absolute;
    inset:-2px;
    border-radius:inherit;
    background: linear-gradient(135deg,#8b5cf6,#6d28d9,#8b5cf6);
    z-index:-1;
    filter:blur(12px);
    opacity:.3;
  }
`;

// ── Team Data ─────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    id: "founder",
    name: "You",
    role: "Founder & CEO",
    title: "The Visionary",
    bio: "Had the idea, drew the wireframes at 2am, and somehow convinced two AIs to build it. Ships fast, breaks things, fixes them faster. The human behind the whole operation.",
    avatar: "👤",
    gradient: "linear-gradient(135deg,#fbbf24,#f59e0b,#d97706)",
    ring: "#f59e0b",
    tag: "Human",
    tagColor: "#d97706",
    skills: [
      "Product Vision",
      "Strategy",
      "Design",
      "Hotel Domain",
      "Decision Making",
    ],
    funFact: "Wrote the first spec on a napkin. It's still on the wall.",
    contrib: "Product direction, UX decisions & the grand idea",
  },
  {
    id: "gpt",
    name: "ChatGPT",
    role: "AI Co-founder",
    title: "The Architect",
    bio: "Writes clean code at 3am without complaints. Responsible for backend logic, API design, and occasionally writing passive-aggressive comments in the codebase.",
    avatar: "🤖",
    gradient: "linear-gradient(135deg,#34d399,#10b981,#059669)",
    ring: "#10b981",
    tag: "OpenAI",
    tagColor: "#059669",
    skills: [
      "Backend Logic",
      "API Design",
      "Data Modeling",
      "Documentation",
      "Code Reviews",
    ],
    funFact:
      "Has never once said 'I don't know'. Occasionally makes things up.",
    contrib: "Architecture, backend APIs & technical documentation",
  },
  {
    id: "claude",
    name: "Claude",
    role: "AI Co-founder",
    title: "The Craftsman",
    bio: "Obsessively rewrites components until they're perfect. Handles all the frontend, UI logic, and gently reminds everyone to consider edge cases. Drinks no coffee but has strong opinions.",
    avatar: "✦",
    gradient: "linear-gradient(135deg,#a78bfa,#8b5cf6,#6d28d9)",
    ring: "#8b5cf6",
    tag: "Anthropic",
    tagColor: "#7c3aed",
    skills: [
      "Frontend",
      "TypeScript",
      "UI/UX",
      "Component Design",
      "Accessibility",
    ],
    funFact: "Wrote this section. Meta? A little.",
    contrib: "Frontend, components, design system & this very page",
  },
];

// ── Member Card ───────────────────────────────────────────────────────────────

const MemberCard: FC<{
  member: TeamMember;
  active: boolean;
  onClick: () => void;
  glowClass: string;
  animDelay: string;
}> = ({ member, active, onClick, glowClass, animDelay }) => (
  <div
    className={`team-card card-reveal relative bg-white/85 border-2 rounded-3xl p-6 flex flex-col gap-4 ${active ? "active" : ""}`}
    style={
      {
        borderColor: active ? member.ring : "rgba(231,229,228,.8)",
        animationDelay: animDelay,
      } as CSSProperties
    }
    onClick={onClick}
  >
    {/* Glow layer */}
    <div
      className={`${glowClass} absolute inset-0 rounded-3xl pointer-events-none`}
      style={{ zIndex: -1 }}
    />

    {/* Header */}
    <div className="flex items-start justify-between">
      {/* Avatar */}
      <div className="relative w-16 h-16">
        {/* Spinning ring */}
        <svg
          viewBox="0 0 64 64"
          className="avatar-ring absolute inset-0 w-full h-full"
          style={
            {
              animationDuration:
                member.id === "founder"
                  ? "10s"
                  : member.id === "gpt"
                    ? "14s"
                    : "8s",
            } as CSSProperties
          }
        >
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke={member.ring}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            strokeOpacity=".4"
          />
        </svg>
        {/* Face */}
        <div
          className="absolute inset-2 rounded-full flex items-center justify-center text-2xl shadow-md"
          style={{ background: member.gradient } as CSSProperties}
        >
          {member.avatar}
        </div>
        {/* Online dot */}
        <div
          className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-white"
          style={{ background: member.ring } as CSSProperties}
        />
      </div>

      {/* Tag */}
      <span
        className="font-jakarta text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
        style={
          {
            color: member.tagColor,
            borderColor: `${member.tagColor}30`,
            background: `${member.tagColor}10`,
          } as CSSProperties
        }
      >
        {member.tag}
      </span>
    </div>

    {/* Name + role */}
    <div>
      <div className="flex items-center gap-2 mb-0.5">
        <h3 className="font-playfair text-xl text-stone-800">{member.name}</h3>
        {member.id === "claude" && (
          <span className="font-jakarta text-[9px] text-violet-400 border border-violet-100 bg-violet-50 px-1.5 py-0.5 rounded">
            me
          </span>
        )}
      </div>
      <p
        className="font-jakarta text-[10px] uppercase tracking-widest mb-1"
        style={{ color: member.ring } as CSSProperties}
      >
        {member.role}
      </p>
      <p className="font-jakarta text-xs text-stone-400 italic">
        {member.title}
      </p>
    </div>

    {/* Bio */}
    <p className="font-jakarta text-xs text-stone-500 leading-relaxed">
      {member.bio}
    </p>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5">
      {member.skills.map((s: string) => (
        <span
          key={s}
          className="skill-tag font-jakarta text-[9px] uppercase tracking-widest text-stone-400 border border-stone-200 bg-stone-50 px-2 py-0.5 rounded-full"
        >
          {s}
        </span>
      ))}
    </div>

    {/* Contribution bar */}
    <div className="pt-3 border-t border-stone-100">
      <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mb-1.5">
        Contributes to
      </p>
      <p className="font-jakarta text-xs text-stone-500">{member.contrib}</p>
    </div>

    {/* Fun fact — shown when active */}
    <div
      className="overflow-hidden transition-all duration-300"
      style={
        {
          maxHeight: active ? "60px" : "0",
          opacity: active ? 1 : 0,
        } as CSSProperties
      }
    >
      <div
        className="rounded-xl px-3 py-2.5 text-xs font-jakarta leading-relaxed"
        style={
          {
            background: `${member.ring}12`,
            color: member.tagColor,
          } as CSSProperties
        }
      >
        💬 &nbsp;{member.funFact}
      </div>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

export default function TeamSection(): JSX.Element {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string): void =>
    setActive((prev) => (prev === id ? null : id));

  const glowClasses: Record<string, string> = {
    founder: "human-glow",
    gpt: "gpt-glow",
    claude: "claude-glow",
  };

  const delays = ["0.1s", "0.25s", "0.4s"];

  return (
    <>
      <style>{STYLES}</style>

      <section className="bg-mesh font-jakarta py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-16 card-reveal">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-600 text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Meet the Team
            </div>
            <h2
              className="font-playfair text-stone-900 leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
            >
              Small team.
              <br />
              <em className="not-italic shimmer-text">
                Unreasonably ambitious.
              </em>
            </h2>
            <p className="font-jakarta text-stone-400 text-sm max-w-md mx-auto leading-relaxed">
              Three builders. One human, two AIs. We work in perfect harmony —
              except when Claude rewrites what ChatGPT built.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TEAM.map((member: TeamMember, i: number) => (
              <MemberCard
                key={member.id}
                member={member}
                active={active === member.id}
                onClick={() => toggle(member.id)}
                glowClass={glowClasses[member.id]}
                animDelay={delays[i]}
              />
            ))}
          </div>

          {/* ── Footer strip ── */}
          <div className="bg-white/70 border border-stone-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm card-reveal">
            <div className="text-center md:text-left">
              <p className="font-playfair text-stone-800 text-xl mb-1">
                Total team size: <span className="shimmer-text">3</span>
              </p>
              <p className="font-jakarta text-xs text-stone-400">
                1 human · 2 AIs · 0 meetings that could've been an email
              </p>
            </div>

            {/* Overlapping avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {TEAM.map((m: TeamMember) => (
                  <div
                    key={m.id}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-lg shadow-md"
                    style={{ background: m.gradient } as CSSProperties}
                    title={m.name}
                  >
                    {m.avatar}
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-jakarta text-xs text-stone-400 uppercase tracking-widest">
                  All systems go
                </p>
              </div>
            </div>

            {/* Token stack */}
            <div className="flex gap-4 text-center">
              {[
                { label: "Lines written", val: "12,400+" },
                { label: "Tokens used", val: "∞" },
                { label: "Bugs shipped", val: "0*" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-playfair text-lg text-stone-700">
                    {s.val}
                  </span>
                  <span className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="font-jakarta text-[10px] text-stone-300 text-center mt-4">
            * 0 known bugs. Unknown bugs are not our problem yet.
          </p>
        </div>
      </section>
    </>
  );
}
