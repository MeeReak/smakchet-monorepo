import {
  EventNotificationCard,
  HostNotificationCardList,
  Typography,
} from "@/components";
import { EventNotificationCardList } from "@/components/organisms/cardList/EventNotificationCardList";
import React from "react";

const page = () => {
  return (
    <div className="flex bg-white md:bg-[#FAFAFA] h-full justify-center">
      {/* max-[1030px]:p-5 max-[1030px]:pl-[10px] max-w-[1024px] m-auto */}
      <div
        className="bg-white md:mx-[100px] xl:mx-[300px] lg:mx-[200px] md:mt-[110px] py-[100px] md:py-0 pl-0 md:px-9 md:pt-[25px] w-full h-full md:rounded-[10px]"
      >
        {/* Notification header */}
        <Typography
          fontWeight="medium"
          className="pl-9 md:pl-0 md:!text-2xl !text-xl"
        >
          Notification
        </Typography>

        <div className="w-full md:py-[25px] py-[11px] flex flex-col gap-y-5 md:gap-y-[35px]">
          <div className="flex flex-col gap-y-4">
            <Typography
              fontWeight="normal"
              className="pl-9 md:pl-0 md:!font-medium md:!text-base !text-base"
            >
              New
            </Typography>
            <div>

            <EventNotificationCardList />
            <HostNotificationCardList />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography
              fontWeight="normal"
              className="pl-9 md:pl-0 md:!font-medium md:!text-base !text-base"
            >
              Ealier
            </Typography>
            <HostNotificationCardList displayCount={4} />
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography
              fontWeight="normal"
              className="pl-9 md:pl-0 md:!font-medium md:!text-base !text-base"
            >
              One day ago
            </Typography>
            <HostNotificationCardList displayCount={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
