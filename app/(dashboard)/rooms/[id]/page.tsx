import RoomDetail from "@/features/room-detail/room-detail";
import React, { use } from "react";

function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = use(params);
  return <RoomDetail id={id.id} />;
}

export default Page;
