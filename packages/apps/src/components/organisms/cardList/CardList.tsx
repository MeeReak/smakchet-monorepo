import { CardProps } from "@/@types/card";
import React from "react";
import ScrollCard from "./ScrollCard";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Card } from "@/components";
import { getDataByCate, getUserInfo } from "@/action/homePage";

interface FilterProps {
  cate: string;
  session?: RequestCookie | undefined;
  sigSession?: RequestCookie | undefined;
}

const CardList: React.FC<FilterProps> = async ({
  cate,
  session,
  sigSession,
}) => {
  const category = cate ? (cate === "All" ? "" : cate) : "";
  const data = await getDataByCate({ cate: category });
  // const info = await getUserInfo({ session, sigSession });

  return (
    <>
      <div className="max-[1030px]:px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {data.map((item: CardProps, index: number) => (
          <Card
            key={index}
            _id={item._id}
            thumbnail={item.thumbnail}
            alt={item.thumbnail}
            eventName={item.eventName}
            Date={item.Date}
            location={item.location}
            // isFavorite={info && info.data !== null ? info.data.favorites : []}
          />
        ))}
      </div>

      {(!cate || cate == "All") && <ScrollCard />}
    </>
  );
};

export default CardList;
