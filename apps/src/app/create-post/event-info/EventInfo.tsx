"use client";

import {
  FileInput,
  InputData,
  Typography,
  CustomTimePicker,
  Button,
  MapBox,
  InputDate,
} from "@/components";
import Dropdown from "@/components/molechules/Dropdown/Dropdown";
import TextEditor from "@/components/organisms/TextEdit";
import { eventValidationSchema } from "@/utils/eventValidationSchema";
import Link from "next/link";
import React, { useState } from "react";

interface EventInfoProps {
  onNext: (eventInfo: EventInfoData) => void;
}

interface EventInfoData {
  id?: string;
  name: string;
  imageSrc: string;
  category: string;
  detail: string;
  startDate: Date | null;
  endDate: Date | null;
  startTime: string;
  endTime: string;
  location: string;
  address: any;
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ onNext }) => {
  const options = ["education", "workshop", "sport", "charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const [isEnddateValidate, setisEnddateValidate] = useState(true);

  const [info, setInfo] = useState<EventInfoData>({
    id: Math.random().toString(36).substring(2, 15),
    name: "",
    imageSrc: "",
    category: "",
    detail: "",
    startDate: null,
    endDate: null,
    startTime: "",
    endTime: "",
    location: "",
    address: "",
    age: "",
    language: "",
    skill: "",
    timeCommitment: "",
  });

  const [errors, setErrors] = useState<any>({});

  function handleChange(e: any) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const start = new Date(info.startDate!);
    const end = new Date(info.endDate!);
    console.log(info.detail);
    // Check date validity
    if (end < start) {
      setisEnddateValidate(false); // Reflect invalid end date
      console.error("End date is before start date.");
      return; // Prevent further execution
    } else {
      setisEnddateValidate(true); // Reset date validation state if valid
    }

    // Validate the form using Yup schema
    eventValidationSchema
      .validate(info, { abortEarly: false })
      .then((validData: any) => {
        console.log("Validation successful:", validData);
        setErrors({}); // Clear any previous errors
        onNext(validData); // Only proceed if valid, with validData
      })
      .catch((err) => {
        // Log the error
        console.error("Validation errors:", err);
        // Reduce the array of validation errors into a single errors object
        const newErrors = err.inner.reduce((acc: any, error: any) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(newErrors); // Update state to reflect new errors
      });
  }

  const handleSelectCategory = (selectedOption: string) => {
    setInfo({ ...info, category: selectedOption });
  };

  const handleSelectlocation = (selectedOption: string) => {
    setInfo({ ...info, location: selectedOption });
  };

  const handleFileUpload = (files: FileList) => {
    // Handle the uploaded files here
    setInfo({ ...info, imageSrc: files[0].name });
  };

  const handleTimeSelect = (time: string) => {
    setInfo({ ...info, startTime: time });
  };

  const handleStartDate = (dateString: string | null) => {
    if (dateString) {
      const parsedDate = new Date(dateString); // Parse the string to Date object
      setInfo({ ...info, startDate: parsedDate });
    } else {
      setInfo({ ...info, startDate: null }); // Set to null for cleared date
    }
  };

  const handleEndDate = (dateString: string | null) => {
    if (dateString) {
      const parsedDate = new Date(dateString); // Parse the string to Date object
      setInfo({ ...info, endDate: parsedDate });
    } else {
      setInfo({ ...info, endDate: null }); // Set to null for cleared date
    }
  };

  const handleSelectEndTime = (time: string) => {
    setInfo({ ...info, endTime: time });
  };

  const handleChangeContent = (content: string) => {
    setInfo({ ...info, detail: content });
  };

  const handleAddress = (markers: any) => {
    setInfo({ ...info, address: markers });
  };

  return (
    <div className="lg:w-[855px] m-auto space-y-5 z-10 mt-20 w-screen mb-20">
      <Typography fontWeight="bold" fontSize="h3" className="max-[1030px]:ml-3">
        Event’s Detail
      </Typography>
      <div className="container mx-auto mt-8">
        <FileInput onChange={handleFileUpload} />
      </div>
      {errors.imageSrc && (
        <p className="text-red-500 mb-2 pl-8">{errors.imageSrc}</p>
      )}
      <div>
        <form onSubmit={handleSubmit} className="max-[1030px]:mx-5">
          <label htmlFor="eventname">
            <Typography fontWeight="medium" fontSize="h4">
              Event Name
            </Typography>
          </label>
          <InputData
            id="eventname"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Event Name"
            className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
          />
          {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

          <label htmlFor="category">
            <Typography fontWeight="medium" fontSize="h4">
              Category
            </Typography>
          </label>
          <Dropdown
            classname="mt-3 mb-3 w-full"
            options={options}
            onChange={handleSelectCategory}
            placeholder={"Select Event's category"}
          />
          {errors.category && (
            <p className="text-red-500 mb-2">{errors.category}</p>
          )}
          <label htmlFor="detail">
            <Typography fontWeight="semibold" fontSize="h4">
              Detail
            </Typography>
          </label>
          <TextEditor onchange={handleChangeContent} />
          {errors.detail && (
            <p className="text-red-500 mb-3">{errors.detail}</p>
          )}

          <Typography fontWeight="bold" fontSize="h2">
            Datetime and Location
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="md:w-[50%]">
              <Typography fontWeight="semibold" fontSize="h4">
                Start Date
              </Typography>
              <InputDate
                className="border border-gray-200 w-[98%] mt-3 mb-3 p-4 rounded-lg outline-none text-xs text-gray-400 sm:text-base"
                onchange={handleStartDate}
              />
              {errors.startDate && (
                <p className="text-red-500 mb-2">{errors.startDate}</p>
              )}
            </div>
            <div className="md:w-[50%]">
              <Typography fontWeight="semibold" fontSize="h4">
                End Date
              </Typography>
              <InputDate
                className={`border-2 w-[98%] mt-3 mb-3 p-4 rounded-lg outline-none text-xs text-gray-400 sm:text-base ${
                  isEnddateValidate ? "border-gray-200" : "border-red-500"
                }`}
                onchange={handleEndDate}
              />
              {errors.endDate && (
                <p className="text-red-500 mb-2">{errors.endDate}</p>
              )}
              {!isEnddateValidate && (
                <p className="text-red-500 text-xs sm:text-sm">
                  Please check the dates: The end date cannot be earlier than
                  the start date.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="md:w-[50%]">
              <Typography fontWeight="semibold" fontSize="h4">
                Start Time
              </Typography>
              <CustomTimePicker
                onSelectTime={handleTimeSelect}
                classname="w-[98%] mt-3 mb-3 border text-gray-400 border-gray-200 py-4 pl-5"
              />
              {errors.startTime && (
                <p className="text-red-500 mb-2 ">{errors.startTime}</p>
              )}
            </div>
            <div className="md:w-[50%]">
              <Typography fontWeight="semibold" fontSize="h4">
                End Time
              </Typography>
              <CustomTimePicker
                onSelectTime={handleSelectEndTime}
                classname="w-[98%] mt-3 mb-3 border text-gray-400 border-gray-200 py-4 pl-5"
              />
              {errors.endTime && (
                <p className="text-red-500 mb-2">{errors.endTime}</p>
              )}
            </div>
          </div>
          <label htmlFor="location">
            <Typography fontWeight="semibold" fontSize="h4">
              Location
            </Typography>
          </label>

          <Dropdown
            classname="mt-3 mb-3 w-full"
            options={locations}
            onChange={handleSelectlocation}
            placeholder={"Select Event's Location"}
          />
          {errors.location && (
            <p className="text-red-500 mb-2">{errors.location}</p>
          )}

          {/* Address of event */}

          <Typography fontWeight="bold" fontSize="h3" className="mt-5 mb-5">
            Address
          </Typography>

          <MapBox onchange={handleAddress} />

          {/* Requirements */}

          <Typography fontWeight="bold" fontSize="h3" className="mt-5 mb-5">
            Requirements
          </Typography>
          <label htmlFor="age">
            <Typography fontWeight="semibold" fontSize="h4">
              Age
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="age"
            id="age"
            type="text"
            placeholder="Your Requirement"
            className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
          />
          {errors.age && <p className="text-red-500 mb-2">{errors.age}</p>}
          <label htmlFor="language">
            <Typography fontWeight="semibold" fontSize="h4">
              Language
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="language"
            id="language"
            type="text"
            placeholder="Your Requirement"
            className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
          />
          {errors.language && (
            <p className="text-red-500 mb-2">{errors.language}</p>
          )}
          <label htmlFor="skill">
            <Typography fontWeight="semibold" fontSize="h4">
              Skill
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="skill"
            id="skill"
            type="text"
            placeholder="Your Requirement"
            className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
          />
          {errors.skill && <p className="text-red-500 mb-2">{errors.skill}</p>}
          <label htmlFor="timeCommitment">
            <Typography fontWeight="semibold" fontSize="h4">
              Time Commitment
            </Typography>
          </label>
          <InputData
            onChange={handleChange}
            name="timeCommitment"
            id="timeCommitment"
            type="text"
            placeholder="Your Requirement"
            className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
          />
          {errors.timeCommitment && (
            <p className="text-red-500 mb-2">{errors.timeCommitment}</p>
          )}
          <div className="flex justify-end my-5">
            <Button
              type="submit"
              size="h4"
              round="md"
              bgColor="primary"
              colorScheme="White"
              onclick={handleSubmit}
              className="py-3 px-10"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventInfo;