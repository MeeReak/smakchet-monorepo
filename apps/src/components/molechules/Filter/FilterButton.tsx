"use client";
import React, { useState } from "react";
import { Button, InputData } from "@/components/atoms";
import Popup from "./Popup";
import FilterForm from "./FilterForm";
import { useRouter } from "next/navigation";

const FilterButton = () => {
  const [modalState, setModalState] = useState(false);
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleOnChange = (event: any) => {
    setName(event.target.value);
    router.push(`?name=${event.target.value}`);
  };

  return (
    <>
      <div className="flex justify-center space-x-3">
        <div className="relative max-[640px] flex justify-between">
          <InputData
            className="w-[350px] py-3 pl-5 rounded-[25px] border-gray-200 flex justify-between "
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
        <Button
          onclick={() => setModalState(true)}
          round="full"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 max-[640px]:w-4 max-[640px]:h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          }
          className="max-[640px]:text-xs px-6 py-3 border-[1px] text-black-900"
        >
          Filter
        </Button>
        <div>
          {modalState && (
            <Popup setModalState={setModalState}>
              {" "}
              <FilterForm />
            </Popup>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterButton;
