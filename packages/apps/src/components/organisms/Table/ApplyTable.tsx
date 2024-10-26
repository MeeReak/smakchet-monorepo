import { Button, Typography } from "@/components";
import { formatDateTime } from "@/utils/formatTime";
import Link from "next/link";

import React from "react";

const ApplyTable = ({ data }: { data: any }) => {
  console.log("nis data ", data);
  return (
    <>
      <table className={`w-fit table-auto !rounded-t-[15px] overflow-hidden `}>
        {/* table header */}
        <thead className="bg-[#207BFF] h-[60px] text-start ">
          <tr className="text-center w-fit">
            <th className="pl-[40px]">
              <Typography align="left" fontSize="h4" color="white">
                N°
              </Typography>
            </th>
            <th className="pl-[40px] ">
              <Typography align="left" fontSize="h4" color="white">
                Name
              </Typography>
            </th>
            <th className="pl-[60px]">
              <Typography align="left" fontSize="h4" color="white">
                Email
              </Typography>
            </th>
            <th className="pl-[60px] ">
              <Typography align="left" fontSize="h4" color="white">
                Date
              </Typography>
            </th>
            <th className="pl-[60px]">
              <Typography align="left" fontSize="h4" color="white">
                Status
              </Typography>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-start bg-white">
          {data.map((item: any, index: number) => (
            <tr
              className="h-[50px] border-1 border-opacity-40 border-b-gray-300"
              key={index}
            >
              <td className="pl-[40px] text-gray-600">{`${index+1}`}</td>
              <td className="pl-[40px] text-gray-600">{item.userInfo.name}</td>
              <td className="pl-[60px] text-gray-600">{item.userInfo.email}</td>
              <td className="pl-[60px] text-gray-600">
                {formatDateTime(item.submitOn)}
              </td>

              <td
                className={`pl-[60px] ${
                  item.status === "Accepted"
                    ? "text-green-500"
                    : item.status === "Rejected"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {item.status}
              </td>
              <td className="px-[40px]">
                <Button
                  className="flex items-center px-4
                    hover:bg-[#207BFF] !rounded-[15px] text-center justify-center bg-white hover:text-white !text-[12px] text-gray-800"
                >
                  <Link href={`applicantTable/${item._id}`}>View</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { ApplyTable };
