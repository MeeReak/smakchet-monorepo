import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms";

interface NotificationCardProp {
  classname?: string;
  fontsize?: string;
  id: string;
  title: string;
  description: string;
  image: string;
}
const NotificationCard: React.FC<NotificationCardProp> = ({
  classname,
  fontsize,
  title,
  description,
  image,
}) => {
  return (
    <div>
      <div
        className={`${classname} m-auto rounded-[5px] p-2 flex justify-between items-center hover:bg-gray-100`}
      >
        <div className="w-[20%] h-[90%]">
          <Image
            src={`${image}`}
            alt={"event Image"}
            width={55}
            height={55}
            className="w-full h-full object-cover rounded-[5px]"
          ></Image>
        </div>
        <div className="xl:w-[70%] w-[75%] h-[100%]">
          <div className="">
            <Typography
              fontWeight="bold"
              className={`${fontsize} line-clamp-2`}
            >
              {`${title}`}{" "}
              <span className="font-normal">{`${description}`}</span>
            </Typography>
          </div>
          <div className="">
            <Typography
              fontWeight="normal"
              className={`${fontsize}`}
              color="blue"
            >
              11 hours ago
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
