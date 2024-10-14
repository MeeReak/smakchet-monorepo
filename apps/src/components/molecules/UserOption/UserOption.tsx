import React from "react";
import Image from "next/image";
import { Button, Typography } from "@/components";
interface UserOptionProps {
  imgUrl: string;
  text: string;
}
const UserOption = ({ imgUrl = "", text = "" }) => {
  return (
    <div className="flex w-fit h-[230px] px-[35px] flex-col justify-evenly shadow-md rounded-[20px] hover:cursor-pointer hover:border-b-2 hover:border-gray-300 hover:border-r-2">
      <div className="flex flex-row">
        <Image
          className=" rounded-full flex justify-center"
          width={130}
          height={130}
          src={imgUrl}
          alt="Image"
        />
      </div>
      <Typography className="flex justify-center" fontSize="h5">
        {text}
      </Typography>
    </div>
  );
};

export { UserOption };
