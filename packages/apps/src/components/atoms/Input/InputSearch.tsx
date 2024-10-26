"use client";

import React from "react";

export interface InputSearchProps{
  className?: string
  onChange?:(event:any)=>void
}

const InputSearch: React.FC<InputSearchProps> = (
  {className, onChange}
) => {
  return (
    <div className="relative xl:block max-[640px]:hidden flex justify-between">
      <input
        className={`placeholder-gray-500 border outline-none border-gray-200 h-[44px]  w-full pl-[20px] pr-[10px] py-[15px] rounded-full ${className}`}
        type="text"
        placeholder="Search"
        onChange={onChange}
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
  );
};

export { InputSearch };
