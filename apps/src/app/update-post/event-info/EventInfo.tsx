"use client";

import {
  FileInput,
  InputData,
  Typography,
  CustomTimePicker,
  Button,
  MapBox,
  InputDate,
  Dropdown,
} from "@/components";
import TextEditor from "@/components/organisms/TextEdit";
import { eventValidationSchema } from "@/utils/eventValidationSchema";
import React, { useState, useEffect } from "react";

interface EventInfoProps {
  eventData: EventInfoData;
  onUpdate: (updatedEventInfo: EventInfoData) => void;
}

interface dateModel {
  startDate: string | null;
  endDate: string | null;
  startTime: string;
  endTime: string;
}
interface requirementModel {
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

interface addressModel {
  lat: String | number;
  lng: String | number;
}

interface EventInfoData {
  id?: string;
  eventName: string;
  thumbnail: string;
  category: string;
  description: string;
  Date: dateModel;
  location: string;
  address: addressModel;
  requirement: requirementModel;
}

const EventInfo: React.FC<EventInfoProps> = ({ eventData, onUpdate }) => {
  const options = ["Sport", "Education", "Workshop", "Charity"];
  const locations = ["Phnom Penh", "Takeo", "Kandal", "Kep"];

  const [isEnddateValidate, setisEnddateValidate] = useState(true);

  const [info, setInfo] = useState<EventInfoData>(eventData);

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    setInfo(eventData);
  }, [eventData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo((prevState) => {
      const keys = name.split(".");

      // Creating a copy of the state object
      let nestedState: any = { ...prevState };

      // Traversing the nested structure to the desired property
      let current = nestedState;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      // Updating the desired property
      current[keys[keys.length - 1]] = value;

      return nestedState;
    });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const start = new Date(info.Date.startDate!);
    const end = new Date(info.Date.endDate!);
    console.log("convert start date : ", start);
    //console.log(info.description);
    // Check date validity
    if (end < start) {
      setisEnddateValidate(false); // Reflect invalid end date
      console.error("End date is before start date.");
      return; // Prevent further execution
    } else {
      setisEnddateValidate(true); // Reset date validation state if valid
    }

    // Log the current state before validation
    console.log("Info state before validation:", info);

    // Validate the form using Yup schema
    eventValidationSchema
      .validate(info, { abortEarly: false })
      .then((validData: any) => {
        console.log("Validation successful:", validData);
        setErrors({}); // Clear any previous errors
        onUpdate(validData); // Only proceed if valid, with validData
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
        console.log("errors : ", err.message);
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
    setInfo({ ...info, thumbnail: files[0].name });
  };

  const handleTimeSelect = (time: string) => {
    setInfo({ ...info, Date: { ...info.Date, startTime: time } });
  };

  const handleStartDate = (dateString: string | null) => {
    if (dateString) {
      const parsedDate = new Date(dateString); // Parse the string to Date object
      const startdate = parsedDate.toISOString();
      // console.log("start date: " , parsedDate);
      setInfo({ ...info, Date: { ...info.Date, startDate: startdate } });
    } else {
      setInfo({ ...info, Date: { ...info.Date, startDate: null } }); // Set to null for cleared date
    }
    //setInfo({...info , date:{...info.date , startDate:dateString}})
  };

  const handleEndDate = (dateString: string | null) => {
    if (dateString) {
      // console.log("End Date : " , dateString);
      const parsedDate = new Date(dateString); // Parse the string to Date object
      const enddate = parsedDate.toISOString();
      setInfo({ ...info, Date: { ...info.Date, endDate: enddate } });
    } else {
      setInfo({ ...info, Date: { ...info.Date, endDate: null } }); // Set to null for cleared date
    }
    //setInfo({...info , date:{...info.date , startDate:dateString}})
  };

  const handleSelectEndTime = (time: string) => {
    setInfo({ ...info, Date: { ...info.Date, endTime: time } });
  };

  const handleChangeContent = (content: string) => {
    setInfo({ ...info, description: content });
  };

  const handleAddress = (marker: any) => {
    const markers = {
      lat: marker.lat.toString(),
      lng: marker.lng.toString(),
    };
    console.log("marker: ", markers);
    setInfo({ ...info, address: markers });
  };

  return (
    <div className="xl:mx-[300px] lg:mx-[200px] md:mx-[100px] space-y-[25px] z-10 pt-[113px] ">
      <Typography fontWeight="bold" fontSize="h2">
        Create post
      </Typography>
      <div className="mx-auto mt-[33px]">
        <FileInput onChange={handleFileUpload} value={info.thumbnail} />
      </div>
      {errors.thumbnail && (
        <p className="text-red-500 mb-2 pl-8">{errors.thumbnail}</p>
      )}
      <div className="gap-y-5">
        <form onSubmit={handleSubmit}>
          {/* event name, category, detail */}
          <div className="bg-white lg:py-[25px] lg:px-5 rounded-[10px] flex flex-col space-y-5 px-5">
            <div className="flex md:flex-row lg:space-x-[35px]">
              {/* Event name */}
              <div className="flex flex-col w-full">
                <label htmlFor="eventname">
                  <Typography fontWeight="medium" fontSize="h4">
                    Event Name
                  </Typography>
                </label>
                <InputData
                  id="eventname"
                  onChange={handleChange}
                  name="eventName"
                  type="text"
                  placeholder="Event Name"
                  value={info.eventName}
                  className=" mt-3 mb-3 py-3 pl-5 border border-gray-200"
                />
                {errors.eventName && (
                  <p className="text-red-500 mb-2">{errors.eventName}</p>
                )}
              </div>

              {/* Category */}
              <div className="flex flex-col w-full">
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
                  value={info.category}
                />
                {errors.category && (
                  <p className="text-red-500 mb-2">{errors.category}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="detail">
                <Typography fontWeight="medium" fontSize="h4">
                  Event&apos;s Detail
                </Typography>
              </label>
              <TextEditor
                onchange={handleChangeContent}
                values={info.description}
              />
            </div>
          </div>

          {/* Date time and location */}
          <div className="bg-white lg:py-[25px] lg:px-5 rounded-[10px] flex flex-col space-y-5 gap-y-5 px-5 mt-[25px]">
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
                  value={new Date(info.Date.startDate!)
                    .toISOString()
                    .substring(0, 10)}
                />
                {errors.startDate && (
                  <p className="text-red-500 mb-2">{errors.Date.startDate}</p>
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
                  value={new Date(info.Date.endDate!)
                    .toISOString()
                    .substring(0, 10)}
                />
                {errors.endDate && (
                  <p className="text-red-500 mb-2">{errors.Date.endDate}</p>
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
                  value={info.Date.startTime}
                  onSelectTime={handleTimeSelect}
                  classname="w-[98%] mt-3 mb-3 border text-gray-400 border-gray-200 py-4 pl-5"
                />
                {errors.startTime && (
                  <p className="text-red-500 mb-2 ">{errors.Date.startTime}</p>
                )}
              </div>
              <div className="md:w-[50%]">
                <Typography fontWeight="semibold" fontSize="h4">
                  End Time
                </Typography>
                <CustomTimePicker
                  value={info.Date.endTime}
                  onSelectTime={handleSelectEndTime}
                  classname="w-[98%] mt-3 mb-3 border text-gray-400 border-gray-200 py-4 pl-5"
                />
                {errors.endTime && (
                  <p className="text-red-500 mb-2">{errors.Date.endTime}</p>
                )}
              </div>
            </div>
            <label htmlFor="location">
              <Typography fontWeight="semibold" fontSize="h4">
                Location
              </Typography>
            </label>

            <Dropdown
              value={info.location}
              classname="mt-3 mb-3 w-full"
              options={locations}
              onChange={handleSelectlocation}
              placeholder={"Select Event's Location"}
            />
            {errors.location && (
              <p className="text-red-500 mb-2">{errors.location}</p>
            )}
          </div>

          {/* Requirements */}
          <div className="bg-white lg:py-[25px] lg:px-5 rounded-[10px] flex flex-col px-5 mt-[25px]">
            <Typography fontWeight="bold" fontSize="h3" className="mt-5 mb-5">
              Requirements
            </Typography>
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <label htmlFor="age">
                  <Typography fontWeight="semibold" fontSize="h4">
                    Age
                  </Typography>
                </label>
                <InputData
                  value={info.requirement.age}
                  onChange={handleChange}
                  name="requirement.age"
                  id="age"
                  type="text"
                  placeholder="Your Requirement"
                  className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
                />
                {errors.age && (
                  <p className="text-red-500 mb-2">{errors.requirement.age}</p>
                )}
              </div>
              <div>
                <label htmlFor="language">
                  <Typography fontWeight="semibold" fontSize="h4">
                    Language
                  </Typography>
                </label>
                <InputData
                  value={info.requirement.language}
                  onChange={handleChange}
                  name="requirement.language"
                  id="language"
                  type="text"
                  placeholder="Your Requirement"
                  className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
                />
                {errors.language && (
                  <p className="text-red-500 mb-2">
                    {errors.requirement.language}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="skill">
                  <Typography fontWeight="semibold" fontSize="h4">
                    Skill
                  </Typography>
                </label>
                <InputData
                  value={info.requirement.skill}
                  onChange={handleChange}
                  name="requirement.skill"
                  id="skill"
                  type="text"
                  placeholder="Your Requirement"
                  className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
                />
                {errors.skill && (
                  <p className="text-red-500 mb-2">
                    {errors.requirement.skill}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="timeCommitment">
                  <Typography fontWeight="semibold" fontSize="h4">
                    Time Commitment
                  </Typography>
                </label>
                <InputData
                  value={info.requirement.timeCommitment}
                  onChange={handleChange}
                  name="requirement.timeCommitment"
                  id="timeCommitment"
                  type="text"
                  placeholder="Your Requirement"
                  className="w-full mt-3 mb-3 py-4 pl-5 border border-gray-200"
                />
                {errors.timeCommitment && (
                  <p className="text-red-500 mb-2">
                    {errors.requirement.timeCommitment}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Address of event */}

          <Typography fontWeight="bold" fontSize="h3" className="mt-5 mb-5">
            Address
          </Typography>

          <MapBox
            onchange={handleAddress}
            value={{
              lat: parseFloat(info.address.lat.toString()),
              lng: parseFloat(info.address.lng.toString()),
            }}
          />
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
