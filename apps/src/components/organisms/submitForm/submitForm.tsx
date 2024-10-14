"use client";
import { Button, Typography } from "@/components/atoms";
import Question from "@/components/SubmitForm/Question";
import { YesNo } from "@/components/SubmitForm/YesNo";
import { validationSchema } from "@/utils/validationSchema";
import React, { useState } from "react";
import { Checkbox } from "@/components/SubmitForm/Checkbox";
import * as Yup from "yup";

export interface SubmitFormProps {
  name?: string;
  address?: string;
  email?: string;
  phonenumber?: string;
  reason?: string;
  joinbefore?: string;

  onchange: (
    name: string,
    address: string,
    email: string,
    phonenumber: string,
    reason: string,
    joinbefore: string
  ) => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  name,
  address,
  email,
  phonenumber,
  reason,
  joinbefore,
  onchange,
}) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
    reason: "",
    joinbefore: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
    reason: "",
    joinbefore: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      const updatedForm = {
        ...prevState,
        [name]: value,
      };
      console.log(form);
      // Move the onchange call inside the setState callback
      onchange(
        updatedForm.name,
        updatedForm.address,
        updatedForm.email,
        updatedForm.phonenumber,
        updatedForm.reason,
        updatedForm.joinbefore
      );
      return updatedForm;
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate form values
      await validationSchema.validate(form, { abortEarly: false });
      // Clear previous errors if any
      setErrors({
        name: "",
        address: "",
        email: "",
        phonenumber: "",
        reason: "",
        joinbefore: "",
      });

      // Since the form is valid, call the onchange function
      onchange(
        form.name,
        form.address,
        form.email,
        form.phonenumber,
        form.reason,
        form.joinbefore
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: Record<string, string> = {}; // Define the object with an index signature
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message; // Only assign if path is not undefined
          }
        });
        setErrors(newErrors); // Set validation errors
      }
    }
  };

  return (
    <div className="space-y-4  flex flex-col  px-3 lg:px-0 ">
      <div className="lg:w-[1024px] h-[160px] bg-[#F8F8F8] rounded-[10px]">
        <div className="lg:w-[1024px] h-[31px] bg-blue-600 rounded-t-lg"></div>
        {/* Apply Form header` */}
        <div className="mt-5 pl-5 space-y-4">
          <Typography fontWeight="bold" className=" !text-2xl lg:text-4xl">
            Apply Form
          </Typography>
          <Typography fontSize="h4" color="grey">
            Fill in this form so we can get your information
          </Typography>
        </div>
      </div>
      {/* Full name */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px] ">
          <Typography className="pl-4 text-base lg:text-xl">
            Full Name<span className="text-base text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            value={form.name}
            name="name"
            type="text"
            className={
              errors.name
                ? " lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : " lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.name && <p className="pl-5 text-[#EB5757]">{errors.name}</p>}
        </div>
      </div>

      {/* Address */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px]">
          <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
            Address<span className="lg:text-base text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="address"
            value={form.address}
            type="text"
            className={
              errors.address
                ? " lg:w-[900px] w-2/3  mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : " lg:w-[900px] w-2/3  mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] "
            }
            placeholder="Short Answer"
          />
          {errors.address && (
            <p className="pl-5 text-[#EB5757]">{errors.address}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px]">
          <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
            Email<span className="lg:lg:text-base text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="email"
            value={form.email}
            type="text"
            className={
              errors.email
                ? "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.email && (
            <p className="pl-5 text-[#EB5757]">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px]">
          <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
            Phone number<span className="lg:lg:text-base text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="phonenumber"
            value={form.phonenumber}
            type="text"
            className={
              errors.phonenumber
                ? "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.phonenumber && (
            <p className="pl-5 text-[#EB5757]">{errors.phonenumber}</p>
          )}
        </div>
      </div>

      {/* Reason */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px]">
          <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
            Why do you want to join Volunteer?
            <span className="lg:lg:text-base text-red-500">*</span>
          </Typography>
          <input
            type="text"
            className=" lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            placeholder="Short Answer"
          />
          {errors.phonenumber && (
            <p className="pl-5 text-[#EB5757]">{errors.reason}</p>
          )}
        </div>
      </div>

      {/* Join Before? */}
      <div className="w-full h-auto bg-[#F8F8F8] rounded-[10px] ">
        <div className="lg:space-y-3 space-y-2  py-[16px]">
          <Typography className="pl-4 text-base lg:text-xl" fontSize="h4">
            Have you joined volunteer before?
            <span className="lg:lg:text-base text-red-500">*</span>
          </Typography>
          <input
            onChange={(e) => handleOnChange(e)}
            name="joinbefore"
            value={form.joinbefore}
            type="text"
            className={
              errors.joinbefore
                ? "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8] text-red-700"
                : "lg:w-[900px] w-2/3 mx-4 lg:py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-[#F8F8F8]"
            }
            placeholder="Short Answer"
          />
          {errors.phonenumber && (
            <p className="pl-5 text-[#EB5757]">{errors.joinbefore}</p>
          )}
        </div>
      </div>

      {/* Submit Button  */}
      <div className="flex justify-end ">
        <Button
          className="bg-blue-600 w-[140px] h-[50px] rounded-2xl flex justify-center items-center text-white"
          onclick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export { SubmitForm };
