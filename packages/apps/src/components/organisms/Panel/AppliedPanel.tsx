import { Button, Typography } from "@/components/atoms";
import Link from "next/link";
import React from "react";

const AppliedPanel = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Link href={"/applicantTable"}>
          <Button
            className="!border-none !outline-none"
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            }
          >
            <Typography fontSize="h3" fontWeight="medium">
              {data.userInfo.name}
            </Typography>
          </Button>
        </Link>

        {/* Decline & Accept button */}
        <div className="flex flex-row gap-x-4">
          {/* Decline button */}
          <Button
            size="h2"
            className="text-lg border-[0.4px] border-[#E0E0E0]  px-4 py-2 text-[#E23636] trasition ease-out duration-100 hover:bg-[#E23636] hover:text-white"
          >
            Reject
          </Button>
          {/* Accepted button */}
          <Button
            colorScheme="White"
            bgColor="primary"
            className="text-lg px-4 py-2 bg-opacity-80 !outline-none !border-none transition ease-out duration-300 hover:bg-[#0068FF]"
          >
            Accepted
          </Button>
        </div>
      </div>
    </>
  );
};

export default AppliedPanel;
