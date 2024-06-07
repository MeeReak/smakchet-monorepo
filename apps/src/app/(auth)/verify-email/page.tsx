"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [verificationStatus, setVerificationStatus] =
    useState<string>("verifying");

  const handleVerifyEmail = async () => {
    if (token) {
      setVerificationStatus("verifying");
      const status = await verifyEmailToken(token);
      console.log("status: ", status);
      if (status == "error") {
        setVerificationStatus(status);
      } else {
        setVerificationStatus("success");
        window.location.href = "/";
      }
    } else {
      setVerificationStatus("no-token");
    }
  };
  const verifyEmailToken = async (token: string) => {
    try {
      console.log("token : ", token);
      const response = await axios.get(
        `http://localhost:3000/v1/auth/verify?token=${token}`,
        { withCredentials: true }
      );
      return response.data.status;
    } catch (error) {
      console.error("Error verifying email:", error);
      return "error";
    }
  };

  useEffect(() => {
    handleVerifyEmail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen p-5 bg-gray-200 min-w-screen">
        <Image
          src={"assets/icons/smakchet-logo.svg"}
          alt={"Smakchet logo"}
          width={140}
          height={50}
          className="mt-7"
        />
        <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12 mt-3 ">
          <header>
            {verificationStatus === "verifying" ? (
              <>
                <h1 className="font-medium text-[24px]">Signing up...</h1>
              </>
            ) : verificationStatus === "success" ? (
              <>
                <h1 className="font-medium text-[24px]">
                  Sign up Successfully
                </h1>
              </>
            ) : (
              <>
                <h1 className="font-medium text-[24px] text-red-500">
                  Verify Error
                </h1>
              </>
            )}
          </header>

          {/* svg Image */}

          <div className="mt-7 flex justify-center">
            {verificationStatus === "verifying" ? (
              <>
                <Image
                  src={"assets/image/verify-pending.svg"}
                  alt={"Verify pending"}
                  width={140}
                  height={50}
                  className="xl:w-[273px] xl:h-[201px]"
                />
              </>
            ) : verificationStatus === "success" ? (
              <>
                <Image
                  src={"assets/image/verify-sucess.svg"}
                  alt={"Verify success"}
                  width={140}
                  height={50}
                  className="xl:w-[273px] xl:h-[201px]"
                />
              </>
            ) : (
              <>
                <Image
                  src={"assets/image/verify-fail.svg"}
                  alt={"Verify fail"}
                  width={140}
                  height={50}
                  className="xl:w-[273px] xl:h-[201px]"
                />
              </>
            )}
          </div>

          {/* text */}

          <div className="mt-7">
            {verificationStatus === "verifying" ? (
              <>
                <p className="">Please wait, We will redirect to our website</p>
                <div className="text-center mt-4">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </>
            ) : verificationStatus === "success" ? (
              <>
                <h1 className="font-medium text-[24px]">
                  Welcome To <span className="text-[#207BFF]">SmakChet!</span>
                </h1>
              </>
            ) : (
              <div className="flex flex-col justify-center">
                <h1 className="font-medium text-[24px]">
                  Please, sign up again
                </h1>
                <Link href="/role-selection" className="flex justify-center">
                  <Button className="bg-blue-500 h-[50px] my-6 w-[100px] align-middle justify-center text-white rounded-[10px]  hover:cursor-pointer">
                    Sign up
                  </Button>
                </Link>
                <p>
                  If you’re having a problem , Please message us directly
                  through this email :{" "}
                  <span className="text-blue-500">
                    <Link href="mailto:smakchet.info@gmail.com">
                      smakchet.info@gmail.com
                    </Link>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
