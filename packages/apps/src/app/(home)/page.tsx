import React from "react";
import { Trending, FilteredCardDisplay } from "@/components";
import { cookies } from "next/headers";

const homepage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");

  return (
    <>
      <div className="max-w-[1024px] h-[100vh] m-auto space-y-4 z-10 pt-[80px] mb-20">
        <Trending />

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
