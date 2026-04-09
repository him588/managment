/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect, useState } from "react";
import {
  useRoomStatusByRoomId,
  useRoomTypeDetails,
} from "@/features/room-type/hooks/hook";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { RoomInfoType } from "./types/type";
import RoomTypeInfo from "./components/room-type-info";
import Stats from "./components/stats";
import RoomList from "./components/room-list";

function RoomType({ id }: { id: string }) {
  const { data } = useRoomTypeDetails(id);
  const { data: roomStatus } = useRoomStatusByRoomId(id);
  const [typeDetails, setTypeDetails] = useState<RoomInfoType>({
    roomTypeId: "",
    type: "",
    price: 0,
    maxGuest: 0,
    roomCount: "0",
    occupancyPct: "",
    tags: [],
    availableRooms: "",
    bookingRooms: "",
    mantainanceRooms: "",
    rooms: [],
  });
  const router = useRouter();
  useEffect(() => {
    const res = data?.data?.roomType;
    const status = roomStatus?.data?.rooms || [];

    if (res && status.length >= 0) {
      const availableRooms = status.filter(
        (room: { status: string }) =>
          room.status === "available" || room.status === "upcoming",
      );
      const bookedRooms = status.filter(
        (room: { status: string }) => room.status === "occupied",
      );
      const underMaintainence = status.filter(
        (room: { status: string }) => room.status === "maintenance",
      );

      console.log("room count", res.roomCount);
      console.log("aval rooms", availableRooms);

      const totalPercentage =
        res.roomCount > 0 ? (bookedRooms.length / res.roomCount) * 100 : 0;

      const rooms = status.map(
        (room: {
          images: string[];
          roomNo: string;
          floor: string;
          status: string;
          roomId: string;
        }) => {
          return {
            images: room.images,
            status: room.status,
            roomNumber: room.roomNo,
            floor: room.floor,
            roomId: room.roomId,
          };
        },
      );

      console.log("total percentage", totalPercentage);

      setTypeDetails((prev) => ({
        ...prev,
        roomTypeId: res.roomTypeId,
        type: res.type,
        tags: res.tags,
        price: res.price,
        roomCount: res.roomCount,
        maxGuest: res.maxGuest,
        occupancyPct: totalPercentage.toFixed(1),
        availableRooms: availableRooms.length,
        bookingRooms: bookedRooms.length,
        mantainanceRooms: underMaintainence.length,
        rooms: rooms,
      }));
    }
  }, [data, roomStatus]);

  return (
    <section>
      <div className="flex items-center gap-[1rem] px-[1rem]">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>
      <div className="p-[1.4rem] flex flex-col gap-[2rem]">
        <RoomTypeInfo detail={typeDetails} />
        <Stats detail={typeDetails} />
        <RoomList detail={typeDetails} />
      </div>
    </section>
  );
}

export default RoomType;
