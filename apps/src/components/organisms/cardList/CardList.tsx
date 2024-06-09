import { CardProps } from "@/@types/card";
import { Card } from "@/components/molechules";
import React from "react";
import ScrollCard from "./ScrollCard";

async function getData({ cate }: { cate: string }) {
  try {
    const api = `http://localhost:3000/v1/events?page=1&limit=6&cate=${cate}`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: unknown | any) {
    console.error("Error fetching data:", error);
    console.log(error.message);
  }
}

interface FilterProps {
  cate: string;
}

const CardList: React.FC<FilterProps> = async ({ cate }) => {
  const category = cate ? (cate === "All" ? "" : cate) : "";
  const data = await getData({ cate: category });

  console.log("=======================================", data);

  return (
    <>
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

      {(!cate || cate == "All") && <ScrollCard />}
    </>
  );
};

export default CardList;
