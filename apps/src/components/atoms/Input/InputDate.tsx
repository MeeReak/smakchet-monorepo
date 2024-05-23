"use client"
import React, { useState, useEffect } from "react";

interface InputDateProp {
  placeholder?: string;
  id?: string;
  className: string;
  value?: string;
  onchange?: (date: null | string) => void; // Callback for selected date
}

const InputDate: React.FC<InputDateProp> = ({ placeholder, id, className, value, onchange }) => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    // Calculate today's date in the format yyyy-mm-dd
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []); // Run this effect only once on component mount

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
    if (onchange) {
      onchange(event.target.value); // Call the callback with selected date
    }
  };

  return (
    <div>
      <input
        type="date"
        placeholder={placeholder}
        id={id}
        className={className}
        value={value}
        onChange={handleTimeChange}
        min={minDate}
      />
    </div>
  );
};

export {InputDate};
