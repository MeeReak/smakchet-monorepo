"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@/components";
import Link from "next/link";



const roles = {
  "1": "Organizer" ,
  "2": "Volunteer" 
};

const RoleChoosing = () => {
  const [active, setActive] = useState<string>("");

  function handleClick(
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) {
    setActive(e.currentTarget.id);
  
  }

  return (
    <>
      <div className="h-screen bg-[#f0f2f5] ">
        <div className="flex flex-col items-center justify-center pt-[70px] mb-20">
        <Link href={"/"}>
          {" "}
          <Image
            src={"assets/image/smakchet_logo.svg"}
            alt={"Smakchet logo"}
            width={172}
            height={32}
          />
        </Link>
          <Typography fontSize="h1" fontWeight="semibold" className="pb-3">
            Select Your Role
          </Typography>
          <Typography className="pb-5">
            What do you want to register as ?
          </Typography>
          {/* option */}
          <div className="flex flex-row gap-9 pb-9">
            <button
              onClick={handleClick}
              id="1"
              className={`flex flex-col items-center gap-3 p-[20px] border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform duration-300 ease-in-out transform bg-white hover:scale-105 ${
                active == "1" ? "border-[#207BFF] border-[3px] " : ""
              }`}
            >
              <Image
                src={"/assets/image/cambodia_book_fair.png"}
                alt="smakchet-logo"
                width={150}
                height={150}
                className="rounded-full border-gray-200 border-2"
              ></Image>
              <div className="flex items-center flex-col">
                <Typography fontSize="h3" fontWeight="semibold">
                  Organizer
                </Typography>
                <Typography fontSize="h5" fontWeight="medium" color="blue">
                  Create and manage events
                </Typography>
              </div>
            </button>

            <button
              id="2"
              onClick={handleClick}
              className={`flex flex-col items-center gap-3 p-[20px] border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform bg-white duration-300 ease-in-out transform hover:scale-105 ${
                active == "2" ? "border-[#207BFF] border-[3px] " : ""
              }`}
            >
              <Image
                src={"/assets/image/cambodia_book_fair.png"}
                alt="smakchet-logo"
                width={150}
                height={150}
                className="rounded-full border-gray-200 border-2"
              ></Image>
              <div className="flex items-center flex-col">
                <Typography fontSize="h3" fontWeight="semibold">
                  Volunteer
                </Typography>
                <Typography fontSize="h5" fontWeight="medium" color="blue">
                  Find events and volunteer
                </Typography>
              </div>
            </button>
          </div>

          <Link href={`/sign-up?role=${roles[active]}`}>
            <Button className="bg-[#207BFF] align-middle justify-center text-white py-4 px-48 rounded-lg font-semibold hover:cursor-pointer">
              Continue
            </Button>
          </Link>

          <Typography align="center" className="mt-4">
            Already have an account ?{" "}
            <Link
              href={"/login"}
              className="text-[#207BFF] underline underline-offset-2"
            >
              {" "}
              Login
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default RoleChoosing;
