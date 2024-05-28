"use client"

import React, { useState } from 'react'
import EventInfo from './event-info/EventInfo';
import FormPost from './form/FormPost';

const Page = () => {
    const [step, setStep] = useState(1);
    const [info, setInfo] = useState({});

  const handleNext = (eventInfo:any) => {
    setInfo(eventInfo); // Update event info state
    setStep(step + 1);
  };

  const renderForm = () => {
    
    switch (step) {
      case 1:
        return <EventInfo onNext={handleNext}/>
      case 2:
        return <FormPost eventInfo={info}  onNext={() => setStep((prevStep) => prevStep + 1)} />;
      default:
        return null;
    }
  };
  return (
    <div>
       {renderForm()}
    </div>
  )
}

export default Page
