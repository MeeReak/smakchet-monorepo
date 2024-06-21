"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, ButtonIcon, Card, CardList, Typography } from "../../../components";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";
//import {Map} from "/../../../components/molechules/Map"

const Page = () => {
    // default is about
    // you can change it to posts
  const [activeButton, setActiveButton] = useState<string>("about");
  const [hostInfo,setHostInfo] = useState<any>(null);
  const [events , setEvents] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [userInfo , setUserInfo] = useState<any>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
   
  };

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const gethostData = async () => {
    const response = await axios.get(`http://localhost:3000/v1/user/${userId}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  }

  const gethostEvents = async (id : string) =>{
    const response = await axios.get(`http://localhost:3000/v1/events/host/${id}`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  }

  const getUserInfo = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const api = `${apiUrl}/v1/user`;
    const response = await axios.get(api, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const hostData = await gethostData();
        const [userEvents, userInfo] = await Promise.all([
          gethostEvents(hostData._id),
          getUserInfo()
        ]);
        setHostInfo(hostData);
        setEvents(userEvents);
        setUserInfo(userInfo);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    ); // Render a loading state while data is being fetched
  }
  console.log("events : " ,events);
  console.log("host : " ,hostInfo);
  console.log("user : " ,userInfo);


  return (
    <div className="xl:mx-[300px] lg:mx-[200px] md:mx-[100px] md:py-[167px] py-[100px] flex flex-col item-center align-middle">
      {/* Profile image */}
      <div className=" flex flex-col justify-center align-middle items-center gap-y-[17px] border-b-1 pb-[30px]">
      {hostInfo?.profile && (
          <Image
            src={hostInfo.profile.startsWith('http') ? hostInfo.profile : `/${hostInfo.profile}`}
            alt={hostInfo.username}
            width={189}
            height={186}
          />
        )}
        <div className="flex flex-row items-center gap-x-2">
          {
            hostInfo?.username && (
              <Typography fontWeight="semibold" className="md:!text-2xl !text-sm">
                {hostInfo.username}
              </Typography>
            )
          }
        </div>
      </div>
      {/* posts and about */}
      <div className="flex flex-row justify-center gap-x-[40px]">
        <Button
          className={`p-3 rounded-none !border-t-[1px] border-x-0 border-b-0 ${
            activeButton === "posts" ? "border-blue-500" : "border-transparent"
          }`}
          rightIcon={
            <Image
              src={"/assets/icons/posts.svg"}
              alt={""}
              width={20}
              height={20}
            />
          }
          onclick={() => handleButtonClick("posts")}
        >
          Posts
        </Button>

        <Button
          className={`p-3 rounded-none !border-t-[1px] border-x-0 border-b-0 ${
            activeButton === "about" ? "border-blue-500" : "border-transparent"
          }`}
          rightIcon={
            <Image
              src={"/assets/icons/about.svg"}
              alt={""}
              width={20}
              height={20}
            />
          }
          onclick={() => handleButtonClick("about")}
        >
          About
        </Button>
      </div>

      <div>
        {activeButton === "posts" ? (
          <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {events.map((item: any, index: number) => (
            <Card
              key={index}
              _id={item._id}
              thumbnail={item.thumbnail}
              alt={item.thumbnail}
              eventName={item.eventName}
              Date={item.Date}
              location={item.location}
              isFavorite={userInfo?.favorites || []}
            />
          ))}
        </div>
  
        ) : activeButton === "about" ? (
          <div className=" h-full md:mx-20 mx-[30px] md:mt-[50px] mt-5 flex flex-col gap-y-10">
            {/* about */}
            {
              hostInfo?.bio && (
                <Typography className="md:!text-2xl !text-sm">
                  {hostInfo.bio}
                </Typography>
              )
            }

            {/* contact */}
            <div className="flex flex-col md:gap-y-[35px] gap-y-[25px]">
              {/* link */}
              <div className="flex flex-row gap-x-7 align-middle">
                <Image
                  src={"assets/icons/link.svg"}
                  alt="link"
                  width={30}
                  height={30}
                />
                <Link href={"http://www.Cambodiabookfair.com"}>
                <Typography className="underline md:!text-2xl !text-sm">

                  http://www.Cambodiabookfair.com
                </Typography>
                </Link>
              </div>
              {/* phone number */}
              {
                hostInfo?.phonenumber && (                
                  <div className="flex flex-row gap-x-7 align-middle">
                    <Image
                      src={"assets/icons/phone-fill.svg"}
                      alt="phone"
                      width={30}
                      height={30}
                    />
                    <Typography className="md:!text-2xl !text-sm">
                      {hostInfo.phonenumber}
                    </Typography>
                  </div>
                )
              }
              {/* gmail */}
              {
                hostInfo?.email && (
                  <div className="flex flex-row gap-x-7 align-middle">
                    <Image
                      src={"assets/icons/gmail-icon.svg"}
                      alt="gmail"
                      width={30}
                      height={30}
                    />
                    <Typography className="md:!text-2xl !text-sm">
                      {hostInfo.email}
                    </Typography>
                  </div>
                )
              }
              {/* location */}
              {
                hostInfo?.location && (
                  <div className="flex flex-row gap-x-7 align-middle">
                    <Image
                      src={"assets/icons/house.svg"}
                      alt="location"
                      width={30}
                      height={30}
                    />
                    <Typography className="md:!text-2xl !text-sm">
                      {hostInfo.location}
                    </Typography>
                  </div>
                )
              }
            </div>

            {/* Map */}
            {/* <Map
              classname="w-full md:h-[433px] h-[263px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709280237207!5m2!1skm!2skh"
            /> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
