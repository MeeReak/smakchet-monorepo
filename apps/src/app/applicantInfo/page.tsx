import React from "react";
import Image from "next/image";
import { Button, Typography } from "@/components";
const page = () => {
  return (
    <div
      className="mt-[145px] lg:mx-[141px] pb-[100px]
    bg-[#F4FBFF] 
     rounded-[25px]"
    >
      {/* header section  */}
      <div className="pt-8 px-[71px] flex lg:flex-row flex-col justify-between align-top space-y-4">
        {/* Profile and Name */}
        <div className="flex space-x-[26px]  justify-center">
          {/* Image section */}
          <Image
            className="w-[70px] h-[70px] lg:w-[137px] lg:h-[137px]"
            src={"/assets/image/applicant_profile.png"}
            alt={"profile"}
            width={100}
            height={100}  
           
          />
          {/* Name and Email Section */}
          <div className="flex flex-col w-full">
            <Typography className="lg:text-4xl font">Peng Maleap</Typography>
            <Typography className="lg:text-2xl text-md" color="grey">
              pengmaleap@gmail.com
            </Typography>
          </div>
        </div>
        {/* Accept or Decline button */}
        <div className="flex h-12 space-x-[29px] justify-center">
        <Button
            bgColor="Success"
            colorScheme="White"
            round="full"
            className="px-6 lg:text-2xl text-lg"
          >
            Accept
          </Button>
          <Button
            bgColor="secondary"
            className="px-6 lg:text-2xl text-lg"
            colorScheme="White"
            round="full"
          >
            Decline
          </Button>
          
        </div>
      </div>

      {/* grid grid-cols-3 */}

      {/* Body Section */}
      <div className="
      flex lg:flex-row flex-col
      pt-16 divide-x divide-[#BBBBBB] ">
        {/* Left */}
        <div className="flex flex-col items-center px-[50px]">
          <Typography
            fontSize="h3"
            align="center"
            className="bg-[#D2E5FF] p-[10px] rounded-full item"
          >
            Personal Detail
          </Typography>

          <div className="mt-10 space-y-4">
            <div className="flex space-x-2">
              <Image
                src={"/assets/icons/profile-bold.svg"}
                width={30}
                height={30}
                alt=""
              />
              <Typography fontSize="h3">Peng Maleap</Typography>
            </div>
            <div className="flex space-x-2">
              <Image
                src={"/assets/icons/outline-email.svg"}
                width={30}
                height={30}
                alt=""
              />
              <Typography fontSize="h3">pengmaleap@gmail.com</Typography>
            </div>
            <div className="flex space-x-2">
              <Image
                src={"/assets/icons/baseline-phone.svg"}
                width={30}
                height={30}
                alt=""
              />

              <Typography fontSize="h3">067791524</Typography>
            </div>
            <div className="flex space-x-2">
              <Image
                src={"/assets/icons/outline-address.svg"}
                width={30}
                height={30}
                alt=""
              />

              <Typography fontSize="h3">Phnom Penh</Typography>
            </div>
          </div>
        </div>

        {/* col-span-2 */}
        {/* Right*/}
        <div className=" 
        flex flex-col items-start pl-[41px] pr-[114px] space-y-6">
          <div>
            <Typography fontSize="h3">
              Why do you apply this volunteer ?
            </Typography>
            <Typography fontSize="h3" align="justify">
              ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </div>
          <div>
            <Typography fontSize="h3">
              Why do you apply this volunteer ?
            </Typography>
            <Typography fontSize="h3" align="justify">
              ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </div>
          <div>
            <Typography fontSize="h3" align="justify">
              Why do you apply this volunteer ?
            </Typography>
            <Typography fontSize="h3">
              ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
