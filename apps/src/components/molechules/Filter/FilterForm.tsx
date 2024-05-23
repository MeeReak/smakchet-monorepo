import React from "react";
import { Button, InputDate, Typography } from "@/components/atoms";

const FilterForm = () => {
  return (
    <div className="w-full">
      <div>
        <Typography className="text-base sm:text-lg md:text-xl" fontWeight="bold">
          Filter
        </Typography>
      </div>
      <form className="mt-3 sm:mt-4 md:mt-5">
        <div className="mb-3 ">
          <label htmlFor="date">
            <Typography fontSize="h5" fontWeight="semibold" className="mb-2 sm:text-base md:text-lg">
              Date
            </Typography>
          </label>
          <InputDate className="border-[1px] border-gray-200 w-[100%] p-3 rounded-lg outline-none text-xs sm:text-sm"></InputDate>
        </div>
        <div>
          <label htmlFor="location">
            <Typography fontSize="h5" fontWeight="semibold" className="mb-2 sm:text-base md:text-lg">
              Location
            </Typography>
          </label>
          <select
            name=""
            id="location"
            className="w-[100%] p-3 border border-gray-200 rounded-lg outline-none text-xs sm:text-sm"
          >
            <option className="text-[10px] sm:text-base" disabled>Select Location</option>
            <option className="text-[10px] sm:text-base" value="">Phnom Penh</option>
            <option className="text-[10px] sm:text-base" value="">Takeo</option>
            <option className="text-[10px] sm:text-base" value="">Siem Reap</option>
          </select>
        </div>
        <div className="w-[100%] mt-4">
          <Button
            colorScheme="primary"
            size="h5"
            className="rounded-lg m-auto px-4 py-2 font-semibold  border-gray-200 transition duration-300 ease-in-out transform hover:scale-105 sm:text-base"
          >
            Apply
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
