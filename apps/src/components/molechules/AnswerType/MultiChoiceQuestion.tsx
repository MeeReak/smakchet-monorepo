"use client";
import React, { useState } from "react";
import { Button, ButtonIcon, Typography } from "@/components/atoms";
import Image from "next/image";
interface MultiChoiceQuestionProp {
  onchange: (option: any) => void;
}
const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProp> = ({
  onchange,
}) => {
  const [options, setOptions] = useState([""]);

  const handleOptionChange = (index: any, value: any) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
    onchange(updatedOptions);
  };

  const handleAddOption = () => {
    const newOption = "";
    const updatedOptions = [...options, newOption];
    setOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    if (index >= 0 && index < options.length) {
      const updatedOptions = [...options];
      updatedOptions.splice(index, 1);
      setOptions(updatedOptions);
      onchange(updatedOptions);
      console.log(updatedOptions);
    }
  };

  console.log(options);

  return (
    <div className="md:w-[60%] w-full">
      {options.map((option, index) => (
        <div key={index} className="mb-2 flex">
          <input
            type="text"
            value={options[index]}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="w-full px-4 py-2 border-b border-dashed border-black focus:outline-none focus:border-blue-500"
          />
          <ButtonIcon
            onclick={() => handleRemoveOption(index)}
            icon={
              <Image src={"assets/icons/trash.svg"} width={36.5} height={37.5} alt="trash icon"/>
            }
          ></ButtonIcon>
        </div>
      ))}
      <Button
        type="button"
        onclick={handleAddOption}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Typography color="white">+ Add More Options</Typography>
      </Button>
    </div>
  );
};

export default MultiChoiceQuestion;
