import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";

interface NotificationCardProp {
  classname?: string;
  // fontsize?: string;
  id: string;
  title: string;
  description: string;
  image: string;
}
const NotificationCard: React.FC<NotificationCardProp> = ({
  classname,
  // fontsize,
  title,
  description,
  image,
}) => {
  return (
    <div className="">
      <div
        className={`w-3/4 h-[75px] rounded-[5px] flex flex-col justify-center hover:bg-gray-100 ${classname} `}
      >
        <div className="h-[60px]  flex flex-row gap-x-[10px] ">

        <Image
          src={`${image}`}
          alt={"event Image"}
          width={60}
          height={60}
          className=" rounded-[5px]"
        />
        <div className="flex flex-col align-middle justify-center">
          <Typography fontWeight="semibold">
            {`${title}`}
            <span className="font-normal">{`${description}`}</span>
          </Typography>
          <Typography className={"!text-[10px]"} color="blue">
            11 hours ago
          </Typography>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
