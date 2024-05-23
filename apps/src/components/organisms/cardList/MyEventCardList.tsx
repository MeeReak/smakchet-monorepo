"use client";

import MyEventCard from "@/components/molechules/Card/MyEventCard";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

const MyEventCardList = () => {
  const { CardInfo } = useContext(MyContext);

  return (
    <>
      <div className="px-5 space-y-4 py-5 flex flex-col justify-center items-center">
        {CardInfo.map((item, index) => (
          <MyEventCard
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default MyEventCardList;
