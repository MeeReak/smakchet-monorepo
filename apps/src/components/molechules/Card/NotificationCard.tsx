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
    <div>
      <div
        className={`md:mr-[211px] md:pl-[10px] md:h-[75px] h-[100px] md:rounded-[5px] flex flex-col justify-center md:justify-end md:border-b-[1px] border-opacity-30 border-gray-300 hover:bg-gray-200 ${classname} `}
      >
        <div className="h-[60px] flex flex-row md:justify-start gap-x-[50px] pb-[3px] md:gap-x-[10px] hover:pt-[3px]  pl-[25px] md:pl-0">
          <Image
            src={`${image}`}
            alt={"event Image"}
            width={50}
            height={50}
            className="md:rounded-[5px] rounded-full w-[50px] h-[50px] md:h-[60px] md:w-[60px]"
          />
          <div className="flex flex-col align-middle justify-center ">
            <Typography className="!text-base md:!font-medium !font-bold">
              {`${title}`}
            <span className="!font-normal !text-sm md:!text-base">{`${description}`}</span>
            </Typography>
            <Typography className={"md:!text-base !text-sm"} color="blue">
              11 hours ago
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;