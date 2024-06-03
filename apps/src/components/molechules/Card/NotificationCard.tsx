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
      <div className="sm:flex hidden items-center justify-center gap-2 p-2 hover:bg-gray-200 rounded-[5px] cursor-pointer">
        <Image
          src={`${image}`}
          alt={"event Image"}
          className="rounded-[5px]"
          width={60}
          height={60}
        />
        <div className="w-[280px]">
          <Typography fontWeight="semibold" className="text-[12px]">
            {`${title}`} <span className="font-normal"> is about to start</span>
          </Typography>
          <Typography color="blue">11 hours ago</Typography>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
