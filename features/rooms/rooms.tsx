"use client";
import CreateCard from "./components/create-card";
import { BedDouble, BookKey, Plus } from "lucide-react";
import RoomAvailabilityGrid from "./components/room-availabilty";
import RoomCategory from "./components/room-category";
import RoomList from "./components/room-list";
import { useRoomsContext } from "@/context/room-context";

function Rooms() {
  const { setCurrentModal } = useRoomsContext();

  return (
    <section className="w-full h-full outline-none p-6">
      {/* Create Cards */}
      <div className="flex gap-4">
        <CreateCard
          title="Create room type"
          description="Add a new room category"
          icon={Plus}
          accentColor="#059669"
          backgroundColor="#ecfdf5"
          onClick={() => setCurrentModal("createCategory")}
        />
        <CreateCard
          title="Create room"
          description="Add a new room"
          icon={BedDouble}
          accentColor="#92400e"
          backgroundColor="#f5f0eb"
          onClick={() => setCurrentModal("createRoom")}
        />
        <CreateCard
          title="Book room"
          description="Book a reservation"
          icon={BookKey}
          accentColor="#c2410c"
          backgroundColor="#fdf4ec"
          onClick={() => setCurrentModal("BookRoom")}
        />
      </div>

      {/* Room Categories */}
      <div className="mt-12">
        <RoomCategory />
      </div>

      {/* Rooms */}
      <div className="mt-12 overflow-hidden">
        <RoomList />
      </div>

      {/* Availability Grid */}
      <div className="mt-12">
        <RoomAvailabilityGrid setCurrentModal={setCurrentModal} />
      </div>
    </section>
  );
}

export default Rooms;
