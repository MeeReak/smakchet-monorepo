import React, { useState } from "react";
import { Typography } from "@/components/atoms";

interface QuestionProps {
  className?: string;
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question, className }) => {
  const [data, setData] = useState(""); // State to hold input data

  // Function to handle changes in the input field
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // Get the current value of the input field
    setData(value); // Update the state with the new value
  };
  console.log(data)

  // Combined className for styling
  const combinedClassName = `w-[900px] px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] ${className}`;

  return (
    <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
      <div className="space-y-3 py-[28px]">
        <Typography className="pl-4" fontSize="h4">
          {question}
          <span className="text-[16px] text-red-500">*</span>
        </Typography>
        <input
          onChange={handleOnChange} // Bind onChange event handler
          name="question"
          type="text"
          value={data} // Bind input value to state
          className={combinedClassName}
          placeholder="Short Answer"
        />
      </div>
    </div>
  );
};

export default Question;
