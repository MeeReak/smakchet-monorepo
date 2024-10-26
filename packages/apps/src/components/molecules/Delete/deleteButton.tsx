"use client";
import React, { useState } from "react";
import { ButtonIcon } from "@/components/atoms";
import ModalButton from "../Modal/Modal";
import axios from "axios";
//import { useRouter } from 'next/router';

export interface FilterButtonProps {
  className?: string;
  id: string;
}

const DeleteButton: React.FC<FilterButtonProps> = ({ className, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const router = useRouter();

  const setModalState = (id: string) => {
    console.log("id to delete: ", id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handledeleteEvent = async (id:string) => {
    try{
      const response = await axios.delete(
        `http://localhost:3000/v1/events/${id}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.href = "/my-event";
    }catch(err:unknown | any){
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
    }
  }

  return (
    <div className="relative">
      <ButtonIcon
        onclick={() => setModalState(id)} // Corrected from onclick to onClick
        className={`xl:border-[1px] xl:border-[#FF2020] rounded-md xl:hidden inline xl:group-hover:flex xl:hover:border-[2px] transition-all xl:!h-10 xl:!w-10 !w-[15px] !h-[15px] md:!w-8 md:!h-8 ${className}`}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-[#FF2020]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        }
      />
      <ModalButton isOpen={isModalOpen} onClose={handleCloseModal} classname="p-8 text-xl">
        <div>
          <p className="mb-4">Are you sure you want to delete this event?</p>
          <div className="flex justify-end gap-x-2">
            <button onClick={handleCloseModal} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button onClick={() => handledeleteEvent(id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          </div>
        </div>
      </ModalButton>
    </div>
  );
};

export default DeleteButton;
