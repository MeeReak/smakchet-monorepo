"use client";

import MyEventCard from "@/components/molechules/Card/MyEventCard";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

const MyEventCardList = () => {
  const { CardInfo } = useContext(MyContext);

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
          />
        ))}
      </div>
    </>
  );
};

export default MyEventCardList;
