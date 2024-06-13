"use client";

import { ButtonIcon, FavPage, Typography } from "@/components";
import Popup from "@/components/molechules/Filter/Popup";
import PopupReq from "@/components/molechules/PopupReq/PopupReq";
import { RequireDetail } from "@/components/molechules/ReqCardDetail/RequireDetail";
import Hamburger_detail from "@/components/molechules/hamburger/Hamburger_detail";


import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

const Page = () => {
  const { CardInfo } = useContext(MyContext);

  const data = CardInfo.filter((item: any) => item.isFavorite === true);

  return (
    <>
      <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20 ">
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center">
            <ButtonIcon
              className="md:hidden block px-3 py-1 rounded-full bg-white ml-[5%] border border-gray-200"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#207BFF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              }
            />
            <Typography
              fontSize="h2"
              fontWeight="bold"
              className="pl-2 sm:pl-auto hidden md:block"
            >
              Favorite
            </Typography>
          </div>
          <div className="px-4 py-2 rounded-lg border-[1px] border-gray-200 text-center flex justify-center items-center ">
            <Typography fontSize="h3" color="blue">
              {data.length} Events
            </Typography>
          </div>
        </div>
        <FavPage />
        <Hamburger_detail/>
      </div>
    </>
  );
};

export default Page;
