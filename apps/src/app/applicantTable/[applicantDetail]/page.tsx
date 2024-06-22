import { Button, Typography } from "@/components";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Applicant = () => {
  return (
    <div className="bg-[#FAFAFA] ">
      {/* marign left and right */}
      <div className="flex flex-col gap-y-[53px] ml-[137px] mr-[170px] py-[44px]">
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
              <Typography fontSize="h3" fontWeight="medium">
                <Link href={"../applicantTable"}>Hihd</Link>
              </Typography>
            </Button>
          </div>
          {/* Decline & Accept button */}
          <div className="flex flex-row gap-x-4">
            {/* Decline button */}
            <Button
              size="h2"
              className="text-lg border-[0.4px] border-[#E0E0E0]  px-[17px] py-[13px] text-[#E23636] trasition ease-out duration-100 hover:bg-[#E23636] hover:text-white"
            >
              Reject
            </Button>
            {/* Accepted button */}
            <Button
              colorScheme="White"
              bgColor="primary"
              className="text-lg px-[17px] py-[13px] bg-opacity-80 !outline-none !border-none transition ease-out duration-300 hover:bg-[#0068FF]"
            >
              Accepted
            </Button>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-row justify-between">
          {/* left part */}
          <div className="border border-[0.2] border-[#E0E0E0] bg-white rounded-[10px] w-[349.81px] h-fit sticky left-0 top-50">
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
                  <Typography className="md:text-base">
                   wertyuiop[]
                  </Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/mail-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="profile-outline-blue"
                  />
                  <Typography className="md:text-base">
                  dfghjkl;
                  </Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/phone-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="phone-outline-blue"
                  />
                  <Typography className="md:text-base">01234567</Typography>
                </div>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={"/../assets/icons/address-outline-blue.svg"}
                    width={16}
                    height={16}
                    alt="address-outline-blue"
                  />
                  <Typography className="md:text-base">Phnom Penh</Typography>
                </div>
              </div>
            </div>
          </div>
          {/* right part */}

          <div className="border border-[0.2] border-[#E0E0E0] bg-white rounded-[10px] w-[694px] !overflow-y-scroll scrollbar-default max-h-[80vh]">
            <div className="my-[30px] mx-[51px] flex flex-col gap-y-[49px]">
              <div className="flex flex-col gap-y-[13px]">
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
                <Typography>Why do you apply this volunteer?</Typography>
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
