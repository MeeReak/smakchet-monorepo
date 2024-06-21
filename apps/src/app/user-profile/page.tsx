"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, InputData, Typography } from "@/components";
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

//  const handleClick = () => {
//    fileInputRef.current!.click();
//  };


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
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await axios.get(`${apiUrl}/v1/user`, {
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
    if (user.username) {
      formData.append("username", user.username);
    }
    if (user.email) {
      formData.append("email", user.email);
    }
    if (user.phonenumber) {
      formData.append("phonenumber", user.phonenumber);
    }
    if (user.address) {
      formData.append("address", user.address);
    }
    if (user.bio) {
      formData.append("bio", user.bio);
    }
  
    // Log FormData contents using forEach
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
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
      <div className="max-w-[885px] mt-20 sm:mx-auto max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center">
          <Typography fontSize="h3" fontWeight="semibold" className="p-5">
            User Infomation
          </Typography>
          <div className="flex max-[640px]:flex-col max-[640px]:items-center sm:gap-x-5 sm:mx-5 lg:mx-0 lg:gap-x-14 ">
            {/* Profile Picture */}
            <div className="relative w-[200px] h-[200px]  ">
              <Image
                className="object-cover w-[200px] h-[200px] rounded-[10px]"
                src={`${user.profile}`}
                alt="logo"
                width={200}
                height={150}
              />

              <label className="p-3 absolute -bottom-2 -right-2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer rounded-full" htmlFor="fileInput">
                {/* <ButtonIcon
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
                /> */}
                <Image src={"/assets/icons/update_pic.svg"} alt={"update_pic"} width={18.75} height={18.75} className="">
                </Image>
              </label>
              <input
                  id="fileInput"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange} // Replace with your own handler function if needed
                />
            </div>
            {/* Information User */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Typography className="text-gray-500 pb-2" fontSize="h4">
                  {/* Name */}
                  Full Name
                </Typography>
                <InputData
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue={`${user.username}`}
                  placeholder={"Enter your fullname"}
                  className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
                />
              </div>
              <div>
                {/* Email */}
                <Typography className="text-gray-500 pb-2" fontSize="h4">
                  Email
                </Typography>
                <InputData
                  name="email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue={`${user.email}`}
                  placeholder={"Enter yout email"}
                  className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
                />
              </div>
              <div>
                {/* Phone Number */}
                <Typography className="text-gray-500 pb-2" fontSize="h4">
                  Phone Number
                </Typography>
                <InputData
                  name="phone"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue={user.phonenumber ? `${user.phonenumber}` : ""}
                  placeholder={"Enter your phone number"}
                  className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
                />
              </div>
              <div>
                {/* Address */}
                <Typography className="text-gray-500 pb-2" fontSize="h4">
                  Address
                </Typography>
                <InputData
                  name="address"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  defaultValue={user.address ? `${user.address}` : ""}
                  placeholder={"Enter your address"}
                  className="py-4 pl-4 w-full sm:pr-[10px] md:pr-[60px] lg:pr-[70px] border text-base border-gray-200 bg-gray-100 mb-2 font-semibold"
                />
              </div>
            </div>
          </div>
          <div className="sm:ml-5 sm:mr-5 lg:mx-0 ">
            {/* About user */}
            <Typography className="text-gray-500 py-2" fontSize="h4">
              About me
            </Typography>
            <textarea
              onChange={(e) => {
                handleChange(e);
              }}
              name="bio"
              defaultValue={user.bio ? `${user.bio}` : ""}
              className="outline-none p-4 resize-none border w-full border-gray-200 bg-gray-100 rounded-lg font-semibold"
              cols={23}
              rows={5}
            />
          </div>
          <div className="flex gap-3 justify-end mt-5">
            <Button
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
