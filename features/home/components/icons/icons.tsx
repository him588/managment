import { JSX } from "react";

export const Icons = {
  Hotel: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M3 22V8l9-6 9 6v14" />
      <rect x="9" y="14" width="6" height="8" />
      <rect x="5" y="10" width="3" height="3" />
      <rect x="16" y="10" width="3" height="3" />
    </svg>
  ),
  Copy: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Arrow: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  TrendUp: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
    >
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  ),
  Star: (): JSX.Element => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Bed: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M2 20V11h20v9" />
      <path d="M2 11V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" />
      <path d="M7 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Chart: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 4-7" />
    </svg>
  ),
  Globe: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  X: (): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-4 h-4"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
};
