"use client";

import MyEventCard from "@/components/molechules/Card/MyEventCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

const MyEventCardList = () => {
  const [CardEvent, setCardEvent] = useState<any[]>([]);
  const [Loading , setLoading] = useState(true);

  const GetEventByOrgId = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/v1/events/myevent",
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);  // Add this line to log the API response
      return response.data;
    } catch (err: unknown | any) {
      if (err.response) {
        console.error("Server Error:", err.response.data);
        console.error("Status Code:", err.response.status);
        console.error("Headers:", err.response.headers);
      } else if (err.request) {
        console.error("No response received:", err.request);
      } else {
        console.error("Request setup Error:", err.message);
      }
      console.error("Error config:", err.config);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetEventByOrgId();
        setCardEvent(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if (Loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    ); // Render a loading state while data is being fetched
  }

  console.log("Card Event:", CardEvent);  // Add this line to log the state after fetching data

  return (
    <div className="space-y-4 py-5 pl-[17px] pr-[47px] flex flex-col">
      {CardEvent.length > 0 ? (
        CardEvent.map((item: any, index: number) => (
          <MyEventCard
            key={index}
            src={item.thumbnail}
            alt={item.eventName}
            title={item.eventName}
            date={item.Date}
            location={item.location}
            id={item._id}
          />
        ))
      ) : (
        <div className="h-screen flex justify-center items-center text-3xl">
          No Events Found !!!
        </div>
      )}
    </div>
  );
};

export default MyEventCardList;
