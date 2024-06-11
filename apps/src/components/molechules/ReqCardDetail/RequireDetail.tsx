import { ButtonIcon, Typography } from "@/components/atoms";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Popup from "../Filter/Popup";

interface RequireDetailProps {
  className?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  setIsvisible?: Dispatch<SetStateAction<boolean>>;
}

export const RequireDetail: React.FC<RequireDetailProps> = ({
    className,
    title,
    description,
    imageSrc="",
    setIsvisible
}) => {

  const handleClose = () => {
    if (setIsvisible) {
      setIsvisible(false);
    }
  };


  return (
    <div>
      <div className="w-[701px] h-[377px] bg-white rounded-lg shadow-sm space-x-5 border">
        {/* icon x */}
        <div>
          <ButtonIcon
            onclick={handleClose}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2 mt-[4px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
        {/* age */}
        <div>
          <Typography fontWeight="semibold" fontSize="h3">
            Requirement
          </Typography>
        </div>
        <div>
          <div className="flex mt-[15px] gap-2">
            <Image
              src={"/assets/icons/age-icon.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <Typography fontSize="h4">Minimum Age: 18 years</Typography>
          </div>
          <div className="mt-[5px]">
            <Typography fontSize="h5" color="grey">
              In order to join the program you need to be at least 18 years old
              on the program start date.
            </Typography>
          </div>
        </div>
        {/* language skill */}
        <div>
          <div className="flex mt-[20px] gap-2">
            <Image
              src={"/assets/icons/languages.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <Typography fontSize="h4">Language Skills</Typography>
          </div>
          <div className="mt-[5px]">
            <Typography fontSize="h5" color="grey">
              You need to speak English (basic level)
            </Typography>
          </div>
        </div>
        {/* other skill */}
        <div>
          <div className="flex mt-[20px] gap-2">
            <Image
              src={"/assets/icons/skill.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <Typography fontSize="h4">Other Skills</Typography>
          </div>
          <div className="mt-[5px]">
            <Typography fontSize="h5" color="grey">
              You need to be friendly and communication otherwise to provide
              customer and give them a happy moment
            </Typography>
          </div>
        </div>
        {/* time commitment */}
        <div>
          <div className="flex mt-[20px] gap-2">
            <Image
              src={"/assets/icons/timecommit.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <Typography fontSize="h4">Time Commitment</Typography>
          </div>
          <div className="mt-[5px]">
            <Typography fontSize="h5" color="grey">
              Your helping hand will be required on Monday, Tuesday from 07:00 -
              17:00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
