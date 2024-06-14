import { NotiCardList, Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-white md:bg-[#FAFAFA] h-full justify-center"> 
    {/* max-[1030px]:p-5 max-[1030px]:pl-[10px] max-w-[1024px] m-auto */}
      <div className="bg-white md:mx-[100px] xl:mx-[300px] lg:mx-[200px] md:my-[100px] my-[50px] pt-[50px] pl-0 md:px-9 md:pt-[25px] w-full h-full md:rounded-[10px]">
        {/* Notification header */}
        <Typography  className="pl-9 md:pl-0 md:!text-2xl md:!font-semibold !font-bold !text-xl">
          Notification
        </Typography>

        <div className="w-full md:py-[24px] py-[11px] flex flex-col md:gap-y-[35px] gap-y-5">
          <div className="flex flex-col gap-y-4">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">New</Typography>
            <div>

            <NotiCardList />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">Ealier</Typography>
            <div>

            <NotiCardList displayCount={4} />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography className="pl-9 md:pl-0 md:!font-medium md:!text-base !font-bold !text-sm">One day ago</Typography>
            <div>

            <NotiCardList displayCount={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
