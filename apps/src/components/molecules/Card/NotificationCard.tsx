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
      <div className="flex items-center justify-start gap-x-[10px] py-3 px-2 mx-5 md:mx-0 hover:bg-gray-200 rounded-[5px] cursor-pointer border-b-1 border-gray-300 
      border-opacity-20 transition ease-out delay-100 hover:translate-y-1">
        <Image
          src={`${image}`}
          alt={"event Image"}
          className="rounded-[5px]"
          width={60}
          height={60}
        />
        <div className="w-full">
          <Typography  className="!text-[16px] !font-medium line-clamp-none">
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
