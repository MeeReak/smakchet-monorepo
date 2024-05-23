"use client";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";
import { Card } from "../Card";

const FavPage = () => {
  const { CardInfo } = useContext(MyContext);
  return (
    <>
      <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {CardInfo.filter((item) => item.isFavorite).map((item, index) => (
          <Card
            key={item.id} // Assuming `item.id` is unique; otherwise, you can fallback to index
            id={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            date={item.date}
            location={item.location}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default FavPage;
