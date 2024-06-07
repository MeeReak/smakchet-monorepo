import { CategoryGroup } from "@/components/molechules";
import React from "react";
import { CardList } from "../cardList";

const FilteredCardDisplay = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  console.log(searchParams.cate);
  return (
    <>
      {/* Category of filter feature */}
      <CategoryGroup />

      {/* display cards */}
      <CardList cate={searchParams.cate ?? ""} />
    </>
  );
};

export default FilteredCardDisplay;
