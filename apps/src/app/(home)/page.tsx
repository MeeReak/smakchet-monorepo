import React from "react";
import { Trending, FilteredCardDisplay } from "@/components";
import Image from "next/image";
import { cookies } from "next/headers";

async function getTrendingData() {
  const api = `http://localhost:3000/v1/events/trending`;
  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    return await response.json();
  } catch (error: unknown) {
    console.error("Error in getTrendingData", error);
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

  console.log("=================", trendingData);

  return (
    <>
      <div className="max-w-[1024px] m-auto space-y-4 z-10 pt-[80px] mb-20">
        <Trending
          className="flex gap-4 max-[640px]:overflow-hidden max-[640px]:overflow-x-auto mt-[25px] "
          topEvent={
            <Image
              src={trendingData[0].thumbnail}
              alt=""
              width={500}
              height={200}
              className="rounded-xl h-[250px] w-[500px] object-cover"
            />
          }
          secondEvent={
            <Image
              src={trendingData[1].thumbnail}
              alt=""
              width={500}
              height={200}
              className="rounded-xl h-[250px] w-[500px] object-cover"
            />
          }
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
