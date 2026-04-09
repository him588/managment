"use client";

import { useState } from "react";
import { BedDouble, IndianRupee, Users, X, Check } from "lucide-react";
import { clearError } from "@/components/helper/input";
import { useRoomTypeEdit } from "../hooks/hook";
import { returnAxiosError } from "@/components/helper/axios";
import { useUIContext } from "@/context/ui-context";

// ── Types ──────────────────────────────────────────────────────────────────────
interface EditRoomTypeProps {
  initial: {
    type: string;
    price: number;
    maxGuest: number;
    id: string;
  };
  onCancel?: () => void;
}

type FormErrors = {
  type?: string;
  price?: string;
  maxGuest?: string;
};

// ── EditRoomType ───────────────────────────────────────────────────────────────
function EditRoomType({ initial, onCancel }: EditRoomTypeProps) {
  const [form, setForm] = useState({
    type: initial.type,
    price: initial.price,
    maxGuest: initial.maxGuest,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { isSuccess, isPending, mutate: updateRoom } = useRoomTypeEdit();
  const { setToastMessage, setToastType } = useUIContext();

  function validate() {
    const newErrors: FormErrors = {};

    if (!form.type.trim()) newErrors.type = "Room type name is required.";
    else if (form.type.trim().length < 2)
      newErrors.type = "Name must be at least 2 characters.";

    if (!form.price || form.price <= 0)
      newErrors.price = "Price must be greater than 0.";

    if (!form.maxGuest || form.maxGuest < 1)
      newErrors.maxGuest = "At least 1 guest is required.";
    else if (form.maxGuest > 20)
      newErrors.maxGuest = "Maximum 20 guests allowed.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    updateRoom(
      {
        data: {
          id: initial.id,
          type: form.type,
          price: form.price,
          maxGuest: form.maxGuest,
        },
      },
      {
        onSuccess: () => {
          setTimeout(() => onCancel?.(), 3000);
        },
        onError: (error) => {
          const err = returnAxiosError(error);
          setToastMessage(err);
          setToastType("error");
        },
      },
    );
  }

  // ── Success state ──
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
          <Check size={28} className="text-amber-600" />
        </div>
        <p className="font-playfair text-xl text-stone-800">Changes Saved!</p>
        <p className="font-jakarta text-sm text-stone-400 text-center">
          Saved changes are now active they will <br /> work on upcoming
          booking...
        </p>
      </div>
    );
  }

  return (
    <div className="font-jakarta space-y-6">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-amber-500 mb-1">
            Room type
          </p>
          <h2 className="font-playfair text-stone-800 text-xl">
            Edit Category
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

      {/* ── Preview pill ── */}
      <div className="flex items-center gap-3 bg-amber-50/60 border border-amber-100 rounded-2xl px-4 py-3">
        <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
          <BedDouble size={16} className="text-amber-600" />
        </div>
        <div>
          <p className="text-xs text-stone-400">Editing</p>
          <p className="text-sm font-medium text-stone-700">
            {form.type || (
              <span className="text-stone-300 italic">Unnamed type</span>
            )}
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-stone-400">Price</p>
          <p className="text-sm font-semibold text-amber-600">
            ₹{(form.price || 0).toLocaleString("en-IN")}
            <span className="text-xs font-normal text-stone-400"> /night</span>
          </p>
        </div>
      </div>

      {/* ── Fields ── */}
      <div className="space-y-4">
        {/* Room type name */}
        <Field
          label="Room Type Name"
          placeholder="e.g. Deluxe Suite"
          value={form.type}
          icon={<BedDouble size={14} />}
          error={errors.type}
          onFocus={() => clearError(setErrors, "type")}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Price */}
          <Field
            label="Price per Night (₹)"
            placeholder="e.g. 5000"
            type="number"
            min={0}
            value={String(form.price)}
            icon={<IndianRupee size={14} />}
            error={errors.price}
            onFocus={() => clearError(setErrors, "price")}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />

          {/* Max guests */}
          <Field
            label="Max Guests"
            placeholder="e.g. 4"
            type="number"
            min={1}
            max={20}
            value={String(form.maxGuest)}
            icon={<Users size={14} />}
            error={errors.maxGuest}
            onFocus={() => clearError(setErrors, "maxGuest")}
            onChange={(e) =>
              setForm({ ...form, maxGuest: Number(e.target.value) })
            }
          />
        </div>
      </div>

      {/* ── Changed indicator ── */}
      {(form.type !== initial.type ||
        form.price !== initial.price ||
        form.maxGuest !== initial.maxGuest) && (
        <p className="text-[10px] text-amber-600 uppercase tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
          Unsaved changes
        </p>
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
          onClick={handleSave}
          disabled={isPending}
          className="font-jakarta text-sm font-medium px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-100 hover:opacity-95 transition-all flex items-center gap-2 border-0 disabled:opacity-60"
        >
          {isPending && (
            <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          )}
          Save changes
        </button>
      </div>
    </div>
  );
}

export default EditRoomType;

// ── Field ──────────────────────────────────────────────────────────────────────
function Field({
  label,
  icon,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...props}
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

// ── FieldError ─────────────────────────────────────────────────────────────────
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
