"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, ButtonIcon, InputData, Typography } from "@/components";

const Page = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    aboutUser: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  }

  return (
    <>
      <div className="max-w-[885px] mt-20 sm:mx-auto max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center">
        <Typography fontSize="h3" fontWeight="semibold" className="p-5">
          User Infomation
        </Typography>
        <div className="flex max-[640px]:flex-col max-[640px]:items-center sm:gap-x-5 sm:mx-5 lg:mx-0 lg:gap-x-14 ">
          {/* Profile Picture */}
          <div className="relative w-[200px] h-[200px]  ">
            <Image
              className=" object-cover w-[200px] h-[200px] rounded-[10px]"
              src="/assets/image/leap.jpg"
              alt="logo"
              width={200}
              height={150}
            />
            <ButtonIcon
              className="absolute -bottom-2 -right-2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              }
            />
          </div>
          {/* Information User */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                {/* Name */}
                Full Name
              </Typography>
              <InputData
                name="name"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                defaultValue="Peng Maleap"
                placeholder={"Enter your fullname"}
                className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Email */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Email
              </Typography>
              <InputData
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                defaultValue="pengmaleap456@gmail.com"
                placeholder={"Enter yout email"}
                className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Phone Number */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Phone Number
              </Typography>
              <InputData
                name="phone"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                defaultValue="012 345 678"
                placeholder={"Enter yout phone number"}
                className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
            <div>
              {/* Address */}
              <Typography className="text-gray-500 pb-2" fontSize="h4">
                Address
              </Typography>
              <InputData
                name="address"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                defaultValue="Phnom Penh"
                placeholder={"Enter your address"}
                className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
              />
            </div>
          </div>
        </div>
        <div className="sm:ml-5 sm:mr-5 lg:mx-0 ">
          {/* About user */}
          <Typography className="text-gray-500 py-2" fontSize="h4">
            About me
          </Typography>
          <textarea
            onChange={(e) => {
              handleChange(e);
            }}
            name="aboutUser"
            defaultValue="This is me"
            className="outline-none p-4 resize-none border w-full border-gray-200 bg-gray-100 rounded-lg font-semibold"
            cols={23}
            rows={5}
          />
        </div>
        <div className="flex gap-3 justify-end mt-5">
          <Button
            onclick={() => {
              setUser({
                name: "",
                email: "",
                phone: "",
                address: "",
                aboutUser: "",
              });
            }}
            className="px-8 py-3"
            round="xl"
            colorScheme="primary"
          >
            Cancel
          </Button>
          <Button
            onclick={() => {
              console.log(user);
            }}
            className="px-10 py-3"
            round="xl"
            bgColor="primary"
            colorScheme="White"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
