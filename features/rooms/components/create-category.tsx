/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Check, Tag, Users, X, IndianRupee } from "lucide-react";
import { useCreateRoomType } from "@/features/rooms/hooks/use-rooms";
import { AxiosError } from "axios";
import { useUIContext } from "@/context/ui-context";
import { clearError } from "@/components/helper/input";
import { returnAxiosError } from "@/components/helper/axios";

interface CreateCategoryProps {
  accentColor: string;
  onCancel?: () => void;
}

function CreateCategory({ onCancel }: CreateCategoryProps) {
  const [form, setForm] = useState({
    type: "",
    price: "",
    maxGuest: "",
    color: "#dbc8f7",
    tags: "",
    isShared: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { setToastMessage, setToastType } = useUIContext();

  const { mutate: createRoomType, isPending, isSuccess } = useCreateRoomType();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.type.trim()) newErrors.type = "Category name is required.";
    if (!form.price || isNaN(+form.price) || +form.price <= 0)
      newErrors.price = "Enter a valid price.";
    if (!form.maxGuest || isNaN(+form.maxGuest) || +form.maxGuest < 1)
      newErrors.maxGuest = "Enter a valid guest count.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    createRoomType(
      {
        type: form.type.trim().toLowerCase(),
        price: Number(form.price),
        maxGuest: Number(form.maxGuest),
        color: form.color,
        isShared: form.isShared,
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      },
      {
        onSuccess: () => {
          setToastMessage("Room category created successfully!");
          setToastType("success");
          setTimeout(() => onCancel?.(), 1500);
        },
        onError: (err) => {
          const error = returnAxiosError(err);
          setToastMessage(error ?? "Something went wrong.");
          setToastType("error");
        },
      },
    );
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
          <Check size={28} className="text-amber-600" />
        </div>
        <p className="font-playfair text-xl text-stone-800">
          Room Category Created!
        </p>
        <p className="font-jakarta text-sm text-stone-400">
          Closing in a moment…
        </p>
      </div>
    );
  }

  return (
    <div className="font-jakarta space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-jakarta text-[10px] uppercase tracking-widest text-amber-500 mb-1">
            Rooms
          </p>
          <h2 className="font-playfair text-stone-800 text-xl">
            Create Room Category
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

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field
          label="Category Name"
          placeholder="Deluxe, Suite…"
          value={form.type}
          icon={<Tag size={14} />}
          error={errors.type}
          onFocus={() => clearError(setErrors, "type")}
          onChange={(e) => {
            setForm({ ...form, type: e.target.value });
            setErrors({ ...errors, type: "" });
          }}
        />
        <Field
          label={form.isShared ? "Person per Night" : "Price per Night"}
          placeholder="4000"
          value={form.price}
          icon={<IndianRupee size={14} />}
          error={errors.price}
          onFocus={() => clearError(setErrors, "price")}
          onChange={(e) => {
            setForm({ ...form, price: e.target.value });
            setErrors({ ...errors, price: "" });
          }}
        />
        <Field
          label="Max Guests"
          placeholder="2"
          value={form.maxGuest}
          icon={<Users size={14} />}
          error={errors.maxGuest}
          onFocus={() => clearError(setErrors, "maxGuest")}
          onChange={(e) => {
            setForm({ ...form, maxGuest: e.target.value });
            setErrors({ ...errors, maxGuest: "" });
          }}
        />
      </div>

      {/* Color picker */}
      <div className="space-y-2">
        <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block">
          Category Color
        </label>

        {/* Preset swatches */}
        <div className="flex items-center gap-2  flex-wrap">
          {[
            "#dbc8f7",
            "#b2c6f2",
            "#9cf7c2",
            "#f6cc99",
            "#f69ece",
            "#a3f8e5",
          ].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setForm({ ...form, color: c })}
              className="w-7 h-7 rounded-lg border-2 transition-all hover:scale-110"
              style={{
                background: c,
                borderColor: form.color === c ? c : "transparent",
                boxShadow: form.color === c ? `0 0 0 3px ${c}30` : "none",
              }}
            >
              {form.color === c && (
                <Check size={12} className="text-white mx-auto" />
              )}
            </button>
          ))}
        </div>

        {/* Live preview */}
        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3 border mt-2"
          style={{
            background: `${form.color}10`,
            borderColor: `${form.color}`,
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${form.color}cc, ${form.color})`,
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="font-playfair text-sm text-stone-700 truncate">
              {form.type || "Category Name"}
            </p>
            <div className="flex gap-1.5 flex-wrap mt-1">
              {(form.tags || "AC, Balcony")
                .split(",")
                .filter(Boolean)
                .slice(0, 4)
                .map((tag, i) => (
                  <span
                    key={i}
                    className="font-jakarta text-[9px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: `${form.color}20`,
                      color: form.color,
                    }}
                  >
                    {tag.trim()}
                  </span>
                ))}
            </div>
          </div>
          <p
            className="font-playfair text-lg flex items-center justify-center font-medium flex-shrink-0"
            style={{ color: form.color }}
          >
            <IndianRupee size={14} />
            {form.price || "0"}
          </p>
        </div>
      </div>

      {/* Tags */}
      <Field
        label="Tags"
        placeholder="AC, Balcony, Sea View"
        value={form.tags}
        icon={<Tag size={14} />}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />

      {/* Actions */}
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
          className="btn-shine font-jakarta text-sm font-medium px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-100 hover:opacity-95 transition-all flex items-center gap-2"
        >
          {isPending && (
            <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          )}
          Create Category
        </button>
      </div>
    </div>
  );
}

export default CreateCategory;

// ── Reusable Field ──────────────────────────────────────────────────────────

function Field({
  label,
  placeholder,
  value,
  onChange,
  icon,
  error,
  onFocus,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  error?: string;
  onFocus?: () => void;
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => onFocus?.()}
          className={`ob-input w-full font-jakarta text-sm text-stone-700 placeholder-stone-300 bg-amber-50/40 border rounded-xl py-2.5 pr-4 transition-all ${
            icon ? "pl-9" : "pl-4"
          } ${error ? "border-red-300 bg-red-50/30" : "border-stone-200"}`}
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
