"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { ButtonIcon, InputData, Typography, Button } from "@/components";
import Link from "next/link";
import { SignUpProps } from "../../@types/auth";
//import { setLocalStorage } from "@/utils/localStorage";
import signUpschema from "@/utils/signUpSchema";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("role") || "";
  const [data, setData] = useState<SignUpProps>({
    username: "",
    email: "",
    password: "",
    role: searchValue,
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      // Perform Yup validation
      const validationResult = await signUpschema.validate(data, {
        abortEarly: false,
      });
      console.log("Validation successful:", validationResult); // Log successful validation
      // Proceed with form submission logic (assuming validation passed)

      const response = await axios.post(
        "http://localhost:3000/v1/auth/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Please Check Your Email to verify");
      // window.location.href = "/verify-email"
      // console.log("respone data:", response.data);
    } catch (error: any | unknown) {
      if (error) {
        // Check if error exists
        // Handle validation errors
        if (error.name === "ValidationError") {
          // Check for Yup validation error
          const fieldErrors: { [key: string]: string } = {};
          error.inner.forEach((err: any) => {
            fieldErrors[err.path] = err.message;
          });
          console.error("Validation Errors:", fieldErrors);
          setErrors((prev) => ({
            ...prev,
            ...fieldErrors,
          }));
        } else if (axios.isAxiosError(error)) {
          // Handle axios errors (e.g., network errors or backend errors)
          if (error.response) {
            // Server responded with a status other than 200 range
            console.error("Backend returned an error:", error.response.data);
            setErrors((prev) => ({
              ...prev,
                email : error.response?.data?.errors[0]?.message
            }));
          }
        } else {
          // Handle other potential errors (e.g., axios errors)
          console.error("Error:", error); // Log the entire error object
          // Display a generic error message to the user
          setErrors({ ...errors });
        }
      }
    }
  }

  return (
    <div>
      {/* logo */}
      <div className="flex flex-col items-center mt-12 mb-20">
        <Link href="/">
          <Image
            src={"assets/icons/smakchet-logo.svg"}
            alt={"Smakchet logo"}
            width={140}
            height={50}
          />
        </Link>

        {/* create account text */}
        <Typography
          align="center"
          fontWeight="bold"
          fontSize="h3"
          className="mt-10 mb-5"
        >
          Create Your Account
        </Typography>

        {/* signup form */}
        <form method="POST">
          {/* name */}
          <InputData
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            placeholder={"Username"}
            className={
              errors.username
                ? "w-[350px] py-4 pl-4 border-[2px] text-base !border-[#EB5757] mb-2 mt-4"
                : "w-[350px] py-4 pl-4 border text-base border-gray-200  mb-2 mt-4"
            }
          />
          {errors.username && (
            <p className="text-[#EB5757] ">{errors.username}</p>
          )}
          <br />
          {/* email input */}
          <InputData
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder={"Email"}
            className={
              errors.email
                ? "w-[350px] py-4 pl-4 border-[2px] text-base !border-[#EB5757] mb-2 "
                : "w-[350px] py-4 pl-4 border text-base  border-gray-200  mb-2"
            }
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <br />
          {/* password input */}
          <InputData
            onChange={(e) => {
              handleChange(e);
            }}
            name="password"
            type="password"
            placeholder={"Password"}
            className={
              errors.username
                ? "w-[350px] py-4 pl-4 border-[2px] text-base !border-[#EB5757] mb-2"
                : "w-[350px] py-4 pl-4 border text-base  border-gray-200  mb-2"
            }
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <br />
          {/*  continue button */}
          <Button
            type="submit"
            onclick={(e) => {
              handleSubmit(e);
            }}
            className="bg-blue-500 h-[60px] my-6 w-[350px] align-middle justify-center text-white rounded-[10px]  hover:cursor-pointer"
          >
            Continue
          </Button>
          {/* signup if don't have account */}
          <Typography align="center" fontSize="h4">
            Already have an account?
            <Link href={"/login"} className="text-blue-500">
              {" "}
              Login
            </Link>
          </Typography>
          {/* ----- or ----- */}
          <div className="inline-flex items-center justify-center w-[350px] my-5">
            <hr className="w-[350px] border-gray-200" />
            <span className="absolute px-3  -translate-x-1/2  left-1/2 bg-white">
              Or
            </span>
          </div>
          <br />
          {/* countinue with facebook */}
          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px]  items-center border border-gray-200 rounded-[10px] mb-3 pl-2">
            <ButtonIcon
              icon={
                <Image
                  src={"facebook.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                />
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Facebook
            </Typography>
          </div>
          {/* countinue with google */}
          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px] h-[50px] items-center border border-gray-200 rounded-[10px] pl-2">
            <ButtonIcon
              icon={
                <Image
                  src={"google.svg"}
                  alt={"google logo"}
                  width={24}
                  height={24}
                />
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Google
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
