"use client";
import React, { useContext } from "react";
import { Typography, Button, ApplyTable } from "@/components";
import { MyContext } from "@/contexts/CardContext";
import Image from "next/image";
// import { Table } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  const { CardUser } = useContext(MyContext);

  const totalCandidate = CardUser.length;
  const acceptedCandidate = CardUser.filter(
    (user) => user.status === "Accepted"
  ).length;
  console.log(totalCandidate);

  return (
    <div className="bg-[#FAFAFA] w-full h-screen justify-center items-start flex mb-10">
      <div className="w-fit ml-[121px] mr-[128px]">
        {/* Header section */}
        <div className="mt-[30px] mb-[55px] flex flex-row items-center justify-between ">
          {/* Go back */}
          <div>
            <Button
              className="!outline-none !border-none md:text-2xl md:font-normal"
              leftIcon={
                <Image
                  src={"assets/icons/back.svg"}
                  alt={""}
                  width={35}
                  height={35}
                />
              }
            >
              <Typography fontSize="h3">Applied</Typography>
            </Button>
          </div>
          {/* number of Applied & Accepted */}
          <div className="flex flex-row justify-center items-end gap-x-[13px] ">
            <Button
              className="!cursor-default justify-center items-center w-[141px] h-[50px] border-1 border-opacity-40 border-gray-400 rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/people.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              {`${totalCandidate}`} Applied
            </Button>
            <Button
              className="!cursor-default items-center justify-center w-[155px] h-[50px] border-1 border-opacity-40 border-gray-400 rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/check-inline.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              {`${acceptedCandidate}`} Accepted
            </Button>
          </div>
        </div>
        {/* Table of applied volunteer */}
        <div className="">
          <ApplyTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
