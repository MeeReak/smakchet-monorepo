"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, ButtonIcon, InputData, Typography } from "@/components";
import axios from "axios";

const Page = () => {
  const host = false;


 const [imageSrc, setImageSrc] = useState("/assets/image/leap.jpg");
 const fileInputRef = useRef(null);

 const handleFileUpload = (event:any) => {
   const file = event.target.files[0];
   if (file) {
     const imageUrl = URL.createObjectURL(file);
     setImageSrc(imageUrl);
   }
 };

 const handleClick = () => {
   fileInputRef.current!.click();
 };


  const [user, setUser] = useState({
    profile: "",
    profileFile: "",
    username: "",
    email: "",
    phonenumber: "",
    address: "",
    bio: "",
    aboutUser: "",
    link_facebook: "",
    link_location: "",
  });
  const [loading, setLoading] = useState(true);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  }

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setUser((prevUser) => ({
        ...prevUser,
        profileFile: selectedFile,
      }));
      console.log("picture:", selectedFile);
    }
  };

  const getUserProfile = async () => {
    const response = await axios.get("http://localhost:3000/v1/user", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data;
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();

    if (user.profileFile) {
      formData.append("profile", user.profileFile);
    }
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("phonenumber", user.phonenumber);
    formData.append("address", user.address);
    formData.append("bio", user.bio);
  
    console.log("formData:", formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    ); // Render a loading state while data is being fetched
  }

  console.log("user Info:", user);

  return (
    <>
      <div className="max-w-[1024px] mt-20 sm:mx-auto max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center  ">
        <div className="pl-8">
          <Typography
            fontSize="h3"
            fontWeight="semibold"
            className="pt-5 pb-8 "
          >
            Edit Profile
          </Typography>
          <div className="grid grid-cols-3">
            {/* Profile Picture */}
            <div className="relative w-[200px] h-[200px]">
              <Image
                className="object-cover w-[200px] h-[200px] rounded-[10px]"
                src={imageSrc}
                alt="profile"
                width={200}
                height={200}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />
              <div className="absolute bottom-0 right-0 -m-3">
                <ButtonIcon
                  className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white"
                  onclick={handleClick}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
            {/* Information User */}
            <div className="col-span-2 grid grid-cols-2 gap-x-[50px] gap-y-3 ">
              <div>
                <Typography
                  className="text-gray-500 pb-2"
                  fontSize="h4"
                  fontWeight="normal"
                >
                  {/* Name */}
                  Full Name
                </Typography>
                <InputData
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue="Peng Maleap"
                  placeholder={"Enter your fullname"}
                  className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                />
              </div>
              <div>
                {/* Email */}
                <Typography
                  className="text-gray-500 pb-2"
                  fontSize="h4"
                  fontWeight="normal"
                >
                  Email
                </Typography>
                <InputData
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue="pengmaleap456@gmail.com"
                  placeholder={"Enter yout email"}
                  className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                />
              </div>
              <div>
                {/* Phone Number */}
                <Typography
                  className="text-gray-500 pb-2"
                  fontSize="h4"
                  fontWeight="normal"
                >
                  Phone Number
                </Typography>
                <InputData
                  name="phone"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue="012 345 678"
                  placeholder={"Enter yout phone number"}
                  className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                />
              </div>
              <div>
                {/* Address */}
                <Typography
                  className="text-gray-500 pb-2"
                  fontSize="h4"
                  fontWeight="normal"
                >
                  Address
                </Typography>
                <InputData
                  name="address"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue="Phnom Penh"
                  placeholder={"Enter your address"}
                  className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                />
              </div>
              {host && (
                <div>
                  {/*Link Facebook */}
                  <Typography
                    className="text-gray-500 pb-2"
                    fontSize="h4"
                    fontWeight="normal"
                  >
                    Link Facebook page
                  </Typography>
                  <InputData
                    name="link_facebook"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    defaultValue="http://cambodiabookfair"
                    placeholder={"Enter your link facebook page"}
                    className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                  />
                </div>
              )}
              {host && (
                <div>
                  {/*Link location */}
                  <Typography
                    className="text-gray-500 pb-2"
                    fontSize="h4"
                    fontWeight="normal"
                  >
                    Link location
                  </Typography>
                  <InputData
                    name="link_location"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    defaultValue="http://googlemap"
                    placeholder={"Enter your location"}
                    className="py-4 pl-4 w-[300px] h-[50px] sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-normal"
                  />
                </div>
              )}
              <div className="col-span-2">
                {/* About user */}
                <Typography
                  className="text-gray-500 py-2"
                  fontSize="h4"
                  fontWeight="normal"
                >
                  About me
                </Typography>
                <textarea
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="aboutUser"
                  defaultValue="This is me"
                  className="outline-none p-4 resize-none border w-[99%] border-gray-200 bg-gray-100 rounded-lg font-normal"
                  cols={23}
                  rows={5}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-7">
          <Button
            onclick={() => {
              setUser({
                name: "",
                email: "",
                phone: "",
                address: "",
                aboutUser: "",
                link_facebook: "",
                link_location: "",
              });
            }}
            className="px-8 py-3"
            round="xl"
            colorScheme="primary"
          >
            Cancel
          </Button>
          <Button
            onclick={() => {
              handleUpdateProfile();
            }}
            className="px-10 py-3"
            round="xl"
            bgColor="primary"
            colorScheme="White"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
