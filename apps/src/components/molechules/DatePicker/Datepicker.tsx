"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale/en-US"; // Import locale (optional)

// Set the locale for the datepicker (optional)
registerLocale("en-US", enUS);

interface DatePickerProp{
  classname?:string;
}

const Datepicker:React.FC<DatePickerProp> = ({classname}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className={`p-2 border border-black rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-500 ${classname}`}
          placeholderText="Select a date"
          locale="en-US" // Set locale (optional)
        />
    </div>
  );
};

export default Datepicker;
