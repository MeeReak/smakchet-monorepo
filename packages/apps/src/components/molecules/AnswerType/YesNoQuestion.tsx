"use client"
import React, { useState } from 'react'

const YesNoQuestion = () => {
    const [answer, setAnswer] = useState(""); // State to hold the selected answer

  const handleAnswerChange = (value:any) => {
    setAnswer(value);
  };

  console.log(answer);
  return (
    <div>
      <div className='flex flex-col gap-y-5'>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="yes"
            checked={answer === "yes"}
            onChange={() => handleAnswerChange("yes")}
            className=" h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="no"
            checked={answer === "no"}
            onChange={() => handleAnswerChange("no")}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  )
}

export default YesNoQuestion
