import MyEventCardList  from "@/components/organisms/cardList/MyEventCardList";
import { Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-[#FAFAFA] mt-0">
      <div className=" md:mx-[120px] mt-[95px]  bg-white">
        <Typography
          fontSize="h3"
          fontWeight="bold"
          align="left"
          className="px-5"
        >
          My Event
        </Typography>
        <MyEventCardList />
      </div>
    </div>
  );
};

export default page;
