"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import { ButtonIcon, InputData, Typography, Button } from "@/components";
import Link from "next/link";
import { SignUpProps } from "../../../@types/auth";
import signSchema from "@/utils/signUpSchema";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const SignUp = () => {
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
      const validationResult = await signSchema.validate(data, {
        abortEarly: false,
      });
      // console.log("Validation successful:", validationResult); // Log successful validation
      // Proceed with form submission logic (assuming validation passed)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await axios.post(`${apiUrl}/v1/auth/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      window.location.href = `/send-email?email=${data.email}`;
      //console.log("respone data:", response.data.verify_token);
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
              email: error.response?.data?.errors[0]?.message,
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
      <div className="flex flex-col items-center pt-[70px] mb-20">
        <Link href={"/"}>
          {" "}
          <Image
            src={"assets/image/smakchet_logo.svg"}
            alt={"Smakchet logo"}
            width={172}
            height={32}
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

        {/* signUp form */}
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
                ? "w-[350px] py-4 pl-4 border text-base !border-[#EB5757] mb-2 mt-4"
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
                ? "w-[350px] py-4 pl-4 border text-base !border-[#EB5757] mb-2 "
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
                ? "w-[350px] py-4 pl-4 border text-base !border-[#EB5757] mb-2"
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
          {/* signUp if don't have account */}
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
          {/* continue with facebook */}
          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px]  items-center border border-gray-200 rounded-[10px] mb-3 pl-2">
            <ButtonIcon
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 164 163"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M164 81.7994C164 36.6232 127.287 0 82 0C36.713 0 0 36.6232 0 81.7994C0 120.16 26.4762 152.35 62.1921 161.191V106.797H45.2837V81.7994H62.1921V71.028C62.1921 43.1868 74.8234 30.2821 102.224 30.2821C107.42 30.2821 116.384 31.2997 120.051 32.314V54.9725C118.116 54.7696 114.754 54.6682 110.579 54.6682C97.1339 54.6682 91.9384 59.7495 91.9384 72.9585V81.7994H118.723L114.121 106.797H91.9384V163C132.535 158.108 164 123.622 164 81.7994Z"
                    fill="#0966FF"
                  />
                </svg>
              }
            />
            <Typography align="center" fontSize="h4">
              Continues With Facebook
            </Typography>
          </div>
          {/* continue with google */}
          <div className="hover:cursor-pointer flex flex-row justify-left w-[350px] h-[50px] items-center border border-gray-200 rounded-[10px] pl-2">
            <ButtonIcon
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 294 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150 122.729V180.82H230.727C227.183 199.502 216.545 215.321 200.59 225.957L249.272 263.731C277.636 237.55 294 199.094 294 153.412C294 142.776 293.046 132.548 291.273 122.73L150 122.729Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M65.9342 178.553L54.9546 186.958L16.0898 217.23C40.7719 266.185 91.3596 300.004 149.996 300.004C190.496 300.004 224.45 286.64 249.269 263.731L200.587 225.958C187.223 234.958 170.177 240.413 149.996 240.413C110.996 240.413 77.8602 214.095 65.9955 178.639L65.9342 178.553Z"
                    fill="#34A853"
                  />
                  <path
                    d="M16.0899 82.7734C5.86309 102.955 0 125.728 0 150.001C0 174.273 5.86309 197.047 16.0899 217.228C16.0899 217.363 66.0004 178.5 66.0004 178.5C63.0004 169.5 61.2272 159.955 61.2272 149.999C61.2272 140.043 63.0004 130.498 66.0004 121.498L16.0899 82.7734Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M149.999 59.7279C172.091 59.7279 191.727 67.3642 207.409 82.0918L250.364 39.1373C224.318 14.8647 190.5 0 149.999 0C91.3627 0 40.7719 33.6821 16.0898 82.7738L65.9988 121.502C77.8619 86.0462 110.999 59.7279 149.999 59.7279Z"
                    fill="#EA4335"
                  />
                </svg>
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

const SignUpPage = () => {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
};

export default SignUpPage;
