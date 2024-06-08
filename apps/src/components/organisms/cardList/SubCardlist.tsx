import { CardProps } from "@/@types/card";
import { Card } from "@/components/molechules";
import React from "react";

interface FilterProps {
  data: any;
}

const SubCardList: React.FC<FilterProps> = async ({ data }) => {
  return (
    <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {data.map((item: CardProps, index: number) => (
        <Card
          key={index}
          _id={item._id}
          thumbnail={item.thumbnail}
          alt={item.thumbnail}
          eventName={item.eventName}
          Date={item.Date}
          location={item.location}
          isFavorite={item.isFavorite}
        />
      ))}
    </div>
  );
};

export default SubCardList;
