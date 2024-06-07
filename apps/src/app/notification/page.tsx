import { NotiCardList, Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-white md:bg-[#FAFAFA] h-full justify-center"> 
    {/* max-[1030px]:p-5 max-[1030px]:pl-[10px] max-w-[1024px] m-auto */}
      <div className="bg-white md:mx-[90px] lg:mx-[180px] mt-[110px] py-[25px] pl-0 md:pl-9 md:pt-[25px] w-full h-full md:rounded-[10px]">
        {/* Notification header */}
        <Typography  className="pl-9 md:pl-0 md:!text-2xl md:!font-semibold !font-bold !text-xl">
          Notification
        </Typography>

        <div className="w-full md:py-[25px] py-[11px] flex flex-col md:gap-y-[35px] gap-y-5">
          <div className="flex flex-col">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">New</Typography>
            <NotiCardList />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">Ealier</Typography>
            <NotiCardList displayCount={4} />
          </div>
          <div className="">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">One day ago</Typography>
            <NotiCardList displayCount={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
