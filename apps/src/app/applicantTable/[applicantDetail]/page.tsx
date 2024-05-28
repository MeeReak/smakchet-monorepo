"use client";

import { Button, ButtonIcon, Typography, Card, Map } from "@/components";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { MyContext } from "@/contexts/CardContext";
import ReqCards from "@/components/organisms/ReqCards/ReqCards";
import Image from "next/image";
import Link from "next/link";
import { ApplicantProps } from "@/@types/applicant";

const Applicant: React.FC<ApplicantProps> = ({
  id,
  date,
  gmail,
  name,
  profile,
  status,
}) => {
  const { CardUser, setAccept, setDecline } = useContext(MyContext);
  const route = useParams();
  // const applicantId = route.applicantDetail;
  const applicantId = Array.isArray(route.applicantDetail)
  ? route.applicantDetail[0]
  : route.applicantDetail;


  const Detailapplicant = CardUser.find((data) => data.id === applicantId);
  console.log("all", Detailapplicant);

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    setAccept(applicantId);
    console.log("user accept");
  };

  const handleDecline = (e: React.MouseEvent) => {
    e.preventDefault();
    setDecline(applicantId);
    console.log("user decline");
  };
  return (
    <div className="bg-[#FAFAFA]">
      {/* marign left and right */}
      <div className="flex flex-col gap-y-[53px] ml-[137px] mr-[170px] mt-[44px]">
        {/* header */}
        <div className="flex flex-row justify-between align-middle items-center">
          <div>
            <Button
              className="!border-none !outline-none"
              leftIcon={
                <Image
                  src={"../assets/icons/back.svg"}
                  width={25}
                  height={25}
                  alt={"back to table"}
                />
              }
            >
              <Typography fontSize="h3">
                <Link href={"../applicantTable"}>{Detailapplicant?.name}</Link>
              </Typography>
            </Button>
          </div>
          {/* Decline & Accept button */}
          <div className="flex flex-row gap-x-4">
            {/* Decline button */}
            <Button
              onclick={handleDecline}
              className="text-md border-[0.4px] border-[#E0E0E0]  px-[17px] py-[13px] text-[#E23636] trasition ease-out duration-1000 hover:bg-[#E23636] hover:text-white"
            >
              <Link href={"../applicantTable"}>Decline</Link>
            </Button>
            {/* Accepted button */}
            <Button
              colorScheme="White"
              className="text-md px-[17px] py-[13px] bg-[#207BFF] !outline-none !border-none transition ease-out duration-300 hover:bg-[#0068FF] hover:scale-x-110"
              onclick={handleAccept}
            >
              <Link href={"../applicantTable"}>Accepted</Link>
            </Button>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-row justify-between gap-x-[60.19px] ml-[29px]">
          {/* left part 
                - Profile
                - name
                - email
                - phone number
                - address 
          */}
          <div className="border border-[0.2] border-[#E0E0E0] bg-white rounded-[10px] w-[349px] h-fit">
            <div className="my-[30px] flex flex-col gap-y-5">
              <Image
                src={"/../assets/image/profile.png"}
                width={150}
                height={150}
                alt="image logo"
                className="self-center rounded-full"
              />
              <div className="flex flex-col mx-[22px] gap-y-5">
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/profile-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="profile-outline-blue"
                  />
                  <Typography>{Detailapplicant?.name}</Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/mail-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="profile-outline-blue"
                  />
                  <Typography>{Detailapplicant?.gmail}</Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/phone-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="phone-outline-blue"
                  />
                  <Typography>01234567</Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/address-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="address-outline-blue"
                  />
                  <Typography>Phnom Penh</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[0.2] border-[#E0E0E0] bg-white rounded-[10px] w-[694px] ">
            <div className="my-[30px] mx-[51px] flex flex-col gap-y-[49px]">
              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteere?</Typography>
                <Typography>
                  {" "}
                  ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </Typography>
              </div>

              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteere?</Typography>
                <Typography>
                  {" "}
                  ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </Typography>
              </div>

              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteere?</Typography>
                <Typography>
                  {" "}
                  ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </Typography>
              </div>

              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteere?</Typography>
                <Typography>
                  {" "}
                  ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </Typography>
              </div>

              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteere?</Typography>
                <Typography>
                  {" "}
                  ⇒ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
