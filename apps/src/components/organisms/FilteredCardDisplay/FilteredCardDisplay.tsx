"use client";

import { CategoryGroup } from "@/components/molechules";
import React, { useState } from "react";
import { CardList } from "../cardList";

const FilteredCardDisplay = () => {
  
  const [filtered, setFiltered] = useState<number>(0);

  const [cate, setCate] = useState<string>("All");

  return (
    <>
      {/* Category of filter feature */}
      <CategoryGroup
        setFiltered={setFiltered}
        filtered={filtered}
        setCate={setCate}
      />

      {/* display cards */}
      <CardList cate={cate} />
    </>
  );
};

export default FilteredCardDisplay;
