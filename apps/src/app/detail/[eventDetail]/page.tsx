"use client";

import { Button, ButtonIcon, Typography, Card, Map } from "@/components";
import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { MyContext } from "@/contexts/CardContext";
import ReqCards from "@/components/organisms/ReqCards/ReqCards";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/@types/card";

const Homepage: React.FC<CardProps> = ({
  src,
  alt,
  title,
  date,
  location,
  id,
  isFavorite,
}) => {
  const { CardInfo, toggleFavorite } = useContext(MyContext);

  const route = useParams();
  const User = route.eventDetail;

  const DetailEvent = CardInfo.find((data) => data.id === User);
  console.log(DetailEvent);

  return (

    <div className="h-full w-full md:bg-[#FAFAFA] bg-white">
      <div className="md:py-[116px] py-[59px] md:mx-[195px] flex flex-col">
        {/* Event image section */}
        <div className="flex relative">
          <Image
            src={"/assets/image/volunteerNeeded.png"}
            alt={DetailEvent?.alt as string}
            layout="responsive"
            width={1017}
            height={329}
            className="max-[640px]:w-full  object-cover"
          />
          <div className="absolute right-[15px] top-[15px] flex flex-row gap-x-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(id);
              }}
              className={`w-6 h-6  top-3  ${
                isFavorite ? "fill-[#FF2020] stroke-[#FF2020]" : "fill-white"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  top-3"
            >
              <path
                d="M7.21717 10.9073C6.97504 10.4716 6.59508 10.1286 6.13694 9.93227C5.67881 9.73589 5.16843 9.69719 4.68593 9.82226C4.20342 9.94733 3.77611 10.2291 3.47106 10.6233C3.166 11.0175 3.00049 11.5018 3.00049 12.0003C3.00049 12.4987 3.166 12.9831 3.47106 13.3773C3.77611 13.7715 4.20342 14.0532 4.68593 14.1783C5.16843 14.3034 5.67881 14.2647 6.13694 14.0683C6.59508 13.8719 6.97504 13.529 7.21717 13.0933M7.21717 10.9073C7.39717 11.2313 7.50017 11.6033 7.50017 12.0003C7.50017 12.3973 7.39717 12.7703 7.21717 13.0933M7.21717 10.9073L16.7832 5.59328L7.21717 10.9073ZM7.21717 13.0933L16.7832 18.4073L7.21717 13.0933ZM16.7832 18.4073C16.6396 18.6657 16.5484 18.9498 16.5147 19.2434C16.4809 19.537 16.5054 19.8345 16.5866 20.1186C16.6678 20.4028 16.8042 20.6683 16.9879 20.8997C17.1717 21.1312 17.3993 21.3242 17.6577 21.4678C17.916 21.6113 18.2002 21.7026 18.4938 21.7363C18.7874 21.77 19.0848 21.7456 19.369 21.6644C19.6532 21.5832 19.9186 21.4468 20.1501 21.263C20.3816 21.0792 20.5746 20.8517 20.7182 20.5933C21.0081 20.0715 21.0788 19.4559 20.9148 18.8819C20.7508 18.308 20.3655 17.8227 19.8437 17.5328C19.3219 17.2429 18.7063 17.1722 18.1323 17.3362C17.5584 17.5002 17.0731 17.8855 16.7832 18.4073ZM16.7832 5.59328C16.9234 5.85742 17.1149 6.09095 17.3465 6.28021C17.5781 6.46947 17.845 6.61068 18.1318 6.69556C18.4186 6.78044 18.7194 6.80731 19.0166 6.77458C19.3139 6.74185 19.6017 6.65018 19.8631 6.50494C20.1245 6.3597 20.3544 6.1638 20.5392 5.9287C20.7241 5.69359 20.8602 5.42399 20.9396 5.13567C21.019 4.84734 21.0402 4.54607 21.0018 4.24948C20.9635 3.95288 20.8663 3.66691 20.7162 3.40828C20.4202 2.89862 19.9362 2.52542 19.368 2.3689C18.7998 2.21237 18.1929 2.28503 17.6777 2.57124C17.1625 2.85745 16.7802 3.33437 16.6129 3.89948C16.4457 4.46459 16.5068 5.07277 16.7832 5.59328Z"
                fill="#207BFF"
              />
              <path
                d="M7.21717 10.9073C6.97504 10.4716 6.59508 10.1286 6.13694 9.93227C5.67881 9.73589 5.16843 9.69719 4.68593 9.82226C4.20342 9.94733 3.77611 10.2291 3.47106 10.6233C3.166 11.0175 3.00049 11.5018 3.00049 12.0003C3.00049 12.4987 3.166 12.9831 3.47106 13.3773C3.77611 13.7715 4.20342 14.0532 4.68593 14.1783C5.16843 14.3034 5.67881 14.2647 6.13694 14.0683C6.59508 13.8719 6.97504 13.529 7.21717 13.0933M7.21717 10.9073C7.39717 11.2313 7.50017 11.6033 7.50017 12.0003C7.50017 12.3973 7.39717 12.7703 7.21717 13.0933M7.21717 10.9073L16.7832 5.59328M7.21717 13.0933L16.7832 18.4073M16.7832 5.59328C16.9234 5.85742 17.1149 6.09095 17.3465 6.28021C17.5781 6.46947 17.845 6.61068 18.1318 6.69556C18.4186 6.78044 18.7194 6.80731 19.0166 6.77458C19.3139 6.74185 19.6017 6.65018 19.8631 6.50494C20.1245 6.35971 20.3544 6.1638 20.5392 5.9287C20.7241 5.69359 20.8602 5.42399 20.9396 5.13567C21.019 4.84734 21.0402 4.54607 21.0018 4.24948C20.9635 3.95288 20.8663 3.66691 20.7162 3.40828C20.4202 2.89862 19.9362 2.52542 19.368 2.3689C18.7998 2.21237 18.1929 2.28503 17.6777 2.57124C17.1625 2.85745 16.7802 3.33437 16.6129 3.89948C16.4457 4.46459 16.5068 5.07277 16.7832 5.59328ZM16.7832 18.4073C16.6396 18.6657 16.5484 18.9498 16.5147 19.2434C16.4809 19.537 16.5054 19.8345 16.5866 20.1186C16.6678 20.4028 16.8042 20.6683 16.9879 20.8997C17.1717 21.1312 17.3993 21.3242 17.6577 21.4678C17.916 21.6113 18.2002 21.7026 18.4938 21.7363C18.7874 21.77 19.0848 21.7456 19.369 21.6644C19.6532 21.5832 19.9186 21.4468 20.1501 21.263C20.3816 21.0792 20.5746 20.8517 20.7182 20.5933C21.0081 20.0715 21.0788 19.4559 20.9148 18.8819C20.7508 18.308 20.3655 17.8227 19.8437 17.5328C19.3219 17.2429 18.7063 17.1722 18.1323 17.3362C17.5584 17.5002 17.0731 17.8855 16.7832 18.4073Z"
                stroke="#207BFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Event name section */}
        <div className="flex justify-between items-center py-[10px]">
          <Typography fontWeight="bold" className="line-clamp-1" fontSize="h2">
            {DetailEvent?.title}
          </Typography>
          <Button
            bgColor="primary"
            colorScheme="White"
            className="px-[24px] md:py-[16px] py-[11px]  !rounded-[10px]"
          >
            <Link href={"../applyForm"}>
            Apply
            </Link>
          </Button>
        </div>
        {/* Event detail section */}
        <div className="mt-[15px] flex flex-col gap-y-5 bg-white rounded-[10px] p-[10px]">
          <Typography fontSize="h2" fontWeight="bold">
            Event&apos;s Detail
          </Typography>
          <Typography fontSize="h5">
            ការជ្រើសរើសអ្នកស្ម័គ្រចិត្តចាប់ផ្ដើមហើយ! <br />
            តើអ្នកកំពុងស្វែងរកបទពិសោធន៍ជាមួយការងារស្ម័គ្រចិត្ត? <br />
            សូមចូលរួមជាមួយក្រុមការងាររបស់យើង <br />
            ក្លាយជាផ្នែកមួយនៃអ្នករៀបចំពិព័រណ៍វិទ្យាសាស្ត្រ <br />
            ក្នុងទិវាជាតិវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា និងនវានុវត្តន៍ លើកទី២ ឆ្នាំ២០២៤ នៅក្នុងប្រទេសកម្ពុជា! <br />
            ឈប់ទទួល ថ្ងៃទី ៣ ខែមីនាឆ្នាំ២០២៤! <br />
            {/* <br /> */}
            ---------------------------------------- <br />
            VOLUNTEER RECRUITMENT IS NOW OPEN! <br />
            Are you a passionate, team oriented and outgoing person looking to
            experience volunteering? <br />
            Please join our team and be apart of Science Exhibition in 2nd
            National day of Science, Technology and Innovation 2024 in Cambodia!{" "}
            <br />
            The application is open NOW until the March 3rd, 2024!
          </Typography>
         
        </div>

        {/* Requirement and Map section */}
        <div className="mt-[25px] grid lg:grid-cols-2 gap-3 max-[1030px]:px-3 border-b-1 border-[#0000001A] ">
          <div className="flex flex-col gap-y-5">
            <Typography fontSize="h2" fontWeight="bold">
              Requirement
            </Typography>
            <ReqCards />
          </div>
          <div className="flex flex-col gap-y-5">
            <Typography fontSize="h2" fontWeight="bold">
              Location
            </Typography>
            <Map
              classname="w-full h-[85%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709280237207!5m2!1skm!2skh"
            />
             
          </div>
         
        </div>
        <Button
            className=" w-fit !border-none py-4 px-3"
            leftIcon={
              <Image
                src={"/assets/image/host_profile.png"}
                alt={"host profile"}
                width={57}
                height={57}
              />
            }
          >
            <div className="ml-4 flex flex-col ">
              <Typography fontSize="h4" fontWeight="semibold"> Pheng Sokleng</Typography>
              <Typography color="blue" fontSize="h5">
                {" "}
                View Profile
              </Typography>
            </div>
          </Button>
        {/* also interested in */}
        <div className="  py-[25px] border-t-1 border-[#0000001A]">
          <Typography
            fontSize="h2"
            fontWeight="bold"
            className="mb-5 lg:text-left max-[640px]:ml-5"
          >
            You might also be interested in
          </Typography>
          <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {CardInfo.filter((item) => item.id !== User)
              .slice(0, 3)
              .map((item, index) => (
                <Card
                  isFavorite={item.isFavorite}
                  key={index}
                  id={item.id}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  date={item.date}
                  location={item.location}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
