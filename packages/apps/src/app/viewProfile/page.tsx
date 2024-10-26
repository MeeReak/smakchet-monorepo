import React from "react";
import Image from "next/image";
import { ButtonIcon, Card, CategoryGroup, FilterButton, FilteredCardDisplay, PostAboutDisplay, PostAboutGroup, Typography } from "@/components";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-screen h-screen pt-[150px]">
      {/* Profile Image */}
      <div className=" flex flex-col items-center">
        <Image
          className=" mb-[13px]"
          src={"/assets/image/book_fair_logo.png"}
          width={189}
          height={189}
          alt={"Image logo"}
        />
        <div className="flex items-center">
          <Typography
            fontWeight="bold"
            fontSize="h2"
            className="mt-[13px] mr-[5px]"
          >
            {" "}
            Cambodia Book Fair
          </Typography>
          <ButtonIcon
            className="rounded-full bg-[#EEEEEE] ml-[5px]"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    {/* <FilteredCardDisplay /> */}
    <PostAboutDisplay/>
    {/* <FilteredCardDisplay/> */}

      {/* <div className="grid grid-cols-3 gap-x-[33px] gap-y-[49px] mx-[203px]">
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
            
          />
        </div>
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
          />
        </div>
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
          />
        </div>
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
          />
        </div>
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
          />
        </div>
        <div>
          <Card
            id={"2"}
            src={"/assets/image/cambodia_book_fair.png"}
            alt={"cambodia_book_fair"}
            title={"Cambodia Book Fair"}
            date={"Dec 12 2024"}
            location={"Phnom Penh"}
          />
        </div>


      </div> */}
    </div>
  );
};

export default page;
