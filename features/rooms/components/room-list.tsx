"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { BedDouble } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import EmptyState from "@/features/rooms/components/empty-state";
import { RoomCard } from "@/features/rooms/components/room-card";
import { useGetRooms, useGetRoomTypes } from "@/features/rooms/hooks/use-rooms";
import Shimmer from "@/components/common/shimmer";
import { Room, RoomCategoryType } from "@/features/rooms/types/types";
import DropDown from "@/components/common/drop-down";
import { PAGE_SIZE } from "@/components/types/const";
import { useRouter } from "next/navigation";

function RoomList() {
  const { data: roomTypes } = useGetRoomTypes();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const router = useRouter();
  const { data, isLoading } = useGetRooms(
    undefined,
    selectedFilter,
    PAGE_SIZE,
    currentPage,
  );

  const filterList = useMemo(() => {
    if (roomTypes?.data.roomTypes) {
      return roomTypes.data.roomTypes.map((type: RoomCategoryType) => ({
        key: type.type,
        value: type.id,
      }));
    }
    return [];
  }, [roomTypes]);

  useEffect(() => {
    if (data?.data.rooms) {
      if (currentPage === 1) {
        // First page: replace all rooms
        setRooms(data.data.rooms);
      } else {
        // Subsequent pages: append new rooms
        setRooms((prevRooms) => {
          const newRooms = data.data.rooms;
          const existingIds = new Set(prevRooms.map((room) => room.id));
          const uniqueNewRooms = newRooms.filter(
            (room: Room) => !existingIds.has(room.id),
          );
          return [...prevRooms, ...uniqueNewRooms];
        });
      }
    }
    if (data?.data.totalPages) {
      setTotalPages(data.data.totalPages);
    }
  }, [data?.data, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
    setCurrentPage(1);
    setRooms([]); // Clear existing rooms when filter changes
  };

  return (
    <>
      <div className="w-full flex items-center justify-between mb-4 pr-5">
        <h2 className="text-lg font-semibold text-[#1c1d4e]">Rooms</h2>
        <DropDown data={filterList} handleClick={handleFilterChange} />
      </div>

      {isLoading && currentPage === 1 && <Shimmer />}

      {rooms.length === 0 && !isLoading ? (
        <EmptyState
          title="No rooms created"
          description="Add rooms to start managing bookings"
          icon={BedDouble}
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                onClick={() => router.push(`rooms/${room.id}`)}
                room={room}
              />
            ))}
          </div>

          {isLoading && currentPage > 1 && (
            <div className="text-sm text-gray-500">Loading more...</div>
          )}

          {totalPages > currentPage && !isLoading && (
            <button
              onClick={handleLoadMore}
              className="text-gray-400 text-sm  cursor-pointer transition-all duration-200 hover:text-amber-400"
            >
              View More
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default RoomList;
