"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import { Button, Typography } from "@/components";
import Link from "next/link";

const roles: { [key: string]: string } = {
  "1": "Organizer",
  "2": "Volunteer",
};

const RoleRegister = () => {
  const [active, setActive] = useState<string>("");

  function handleClick(
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) {
    setActive(e.currentTarget.id);
  }

  return (
    <Suspense>
      <div className="h-screen bg-[#FAFAFA] ">
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
          <Typography
            fontSize="h2"
            fontWeight="semibold"
            className="pb-1 mt-14 text-gray-800"
          >
            Select Your Role
          </Typography>
          <Typography
            className="pb-5 text-gray-600"
            fontSize="h5"
            fontWeight="medium"
          >
            Which role do u want to register as?
          </Typography>
          {/* option */}
          <div className="flex flex-row gap-9 pb-9 mt-2">
            <button
              onClick={handleClick}
              id="1"
              className={`flex flex-col items-center gap-3 p-[20px] border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform duration-300 ease-in-out transform bg-white hover:scale-105 ${
                active == "1" ? "border-[#207BFF] border-[3px] " : ""
              }`}
            >
              {" "}
              <Image
                src={
                  "https://img.freepik.com/premium-photo/3d-cartoon-avatar-solid-color-background_1142458-2254.jpg?uid=R25760465&ga=GA1.1.328256508.1700589986&semt=ais_hybrid"
                }
                alt="smakchet-logo"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px] object-cover "
              />
              <div className="flex items-center flex-col">
                <Typography fontSize="h3" fontWeight="semibold">
                  Organizer
                </Typography>
                <Typography
                  fontSize="h5"
                  fontWeight="normal"
                  color="grey"
                  className="mt-2"
                >
                  Create and manage events
                </Typography>
              </div>
            </button>

            <button
              id="2"
              onClick={handleClick}
              className={`flex flex-col items-center gap-3 p-[20px] border rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform duration-300 ease-in-out transform bg-white hover:scale-105 ${
                active == "2" ? "border-[#207BFF] border-[3px] " : ""
              }`}
            >
              <Image
                src={
                  "https://img.freepik.com/premium-photo/doll-with-glasses-paper-bag-with-brown-bag-it_1308172-697378.jpg?uid=R25760465&ga=GA1.1.328256508.1700589986&semt=ais_hybrid"
                }
                alt="smakchet-logo"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px] object-cover  "
              />

              <div className="flex items-center flex-col px-1">
                <Typography fontSize="h3" fontWeight="semibold">
                  Volunteer
                </Typography>
                <Typography
                  fontSize="h5"
                  fontWeight="normal"
                  color="grey"
                  className="mt-2"
                >
                  Find events and volunteer
                </Typography>
              </div>
            </button>
          </div>

          <Link href={`/sign-up?role=${roles[active]}`}>
            <Button className="bg-[#207BFF] align-middle justify-center text-white py-4 px-48 rounded-lg  hover:cursor-pointer h-[50px]">
              Continue
            </Button>
          </Link>

          <Typography align="center" className="mt-4 mb-5" fontSize="h5">
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
    </Suspense>
  );
};

export default RoleRegister;
