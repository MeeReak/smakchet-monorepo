"use client";

import React, { useRef, useState } from "react";
import { Button, ButtonIcon } from "@/components";

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
    "Music",
    "Art",
    "Food",
  ]);

  const [isActive, setIsActive] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, // adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, // adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1024px] m-auto flex items-center space-x-4 max-[1030px]:px-5">
      {isActive == true && (
        <ButtonIcon
          onclick={() => {
            scrollLeft();
            setIsActive(false);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 border-2 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          }
        />
      )}
      <div
        className="flex items-center overflow-x-auto hide-scrollbar"
        ref={containerRef}
      >
        <div className="flex items-center space-x-3">
          {type.map((item: string, index: number) => (
            <Button
              onclick={() => {
                setFiltered(index);
                setCate(item);
              }}
              round="full"
              size="h5"
              className={` border px-4 py-2 sm:text-base ${
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
      </div>
      {isActive == false && (
        <ButtonIcon
          onclick={() => {
            scrollRight();
            setIsActive(true);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 border-2 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        />
      )}
    </div>
  );
};
