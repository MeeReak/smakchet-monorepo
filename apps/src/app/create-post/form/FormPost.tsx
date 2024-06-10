"use client";

import React, { useState } from "react";
import {
  QuestionForm,
  Typography,
  Button,
  InputData,
  StaticQuestion,
  ButtonIcon,
} from "@/components";
import Image from "next/image";

import { useNavigate } from "react-router-dom";

interface EventInfoData {
  id: string;
  name: string;
  imageSrc: string;
  category: string;
  detail: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

interface Question {
  id: string;
  type: string;
  question: string;
  answer: any;
}

interface FormData {
  info: EventInfoData;
  questions: Question[];
}

const FormPost = ({
  onNext,
  eventInfo,
}: {
  onNext: () => void;
  eventInfo: any;
}) => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: Math.random().toString(36).substring(2, 15),
      type: "",
      question: "",
      answer: "",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    info: {
      id: Math.random().toString(36).substring(2, 15),
      name: "",
      imageSrc: "",
      category: "",
      detail: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      age: "",
      language: "",
      skill: "",
      timeCommitment: "",
    },
    questions: [
      {
        id: Math.random().toString(36).substring(2, 15),
        type: "",
        question: "",
        answer: "",
      },
    ],
  });

  const handleQuestionChange = (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string,
    QAtype: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              type: QAtype,
              question: updatedQuestionText,
              answer: updatedAnswer,
            }
          : question
      )
    );
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: Math.random().toString(36).substring(2, 15),
        type: "",
        question: "",
        answer: "",
      }, // Add new question object
    ]);
  };

  const handleRemoveQuestion = (id: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setFormData({
      info: {
        ...eventInfo, // Update info data with eventInfo props
      },
      questions: [...questions], // Update questions array
    });
  };
  console.log(formData);
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1); // This will take you back to the previous page
    };

  return (
    <div className="h-full bg-[#FAFAFA] w-full ">
      <div className="md:py-[113px] md:px-[240px] py-[100px]">
        <Button
        onclick={handleBack}
          className="!border-none text-start w-fit"
          leftIcon={
            <Image
              src={"/assets/icons/back.svg"}
              alt={"go back icon"}
              width={19}
              height={10}
            />
          }
        >
          <Typography align="left" fontSize="h2" fontWeight="bold">
            Create Apply Form
          </Typography> 
        </Button>
        <form action={""} className="md:mt-[33px] mt-5  flex flex-col gap-y-[25px]">
          {/* Name, Email Phone number, address section */}
          <div className="md:py-[25px] p-5 md:px-[25px] bg-white rounded-[10px] ">
            {/* Name & Email section */}
            <div className="flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="name">
                  <Typography fontSize="h3">
                    Name <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id=""
                  name="name"
                  type={"text"}
                  placeholder="Name"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="email">
                  <Typography fontSize="h3">
                    Email <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id=""
                  name="email"
                  type={"email"}
                  placeholder="Email"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
            </div>

            {/* Phone number and address section */}
            <div className="pt-5 flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="phonenumber">
                  <Typography fontSize="h3">
                    Phone number <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id=""
                  name="phonenumber"
                  type={"text"}
                  placeholder="Phone number"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="address">
                  <Typography fontSize="h3">
                    Address <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id=""
                  name="address"
                  type={"text"}
                  placeholder="Address"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* 2nd question */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-[45px]">
            {/* Why */}
            <div className="flex flex-col w-full gap-y-5">
              
              <label htmlFor="name">
                <Typography fontSize="h3">
                  Why do you want to join Volunteer?{" "}
                </Typography>
              </label>
              <InputData
                id=""
                name="name"
                type={"text"}
                placeholder="Answer"
                className=" h-[50px] pl-6 border-1 border-gray-300"
              />
            </div>
            {/* Have u ever joined */}
            <div className="flex flex-col w-full gap-y-5">
              <label htmlFor="yes/no">
                <Typography fontSize="h3">
                  Have you ever joined volunteer before?
                </Typography>
              </label>
              <div className="flex gap-x-[11px]">
                <input
                  className=""
                  id="yes"
                  type="radio"
                  name="yes/no"
                  value={"yes"}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex gap-x-[11px]">
                <input type="radio" id="no" name="yes/no" value={"no"} />
                <label htmlFor="no">No</label>
              </div>
            </div>
            {/* benefit */}
            <div className="flex flex-col w-full gap-y-5">
              <label htmlFor="checkbox">
                <Typography fontSize="h3">
                  What are the benefits of Volunteer ?
                </Typography>
              </label>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox1" />
                <label htmlFor="checkbox1">Communication</label>
              </div>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox2" />
                <label htmlFor="checkbox2">Fun</label>
              </div>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox3" />
                <label htmlFor="checkbox3">Socialize</label>
              </div>
            </div>
          </div>

          {/* add more question */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-5">
            <Typography fontSize="h3">Add your Question</Typography>
            <div className="flex flex-col w-full gap-y-5">
              {questions.map((question) => (
                <div key={question.id}>
                  <QuestionForm
                    question={question}
                    removeQuestion={() => handleRemoveQuestion(question.id)}
                    onQuestionChange={(
                      updatedQuestionText,
                      updatedAnswer,
                      questionType
                    ) =>
                      handleQuestionChange(
                        updatedQuestionText,
                        updatedAnswer,
                        question.id,
                        questionType
                      )
                    }
                  />
                </div>
              ))}

              
              <button
                type="button"
                onClick={handleAddQuestion}
                className="border-none w-fit"
              >
                <Typography fontSize="h5" color="blue">
                  + Add more question
                </Typography>
              </button>
            </div>
          </div>
        </form>

        <div className="flex justify-end">
          <Button
            type="button"
            className="bg-[#207BFF] flex justify-center items-center w-[104px] h-[43px]"
            onclick={handleSubmit}
          >
            <Typography color="white">Publish</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
