import React from "react";
import { Card } from "../Card";
import { CardProps } from "@/@types/card";
import { Typography } from "@/components/atoms";

const FavPage = ({ data }: { data: CardProps[] }) => {
  console.log("===========================", data);

  return (
    <>
      <div
        className={
          data.length !== 0
            ? ` max-w-[1024px] max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center `
            : `h-[50vh] flex items-center justify-center`
        }
      >
        {data.length !== 0 ? (
          data.map((item, index: number) => (
            <Card
              key={index}
              _id={item._id}
              thumbnail={item.thumbnail}
              alt={item.thumbnail}
              eventName={item.eventName}
              Date={item.Date}
              location={item.location}
              isFavorite={[item._id]}
            />
          ))
        ) : (
          <Typography fontSize="h4" fontWeight="medium" className="text-center">
            No Favorite Events
          </Typography>
        )}
      </div>
    </>
  );
};

export default FavPage;
