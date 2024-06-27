"use client";
import React, { useState } from "react";
import { Typography, InputData, QuestionForm, Button } from "@/components"; // Adjust this import path based on your actual component structure
import Image from "next/image";
import axios from "axios";

// Define interfaces for types used in the component
interface DateModel {
  startDate: null | string;
  endDate: null | string;
  startTime: string;
  endTime: string;
}

interface RequirementModel {
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

interface Question {
  id: string;
  fieldType: string;
  label: string;
  answers: any;
}

interface EventInfoData {
  id?: string;
  eventName: string;
  thumbnail: string;
  category: string;
  description: string;
  Date: DateModel;
  location: string;
  address: any;
  requirement: RequirementModel;
  formSubmission: Question[];
}

// Define the FormPost component
const FormPost = ({ onNext, eventInfo }: { onNext: () => void; eventInfo: EventInfoData }) => {
  // State hooks to manage questions and form data
  const [questions, setQuestions] = useState<Question[]>(eventInfo.formSubmission);
  const [eventData, setEventData] = useState<EventInfoData>({ ...eventInfo, formSubmission: questions });

  // Function to handle changes to a question
  const handleQuestionChange = (
    updatedQuestionText: string,
    updatedAnswer: any,
    questionId: string,
    QAtype: string
  ) => {
    // Update the questions state based on the questionId
    const updatedQuestions = questions.map((question) =>
      question.id === questionId
        ? { ...question, fieldType: QAtype, label: updatedQuestionText, answers: updatedAnswer }
        : question
    );
    setQuestions(updatedQuestions);
    setEventData({ ...eventData, formSubmission: updatedQuestions });
  };

  // Function to add a new question
  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substring(2, 15),
      fieldType: "Writing Answer",
      label: "",
      answers: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Log all form data for debugging purposes
    console.log("Form Data:", eventData);

    // Simulate API call with Axios
    try {

      // const response = await axios.post("http://localhost:3000/v1/events", formData, {
      //   withCredentials: true,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      //console.log("Response:", response.data);
      //console.log(""formData)

      // Redirect or perform another action upon successful submission
      // window.location.href = "/"; // Uncomment and adjust as needed

      const formData = new FormData();

      formData.append("eventName", eventData.eventName);
      formData.append("thumbnail", eventData.thumbnail);
      formData.append("category", eventData.category);
      formData.append("description", eventData.description);
      // Append JSON serialized objects
      formData.append("Date", JSON.stringify(eventData.Date));
      formData.append("address", JSON.stringify(eventData.address));
      formData.append("requirement", JSON.stringify(eventData.requirement));

      // Append other simple fields
      formData.append("location", eventData.location);

      // // Log FormData entries for debugging
      // for (let pair of formData.entries()) {
      //   console.log(`${pair[0]}: ${pair[1]}`);
      // }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="h-full bg-[#FAFAFA] w-full">
      <div className="md:py-[113px] md:px-[240px] py-[100px]">
        {/* Header */}
        <Button
          className="!border-none text-start w-fit"
          leftIcon={<Image src={"/assets/icons/back.svg"} alt={"go back icon"} width={19} height={10} />}
        >
          <Typography align="left" fontSize="h2" fontWeight="bold">
            Create Apply Form
          </Typography>
        </Button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="md:mt-[33px] mt-5 flex flex-col gap-y-[25px]">
          {/* Name, Email, Phone number, Address section */}
          <div className="md:py-[25px] p-5 md:px-[25px] bg-white rounded-[10px]">
            {/* Name & Email section */}
            <div className="flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              {/* Name */}
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="name">
                  <Typography fontSize="h3">
                    Name <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="email">
                  <Typography fontSize="h3">
                    Email <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
            </div>

            {/* Phone number and Address section */}
            <div className="pt-5 flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              {/* Phone number */}
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="phonenumber">
                  <Typography fontSize="h3">
                    Phone number <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="phonenumber"
                  name="phonenumber"
                  type="text"
                  placeholder="Phone number"
                  className="h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col w-full md:gap-y-5 gap-y-1">
                <label htmlFor="address">
                  <Typography fontSize="h3">
                    Address <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="h-[50px] pl-6 border-1 border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Add Question Section */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-5">
            <Typography fontSize="h3">Add/Edit your Questions</Typography>
            <div className="flex flex-col w-full gap-y-5">
              {/* Render existing questions */}
              {questions.map((question) => (
                <QuestionForm
                  key={question.id}
                  question={question}
                  removeQuestion={() => {
                    const filteredQuestions = questions.filter((q) => q.id !== question.id);
                    setQuestions(filteredQuestions);
                    setEventData({ ...eventData, formSubmission: filteredQuestions });
                  }}
                  onQuestionChange={handleQuestionChange}
                />
              ))}

              {/* Button to add more questions */}
              <Button type="button" onclick={handleAddQuestion} className="border-none w-fit">
                <Typography fontSize="h5" color="blue">
                  + Add more question
                </Typography>
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#207BFF] flex justify-center items-center w-[104px] h-[43px]"
            >
              <Typography color="white">Publish</Typography>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPost;
