import React from "react";
import { Trending, FilteredCardDisplay } from "@/components";
import Image from "next/image";


const homepage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  return (
    <>
      <div className="max-w-[1024px] m-auto space-y-4 z-10 mt-[100px] mb-20">
        <Trending
          className="flex gap-4 max-[640px]:overflow-hidden max-[640px]:overflow-x-auto mt-[25px] "
          topEvent={
            <Image
              src="/assets/image/volunteer.svg"
              alt=""
              width={500}
              height={200}
              className="rounded-xl h-[250px] w-[500px] object-cover"
            />
          }
          secondEvent={
            <Image
              src="/assets/image/volunteer.svg"
              alt=""
              width={500}
              height={200}
              className="rounded-xl h-[250px] w-[500px] object-cover"
            />
          }
        />

        <FilteredCardDisplay searchParams={searchParams} />
      </div>
    </>
  );
};

export default homepage;
