import { NotiCardList, Typography } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-[#FAFAFA] h-full w-full">
      <div className="w-full bg-white ml-[245px] mr-[234px] mt-[110px] flex flex-col pl-9 pt-[25px] h-full rounded-[10px]">
        {/* Notification header */}
        <Typography fontSize="h2" fontWeight="bold">
          Notification
        </Typography>

        <div className="w-full mt-6 flex flex-col gap-y-[35px]">
          <div className="flex flex-col gap-y-4">
            <Typography fontWeight="semibold">New</Typography>
            <NotiCardList />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography fontWeight="semibold">Ealier</Typography>
            <NotiCardList displayCount={4} />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography fontWeight="semibold">One day ago</Typography>
            <NotiCardList displayCount={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
