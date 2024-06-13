"use client";
import React, { FC, useEffect, useState } from "react";
import { Typography, Button, InputData } from "@/components";
import Image from "next/image";
import { validationSchema } from "@/utils/validationSchema";
import axios from "axios";

interface paramModel {
  eventDetail: string;
}

interface ApplyFormProps {
  onNext: (ApplyForm: ApplyFormData) => void;
  params: paramModel;
}

interface ApplyFormData {
  id?: string;
  name: string;
  email: string;
  address: string;
  phonenumber: string;
}

interface ResponseModel {
  label: string;
  answer: any;
}

const Page: FC<ApplyFormProps> = ({ onNext, params }) => {
  const [userInfo, setuserInfo] = useState<ApplyFormData>({
    name: "",
    email: "",
    address: "",
    phonenumber: "",
  });

  const [responses, setresponses] = useState<ResponseModel[]>([]);
  const [Questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>({});

  const getEventData = async () => {
    try {
      const id = params.eventDetail;
      const api = `http://localhost:3000/v1/events?page=1&limit=1&id=${id}`;
      const response = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      const result = await response.json();
      return result;
    } catch (error: unknown | any) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to be caught in the useEffect
    }
  };

  const handleChange = (e: any) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleResponseChange = (label: string, value: any) => {
    setresponses((prevResponses) => {
      const existingResponseIndex = prevResponses.findIndex(
        (response) => response.label === label
      );
      if (existingResponseIndex >= 0) {
        const updatedResponses = [...prevResponses];
        updatedResponses[existingResponseIndex] = { label, answer: value };
        return updatedResponses;
      } else {
        return [...prevResponses, { label, answer: value }];
      }
    });
  };

  const handleSubmit = () => {
    validationSchema
      .validate(userInfo, { abortEarly: false })
      .then(async (validData: any) => {
        console.log("Validation Success: ", validData);
        setErrors({});
        const responseAnswer = {
          eventId: params.eventDetail,
          userInfo,
          responses,
        };
        console.log("UserInfo: ", responseAnswer);
        //onNext(responseAnswer);
        const response = await axios.post(
          "http://localhost:3000/v1/application",
          responseAnswer,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response : " , response);

        window.location.href = `detail/${params.eventDetail}`;
    
      })
      .catch((err) => {
        console.error("Validation Error: ", err);
        if (err && err.inner) {
          const newErrors = err.inner.reduce((acc: any, error: any) => {
            acc[error.path] = error.message;
            return acc;
          }, {});
          setErrors(newErrors);
        }else if (err.response) {
          console.error("Server Error:", err.response.data);
          console.error("Status Code:", err.response.status);
          console.error("Headers:", err.response.headers);
        } else if (err.request) {
          console.error("No response received:", err.request);
        } else {
          console.error("Request setup Error:", err.message);
        }
        console.error("Error config:", err.config);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventData();
        const question = data[0].formSubmission;
        setQuestions(question);
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };
    fetchData();
  }, [params.eventDetail]);

  console.log("Questions: ", Questions);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    ); // Render a loading state while data is being fetched
  }
  return (
    <div className="h-full bg-[#FAFAFA] w-full">
      <div className="py-[133px] lg:mx-[180px]  flex flex-col h-full">
        <Button
          className="!border-none w-fit flex justify-start !text-2xl !font-semibold"
          leftIcon={
            <Image
              src={"/assets/icons/back.svg"}
              alt={"go back icon"}
              width={25}
              height={10}
            />
          }
        >
          <Typography
            fontSize="h2"
            fontWeight="semibold"
            className="flex justify-start"
          >
            Apply Form
          </Typography>
        </Button>

        <form action={""} className="mt-9 flex flex-col gap-y-[25px]">
          {/* Name, Email Phone number, address section */}
          <div className="py-[30px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-5">
            {/* Name & Email section */}
            <div className="flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              <div className="flex flex-col w-full lg:gap-y-5 gap-y-3">
                <label htmlFor="name">
                  <Typography className="lg:!text-xl !text-lg !font-normal">
                    Name <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="name"
                  onChange={handleChange}
                  name="name"
                  type={"text"}
                  placeholder="Name"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
                {errors.name && (
                  <Typography className="!text-base" color="red">
                    {errors.name}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col w-full lg:gap-y-5 gap-y-3">
                <label htmlFor="email">
                  <Typography className="lg:!text-xl !text-lg !font-normal">
                    Email <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="email"
                  onChange={handleChange}
                  name="email"
                  type={"email"}
                  placeholder="Email"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
                {errors.email && (
                  <Typography className="!text-base" color="red">
                    {errors.email}
                  </Typography>
                )}
              </div>
            </div>

            {/* Phone number and address section */}
            <div className="flex md:flex-row flex-col justify-between gap-x-[35px] gap-y-5">
              <div className="flex flex-col w-full lg:gap-y-5 gap-y-3">
                <label htmlFor="phonenumber">
                  <Typography className="lg:!text-xl !text-lg !font-normal">
                    Phone number <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="phnomnumber"
                  onChange={handleChange}
                  name="phonenumber"
                  type={"text"}
                  placeholder="Phone number"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
                {errors.phonenumber && (
                  <Typography className="!text-base" color="red">
                    {errors.phonenumber}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col w-full lg:gap-y-5 gap-y-3">
                <label htmlFor="address">
                  <Typography className="lg:!text-xl !text-lg !font-normal">
                    Address <span className="text-red-500">*</span>
                  </Typography>
                </label>
                <InputData
                  id="address"
                  onChange={handleChange}
                  name="address"
                  type={"text"}
                  placeholder="Address"
                  className=" h-[50px] pl-6 border-1 border-gray-300"
                />
                {errors.address && (
                  <Typography className="!text-base" color="red">
                    {errors.address}
                  </Typography>
                )}
              </div>
            </div>
          </div>

          {/* 2nd question */}
          <div className="py-[30px] px-[25px] bg-white rounded-[10px] flex flex-col gap-y-[45px]">
            {Questions.map((item: any, index: number) => {
              if (item.fieldType === "Writing Answer") {
                return (
                  <div
                    className="flex flex-col w-full lg:gap-y-5 gap-y-3"
                    key={index}
                  >
                    <label className="lg:!text-xl lg:!font-normal">
                      <Typography className="lg:!text-xl !text-lg !font-normal">
                        {item.label}
                      </Typography>
                    </label>
                    <InputData
                      id="answer"
                      name="answer"
                      onChange={(e) =>
                        handleResponseChange(item.label, e.target.value)
                      }
                      type={"text"}
                      placeholder="Answer"
                      className=" h-[50px] pl-6 border-1 border-gray-300"
                    />
                  </div>
                );
              } else if (item.fieldType === "Multi Choice") {
                return (
                  <div className="flex flex-col w-full gap-y-[18px]">
                    <label htmlFor="checkbox">
                      <Typography className="lg:!text-xl !text-lg !font-normal">
                        {item.label}
                      </Typography>
                    </label>
                    {item.answers.map((answer: string, index: number) => {
                      return (
                        <div className="flex flex-row gap-x-4" key={index}>
                          <input
                            type="checkbox"
                            name={item.label}
                            id={`${index}-${item.label}`}
                            onChange={(e) =>
                              handleResponseChange(
                                item.label,
                                e.target.checked
                                  ? [
                                      ...(responses.find(
                                        (res) => res.label === item.label
                                      )?.answer || []),
                                      answer,
                                    ]
                                  : responses.find(
                                      (res) => res.label === item.label
                                    )?.answer.filter(
                                      (ans: string) => ans !== answer
                                    ) || []
                              )
                            }
                          />
                          <label
                            htmlFor={`${index}-${item.label}`}
                            className="lg:text-base lg:font-normal"
                          >
                            {answer}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              } else if (item.fieldType === "Yes/No") {
                return (
                  <div className="flex flex-col w-full lg:gap-y-[18px] gap-y-3">
                    <label htmlFor="yes/no">
                      <Typography className="lg:!text-xl !text-lg !font-normal">
                        {item.label}
                      </Typography>
                    </label>
                    <div className="flex gap-x-[11px]">
                      <input
                        className="yes/no"
                        onCanPlay={handleChange}
                        id="yes"
                        type="radio"
                        name="yes/no"
                        value={"yes"}
                        onChange={() => handleResponseChange(item.label, "yes")}
                      />
                      <label
                        htmlFor="yes"
                        className="text-base lg:font-normal "
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex gap-x-[11px]">
                      <input
                        type="radio"
                        id="no"
                        name="yes/no"
                        value={"no"}
                        onChange={() => handleResponseChange(item.label, "no")}
                      />
                      <label
                        htmlFor="no"
                        className="lg:text-base lg:font-normal"
                      >
                        No
                      </label>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </form>

        <div className="flex justify-end mt-[34px]">
          <Button
            type="button"
            bgColor="primary"
            colorScheme="White"
            className="w-[102px] h-[43px] !justify-center rounded-[10px]"
            onclick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
