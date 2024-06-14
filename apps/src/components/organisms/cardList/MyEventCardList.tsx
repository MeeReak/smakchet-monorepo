"use client";

import MyEventCard from "@/components/molechules/Card/MyEventCard";
import { Delete } from "@/components/molechules/Delete/delete";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext, useState } from "react";

const MyEventCardList = () => {
  const { CardInfo } = useContext(MyContext);
  const [modalState, setModalState] = useState<string | null>(null); // Use id for modal state

  return (
    <>
      <div className="md:space-y-4 py-5 xl:pl-[17px] xl:pr-[47px] px-3 flex flex-col">
        {CardInfo.map((item, index) => (
          <MyEventCard
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
            id={item.id}
            modalState={modalState}
            setModalState={setModalState}
          />
        ))}
        {modalState && (
          // <div className="fixed inset-0 h-full w-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Delete setModalState={() => setModalState(null)} id={modalState} />
          // </div>
        )}
      </div>
    </>
  );
};

export default MyEventCardList;
