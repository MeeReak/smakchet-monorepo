"use client";
import React, { useState } from "react";
import { ButtonIcon, Typography } from "@/components/atoms";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface UserProfileDropdownProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setNotiOpen: (value: boolean) => void;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({
  isOpen,
  setIsOpen,
  setNotiOpen,
}) => {
  const isProfile = false;

  const handleLogout  = async () =>{
    try{
      const response = await axios.get(
        "http://localhost:3000/v1/auth/logout",
        {
          withCredentials: true,
        }
      );
      console.log("response : ", response.data);
      window.location.href = "/";
    }catch(error){
      if (axios.isAxiosError(error)) {
        // Handle axios errors (e.g., network errors or backend errors)
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error("Backend returned an error:", error.response.data);
        }
      } else {
        // Handle other potential errors (e.g., axios errors)
        console.error("Error:", error); // Log the entire error object
      }
    }
  }

  return (
    <div>
      {isProfile ? (
        <Image
          src={"/assets/image/host_profile.png"}
          width={50}
          height={50}
          alt="profile"
          className="ml-[10px] rounded-full"
          onClick={() => {
            setIsOpen(!isOpen);
            setNotiOpen(false);
          }}
        />
      ) : (
        <ButtonIcon
          onclick={() => {
            setIsOpen(!isOpen);
            setNotiOpen(false);
          }}
          className="ml-[10px] bg-gray-100 hover:bg-[#bdd8ff] text-white rounded-full p-2 sm:flex hidden"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6496 19.4054C20.2024 19.2902 20.5316 18.7117 20.2569 18.2183C19.6513 17.1307 18.6973 16.1749 17.4769 15.4465C15.9051 14.5085 13.9792 14 11.998 14C10.0168 14 8.09097 14.5085 6.51917 15.4465C5.29873 16.1749 4.34471 17.1307 3.73913 18.2183C3.46443 18.7117 3.79367 19.2902 4.34648 19.4054V19.4054C9.39329 20.4572 14.6027 20.4572 19.6496 19.4054V19.4054Z"
                fill="#207BFF"
              />
              <circle cx="12" cy="8" r="5" fill="#207BFF" />
            </svg>
          }
        />
      )}

      {isOpen && (
        <div className="relative">
          <div className="bg-white py-2 absolute w-[306px] flex flex-col right-0 mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] ">
            <Link href={"/user-profile"}>
              <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                My Profile
              </Typography>
            </Link>

            <Link href={"/contact-us"}>
              <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                Contact Us
              </Typography>
            </Link>

            <Link href={"/about-us"}>
              <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                About Us
              </Typography>
            </Link>

            <Link href={""} onClick={handleLogout}>
              <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                Log out
              </Typography>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserProfileDropdown };
