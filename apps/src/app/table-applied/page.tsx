"use client";
import React, { useContext } from "react";
import { Typography, Button } from "@/components";
import { MyContext } from "@/contexts/CardContext";
import Image from "next/image";

const Page = () => {
  const { CardUser } = useContext(MyContext);

  const totalCondidate = CardUser.length;
  console.log(totalCondidate);

  return (
    <div className="bg-[#F4FBFF]">
      <div className="bg-white mx-auto">
        <div className="lg:w-[1024px] lg:flex lg:flex-row lg:justify-between lg:mt-12 lg:items-center mt-24 px-4 mx-auto flex flex-col justify-start">
          <Typography  className="lg:text-[40px] text-[32px] lg:text-start text-center">
            Table of Volunteers
          </Typography>
          <div className="flex flex-row justify-center items-center lg:gap-6 mt-12 gap-3">
            {/* table total */}
            <div className="lg:w-[225px] lg:h-[77px] h-[50px] w-[125px] mb-14 rounded-[10px] border-[#E8E8E8] border-[0.5px] flex justify-center items-center gap-2 shadow-md">
              <Typography color="blue" fontSize="h2" fontWeight="medium">
                Total :
              </Typography>
              <div className="flex justify-center items-center space-x-1">
                <Typography fontWeight="medium" fontSize="h2">
                  {`${totalCondidate}`}
                  {/* Dynamically display the count of CardUser */}
                </Typography>
                <Typography fontSize="h5" fontWeight="medium" color="grey" className="mt-1 hidden lg:block ">
                  Candidates
                </Typography>
              </div>
            </div>
            {/* table accepted */}
            <div className="lg:w-[250px] lg:h-[77px] h-[50px] w-[200px] mb-14 rounded-[10px] border-[#E8E8E8] border-[0.5px] flex justify-center items-center gap-2 shadow-md ">
              <Typography color="green" fontSize="h2" fontWeight="medium">
                Accepted :
              </Typography>
              <div className="flex justify-center items-center space-x-1">
                <Typography fontWeight="medium" fontSize="h2">
                {`${Math.floor((totalCondidate * 2 + 1) / 3)}`}
                </Typography>
                <Typography fontSize="h5" color="grey" className="mt-1 hidden lg:block">
                  Candidates
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[38px]  flex items-center pl-7 lg:w-[1024px] h-[90px] border-[0.2px] border-[#E8E8E8] bg-white mx-3 lg:mx-auto rounded-t-[15px] rounded-b-[5px]">
        <Typography fontSize="h2" fontWeight="medium" >
          Cambodia Book Fair
        </Typography>
      </div>
      <div className="w-[1024px] mx-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="h-[50px] ">
              {/* <th className=" border-[#E8E8E8]"></th> */}
              <th className=" pl-[53px] border-[#E8E8E8]">
                <Typography color="grey">NAME</Typography>
              </th>
              <th className=" pl-[53px] border-[#E8E8E8]">
                <Typography color="grey">EMAIL</Typography>
              </th>
              <th className=" pl-[45px] border-[#E8E8E8]">
                <Typography color="grey">DATE</Typography>
              </th>
              
              <th className=" border-[#E8E8E8]"></th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            {CardUser.map((item, index) => (
              <tr className="h-[100px] border-1 border-[##E8E8E8]" key={index} >
                <td className="w-[320px]">
                  <div className="flex flex-row items-center ml-[35px] w-auto ">
                    <Image
                      src={item.profile}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <div className="w-[29.68px]"></div>
                  {item.name}
                  </div>
                </td>
                
                <td className=" text-start w-[300px]">{item.gmail}</td>
                <td className="text-start">{item.date}</td>
                <td>
                  <div className="flex items-center justify-center gap-4">
                    <Button className="flex items-center hover:[#BDD8FF] w-[60px] h-[40px] rounded-[15px] text-center justify-center bg-[#E8E8E8] !text-[16px]">
                      View
                    </Button>
                    <div>
                      
                      <button className={`rounded-full w-[23px] h-[23px] flex justify-center items-center ${item.id % 3 === 0 ? 'bg-red-500' : 'bg-green-500'}`}></button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
