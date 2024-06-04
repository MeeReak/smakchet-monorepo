"use client";
import React, { FC, FormEvent, useEffect, useState } from "react";
import {
  QuestionForm,
  Typography,
  Button,
  InputData,
  StaticQuestion,
  ButtonIcon,
} from "@/components";
import Image from "next/image";
import { validationSchema } from "@/utils/validationSchema";

interface ApplyFormProps {
  onNext: (ApplyForm: ApplyFormData) => void;
}

interface ApplyFormData {
  id?: string;
  name: string;
  email: string;
  address: string;
  phonenumber: string;
}
const Page: FC<ApplyFormProps> = ({ onNext }) => {
  const [info, setInfo] = useState<ApplyFormData>({
    id: Math.random().toString(36).substring(2, 15),
    name: "",
    email: "",
    address: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(info.address)
    validationSchema
      .validate(info, { abortEarly: false })
      .then((validData: any) => {
        console.log("Validation Success: ", validData);
        setErrors({});
        onNext(validData);
      })
      .catch((err) => {
        console.error("Validation Error: ", err);
        if (err && err.inner) { // Check if err and err.inner exist
          const newErrors = err.inner.reduce((acc: any, error: any) => {
            acc[error.path] = error.message;
            return acc;
          }, {});
          setErrors(newErrors);
        }
      });
  };

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
            <div className="flex flex-col w-full lg:gap-y-5 gap-y-3">
              <label className="lg:!text-xl lg:!font-normal">
                <Typography className="lg:!text-xl !text-lg !font-normal">
                  Why do you want to join Volunteer?
                </Typography>
              </label>
              <InputData
                id="answer"
                name="answer"
                onChange={handleChange}
                type={"text"}
                placeholder="Answer"
                className=" h-[50px] pl-6 border-1 border-gray-300"
              />
            </div>
            <div className="flex flex-col w-full lg:gap-y-[18px] gap-y-3">
              <label htmlFor="yes/no">
                <Typography className="lg:!text-xl !text-lg !font-normal">
                  Have you ever joined volunteer before?
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
                />
                <label htmlFor="yes" className="text-base lg:font-normal ">
                  Yes
                </label>
              </div>
              <div className="flex gap-x-[11px]">
                <input type="radio" id="no" name="yes/no" value={"no"} />
                <label htmlFor="no" className="lg:text-base lg:font-normal">
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-[18px]">
              <label htmlFor="checkbox">
                <Typography className="lg:!text-xl !text-lg !font-normal">
                  What are the benefits of Volunteer?
                </Typography>
              </label>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox1" />
                <label
                  htmlFor="checkbox1"
                  className="lg:text-base lg:font-normal"
                >
                  Communication
                </label>
              </div>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox2" />
                <label
                  htmlFor="checkbox2"
                  className="lg:text-base lg:font-normal"
                >
                  Fun
                </label>
              </div>
              <div className="flex flex-row gap-x-4">
                <input type="checkbox" name="options" id="checkbox3" />
                <label
                  htmlFor="checkbox3"
                  className="lg:text-base lg:font-normal"
                >
                  Socialize
                </label>
              </div>
            </div>
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
