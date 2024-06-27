"use client";
import React, { useState, useEffect } from "react";
import { Dropdown, MultiChoiceQuestion, WritingQuestion, YesNoQuestion } from "@/components";
import { ButtonIcon, InputData } from "@/components/atoms";
import Image from "next/image";

interface QuestionFormProps {
  question: any;
  removeQuestion: () => void;
  onQuestionChange: (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string,
    QAtype: string
  ) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  onQuestionChange,
  question,
  removeQuestion,
}) => {
  const [QAType, setQAType] = useState(question.fieldType);

  useEffect(() => {
    setQAType(question.fieldType);
  }, [question.fieldType]);

  const handleAnswerChange = (updatedAnswer: any) => {
    onQuestionChange(question.label, updatedAnswer, question.id, QAType);
  };

  const handleSelectType = (selectedOption: string) => {
    setQAType(selectedOption);
    onQuestionChange(question.label, [], question.id, selectedOption);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(event.target.value, question.answers, question.id, QAType);
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex md:flex-row flex-col justify-between items-center gap-x-3">
        <InputData
          value={question.label}
          type="text"
          placeholder="Question"
          className="!md:w-[547px] h-[50px] w-full px-6 py-4 border-gray-300 lg:w-[900px] lg:py-2 border-b focus:outline-none focus:border-blue-500 bg-white"
          onChange={handleQuestionChange}
        />

        <Dropdown
          value={QAType}
          options={["Writing Answer", "Multi Choice", "Yes/No"]}
          classname="w-[30%] h-[50px] bg-white rounded-lg z-50"
          placeholder="Type of Answer"
          onChange={handleSelectType}
        />

        <ButtonIcon
          onclick={removeQuestion}
          icon={
            <Image
              src={"/assets/icons/trash.svg"}
              width={36.5}
              height={37.5}
              alt="trash icon"
            />
          }
        />
      </div>

      {QAType === "Writing Answer" ? (
        <WritingQuestion />
      ) : QAType === "Multi Choice" ? (
        <MultiChoiceQuestion onchange={(options) => handleAnswerChange(options)} initialOptions={question.answers}/>
      ) : QAType === "Yes/No" ? (
        <YesNoQuestion />
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuestionForm;
