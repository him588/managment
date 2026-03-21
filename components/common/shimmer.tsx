import React from "react";

const STYLES = `
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton {
    background: linear-gradient(90deg, #f5ede0 25%, #fef3c7 50%, #f5ede0 75%);
    background-size: 600px 100%;
    animation: shimmer 1.6s ease-in-out infinite;
  }
`;

function Shimmer() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton h-26 w-full rounded-2xl" />
        ))}
      </div>
    </>
  );
}

export default Shimmer;
