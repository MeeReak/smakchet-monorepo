import React from "react";
import { Typography, Button, ApplyTable } from "@/components";
import Image from "next/image";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function getAppliedData({
  session,
  sigSession,
}: {
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const api = `${apiUrl}/v1/application`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
          sigSession!.value
        }`,
      },
      cache: "no-cache",
    });
    return await response.json();
  } catch (error: unknown | any) {
    console.log("Error hz", error.message);
  }
}

const Page = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");
  const appliedData = await getAppliedData({ session, sigSession });

  return (
    <div className="bg-[#fafafa] w-full h-screen justify-center items-start flex mt-20">
      <div>
        {/* Header section */}
        <div className="flex py-6 items-center justify-between ">
          {/* Go back */}
          <Button
            className="!outline-none !border-none md:text-2xl md:font-normal"
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
            <Typography fontSize="h3">Applied</Typography>
          </Button>
          {/* number of Applied & Accepted */}
          <div className="flex flex-row justify-center items-center gap-x-[10px] ">
            <Button
              className=" justify-center items-center border px-4 py-2 border-gray-200 rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/people.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              {appliedData.data.length} Applied
            </Button>
            <Button
              className="items-center justify-center  border px-4 py-2 border-gray-200q rounded-[10px]"
              leftIcon={
                <Image
                  src={"assets/icons/check-inline.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              }
            >
              1 Accepted
            </Button>
          </div>
        </div>
        {/* Table of applied volunteer */}
        <ApplyTable data={appliedData.data} />
      </div>
    </div>
  );
};

export default Page;
