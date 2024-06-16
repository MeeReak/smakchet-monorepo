"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, ButtonIcon, CardList, Typography } from "../../../components";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
//import {Map} from "/../../../components/molechules/Map"

const Page = () => {
    // default is about
    // you can change it to posts
  const [activeButton, setActiveButton] = useState<string>("about");
  const [userInfo , setUserInfo] = useState()

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
   
  };

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const getUserData = async () => {
    const response = await axios.get(`http://localhost:3000/v1/user/${userId}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  }


  useEffect(() => {
    const fetchData = async () =>{
      try{
        const data = await getUserData();
        setUserInfo(data);
      }catch(error){
        console.log("error : ", error);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("UserInfo : " , userInfo);

  return (
    <div className="xl:mx-[300px] lg:mx-[200px] md:mx-[100px] md:py-[167px] py-[100px] flex flex-col item-center align-middle">
      {/* Profile image */}
      <div className=" flex flex-col justify-center align-middle items-center gap-y-[17px] border-b-1 pb-[30px]">
        <Image
          src={"/assets/image/book_fair_logo.png"}
          alt={""}
          width={189}
          height={186}
        />
        <div className="flex flex-row items-center gap-x-2">
          <Typography fontWeight="semibold" className="md:!text-2xl !text-sm">
            Cambodia Book Fair
          </Typography>
          <ButtonIcon
            icon={
              <Image
                src={"/assets/icons/heart-bg.svg"}
                alt="heart"
                className="md:!w-[44px] md:!h-[44px] !w-[31px] !h-[31px]"
                width={44}
                height={44}
              />
            }
          />
        </div>
      </div>
      {/* posts and about */}
      <div className="flex flex-row justify-center gap-x-[40px]">
        <Button
          className={`p-3 rounded-none !border-t-[1px] border-x-0 border-b-0 ${
            activeButton === "posts" ? "border-blue-500" : "border-transparent"
          }`}
          rightIcon={
            <Image
              src={"/assets/icons/posts.svg"}
              alt={""}
              width={20}
              height={20}
            />
          }
          onclick={() => handleButtonClick("posts")}
        >
          Posts
        </Button>

        <Button
          className={`p-3 rounded-none !border-t-[1px] border-x-0 border-b-0 ${
            activeButton === "about" ? "border-blue-500" : "border-transparent"
          }`}
          rightIcon={
            <Image
              src={"/assets/icons/about.svg"}
              alt={""}
              width={20}
              height={20}
            />
          }
          onclick={() => handleButtonClick("about")}
        >
          About
        </Button>
      </div>

      <div>
        {activeButton === "posts" ? (
          <Typography>{userInfo}</Typography>
        ) : activeButton === "about" ? (
          <div className=" h-full md:mx-20 mx-[30px] md:mt-[50px] mt-5 flex flex-col gap-y-10">
            {/* about */}
            <Typography className="md:!text-2xl !text-sm">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure.
            </Typography>

            {/* contact */}
            <div className="flex flex-col md:gap-y-[35px] gap-y-[25px]">
              {/* link */}
              <div className="flex flex-row gap-x-7 align-middle">
                <Image
                  src={"assets/icons/link.svg"}
                  alt="link"
                  width={30}
                  height={30}
                />
                <Link href={"http://www.Cambodiabookfair.com"}>
                <Typography className="underline md:!text-2xl !text-sm">

                  http://www.Cambodiabookfair.com
                </Typography>
                </Link>
              </div>
              {/* phone number */}
              <div className="flex flex-row gap-x-7 align-middle">
                <Image
                  src={"assets/icons/phone-fill.svg"}
                  alt="phone"
                  width={30}
                  height={30}
                />
                <Typography className="md:!text-2xl !text-sm">

                016 484 406 / 067 791 524
                </Typography>
              </div>
              {/* gmail */}
              <div className="flex flex-row gap-x-7 align-middle">
                <Image
                  src={"assets/icons/gmail-icon.svg"}
                  alt="gmail"
                  width={30}
                  height={30}
                />
                <Typography className="md:!text-2xl !text-sm">

                volunteercbf@gmail.com
                </Typography>
              </div>
              {/* location */}
              <div className="flex flex-row gap-x-7 align-middle">
                <Image
                  src={"assets/icons/house.svg"}
                  alt="location"
                  width={30}
                  height={30}
                />
                <Typography className="md:!text-2xl !text-sm">

                Phnom Penh, Cambodia, 102st
                </Typography>
              </div>
            </div>

            {/* Map */}
            {/* <Map
              classname="w-full md:h-[433px] h-[263px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709280237207!5m2!1skm!2skh"
            /> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
