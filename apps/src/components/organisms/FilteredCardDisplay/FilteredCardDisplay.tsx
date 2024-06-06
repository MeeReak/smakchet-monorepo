"use client";

import { CategoryGroup } from "@/components/molechules";
import React, { useState } from "react";
import { CardList } from "../cardList";

const FilteredCardDisplay = () => {
  const [filtered, setFiltered] = useState<number>(0);

  const [cate, setCate] = useState<string>("All");


  // const getData = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/v1/events", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const result = await res.json();
  //     console.log(" result", result);
  //     setData(result); // Update state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
