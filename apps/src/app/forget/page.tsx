"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InputData, Typography, Button } from "@/components";
import Link from "next/link";
import schema from "@/utils/signUpSchema";

const page = () => {
  return (
    <div>
      {/* logo */}
      <div className="flex flex-col items-center mt-12">
        <Link href="/">
          <Image
            src={"assets/icons/smakchet-logo.svg"}
            alt={"Smakchet logo"}
            width={140}
            height={50}
          />
        </Link>

        {/* Forget Password text */}
        <Typography
          align="center"
          fontSize="h3"
          fontWeight="bold"
          className="mt-16 mb-6"
        >
          Forget Your Password
        </Typography>

        {/* forget password form*/}
        <form>
          {/* label */}
          <label htmlFor="email">
            <Typography color="grey">Enter your email address</Typography>
          </label>

          {/* email input */}
          <InputData
            type="email"
            name="email"
            placeholder={"Email"}
            className={"w-[350px] border text-base border-gray-200 py-4 pl-5 mt-4 mb-2"}
          />
             <Typography align="right">
            <Link href={"../login"} className="text-blue-500">
              Back to Login
            </Link>
          </Typography>
          <br />
          {/*  continue button */}
          <Button className="!bg-blue-500 w-full align-middle justify-center text-white py-4 rounded-[10px]  hover:cursor-pointer">
            Continue
          </Button>
       
        </form>
      </div>
    </div>
  );
};

export default page;
