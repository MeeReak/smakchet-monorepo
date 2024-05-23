import React from "react";
import Image from "next/image";
import { ButtonIcon, Typography } from "@/components";
import DeleteButton from "../Delete/deleteButton";

interface MyEventCardProps {
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
  id:string
}

const MyEventCard: React.FC<MyEventCardProps> = ({
  src,
  alt,
  title,
  date,
  location,
  id,
}) => {
console.log(id)

  function setModalState(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className=" group flex max-[640px]:max-w-[500px] sm:w-[600px] lg:w-[800px] relative p-[10px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-200">
        <div>
          <Image
            src={src}
            alt={alt}
            width={150}
            height={150}
            className="max-w-[150px] h-[150px] sm:max-w-[150px] sm:max-h-[150px] object-cover rounded-[10px]"
          />
        </div>
        <div className="space-y-1 pl-[10px] w-[250px] sm:w-[600px]">
          <Typography
            className="line-clamp-2 "
            fontSize="h3"
            fontWeight="semibold"
          >
            {title}
          </Typography>

          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <Typography fontSize="h4" color="blue" className="pl-[5px]">
              {date}
            </Typography>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <Typography fontSize="h4" color="red" className="pl-[5px]">
              {location}
            </Typography>
          </div>
        </div>
            <div className="flex flex-col justify-center gap-y-3 transition-transform duration-300 transform translate-x-4 group-hover:translate-x-0 ">
                
              <ButtonIcon
                className="border-[1px] border-[#207BFF] rounded-md hidden group-hover:flex hover:border-[2px]  hover:bg-[#D2E5FF] transition-all !h-10 !w-10 "
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-[#207BFF]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                }
              />
              <DeleteButton id={id} />
              
    
            </div>
        
      </div>
    </>
  );
};

export default MyEventCard;
