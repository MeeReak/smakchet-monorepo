"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonIcon, InputData, Typography, Button } from "@/components";
import Link from "next/link";
import logInSchema from "@/utils/logInSchema";
import { LoginProps } from "@/@types/auth";
import axios from "axios";
import LoginPage from "./LoginPage";

const Page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Page;
