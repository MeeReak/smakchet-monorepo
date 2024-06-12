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
import axios from "axios";

interface dateModel{
  startDate: null | String;
  endDate: null | String;
  startTime: string;
  endTime: string;
}
interface requirementModel{
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

interface Question{
  id:string;
  fieldType:string;
  label:string;
  answers:any;
}

interface EventInfoData {
  id?: string;
  eventName: string;
  thumbnail: string;
  category: string;
  description: string;
  Date:dateModel;
  location: string;
  address: any;
  requirement:requirementModel;
  formSubmission: Question[];
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
      fieldType: "",
      label: "",
      answers: "",
    },
  ]);

  const [formData, setFormData] = useState<any>({
      id: Math.random().toString(36).substring(2, 15),
      eventName: "",
      thumbnail: "",
      category: "",
      description: "",
      Date:{
        startDate: null,
        endDate: null,
        startTime: "",
        endTime: "",
      },
      location: "",
      address:"",
      requirement:{
        age: "",
        language: "",
        skill: "",
        timeCommitment: "",
      },
    //   formSubmission: [
    //   {
    //     id: Math.random().toString(36).substring(2, 15),
    //     fieldType: "",
    //     label: "",
    //     answers: "",
    //   },
    // ],
      formSubmission: []
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
              fieldType: QAtype,
              label: updatedQuestionText,
              answers: updatedAnswer,
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
        fieldType: "",
        label: "",
        answers: "",
      }, // Add new question object
    ]);
  };

  const handleRemoveQuestion = (id: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Function to strip custom ids from the data
    const stripCustomIds = (data: any) => {
      const { id, formSubmission, ...rest } = data;
      const cleanedFormSubmission = formSubmission?.map(({ id, ...otherProps }: any) => otherProps) || [];
      return { ...rest, formSubmission: cleanedFormSubmission };
    };
  
    try {
      // Prepare data by stripping custom ids
      const cleanedEventInfo = stripCustomIds(eventInfo);
      const cleanedQuestions = questions.map((question: any) => {
        const { id, ...otherProps } = question;
        return otherProps;
      });
  
      const preparedFormData = {
        ...cleanedEventInfo,
        formSubmission: cleanedQuestions,
      };
  
      console.log("preparedFormData:  ", preparedFormData);
  
      const response = await axios.post(
        "http://localhost:3000/v1/events",
        preparedFormData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("response in form post : ", response.data);
  
      window.location.href = "/";
    } catch (error: unknown | any) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup Error:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };
  
  
  console.log(formData);
    // const navigate = useNavigate();

    // const handleBack = () => {
    //   navigate(-1); // This will take you back to the previous page
    // };

  return (
    <div className="h-full bg-[#FAFAFA] w-full ">
      <div className="md:py-[113px] md:px-[240px] py-[100px]">
        <Button
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

          {/* add more question */}
          <div className="py-[25px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-5">
            <Typography fontSize="h3">Add your Question</Typography>
            <div className="flex flex-col w-full gap-y-5">
              {questions.map((question) => (
                <div key={question.id}>
                  <QuestionForm
                    question={question}
                    removeQuestion={() => handleRemoveQuestion(question?.id)}
                    onQuestionChange={(
                      updatedQuestionText,
                      updatedAnswer,
                      questionType
                    ) =>
                      handleQuestionChange(
                        updatedQuestionText,
                        updatedAnswer,
                        question?.id,
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
