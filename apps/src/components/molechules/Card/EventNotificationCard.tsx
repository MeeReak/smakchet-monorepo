import React, { FC, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";

interface EventNotificationCardProp {
  id: string;
  title: string;
  image: string;
  duration: string
  description: string;
  time: string;
}
const EventNotificationCard: FC<EventNotificationCardProp> = ({
    title,
    image,
    duration,
    description,
    time,
}) => {
  return (
    <div>  
      <div className="flex items-center justify-start gap-3 p-3 w-full hover:bg-gray-100 rounded-[5px] cursor-pointer animate-smart duration-300 ease-out">
        <Image
          src={`${image}`}
          alt={"Image"}
          className={`rounded-[5px]`}
          width={78}
          height={78}
        />
        <div className="w-full flex flex-col">
          <Typography fontWeight="semibold" className="!text-base">
            {`${title}`}{" "}
            <span className="font-normal"> {duration}{" "}</span>
            <span className="!text-base font-normal  hidden sm:inline">{`${description}`}</span>
          </Typography>
          <Typography color="blue">{`${time}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export {EventNotificationCard};
