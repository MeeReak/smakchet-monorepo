"use client"

import React, { useState, useEffect } from 'react';
import EventInfo from './event-info/EventInfo';
import FormPost from './form/FormPost';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState<any>({});
  const [eventdata, setEventdata] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/events/${eventId}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.data;

        // Normalize the data
        const normalizedData = {
          ...data,
          id: data._id,
          formSubmission: data.formSubmission.map((submission:any) => ({
            ...submission,
            id: submission._id,
          }))
        };

        setEventdata(normalizedData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]); // Add eventId to dependencies to refetch if it changes

  const handleNext = (eventInfo: any) => {
    setInfo(eventInfo); // Update event info state
    setStep(step + 1);
  };

  console.log("event data: ", eventdata);
  const renderForm = () => {
    if (loading) return <div className='w-screen h-screen flex justify-center items-center text-3xl'>Loading...</div>;
    if (error) return <div>{error}</div>;

    switch (step) {
      case 1:
        return <EventInfo eventData={eventdata} onUpdate={handleNext} />;
      case 2:
        return <FormPost eventInfo={info} onNext={() => setStep((prevStep) => prevStep + 1)} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default Page;
