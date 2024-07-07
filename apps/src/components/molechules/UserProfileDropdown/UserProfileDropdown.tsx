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

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/v1/auth/logout", {
        withCredentials: true,
      });
      console.log("response : ", response.data);
      window.location.href = "/";
    } catch (error) {
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
  };

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
            <Link href={"/my-event"}>
              {isProfile && (
                <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                  My events
                </Typography>
              )}
            </Link>
            <Link href={"/applicantTable"}>
              {isProfile && (
                <Typography className="p-3 hover:bg-gray-100" fontSize="h4">
                  Dashboard
                </Typography>
              )}
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
              <div className="flex hover:bg-gray-100 ">
                <Typography className="p-3  text-[#e23636]" fontSize="h4">
                  Log out
                </Typography>
                <div className="mt-3 ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12L1.41435 11.5315L1.03953 12L1.41435 12.4685L2 12ZM11 12.75C11.4142 12.75 11.75 12.4142 11.75 12C11.75 11.5858 11.4142 11.25 11 11.25V12.75ZM5.41435 6.53148L1.41435 11.5315L2.58565 12.4685L6.58565 7.46852L5.41435 6.53148ZM1.41435 12.4685L5.41435 17.4685L6.58565 16.5315L2.58565 11.5315L1.41435 12.4685ZM2 12.75H11V11.25H2V12.75Z"
                      fill="#E23636"
                    />
                    <path
                      d="M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066"
                      stroke="#E23636"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserProfileDropdown };
