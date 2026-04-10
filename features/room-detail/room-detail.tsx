"use client";

import { useState } from "react";
import { DUMMY_ROOM, DUMMY_BOOKINGS } from "./types/const";
import { RoomBookingsList } from "./room-booking-list";
import { RoomHeroCard } from "./room-hero-card";
import { Room, IRoomBooking, RoomBookingStatus } from "./types/types";

interface RoomDetailPageProps {
  id: string;
  room?: Room;
  bookings?: IRoomBooking[];
  onBack?: () => void;
  onEdit?: () => void;
  onNewBooking?: () => void;
  onToggleMaintenance?: () => void;
  onUpdateBookingStatus?: (
    bookingId: string,
    status: RoomBookingStatus,
  ) => void;
}

export default function RoomDetailPage({
  id,
  room = DUMMY_ROOM,
  bookings = DUMMY_BOOKINGS,
  onBack,
  onEdit,
  onNewBooking,
  onToggleMaintenance,
  onUpdateBookingStatus,
}: RoomDetailPageProps) {
  return (
    <div className=" font-jakarta   max-w-5xl mx-auto">
      {/* ── Hero: image gallery + room info ── */}
      <RoomHeroCard
        roomId={id}
        room={room}
        onBack={onBack}
        onEdit={onEdit}
        onToggleMaintenance={onToggleMaintenance}
      />

      {/* ── Bookings ── */}
      <RoomBookingsList
        bookings={bookings}
        onNewBooking={onNewBooking}
        onUpdateStatus={onUpdateBookingStatus}
      />
    </div>
  );
}
