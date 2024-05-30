"use client";
import React, { useState } from "react";
import Image from "next/image";
interface DropdownProps {
  classname?: string;
  options: string[];
  onChange?: (value: string) => void; // Add the onChange prop
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  classname,
  options,
  onChange,
  placeholder,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);

  const toggling = () => {
    setisOpen(!isOpen);
  };

  const onOptionClicked = (value: any) => () => {
    setselectedOption(value);
    setisOpen(false);
    onChange?.(value);
  };

  return (
    <div className={`inline-flex ${classname}`}>
      <div className="w-full h-[50px] relative flex items-center justify-center align-middle pl-5 border border-gray-200 py-4 rounded-[10px] outline-none z-10">
        <a
          onClick={toggling}
          className={`w-[100%] rounded-l-md py-2 ${
            selectedOption ? "text-black" : "text-gray-400"
          }`}
        >
          {selectedOption || `${placeholder}`}
        </a>
        <Image src={"/assets/icons/dropdown.svg"} alt={""} width={16} height={16}/>
        <div className="relative">
          <button
            type="button"
            className="border-1 border-gray-100 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600 hover:text-gray-700"
          ></button>
        </div>
        {isOpen && (
          <div className="w-full absolute top-6 right-0 z-10 mt-4 min-w-min origin-top-right rounded-md border-gray-300 bg-white shadow-lg grid">
            {options.map((option, index) => (
              <button
                type="button"
                onClick={onOptionClicked(option)}
                key={index}
              >
                <div className="block rounded-lg px-4 py-4 text-sm text-gray-500 no-underline hover:bg-gray-100">
                  {option}
                </div>
              </button>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
