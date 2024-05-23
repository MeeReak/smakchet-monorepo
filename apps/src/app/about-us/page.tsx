"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TeamCard, Typography } from "@/components";

const Homepage = () => {
  return (
    <>
      <div className="xl:w-[1024px] m-auto space-y-5 z-10 xl:mt-[100px] w-screen">
        {/* Why SmakChet? */}
        <div className="xl:flex mb-10">
          <div className="xl:w-[50%] flex justify-center">
            <Image
              src={"/assets/image/why_smakchet.svg"}
              alt={"why_smakchet"}
              width={238}
              height={151}
              className="xl:w-[472px] xl:h-[299px]"
            ></Image>
          </div>
          <div className="xl:w-[50%] mt-4">
            <Typography fontSize="h1" fontWeight="bold" align="center">
              Why SmakChet?
            </Typography>
            <hr className="w-[75px] h-[7px] bg-[#207BFF] mx-auto my-4"></hr>
            <Typography fontSize="h3" align="center">
              SmakChet is a Website that include all your needed about
              volunteers. We have process all of your detail about event, date
              mange users etc.
            </Typography>
          </div>
        </div>
        {/* Our team */}
        <div className="w-full">
          <Typography fontSize="h1" fontWeight="bold" align="center">
            Our Team
          </Typography>
          <hr className="w-[75px] h-[7px] bg-[#207BFF] mx-auto my-4"></hr>
          <Typography fontSize="h3" align="center">
            Our SmakChet members have become more responsibility on our own
            role:
          </Typography>
        </div>
        {/* profile */}
        <div className="grid xl:grid-cols-2 xl:grid-rows-2 gap-y-7 content-center">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        {/* Partner */}
        <div className="w-full">
          <div>
            <Typography fontSize="h1" fontWeight="bold" align="center">
              Our Partner
            </Typography>
            <hr className="w-[75px] h-[7px] bg-[#207BFF] mx-auto my-4"></hr>
            <Typography fontSize="h3" align="center">
              It’s an honor to participate with our partner
            </Typography>
          </div>
          <div className="w-full mt-10 flex flex-col items-center justify-center gap-y-3 xl:flex-row xl:justify-between">
            <Link href={"https://sabaicode.com/"} className="mb-5 xl:mb-0">
              <Image
                src={"/assets/image/sabaicode.svg"}
                alt={"profile"}
                width={200}
                height={200}
              />
            </Link>
            <Link href={"https://neakhatka.com/"}>
              <Image
                src={"/assets/image/internship.svg"}
                alt={"profile"}
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
