//my-event
import MyEventCardList  from "@/components/organisms/cardList/MyEventCardList";
import { Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    
      <div className="xl:mx-[300px] lg:mx-[200px] md:mx-[100px] py-9 md:mt-[90px] mt-[60px] m-0 h-full rounded-[15px] bg-white">
        <Typography
          fontWeight="bold"
          align="left"
          className="px-[17px] md:!text-xl !text-base"
        >
          My Events
        </Typography>
        <MyEventCardList />
      </div>
  
  );
};

export default page;
