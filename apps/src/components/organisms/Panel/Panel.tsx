"use client";
import { Button, ButtonIcon, Typography } from "@/components";
import axios from "axios";
// import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { useMemo, useState } from "react";

interface PanelProps {
  userData?: UserData; // Replace 'UserData' with the actual type of 'userData'
  data: EventData; // Replace 'EventData' with the actual type of 'data'
}

interface UserData {
  favorites: string[]; // Assuming 'favorites' is an array of IDs
  // Add other fields as per actual user data structure
}

interface EventData {
  _id: string;
  eventName: string;
  // Add other fields as per actual event data structure
}

const Panel: React.FC<PanelProps> = ({ userData, data }) => {
  const checkIsActive = useMemo(
    () => userData?.favorites.includes(data._id),
    [userData, data._id]
  );

  const [isActive, setIsActive] = useState<boolean | undefined>(checkIsActive);

  async function toggleFavorite({ id }: { id: string }) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const api = `${apiUrl}/v1/user/favorite/${id}`;
      const response = await axios.post(
        api,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsActive(!isActive);
      return response;
    } catch (error) {
      console.error("Error toggling favorite:", error);
      // Handle error state or logging as necessary
    }
  }


  return (
    <header className="pt-5 flex items-center px-[10px]">
      <div className="w-[60%]">
        <Typography fontSize="h3" fontWeight="bold">
          {data.eventName}
        </Typography>
      </div>
      <div className="w-[40%] flex justify-end gap-2">
        {/* Heart Button */}
        <ButtonIcon
          className="w-[50px] h-[50px] rounded-lg border bg-white hidden sm:flex"
          icon={
            <svg
              onClick={() => {
                toggleFavorite({ id: data._id });
              }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isActive ? "fill-red-500" : "stroke-gray-600"}
            >
              <path
                d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        {/* Apply Button */}
        <Link href={`/${data._id}/apply-form`}>
          <Button
            round="lg"
            colorScheme="White"
            bgColor="primary"
            className="justify-center py-3 px-6"
          >
            Apply
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Panel;
