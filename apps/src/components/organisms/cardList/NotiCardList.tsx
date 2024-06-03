"use client";
import { NotificationCard } from "@/components/molechules";
import React, { useState } from "react";

interface NotiListProps {
  className?: string;
  displayCount?: number;
}

interface NotificationCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const NotiCardList: React.FC<NotiListProps> = ({
  className,
  displayCount = 5,
}) => {
  const [NotiInfo, setNotiInfo] = useState<NotificationCardProps[]>([
    {
      id: "1",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "2",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "3",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "4",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "5",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "6",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "7",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
    {
      id: "8",
      title: "National day of Science, Technology and Innovation",
      description: " is about to end",
      image: "/assets/image/cambodia_book_fair.png",
    },
  ]);

  return (
    <>
      {NotiInfo.slice(0, displayCount).map((item, index) => (
        <NotificationCard
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
        />
      ))}
    </>
  );
};

export default NotiCardList;
