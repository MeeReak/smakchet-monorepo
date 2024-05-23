import { Component, ReactNode } from "react";

interface IconItemProps {
  className: string;
  border?: string;
  background?: string;
}

const IconItems = [
  {
    label: "User",
    icon: ({ className, border, background }: IconItemProps) => {
      return (
        <svg
          className={className}
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill={border} fill-opacity="0.1" />
          <path
            d="M20.5 20.5C22.6861 20.5 24.4583 18.7278 24.4583 16.5417C24.4583 14.3555 22.6861 12.5833 20.5 12.5833C18.3138 12.5833 16.5416 14.3555 16.5416 16.5417C16.5416 18.7278 18.3138 20.5 20.5 20.5Z"
            fill={background}
          />
          <path
            d="M20.5001 22.4792C16.5338 22.4792 13.3038 25.1392 13.3038 28.4167C13.3038 28.6383 13.478 28.8125 13.6997 28.8125H27.3005C27.5222 28.8125 27.6964 28.6383 27.6964 28.4167C27.6964 25.1392 24.4664 22.4792 20.5001 22.4792Z"
            fill={background}
          />
        </svg>
      );
    },
  },
  {
    label: "close",
    icon: ({ className, border, background }: IconItemProps) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      );
    },
  },
];

export default IconItems;
