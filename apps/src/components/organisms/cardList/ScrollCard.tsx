"use client";

import { CardProps } from "@/@types/card";
import { Card } from "@/components";
import React, { useCallback, useEffect, useState } from "react";

const ScrollCard = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreData = async () => {
    setIsLoading(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(
      `${apiUrl}/v1/events?page=${page + 2}&limit=3`
    ).then((res) => res.json());

    setData((curr) => [...curr, ...res]);
    setPage((curr) => curr + 1);
    setIsLoading(false);
  };

  const onScroll = useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      await loadMoreData();
    }
  }, [isLoading, page]); // Dependencies

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

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
            isFavorite={item.isFavorite}
            isLoading={isLoading}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollCard;
