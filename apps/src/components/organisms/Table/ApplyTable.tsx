import { Button, Typography } from "@/components";
import { MyContext } from "@/contexts/CardContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

interface ApplyTableProps{
    className?: string
}
const ApplyTable: React.FC<ApplyTableProps> = ({
    className = "",
}) => {
    const { CardUser, setAccept, setDecline } = useContext(MyContext);
    const route = useParams();

    // const applicantId = route.applicantDetail;
    const applicantId = Array.isArray(route.applicantDetail)
    ? route.applicantDetail[0]
    : route.applicantDetail;

  return (
    <div>
      <table className= {`w-fit table-auto rounded-t-[15px] overflow-hidden} ${className}`}>
        {/* table header */}
        <thead className="bg-[#D2E5FF] h-[60px] text-start ">
          <tr className="text-center w-fit">
            <th className="pl-[30px] w-[112px] ">
              <Typography align="left" fontSize="h4" color="grey">
                N°
              </Typography>
            </th>
            <th className="w-[237px]">
              <Typography align="left" fontSize="h4" color="grey">
                Name
              </Typography>
            </th>
            <th className="w-[285px]">
              <Typography align="left" fontSize="h4" color="grey">
                Email
              </Typography>
            </th>
            <th className="w-[193px]">
              <Typography align="left" fontSize="h4" color="grey">
                Status
              </Typography>
            </th>
            <th className="w-[153px]">
              <Typography align="left" fontSize="h4" color="grey">
                Date
              </Typography>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-start bg-white">
          {CardUser.map((item, index) => (
            <tr
              className="h-[65px] border-1 border-opacity-40 border-b-gray-500"
              key={index}
            >
              <td className="pl-[30px]">{`0${item.id}`}</td>
              <td>{item.name}</td>
              <td>{item.gmail}</td>
              <td
                className={`${
                  item.status === "Accepted"
                    ? "text-green-500"
                    : item.status === "Rejected"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {item.status}
              </td>
              <td>{item.date}</td>
              <td className="pr-[57px]">
                <Button
               
                  className="flex items-center 
                    
                    !w-[52px] !h-[26px]
                    hover:bg-[#207BFF] !rounded-[15px] text-center justify-center bg-white hover:text-white !text-[12px] text-gray-600"
                >
                  <Link href={`applicantTable/${item.id}`}>View</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ApplyTable };
