import { BookingField } from "./types/types";

export const BookingWidgetPreview = () => {
  const fields: BookingField[] = [
    { l: "Check-in", v: "Mar 15, 2026" },
    { l: "Check-out", v: "Mar 18, 2026" },
    { l: "Guests", v: "2 Adults" },
    { l: "Room", v: "Deluxe Suite" },
  ];

  return (
    <div className="border border-amber-100 rounded-3xl overflow-hidden shadow-xl shadow-stone-100">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        </div>
        <span className="font-jakarta text-[10px] text-stone-400 ml-1 tracking-wide">
          your-hotel.com · Booking Widget
        </span>
      </div>
      <div className="bg-white p-5">
        <div className="border border-amber-100 rounded-2xl p-4 shadow-sm">
          <p className="font-playfair text-stone-800 text-base mb-3.5">
            Reserve Your Stay
          </p>
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            {fields.map((f: BookingField) => (
              <div
                key={f.l}
                className="bg-amber-50/60 border border-amber-100 rounded-xl px-3 py-2"
              >
                <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-400">
                  {f.l}
                </p>
                <p className="font-jakarta text-xs text-stone-700 mt-0.5">
                  {f.v}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-jakarta text-xs font-medium tracking-wide py-2.5 rounded-xl"
          >
            Check Availability →
          </button>
        </div>
        <p className="font-jakarta text-[9px] text-stone-300 text-center mt-3 tracking-wide">
          Powered by ConciergeOS · Secure Booking
        </p>
      </div>
    </div>
  );
};
