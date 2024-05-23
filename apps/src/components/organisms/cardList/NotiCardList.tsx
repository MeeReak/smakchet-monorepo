"use client";
import { NotificationCard } from "@/components/molechules";
import React, { useState } from "react";
interface NotiListProps {
  classname?: string;
  fontsize?: string;
}

const NotiCardList: React.FC<NotiListProps> = ({ classname, fontsize }) => {
  const [NotiInfo, setNotiInfo] = useState([
    {
      id: "1",
      title: "National day of Science, Technology and Innovation",
      description: "is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "2",
      title: "National day of Science, Technology and Innovation",
      description: "is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "3",
      title: "National day of Science, Technology and Innovation",
      description: "is about to end",
      image:
        "/assets/image/National_day_of_Science,Technology_and_Innovation.png",
    },
  ]);
  return (
    <>
      {NotiInfo.map((item) => (
        <NotificationCard
          key={item.id}
          classname={`${classname}`}
          fontsize={`${fontsize}`}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </>
  );
};

export default NotiCardList;
