import { NotiCardList, Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-white md:bg-[#FAFAFA] h-full w-full">
      <div className="w-full bg-white md:ml-[245px]  md:mr-[234px] md:mt-[110px] my-[100px] flex flex-col pl-9 md:pt-[25px] h-full md:rounded-[10px]">
        {/* Notification header */}
        <Typography fontSize="h2" fontWeight="bold">
          Notification
        </Typography>

        <div className="w-full py-[25px] flex flex-col gap-y-5 md:gap-y-[35px]">
          <div className="flex flex-col ">
            <Typography fontWeight="semibold" fontSize="h5">New</Typography>
            <NotiCardList />
          </div>
          <div className="flex flex-col ">
            <Typography fontWeight="semibold" fontSize="h5">Ealier</Typography>
            <NotiCardList displayCount={4} />
          </div>
          <div className="flex flex-col">
            <Typography fontWeight="semibold" fontSize="h5">One day ago</Typography>
            <NotiCardList displayCount={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
