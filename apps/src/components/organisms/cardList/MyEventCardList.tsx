"use client";

import MyEventCard from "@/components/molechules/Card/MyEventCard";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

const MyEventCardList = () => {
  const { CardInfo } = useContext(MyContext);

  return (
    <>
      <div className="space-y-4 py-5 pl-[17px] pr-[47px] flex flex-col">
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
