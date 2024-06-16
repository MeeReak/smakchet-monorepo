import React from "react";
import { Card, FilterButton, Typography } from "@/components";
import { CardProps } from "@/@types/card";

async function getData({ name }: { name: string }) {
  try {
    const api = `http://localhost:3000/v1/events?page=1&limit=18&name=${name}`;
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
    throw new Error('Unable to Search Event')
  }
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const search = searchParams.name ? searchParams.name : "";
  const data = await getData({ name: search });


  return (
    <>
      <div className="mt-[90px] xl:w-[1024px] w-screen m-auto space-y-5 z-10 ">
        <FilterButton />

        <div>
          <Typography
            className="mt-5 ml-5 sm:ml-auto"
            fontSize="h2"
            fontWeight="bold"
          >
            Search Result
          </Typography>
        </div>
        {data.length === 0 && searchParams.name ? (
          <div className="h-[300px] flex items-center justify-center">
            <Typography
              align="center"
              fontSize="h3"
              fontWeight="semibold"
              color="grey"
            >
              No Event
            </Typography>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default SearchPage;
