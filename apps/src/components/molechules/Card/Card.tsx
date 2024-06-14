"use client";

import { Typography } from "@/components";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { CardProps } from "@/@types/card";
import { formatDateTime } from "@/utils/formatTime";
import axios from "axios";

const Card: React.FC<CardProps> = ({
  thumbnail,
  alt,
  eventName,
  Date,
  location,
  _id,
  isFavorite,
  isLoading,
}) => {
  const checkIsActive = useMemo(
    () =>
      isFavorite?.find((eachFavorite) => eachFavorite === _id) ? true : false,
    [isFavorite, _id]
  );

  const [isActive, setIsActive] = useState<boolean>(checkIsActive);

  async function toggleFavorite({ id }: { id: string }) {
    
    try {
      const api = `http://localhost:3000/v1/user/favorite/${id}`;
      const response = await axios.post(
        api,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsActive(!isActive);
      return response;
    } catch (error: unknown | any) {
      console.error("Error fetching data:", error);
      console.log(error.message);
    }
  }

  async function increaseView({ id }: { id: string }) {
    try {
      const api = `http://localhost:3004/v1/events/${id}/update-view`;
      const response = await axios.post(
        api,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsActive(!isActive);
      return response;
    } catch (error: unknown | any) {
      console.error("Error fetching data:", error);
      console.log(error.message);
    }
  }

  return (
    <>
      <Link href={isLoading ? "#" : `/detail/${_id}`}>
        <div
          onClick={(e) => {
            e.preventDefault();
            increaseView({ id: _id });
          }}
          className="bg-white h-[340px] p-[10px] pb-[5px] space-y-2 rounded-[10px] relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <div>
            {isLoading ? (
              <div className="w-[300px] h-[200px] bg-gray-300 rounded animate-pulse" />
            ) : (
              <Image
                src={thumbnail}
                alt={alt}
                width={300}
                height={200}
                className="rounded object-cover h-[200px]"
              />
            )}
            {!isLoading && (
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite({ id: _id });
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={
                  isActive
                    ? `w-6 h-6 absolute top-3 right-3 fill-[#FF2020] stroke-none z-10`
                    : `w-6 h-6 absolute top-3 right-3 stroke-white fill-[rgba(0,0,0,0.15)] z-10`
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </div>
          <div className="space-y-2">
            {isLoading ? (
              <div className="h-6 bg-gray-300 w-[300px] rounded animate-pulse" />
            ) : (
              <Typography
                className="line-clamp-2 text-gray-700 w-[300px]"
                fontSize="h4"
                fontWeight="semibold"
              >
                {eventName}
              </Typography>
            )}
            <div className="space-y-1">
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-5 bg-gray-300 w-[150px] rounded animate-pulse" />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <Typography
                      fontWeight="medium"
                      className="pl-[5px] text-[15px] text-gray-600"
                    >
                      {formatDateTime(Date.startDate)}
                    </Typography>
                  </>
                )}
              </div>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="h-5 bg-gray-300 w-[150px] rounded animate-pulse" />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <Typography
                      color="red"
                      className="pl-[5px] text-[15px] text-gray-600"
                    >
                      {location}
                    </Typography>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export { Card };
