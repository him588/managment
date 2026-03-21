import { Icons } from "./icons/icons";
import { features } from "./types/const";

export const LeftPanel = () => {
  return (
    <div className="panel-left relative hidden lg:flex flex-col  p-10 xl:p-14 overflow-hidden">
      {/* Orbs */}
      <div
        className="orb-a absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle,#f59e0b,transparent)",
        }}
      />
      <div
        className="orb-b absolute bottom-10 -left-12 w-44 h-44 rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle,#34d399,transparent)",
        }}
      />
      <div
        className="orb-c absolute top-1/2 right-4 w-28 h-28 rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle,#a78bfa,transparent)",
        }}
      />
      {/* Logo */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-12">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-900/30 text-white">
            <Icons.Hotel />
          </div>
          <span className="font-playfair text-xl text-white font-medium">
            Concierge<span className="text-amber-400">OS</span>
          </span>
        </div>

        <h2
          className="font-playfair text-white leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem,2.5vw,2.8rem)" }}
        >
          The operating
          <br />
          system for
          <br />
          <em className="not-italic shimmer-text">modern hotels.</em>
        </h2>
        <p className="font-jakarta text-sm text-stone-400 leading-relaxed max-w-xs">
          Join 3,200+ properties worldwide managing rooms, revenue, and guest
          experiences on one platform.
        </p>
      </div>
      <p className="mt-[2rem]">Feature list</p>
      <div className="relative z-10 space-y-3 mt-[.5rem]">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <Icons.Check />
            </div>
            <span className="font-jakarta text-sm text-stone-300">{f}</span>
          </div>
        ))}
      </div>
      {/* Review cards */}
    </div>
  );
};
