import { Typography } from "@/components/atoms";
import Image from "next/image";
import React from "react";

interface ReqCardProp {
  className?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
}

const ReqCard: React.FC<ReqCardProp> = ({
  title,
  description,
  imageSrc = "",
}) => {
  return (
    <div className="h-[70px] pl-6 border bg-white border-gray-200 flex cursor-pointer hover:bg-gray-100 items-center rounded-[10px]">
      <div className="flex items-start space-x-4">
        <Image src={imageSrc} alt="age" width={24} height={24}/>
        <div>
          <Typography fontWeight="medium" fontSize="h3">
            {title}
          </Typography>
          <Typography className="line-clamp-1" fontSize="h5" color="grey">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReqCard;
