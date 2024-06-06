import React from "react";
import Link from "next/link";
import { Typography, ButtonIcon } from "@/components";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 left-0 right-0 mx-auto flex flex-row items-center justify-between max-h-[20px] md:mx-[180px] bg-[#FAFAFA] py-6 border-t-1 border-opacity-40 border-gray-400">
        {/* left part */}
        <div className="flex flex-row justify-between items-center gap-x-4">
          <Link href={"/contact-us"}>
            <Typography
              fontSize="h4"
              fontWeight="normal"
              className="text-gray-700 "
            >
              Contact us
            </Typography>
          </Link>
          <Link href="/about-us">
            <Typography
              fontSize="h4"
              fontWeight="normal"
              className="text-gray-700 "
            >
              About us
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              fontSize="h4"
              fontWeight="normal"
              className="text-gray-700 "
            >
              Privacy
            </Typography>
          </Link>
        </div>
        {/* center part */}
        <div className="flex flex-row justify-center items-center">
          <Typography fontSize="h5" className="text-gray-700">
          Copyright © 2024 | By Smakchet
          </Typography>
        </div>
        {/* right part */}
        <div className="flex flex-row justify-center items-center max-w-[130px]">
          <ButtonIcon icon={
            <Image src={"/assets/icons/facebook_icon.svg"} width={24} height={24} alt="facebook icon"/>
          }/>
          <ButtonIcon icon={
            <Image src={"/assets/icons/telegram_icon.svg"} width={24} height={24} alt="telgram icon"/>
          }/>
          <ButtonIcon icon={
            <Image src={"/assets/icons/instagram_icon.svg"} width={24} height={24} alt="instagram icon"/>
          }/>
          <ButtonIcon icon={
            <Image src={"/assets/icons/linkedin_icon.svg"} width={24} height={24} alt="linkedin icon"/>
          }/>
        </div>
      </footer>
    </>
  );
};

export { Footer };
