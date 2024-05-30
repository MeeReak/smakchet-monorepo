import MyEventCardList  from "@/components/organisms/cardList/MyEventCardList";
import { Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full bg-[#FAFAFA] mt-0">
      <div className=" md:ml-[300px] md:mr-[286px] mt-[95px] h-full rounded-[15px] bg-white">
        <Typography
          fontSize="h3"
          fontWeight="bold"
          align="left"
          className="px-[17px] pt-9"
        >
          My Events
        </Typography>
        <MyEventCardList />
      </div>
    </div>
  );
};

export default page;
