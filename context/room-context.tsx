"use client";
import Modal from "@/components/common/modal";
import BookRoom from "@/features/rooms/components/book-room";
import CreateCategory from "@/features/rooms/components/create-category";
import CreateRoom from "@/features/rooms/components/create-room";
import React, { createContext, useContext, useMemo, useState } from "react";

export interface RoomContextType {
  currentModal: "createCategory" | "createRoom" | "BookRoom" | null;
  setCurrentModal: React.Dispatch<
    React.SetStateAction<"createCategory" | "createRoom" | "BookRoom" | null>
  >;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<{
      categoryName: string;
      categoryId: string;
    }>
  >;
}

const RoomContext = createContext<null | RoomContextType>(null);

export function RoomContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentModal, setCurrentModal] = useState<
    null | "createCategory" | "createRoom" | "BookRoom"
  >(null);
  const [selectedCategory, setSelectedCategory] = useState({
    categoryName: "",
    categoryId: "",
  });

  const providerValue = useMemo(() => {
    return {
      currentModal,
      setCurrentModal,
      setSelectedCategory,
    };
  }, [currentModal]);

  return (
    <RoomContext value={providerValue}>
      {currentModal && (
        <Modal
          isOpen={currentModal !== null}
          onClose={() => {
            setCurrentModal(null);
            setSelectedCategory({ categoryId: "", categoryName: "" });
          }}
          modalBoxClassName="rounded-[25px] w-[100%]"
        >
          {currentModal === "createCategory" && (
            <CreateCategory
              accentColor="#d97706"
              onCancel={() => setCurrentModal(null)}
            />
          )}
          {currentModal === "createRoom" && (
            <CreateRoom
              accentColor="#92400e"
              onCancel={() => {
                setCurrentModal(null);
                setSelectedCategory({ categoryId: "", categoryName: "" });
              }}
              categoryId={selectedCategory.categoryId}
              categoryName={selectedCategory.categoryName}
            />
          )}
          {currentModal === "BookRoom" && (
            <BookRoom onCancel={() => setCurrentModal(null)} />
          )}
        </Modal>
      )}
      {children}
    </RoomContext>
  );
}

export function useRoomsContext() {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoomContext must be used within a RoomContextProvider");
  }
  return context;
}
