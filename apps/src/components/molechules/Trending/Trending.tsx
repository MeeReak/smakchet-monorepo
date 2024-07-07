"use client";

import { Button, Typography } from "@/components";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { formatDateTime } from "@/utils/formatTime";
import Link from "next/link";

interface EventProps {
  id: string;
  thumbnail: string;
  eventName: string;
  Date: string;
  location: string;
}

interface TrendingProps {
  topEvent?: EventProps;
  secondEvent?: EventProps;
  className?: string;
}

const Trending: React.FC<TrendingProps> = ({
  topEvent,
  secondEvent,
  className,
}) => {
  const [screenSize, setScreenSize] = useState("sm");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleScreenChange = (mq: MediaQueryListEvent) => {
      setScreenSize(mq.matches ? "xl" : "sm");
    };

    setScreenSize(mediaQuery.matches ? "xl" : "sm");

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

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

      <div className={`${className}`}>
        {topEvent && renderEvent(topEvent)}
        {secondEvent && renderEvent(secondEvent)}
      </div>
    </div>
  );
};

export { Trending };
