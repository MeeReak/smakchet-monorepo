import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";

interface NotificationCardProp {
  id: string;
  title: string;
  image: string;
}
const NotificationCard: React.FC<NotificationCardProp> = ({ title, image }) => {
  return (
    <div>
      <div className="flex items-center justify-start gap-x-[10px] pt-3 pb-[3px] hover:bg-gray-200 rounded-[5px] cursor-pointer xl:mr-[20%] border-b-1 border-gray-300 border-opacity-30">
        <Image
          src={`${image}`}
          alt={"event Image"}
          className="rounded-[5px]"
          width={60}
          height={60}
        />
        <div className="w-full">
          <Typography  className="!text-[16px] !font-medium">
            {`${title}`} 
          <span className="!font-light !text-base"> is about to start</span>
          </Typography>
          <Typography color="blue">11 hours ago</Typography>

        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
