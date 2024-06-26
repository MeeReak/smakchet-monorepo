"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TeamCard, Typography } from "@/components";

const Homepage = () => {
  return (
    
  <div className="bg-[#FAFAFA] w-full h-full">
    <div className="py-10 px-5 md:py-[126px] xl:px-[300px] lg:px-[200px] md:px-[100px]">
      {/* why smakchet */}
      <div className="flex flex-col md:flex-row bg-white rounded-[10px] px-5 py-10  gap-y-5 md:gap-y-0 md:gap-x-[40px]">
        <Image
          src={"/assets/image/why_smakchet.svg"}
          alt={"why_smakchet"}
          width={379}
          height={263}
          className="self-center md:self-start"
        />
        <div className="flex flex-col w-full justify-center items-center md:my-10">
          <Typography
            className="!text-xl md:!text-2xl font-semibold w-full"
            fontWeight="bold"
            align="center"
          >
            Why SmakChet?
          </Typography>
          <hr className="w-[75px] h-[3px] bg-[#207BFF] my-2"></hr>
          <Typography className="!text-base font-normal mt-[30px]" align="left">
            SmakChet is a Website that include all your needed about
            volunteers. We have process all of your detail about event, date
            mange users etc.
          </Typography>
        </div>
      </div>

      {/* our vision our mission */}
      <div className="mt-10 md:mt-[46px] mx-5 py-10 md:py-[25px] px-5 gap-y-10 gap-x-0 md:gap-x-24 hidden md:flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center">
          <Typography fontWeight="normal" className="!text-xl md:!text-2xl">
            Our Vision
          </Typography>
          <hr className="w-[62px] h-[2px] bg-[#207BFF] my-2"></hr>
          <Typography className="!text-base" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <Typography fontWeight="normal" className="!text-xl md:!text-2xl">
            Our Mission
          </Typography>
          <hr className="w-[62px] h-[2px] bg-[#207BFF] my-2"></hr>
          <Typography className="!text-base" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
      </div>

      {/* Our team */}
      <div className="mt-10 md:mt-[61px] bg-white rounded-[10px] flex py-10 md:py-[25px] justify-center">
        <div className="flex flex-col align-middle items-center">
          <Typography
            className="!text-xl md:!text-2xl font-semibold w-full"
            fontWeight="bold"
            align="center"
          >
            Our Team
          </Typography>
          <hr className="w-[58px] h-[2px] bg-[#207BFF] my-2"></hr>
          <Typography align="center" className="!text-base md:mt-[28px] mt-[10px]">
            Our SmakChet members have become more responsibility on our own
            role:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between items-center gap-x-24 align-middle w-full gap-y-4">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>

      {/* Our partner */}
      <div className="bg-white flex flex-col justify-center items-center mt-10 md:mt-[66px] py-10 md:py-[25px] gap-y-5 md:gap-y-[47px]">
        <div>
          <Typography
            className="!text-xl md:!text-2xl font-semibold w-full"
            fontWeight="bold"
            align="center"
          >
            Partner
          </Typography>
          <hr className="w-[58px] h-[2px] bg-[#207BFF] my-2"></hr>
        </div>
        <Typography className="!text-base font-normal">
          It&apos;s an honor to participate with our partner
        </Typography>
        <div className="flex justify-center w-full">

        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 md:gap-14">
          <Link href={"https://sabaicode.com/"}>
            <Image
              src={"/assets/image/sabaicode.svg"}
              alt={"profile"}
              width={100}
              height={100}
              className="object-fill"
            />
          </Link>
          <Link href={"https://chekromlek.com/"}>
            <Image
              src={"/assets/image/weshare.png"}
              alt={"profile"}
              width={100}
              height={100}
            />
          </Link>
          <Link href={"https://neakhatka.com/"}>
            <Image
              src={"/assets/image/internship.svg"}
              alt={"profile"}
              width={100}
              height={100}
            />
          </Link>
          <Link href={"https://learnwithkru.com/"}>
            <Image
              src={"/assets/image/kru.png"}
              alt={"profile"}
              width={100}
              height={100}
            />
          </Link>
        </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Homepage;
