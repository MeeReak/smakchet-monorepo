"use client";

import React, { useState } from "react";
import { Button, FilterButton } from "@/components";

interface CategoryGroupProps {
  setFiltered: (index: number) => void;
  filtered: number;
  setCate: (Cate: string) => void;
}

export const CategoryGroup: React.FC<CategoryGroupProps> = ({
  setFiltered,
  filtered,
  setCate,
}) => {
  const [type, setType] = useState([
    "All",
    "Education",
    "Exhibition",
    "Workshop",
    "Environmental",
    "Charity",
    "Sport",
    "Technology",
  ]);

  return (
    <>
      <div className="max-[1030px]:px-5 flex items-center space-x-[15px] max-w-[1024px] m-auto">
        <div className=" flex items-center space-x-[15px] overflow-x-auto overflow-hidden scrollbar-hide">
          {type.map((item, index) => (
            <Button
              onclick={() => {
                setFiltered(index);
                setCate(item);
              }}
              round="full"
              className={`rounded-full border-[1px] px-6 py-3 max-[640px]:text-xs ${
                filtered === index
                  ? "bg-[#207bff] text-white"
                  : "hover:bg-[#bdd8ff] hover:text-[#207BFF] hover:border-[#207BFF]"
              } transition-all duration-150 ease-in-out`}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>

        <FilterButton />
      </div>
    </>
  );
};
