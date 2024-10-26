// view-user-profile
"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
// import { CardUserContext } from "@/contexts/CardUserContext";
import { MyContext } from "@/contexts/CardContext";
import { Button, ButtonIcon, InputData, Typography } from "@/components";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  const { CardUser } = useContext(MyContext);
  const router = useRouter();
  const route = useParams();
  const userID = Array.isArray(route.userDetail)
    ? route.userDetail[0]
    : route.userDetail;

  const detail = CardUser.find((user) => user.id === userID);

  // useEffect(() => {
  //   if (detail) {
  //     setUser({
  //       name: detail.name,
  //       email: detail.gmail,
  //       phone: detail.phone,
  //       address: detail.address,
  //       about: detail.about,
  //     });
  //   }
  // }, [detail]);

  // const filteredUser = CardUser.filter((user) => user.id === "1");


  return (
    <div className="py-[80px] lg:py-[129px] xl:mx-[200px] lg:mx-[100px] md:mx-[80px]">
      {CardUser.filter((user)=>user.id === "1").map((user, index) => (
        <div key={index}>
          {/* Profile name and about section */}
          <div className="flex flex-row align-middle items-center justify-center lg:flex-row lg:gap-x-[43px] gap-x-[32px] border-b-1 border-[#D5D5D5] lg:px-[56px] lg:py-[26px] py-[30px] px-[30px]">
            {/* Image profile */}
            <Image
              className="rounded-[10px] object-cover lg:!w-[200px] lg:!h-[200px] !w-[90px] !h-[90px] drop-shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.15)]"
              src={user.profile}
              alt={""}
              width={200}
              height={200}
            />

            {/* name and about section*/}
            <div className="flex flex-col justify-center lg:gap-y-[30px] lg:mt-[30px] mt-3">
              {/* name section */}
              <div className="flex flex-row w-full items-center">
                <Typography className="lg:!text-[32px] md:!text-2xl !text-base !font-semibold">
                  {user.name}
                </Typography>

                {/* edit icon */}
                <ButtonIcon
                  icon={
                    <Image
                    className="lg:!w-[30px] lg:!h-[30px] !w-[22px] !h-[22px]"
                      src={"assets/icons/refresh.svg"}
                      alt=""
                      width={30}
                      height={30}
                    />
                  }
                
                />
              </div>
              <div>
                <Typography className="lg:!text-xl md:!text-lg !text-[10px]" align="center" color="grey">
                  {user.about}
                </Typography>
              </div>
            </div>
          </div>

          {/* general info */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[30px] lg:gap-x-[92px] lg:gap-y-12 mt-[30px] px-[60px] lg:px-0">
            {/* name */}
            <div className="flex flex-col lg:gap-y-4 gap-y-[10px]">
              <label htmlFor="name">
                Full Name<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <InputData
                  type="text"
                  className="lg:p-[18px] py-3 px-[10px] border-1 border-black border-opacity-50 w-full"
                  value={user.name}
                  readOnly
                />
                <Image
                  className="absolute top-1/2 -translate-y-1/2 right-3 lg:!w-[30px] lg:!h-[30px] !w-5 !h-5"
                  src={"../assets/icons/avatar-outline-black.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {/* address */}
            <div className="flex flex-col lg:gap-y-4 gap-y-[10px]">
              <label htmlFor="address">
                Address<span className="text-red-500">*</span>{" "}
              </label>
              <div className="relative">
                <InputData
                  type="text"
                  className="lg:p-[18px] py-3 px-[10px] border-1 border-black border-opacity-50 w-full"
                  value={user.address}
                  readOnly
                />
                <Image
                  className="absolute top-1/2 -translate-y-1/2 right-3 lg:!w-[30px] lg:!h-[30px] !w-5 !h-5"
                  src={"../assets/icons/address-outline-black.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col lg:gap-y-4 gap-y-[10px]">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>{" "}
              </label>
              <div className="relative">
                <InputData
                  type="email"
                  className="lg:p-[18px] py-3 px-[10px] border-1 border-black border-opacity-50 w-full"
                  value={user.gmail}
                  readOnly
                />
                <Image
                  className="absolute top-1/2 -translate-y-1/2 right-3 lg:!w-[30px] lg:!h-[30px] !w-5 !h-5"
                  src={"../assets/icons/mail-outline-black.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {/* phone */}
            <div className="flex flex-col lg:gap-y-4 gap-y-[10px]">
              <label htmlFor="phone">
                Phone Number<span className="text-red-500">*</span>{" "}
              </label>
              <div className="relative">
                <InputData
                  type="text"
                  className="lg:p-[18px] py-3 px-[10px] border-1 border-black border-opacity-50 w-full"
                  value={user.phone}
                  readOnly
                />
                <Image
                  className="absolute top-1/2 -translate-y-1/2 right-3 lg:!w-[30px] lg:!h-[30px] !w-5 !h-5"
                  src={"../assets/icons/phone-outline-black.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
