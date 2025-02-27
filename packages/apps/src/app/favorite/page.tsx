import { ButtonIcon, FavPage, Typography } from "@/components";
import Hamburger_detail from "@/components/molecules/hamburger/Hamburger_detail";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import React from "react";

async function getFavoriteData({
  session,
  sigSession,
}: {
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const api = `${apiUrl}/v1/user/favorite`;
    const respone = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
          sigSession!.value
        }`,
        cache: "no-cache",
      },
    });
    return await respone.json();
  } catch (error: unknown) {
    console.error("Error in getFavoriteData", error);
  }
}

const Page = async () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");
  const favoriteData = await getFavoriteData({ session, sigSession });

  return (
    <>
      <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20 ">
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center">
            <ButtonIcon
              className="md:hidden block px-3 py-1 rounded-full bg-white ml-[5%] border border-gray-200"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#207BFF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              }
            />
            <Typography
              fontSize="h2"
              fontWeight="bold"
              className="pl-2 sm:pl-auto hidden md:block"
            >
              Favorite
            </Typography>
          </div>
          <div className="px-4 py-2 rounded-lg border-[1px] border-gray-200 text-center flex justify-center items-center ">
            <Typography fontSize="h3" color="blue">
              {favoriteData!.data.length} Events
            </Typography>
          </div>
        </div>
        <Hamburger_detail
          closeSidebar={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <FavPage data={favoriteData ? favoriteData!.data : []} />
      </div>
    </>
  );
};

export default Page;
