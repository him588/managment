/* eslint-disable @next/next/no-img-element */
"use client";

import {
  useCreateRoom,
  useGetRoomTypes,
} from "@/features/rooms/hooks/use-rooms";
import { RoomCategoryType } from "@/features/rooms/types/types";
import { useUIContext } from "@/context/ui-context";
import { AxiosError } from "axios";
import { useMemo, useState } from "react";
import { BedDouble, Layers, Sparkles, X, Check, ImagePlus } from "lucide-react";
import { clearError } from "@/components/helper/input";
import { useRoomsContext } from "@/context/room-context";

interface CreateRoomProps {
  accentColor: string;
  onCancel?: () => void;
}

function CreateRoom({ onCancel }: CreateRoomProps) {
  const { data } = useGetRoomTypes();

  const { mutate: createRoom, isPending, isSuccess } = useCreateRoom();
  const { setToastMessage, setToastType } = useUIContext();
  const { selectedCategory } = useRoomsContext();

  const [form, setForm] = useState({
    roomNumber: "",
    categoryId: selectedCategory.categoryId ? selectedCategory.categoryId : "",
    floor: "",
    amenities: "",
    images: [] as File[],
    isAvailable: true,
  });

  const [errors, setErrors] = useState<{
    roomNumber?: string;
    categoryId?: string;
    floor?: string;
    amenities?: string;
    images?: string;
  }>({});

  const MAX_IMAGES = 6;

  const roomCategories = useMemo(() => {
    return (
      data?.data?.roomTypes?.map((room: RoomCategoryType) => ({
        id: room.id,
        name: `${room.type} Room`,
      })) || []
    );
  }, [data]);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!form.roomNumber.trim())
      newErrors.roomNumber = "Room number is required.";
    if (!form.categoryId) newErrors.categoryId = "Please select a category.";
    if (!form.floor.trim()) newErrors.floor = "Floor is required.";
    else if (isNaN(Number(form.floor)))
      newErrors.floor = "Floor must be a number.";
    if (!form.amenities.trim()) newErrors.amenities = "Amenities are required.";
    if (form.images.length === 0)
      newErrors.images = "Upload at least one image.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("roomNumber", form.roomNumber);
    formData.append("categoryId", form.categoryId);
    formData.append("floor", form.floor);
    formData.append("amenities", form.amenities);
    formData.append("isAvailable", String(form.isAvailable));
    formData.append("status", form.isAvailable ? "available" : "maintenance");
    form.images.forEach((file) => formData.append("images", file));

    createRoom(formData, {
      onSuccess: () => {
        setToastMessage("Room created successfully!");
        setToastType("success");
        setForm({
          roomNumber: "",
          categoryId: "",
          floor: "",
          amenities: "",
          images: [],
          isAvailable: true,
        });
        setErrors({});
        setTimeout(() => onCancel?.(), 1500);
      },
      onError: (error: unknown) => {
        const apiError = (error as AxiosError<{ message: string }>)?.response
          ?.data;
        setToastMessage(apiError?.message ?? "Something went wrong.");
        setToastType("error");
      },
    });
  };

  /* ── Success ── */
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
          <Check size={28} className="text-amber-600" />
        </div>
        <p className="font-playfair text-xl text-stone-800">Room Created!</p>
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
            {selectedCategory.categoryId
              ? `Create Room for ${selectedCategory.categoryName} category`
              : "Create Room"}
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

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Room Number"
          placeholder="101"
          value={form.roomNumber}
          icon={<BedDouble size={14} />}
          error={errors.roomNumber}
          onFocus={() => clearError(setErrors, "roomNumber")}
          onChange={(e) => setForm({ ...form, roomNumber: e.target.value })}
        />
        {selectedCategory.categoryId === "" && (
          <div>
            <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
              Room Category
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none">
                <Layers size={14} />
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
                {roomCategories.map((cat: { id: string; name: string }) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.categoryId && <FieldError msg={errors.categoryId} />}
          </div>
        )}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Floor"
          placeholder="1"
          value={form.floor}
          icon={<Layers size={14} />}
          error={errors.floor}
          onFocus={() => clearError(setErrors, "floor")}
          onChange={(e) => setForm({ ...form, floor: e.target.value })}
        />
        <Field
          label="Amenities"
          placeholder="AC, WiFi, Balcony"
          value={form.amenities}
          icon={<Sparkles size={14} />}
          error={errors.amenities}
          onFocus={() => clearError(setErrors, "amenities")}
          onChange={(e) => setForm({ ...form, amenities: e.target.value })}
        />
      </div>

      {/* Image upload */}
      <div className="space-y-2">
        <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block">
          Room Images
        </label>
        <label
          className={`flex items-center gap-3 bg-amber-50/40 border border-dashed rounded-2xl px-4 py-3.5 cursor-pointer hover:border-amber-300 hover:bg-amber-50 transition-all ${
            errors.images ? "border-red-300" : "border-stone-200"
          }`}
        >
          <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <ImagePlus size={15} />
          </div>
          <div>
            <p className="font-jakarta text-sm text-stone-600 font-medium">
              Click to upload images
            </p>
            <p className="font-jakarta text-xs text-stone-400">
              Up to {MAX_IMAGES} images · JPG, PNG
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onFocus={() => clearError(setErrors, "images")}
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              const remaining = MAX_IMAGES - form.images.length;
              if (remaining <= 0) return;
              setForm((prev) => ({
                ...prev,
                images: [...prev.images, ...files.slice(0, remaining)],
              }));
            }}
          />
        </label>
        {errors.images && <FieldError msg={errors.images} />}
      </div>

      {/* Image previews */}
      {form.images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {form.images.map((file, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden border border-stone-100 group"
            >
              <img
                src={URL.createObjectURL(file)}
                alt="Room"
                className="h-20 w-full object-cover"
              />
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    images: prev.images.filter((_, i) => i !== index),
                  }))
                }
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Availability toggle */}
      <div className="flex items-center justify-between bg-amber-50/50 border border-amber-100 rounded-2xl px-4 py-3.5">
        <div>
          <p className="font-jakarta text-sm font-medium text-stone-700">
            Room Availability
          </p>
          <p className="font-jakarta text-xs text-stone-400 mt-0.5">
            Enable if this room can be booked
          </p>
        </div>
        <div
          onClick={() => setForm({ ...form, isAvailable: !form.isAvailable })}
          className={`w-11 h-6 rounded-full cursor-pointer transition-all relative flex-shrink-0 ${
            form.isAvailable ? "bg-amber-500" : "bg-stone-200"
          }`}
        >
          <div
            className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${
              form.isAvailable ? "left-5" : "left-0.5"
            }`}
          />
        </div>
      </div>

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
          Create Room
        </button>
      </div>
    </div>
  );
}

export default CreateRoom;

// ── Reusable Field ────────────────────────────────────────────────────────────

function Field({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  icon,
  error,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
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
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
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
