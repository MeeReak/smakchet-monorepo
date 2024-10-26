import React, { useState, useEffect } from "react";
import { Typography } from "@/components/atoms";

interface CheckboxProps {
  className?: string;
  question: string;
  options: string[];
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  question,
  options,
}) => {
  // State to hold the checked status of each checkbox
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  // Effect to log selected options when checkedState changes
  useEffect(() => {
    const selectedOptions = options.filter(
      (option, index) => checkedState[index]
    );
    console.log("Selected options:", selectedOptions);
  }, [checkedState, options]);

  // Handler to manage checkbox changes
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="w-[1024px] bg-[#F8F8F8] rounded-[10px]">
      <div className="space-y-3 py-[28px]">
        <Typography className="pl-4" fontSize="h4">
          {question}
          <span className="text-[16px] text-red-500">*</span>
        </Typography>
        <div className="pl-4 flex flex-col mb-5 space-y-3">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
