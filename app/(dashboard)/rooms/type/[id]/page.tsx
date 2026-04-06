import RoomType from "@/features/room-type/room-type";
import { use } from "react";

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log(id);
  return <RoomType id={id} />;
}

export default Page;
