import React from "react";
import { CardList } from "../cardList";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { CategoryGroup } from "@/components/molecules";

const FilteredCardDisplay = ({
  searchParams,
  session,
  sigSession,
}: {
  searchParams: { [key: string]: string | undefined };
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) => {
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
