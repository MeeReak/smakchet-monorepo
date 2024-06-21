import React from "react";
import { Trending, FilteredCardDisplay } from "@/components";
import { cookies } from "next/headers";

async function getTrendingData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const api = `${apiUrl}/v1/events/trending`;

  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    return await response.json();
  } catch (error) {
    throw new Error(
      "We’re experiencing some technical difficulties. Please check back soon."
    );
  }
}

const homepage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");
  const trendingData = await getTrendingData();
  console.log("=================================", trendingData);

  return (
    <>
      <div className="max-w-[1024px] m-auto space-y-4 z-10 pt-[80px] mb-20">
        <Trending
          className="flex gap-4 max-[640px]:overflow-hidden max-[640px]:overflow-x-auto mt-[25px]"
          topEvent={{
            thumbnail: trendingData[0].thumbnail,
            eventName: trendingData[0].eventName,
            Date: trendingData[0].Date.startDate,
            location: trendingData[0].location,
          }}
          secondEvent={{
            thumbnail: trendingData[1].thumbnail,
            eventName: trendingData[1].eventName,
            Date: trendingData[1].Date.startDate,
            location: trendingData[1].location,
          }}
        />

        <FilteredCardDisplay
          session={session}
          sigSession={sigSession}
          searchParams={searchParams}
        />
      </div>
    </>
  );
};

export default homepage;
