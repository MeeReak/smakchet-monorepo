import React, { FC, useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";

interface HostNotificationCardProp {
  id: string;
  title: string;
  image: string;
  description: string;
  time: string;
}
const HostNotificationCard: FC<HostNotificationCardProp> = ({
  title,
  image,
  description,
  time,
}) => {
  return (
    <div>
      <div className="flex items-center justify-start gap-4 p-3 md:w-[630px] hover:bg-gray-100 rounded-[5px] cursor-pointer">
        <Image
          src={`${image}`}
          alt={"Image"}
          className="rounded-full"
          width={68}
          height={68}
        />
        <div className="w-full flex flex-col gap-3">
          <Typography fontWeight="medium" className="!text-base">
            {`${title}`}{" "}
            <span className="font-normal text-base">{`${description}`}</span>
          </Typography>
          <Typography color="blue">{`${time}`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HostNotificationCard;
