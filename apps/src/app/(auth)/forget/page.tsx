import React from "react";
import Image from "next/image";
import { InputData, Typography, Button } from "@/components";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* logo */}
      <div className="flex flex-col items-center mt-12">
        <Link href="/">
          <Image
            src={"assets/image/smakchet_logo.svg"}
            alt={"Smakchet logo"}
            width={172}
            height={32}
          />
        </Link>

        {/* Forget Password text */}
        <Typography
          align="center"
          fontSize="h3"
          fontWeight="bold"
          className="mt-16 mb-7"
        >
          Forget Your Password
        </Typography>

        {/* forget password form*/}
        <form>
          {/* label */}
          <label htmlFor="email">
            <Typography color="grey" fontSize="h4">
              Enter your email address
            </Typography>
          </label>

          {/* email input */}
          <InputData
            type="email"
            name="email"
            placeholder={"Email"}
            className={
              "w-[350px] border text-base border-gray-200 py-4 pl-5 mt-2 mb-2"
            }
          />
          <Typography align="right">
            <Link href={"../login"} className="text-blue-500 text-xs">
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
