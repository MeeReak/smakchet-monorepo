import { Button, Typography } from "@/components";
import React from "react";
import Image from "next/image";
import { formatDateTime } from "@/utils/formatTime";
import Link from "next/link";
import { getTrendingData } from "@/action/homePage";

interface EventProps {
  id: string;
  thumbnail: string;
  eventName: string;
  Date: string;
  location: string;
}

const Trending = async () => {
  const renderEvent = (event: EventProps) => (
    <Link href={`/detail/${event.id}`}>
      <div className="relative group h-[200px] w-[300px] sm:h-[250px] sm:w-[500px] transition duration-300 ease-in-out">
        <Image
          src={event.thumbnail}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute bottom-0  w-full bg-[#050000] bg-opacity-65 flex flex-col gap-y-[6px] justify-start opacity-0 group-hover:opacity-80 transition-opacity py-2 px-4 rounded-b-xl">
          <div>
            <Typography
              align="left"
              color="white"
              fontSize="h5"
              fontWeight="bold"
            >
              {event.eventName}
            </Typography>
          </div>
          <div className="flex flex-row gap-x-[5px]">
            <Image
              src={"/assets/icons/date.svg"}
              alt={""}
              width={17}
              height={17}
            />
            <Typography color="white" fontSize="h5">
              {formatDateTime(event.Date)}
            </Typography>
          </div>
          <div className="flex flex-row gap-x-[5px]">
            <Image
              src={"/assets/icons/address-outline-white.svg"}
              alt={""}
              width={17}
              height={17}
            />
            <Typography color="white" fontSize="h5">
              {event.location}
            </Typography>
          </div>
          <Button
            colorScheme="primary"
            className="!border-none w-fit"
            size="h5"
          >
            view mores
          </Button>
        </div>
      </div>
    </Link>
  );

  const event = await getTrendingData();

  return (
    <div className="max-[1030px]:px-5 ">
      <Typography
        fontSize="h2"
        fontWeight="bold"
        className="my-5"
        screensize="xl"
      >
        Trending in <span className="text-red-500">Smakchet</span>
      </Typography>
      <div className="flex gap-4 overflow-hidden overflow-x-auto mt-[25px]">
        {event && renderEvent(event[0])}
        {event && renderEvent(event[1])}
      </div>
    </div>
  );
};

export { Trending };
