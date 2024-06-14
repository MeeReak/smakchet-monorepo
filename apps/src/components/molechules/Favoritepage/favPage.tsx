import React from "react";
import { Card } from "../Card";
import { CardProps } from "@/@types/card";

const FavPage = ({ data }: { data: CardProps[] }) => {
  console.log("===========================", data[0]);

  return (
    <>
      <div
        className={
          data
            ? ` w-screen max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start`
            : `h-[50vh] flex items-center justify-center`
        }
      >
        {data ? (
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
          <div>There is no favorite event</div>
        )}
      </div>
    </>
  );
};

export default FavPage;
