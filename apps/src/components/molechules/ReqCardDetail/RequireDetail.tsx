import { Typography } from "@/components/atoms";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Requirement } from "@/@types/card";

export const RequireDetail = ({
  setIsvisible,
  requirement,
}: {
  setIsvisible: Dispatch<SetStateAction<boolean>>;
  requirement: Requirement;
}) => {
  const handleClose = () => {
    if (setIsvisible) {
      setIsvisible(false);
    }
  };

  return (
    <div>
      <div className="relative w-[600px] py-6 px-3 bg-white rounded-lg shadow-sm space-x-5 border">
        {/* icon x */}
        <svg
          onClick={handleClose}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute top-4 right-4 cursor-pointer"
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
        {/* age */}
        <div>
          <Typography fontWeight="semibold" fontSize="h3">
            Requirement
          </Typography>
        </div>
        <div>
          <div className="flex mt-6 gap-2">
            <Image
              src={"/assets/icons/age-icon.svg"}
              alt={""}
              width={24}
              height={24}
            />
            <Typography fontSize="h4">Minimum Age: 18 years</Typography>
          </div>
          <div className="mt-[5px]">
            <Typography fontSize="h4">
              {requirement.age}
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
            <Typography fontSize="h4" color="grey">
              {requirement.language}
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
            <Typography fontSize="h4" color="grey">
              {requirement.skill}
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
            <Typography fontSize="h4" color="grey">
              {requirement.timeCommitment}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
