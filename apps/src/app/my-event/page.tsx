import MyEventCardList  from "@/components/organisms/cardList/MyEventCardList";
import { Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-[800px] mx-auto pt-16">
        <Typography
          fontSize="h3"
          fontWeight="bold"
          align="left"
          className="pl-3 pt-5 sm:pl-5 lg:pl-0"
        >
          My Event
        </Typography>
        <MyEventCardList />
      </div>
    </>
  );
};

export default page;
