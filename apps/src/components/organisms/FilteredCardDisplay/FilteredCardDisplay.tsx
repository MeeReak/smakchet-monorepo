import { CategoryGroup } from "@/components/molechules";
import React from "react";
import { CardList } from "../cardList";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const FilteredCardDisplay = ({
  searchParams,
  session,
  sigSession,
}: {
  searchParams: { [key: string]: string | undefined };
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) => {
  console.log(searchParams.cate);
  return (
    <>
      {/* Category of filter feature */}
      <CategoryGroup />

      {/* display cards */}
      <CardList
        session={session}
        sigSession={sigSession}
        cate={searchParams.cate ?? ""}
      />
    </>
  );
};

export default FilteredCardDisplay;
