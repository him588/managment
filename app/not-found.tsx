/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { BedDouble, ArrowLeft, RotateCcw, MapPin } from "lucide-react";

// ── Star particle type ─────────────────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

// ── 404 Page ───────────────────────────────────────────────────────────────────
export default function Custom404() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [path, setPath] = useState("???");

  useEffect(() => {
    setMounted(true);
    setPath(window.location.pathname);

    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    );
  }, []);

  return (
    <>
      <Head>
        <title>404 — Page Not Found</title>
        <meta name="description" content="Page not found" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&family=DM+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── Root ── */}
      <div className="relative min-h-screen bg-[#fffbf5] overflow-hidden flex items-center justify-center px-6 py-16 font-sans">
        {/* ── Ambient mesh ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-3xl -top-40 -left-40 animate-pulse" />
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-orange-300/10 blur-3xl -bottom-32 -right-32 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-amber-300/8 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* ── Floating particles ── */}
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-amber-400/30 animate-ping"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <main
          className={`relative z-10 flex flex-col items-center text-center max-w-xl w-full transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon badge */}
          <div className="mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 border border-stone-700 flex items-center justify-center shadow-xl">
            <BedDouble size={32} className="text-amber-400" />
          </div>

          {/* 404 digits */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {["4", "0", "4"].map((digit, i) => (
              <span
                key={i}
                className={`font-playfair text-[5rem] sm:text-[7rem] leading-none font-bold transition-all duration-500
                  ${
                    digit === "0"
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-500"
                      : "text-stone-200"
                  }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {digit}
              </span>
            ))}
          </div>

          {/* Eyebrow */}
          <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-2 font-jakarta">
            Page not found
          </p>

          {/* Heading */}
          <h1 className="font-playfair text-2xl sm:text-3xl text-stone-800 mb-3 leading-snug">
            This room doesnt exist
          </h1>

          {/* Description */}
          <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-sm">
            The page youre looking for has checked out — or never checked in.
            Lets get you back to familiar halls.
          </p>

          {/* Path pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-8">
            <MapPin size={12} className="text-stone-400" />
            <span className="font-mono text-xs text-stone-400 truncate max-w-[220px]">
              {path}
            </span>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-8" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-md shadow-amber-100 hover:opacity-90 transition-all border-0"
            >
              <ArrowLeft size={15} />
              Back to home
            </button>
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-stone-500 bg-white border border-stone-200 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-700 transition-all"
            >
              <RotateCcw size={15} />
              Go back
            </button>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-xs text-stone-300 font-mono">
            If you think this is a mistake, contact support.
          </p>
        </main>
      </div>
    </>
  );
}
