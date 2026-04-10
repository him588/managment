"use client";

import {
  useBookRoom,
  useBookRoomById,
  useGetRoomTypes,
} from "@/features/rooms/hooks/use-rooms";
import { clearError } from "@/components/helper/input";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useEffect, useMemo, useState } from "react";
import {
  BedDouble,
  CalendarDays,
  Users,
  Mail,
  Phone,
  User,
  X,
  Check,
} from "lucide-react";
import { useUIContext } from "@/context/ui-context";
import { returnAxiosError } from "@/components/helper/axios";
import { useRoomsContext } from "@/context/room-context";

dayjs.extend(isSameOrBefore);

// ── Types ──────────────────────────────────────────────────────────────────────
interface BookRoomProps {
  onCancel?: () => void;
}

type FormErrors = {
  guestName?: string;
  phone?: string;
  email?: string;
  categoryId?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
};

// ── BookRoom ───────────────────────────────────────────────────────────────────
function BookRoom({ onCancel }: BookRoomProps) {
  const { mutate, isPending, isSuccess } = useBookRoom();
  const { mutate: bookRoomById, isSuccess: bookingCreated } = useBookRoomById();
  const { data } = useGetRoomTypes();
  const { setToastType, setToastMessage } = useUIContext();
  const { selectedCategory, activeRoom } = useRoomsContext();

  const roomTypes = useMemo(() => {
    return (
      data?.data?.roomTypes.map((cat: { _id: string; type: string }) => ({
        id: cat._id,
        name: cat.type,
      })) ?? []
    );
  }, [data]);

  const [form, setForm] = useState({
    guestName: "",
    phone: "",
    email: "",
    categoryId: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm() {
    const newErrors: FormErrors = {};

    if (!form.guestName.trim()) newErrors.guestName = "Guest name is required.";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9]{10,15}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";

    if (!activeRoom.activeRoomId) {
      if (!form.categoryId && !selectedCategory.categoryId) {
        newErrors.categoryId = "Please select a room category.";
      }
    }

    if (!form.checkIn) newErrors.checkIn = "Check-in date is required.";

    if (!form.checkOut) newErrors.checkOut = "Check-out date is required.";

    if (form.checkIn && form.checkOut) {
      if (dayjs(form.checkOut).isSameOrBefore(dayjs(form.checkIn)))
        newErrors.checkOut = "Check-out must be after check-in.";
    }

    if (form.guests < 1) newErrors.guests = "At least 1 guest is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    console.log("sumit works");
    if (!validateForm()) return;
    console.log("sumit still works");
    if (activeRoom.activeRoomId) {
      const payload = { ...form, roomId: activeRoom.activeRoomId };
      bookRoomById(
        { ...payload },

        {
          onError: (error) => {
            console.log(error);
            const err = returnAxiosError(error);
            console.log(err);
            setToastType("error");
            setToastMessage(err);
          },
          onSuccess: () => {
            setTimeout(() => onCancel?.(), 1500);
          },
        },
      );
    } else {
      const categoryId = selectedCategory.categoryId
        ? selectedCategory.categoryId
        : form.categoryId;
      mutate(
        { ...form, categoryId: categoryId },
        {
          onError: (error) => {
            console.log(error);
            const err = returnAxiosError(error);
            console.log(err);
            setToastType("error");
            setToastMessage(err);
          },
          onSuccess: () => {
            setTimeout(() => onCancel?.(), 1500);
          },
        },
      );
    }
  }

  const nights =
    form.checkIn && form.checkOut
      ? Math.max(0, dayjs(form.checkOut).diff(dayjs(form.checkIn), "day"))
      : 0;

  // ── Success state ──
  if (isSuccess || bookingCreated) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
          <Check size={28} className="text-amber-600" />
        </div>
        <p className="font-playfair text-xl text-stone-800">
          Booking Confirmed!
        </p>
        <p className="font-jakarta text-sm text-stone-400">
          Closing in a moment…
        </p>
      </div>
    );
  }

  return (
    <div className="font-jakarta space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-jakarta text-[10px] uppercase tracking-widest text-amber-500 mb-1">
            Reservations
          </p>
          <h2 className="font-playfair text-stone-800 text-xl">
            {selectedCategory.categoryName &&
              `Book room for ${selectedCategory.categoryName.toLowerCase()} category`}
            {selectedCategory?.categoryId === "" &&
              activeRoom?.activeRoomId === "" &&
              "Book Room"}
            {activeRoom.activeRoomNumber &&
              `Book room  ${activeRoom.activeRoomNumber.toLowerCase()}`}
          </h2>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-stone-300 hover:bg-stone-50 hover:text-stone-500 transition-all"
        >
          <X size={16} />
        </button>
      </div>

      {/* ── Guest info ── */}
      <div>
        <SectionLabel>Guest information</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          <Field
            label="Guest Name"
            placeholder="e.g. Ravi Kumar"
            value={form.guestName}
            icon={<User size={14} />}
            error={errors.guestName}
            onFocus={() => clearError(setErrors, "guestName")}
            onChange={(e) => setForm({ ...form, guestName: e.target.value })}
          />
          <Field
            label="Phone Number"
            placeholder="+91 98765 43210"
            value={form.phone}
            icon={<Phone size={14} />}
            error={errors.phone}
            onFocus={() => clearError(setErrors, "phone")}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Field
            label="Email"
            type="email"
            placeholder="guest@example.com"
            value={form.email}
            icon={<Mail size={14} />}
            error={errors.email}
            onFocus={() => clearError(setErrors, "email")}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      {/* ── Booking details ── */}
      <div>
        <SectionLabel>Booking details</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          <Field
            label="Check-in Date"
            type="date"
            value={form.checkIn}
            icon={<CalendarDays size={14} />}
            error={errors.checkIn}
            onFocus={() => clearError(setErrors, "checkIn")}
            onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
          />
          <Field
            label="Check-out Date"
            type="date"
            value={form.checkOut}
            icon={<CalendarDays size={14} />}
            error={errors.checkOut}
            onFocus={() => clearError(setErrors, "checkOut")}
            onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
          />
          {/* Room category select */}
          {selectedCategory.categoryId === "" &&
            activeRoom.activeRoomId === "" && (
              <div>
                <FieldLabel>Room Category</FieldLabel>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
                    <BedDouble size={14} />
                  </div>
                  <select
                    value={form.categoryId}
                    onFocus={() => clearError(setErrors, "categoryId")}
                    onChange={(e) =>
                      setForm({ ...form, categoryId: e.target.value })
                    }
                    className={`ob-input w-full font-jakarta text-sm text-stone-700 bg-amber-50/40 border rounded-xl pl-9 pr-4 py-2.5 transition-all appearance-none ${
                      errors.categoryId
                        ? "border-red-300 bg-red-50/30"
                        : "border-stone-200"
                    }`}
                  >
                    <option value="">Select category</option>
                    {roomTypes.map((cat: { id: string; name: string }) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.categoryId && <FieldError msg={errors.categoryId} />}
              </div>
            )}

          {/* Guests */}
          <Field
            label="Number of Guests"
            type="number"
            min={1}
            placeholder="1"
            value={String(form.guests)}
            icon={<Users size={14} />}
            error={errors.guests}
            onFocus={() => clearError(setErrors, "guests")}
            onChange={(e) =>
              setForm({ ...form, guests: Number(e.target.value) })
            }
          />

          {/* Dates */}
        </div>
      </div>

      {/* ── Nights pill ── */}
      {nights > 0 && (
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3">
          <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <CalendarDays size={13} className="text-amber-600" />
          </div>
          <div>
            <p className="font-jakarta text-sm font-medium text-stone-700">
              {nights} night{nights > 1 ? "s" : ""}
            </p>
            <p className="font-jakarta text-xs text-stone-400">
              {dayjs(form.checkIn).format("D MMM")} →{" "}
              {dayjs(form.checkOut).format("D MMM YYYY")}
            </p>
          </div>
        </div>
      )}

      {/* ── Actions ── */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="font-jakarta text-sm text-stone-400 border border-stone-200 bg-white px-5 py-2.5 rounded-xl hover:border-stone-300 hover:text-stone-600 transition-all"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className="font-jakarta text-sm font-medium px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-100 hover:opacity-95 transition-all flex items-center gap-2 border-0"
        >
          {isPending && (
            <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          )}
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default BookRoom;

// ── Helpers ────────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400">
      {children}
    </p>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
      {children}
    </label>
  );
}

function Field({
  label,
  icon,
  error,
  readonly = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  readonly?: boolean;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...props}
          readOnly={readonly}
          className={`ob-input w-full font-jakarta text-sm text-stone-700 placeholder-stone-300 bg-amber-50/40 border rounded-xl py-2.5 pr-4 transition-all
            ${icon ? "pl-9" : "pl-4"}
            ${error ? "border-red-300 bg-red-50/30" : "border-stone-200"}
          `}
        />
      </div>
      {error && <FieldError msg={error} />}
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="font-jakarta text-[10px] text-red-500 mt-1 flex items-center gap-1">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="w-3 h-3 flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {msg}
    </p>
  );
}
