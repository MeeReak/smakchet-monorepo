"use client";
import React, { useContext, useState } from "react";
import { Card, InputData, Typography } from "@/components";
import { MyContext } from "@/contexts/CardContext";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const { CardInfo } = useContext(MyContext);

  const handleOnChange = (event: any) => {
    setSearch(event.target.value);
  };
  const findCard = CardInfo.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="mt-[90px] xl:w-[1024px] w-screen m-auto space-y-5 z-10 ">
        <div className="flex justify-center space-x-3">
          <div className="relative max-[640px] flex justify-between">
            <InputData
              className="w-[350px] py-3 pl-5 rounded-[10px] border-gray-200 flex justify-between "
              onChange={(event: any) => handleOnChange(event)}
              placeholder={"Search"}
              type={"string"}
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-gray-500 w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <Typography
            className="mt-5 ml-5 sm:ml-auto"
            fontSize="h2"
            fontWeight="bold"
          >
            Search Result
          </Typography>
        </div>
        {findCard.length > 0 ? (
          <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {findCard.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  date={item.date}
                  location={item.location}
                  isFavorite={item.isFavorite}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full">
            <Typography
              align="center"
              fontSize="h2"
              fontWeight="semibold"
              color="grey"
            >
              No Event
            </Typography>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
