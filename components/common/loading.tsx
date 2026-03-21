"use client";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500&display=swap');
  .font-playfair { font-family: 'Playfair Display', serif; }
  .font-jakarta  { font-family: 'Plus Jakarta Sans', sans-serif; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);    opacity: .6; }
    50%  { transform: scale(1.18); opacity: .2; }
    100% { transform: scale(1);    opacity: .6; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes dot-bounce {
    0%, 80%, 100% { transform: translateY(0);    opacity: .3; }
    40%            { transform: translateY(-6px); opacity: 1;  }
  }
  @keyframes shimmer {
    0%   { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  .fade-in    { animation: fadeIn      .7s ease both; }
  .d1         { animation-delay: .15s; }
  .d2         { animation-delay: .3s;  }
  .d3         { animation-delay: .45s; }

  .pulse-ring { animation: pulse-ring  2.4s ease-in-out infinite; }
  .spin-slow  { animation: spin-slow   3s linear infinite; }

  .dot { animation: dot-bounce 1.4s ease-in-out infinite; }
  .dot:nth-child(2) { animation-delay: .2s; }
  .dot:nth-child(3) { animation-delay: .4s; }

  .shimmer-text {
    background: linear-gradient(90deg, #92400e 0%, #d97706 40%, #f59e0b 50%, #d97706 60%, #92400e 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  .bg-mesh {
    background-color: #fffbf5;
    background-image:
      radial-gradient(at 20% 20%, rgba(251,191,36,.14) 0, transparent 55%),
      radial-gradient(at 80% 15%, rgba(167,198,172,.18) 0, transparent 50%),
      radial-gradient(at 60% 85%, rgba(251,191,36,.09) 0, transparent 45%),
      radial-gradient(at 5%  80%, rgba(167,198,172,.12) 0, transparent 50%);
  }
`;

export default function LoadingScreen() {
  return (
    <>
      <style>{STYLES}</style>

      <div className="bg-mesh font-jakarta fixed inset-0 z-50 flex flex-col items-center justify-center gap-8">
        {/* Logo mark */}
        <div className="relative flex items-center justify-center fade-in">
          {/* Outer pulse ring */}
          <div className="pulse-ring absolute w-28 h-28 rounded-full border-2 border-amber-300 pointer-events-none" />

          {/* Spinning dashed ring */}
          <svg className="spin-slow absolute w-24 h-24" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-xl shadow-amber-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M3 22V8l9-6 9 6v14" />
              <rect x="9" y="14" width="6" height="8" />
              <rect x="5" y="10" width="3" height="3" />
              <rect x="16" y="10" width="3" height="3" />
            </svg>
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-1.5 fade-in d1">
          <p className="font-playfair text-2xl text-stone-800 font-medium">
            Concierge<span className="shimmer-text">OS</span>
          </p>
          <p className="font-jakarta text-xs text-stone-400 uppercase tracking-widest">
            Hotel Management
          </p>
        </div>

        {/* Dot loader */}
        <div className="flex items-center gap-2 fade-in d2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="dot w-1.5 h-1.5 rounded-full bg-amber-400"
            />
          ))}
        </div>

        {/* Tip */}
        <p className="font-jakarta text-[11px] text-stone-300 fade-in d3 absolute bottom-10">
          Setting up your dashboard…
        </p>
      </div>
    </>
  );
}
