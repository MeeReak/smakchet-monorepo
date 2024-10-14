"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Importing framer-motion
import { TeamCard, Typography } from "@/components";

const Homepage = () => {
  return (
    <div className="bg-[#FAFAFA] w-full h-full">
      <div className="py-10 px-5 md:py-[126px] xl:px-[300px] lg:px-[200px] md:px-[100px]">
        {/* why smakchet */}
        <motion.div
          className="flex flex-col md:flex-row bg-white rounded-[10px] px-5 py-10 gap-y-5 md:gap-y-0 md:gap-x-[40px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={"/assets/image/why_smakchet.svg"}
            alt={"why_smakchet"}
            width={379}
            height={263}
            className="self-center md:self-start"
          />
          <div className="flex flex-col w-full justify-center items-center md:my-10">
            <Typography
              className="!text-xl md:!text-2xl font-semibold w-full"
              fontWeight="bold"
              align="center"
            >
              Why SmakChet?
            </Typography>
            <hr className="w-[75px] h-[3px] bg-[#207BFF] my-2"></hr>
            <Typography
              className="!text-base font-normal mt-[30px]"
              align="left"
            >
              SmakChet is a website that includes everything you need about
              volunteers. We process all your event details, date management,
              user roles, etc.
            </Typography>
          </div>
        </motion.div>

        {/* our vision our mission */}
        <motion.div
          className="mt-10 md:mt-[46px] mx-5 py-10 md:py-[25px] px-5 gap-y-10 gap-x-0 md:gap-x-24 hidden md:flex flex-col md:flex-row justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <Typography fontWeight="normal" className="!text-xl md:!text-2xl">
              Our Vision
            </Typography>
            <hr className="w-[62px] h-[2px] bg-[#207BFF] my-2"></hr>
            <Typography className="!text-base" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography fontWeight="normal" className="!text-xl md:!text-2xl">
              Our Mission
            </Typography>
            <hr className="w-[62px] h-[2px] bg-[#207BFF] my-2"></hr>
            <Typography className="!text-base" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </motion.div>

        {/* Our team */}
        <motion.div
          className="mt-10 md:mt-[61px] bg-white rounded-[10px] flex py-10 md:py-[25px] justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col align-middle items-center">
            <Typography
              className="!text-xl md:!text-2xl font-semibold w-full"
              fontWeight="bold"
              align="center"
            >
              Our Team
            </Typography>
            <hr className="w-[58px] h-[2px] bg-[#207BFF] my-2"></hr>
            <Typography
              align="center"
              className="!text-base md:mt-[28px] mt-[10px]"
            >
              Our SmakChet members are responsible for their own roles:
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between items-center gap-x-24 align-middle w-full gap-y-4">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Animate each card with delay
                    whileHover={{ scale: 1.05 }} // Hover scaling effect
                  >
                    <TeamCard />
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Our partner */}
        <motion.div
          className="bg-white flex flex-col justify-center items-center mt-10 md:mt-[66px] py-10 md:py-[25px] gap-y-5 md:gap-y-[47px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <Typography
              className="!text-xl md:!text-2xl font-semibold w-full"
              fontWeight="bold"
              align="center"
            >
              Partner
            </Typography>
            <hr className="w-[58px] h-[2px] bg-[#207BFF] my-2"></hr>
          </div>
          <Typography className="!text-base font-normal">
            It&apos;s an honor to participate with our partners
          </Typography>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 md:gap-14">
              <Link href={"https://sabaicode.com/"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/assets/image/sabaicode.svg"}
                    alt={"sabaicode"}
                    width={100}
                    height={100}
                    className="object-fill"
                  />
                </motion.div>
              </Link>
              <Link href={"https://chekromlek.com/"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/assets/image/weshare.png"}
                    alt={"weshare"}
                    width={100}
                    height={100}
                  />
                </motion.div>
              </Link>
              <Link href={"https://neakhatka.com/"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/assets/image/internship.svg"}
                    alt={"internship"}
                    width={100}
                    height={100}
                  />
                </motion.div>
              </Link>
              <Link href={"https://learnwithkru.com/"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={"/assets/image/kru.png"}
                    alt={"kru"}
                    width={100}
                    height={100}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
