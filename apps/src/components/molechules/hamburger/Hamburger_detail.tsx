"use client";
import React, { useEffect, useRef } from "react";
import { ButtonIcon, Typography } from "@/components/atoms";
import Link from "next/link";

interface Hamburger_detailProps {
  closeSidebar: () => void;
}

const Hamburger_detail: React.FC<Hamburger_detailProps> = ({
  closeSidebar,
}) => {
  const role = false; // Assume this is passed as a prop or determined elsewhere
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="fixed right-0 top-0 bg-black bg-opacity-50 h-screen  md:hidden w-screen z-40" />
      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 z-50 h-screen md:hidden w-[300px] bg-white shadow-lg"
      >
        <div className="flex flex-col">
          <div className="flex h-[80px] p-5">
            <div className="flex flex-1" />
            <ButtonIcon
              onclick={closeSidebar}
              className=" bg-gray-100 text-gray-700 rounded-full p-2 ml-[10px] hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out flex sm:hidden"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              }
            />
          </div>
          <div>
            {/* home */}
            <Link href={"/home"}>
              <div className="gap-[22px] flex ml-[18px] mt-[34px] ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 10.0001L9.33667 2.53756C9.70333 2.17173 10.2967 2.17173 10.6625 2.53756L18.125 10.0001M3.75 8.12506V16.5626C3.75 17.0801 4.17 17.5001 4.6875 17.5001H8.125V13.4376C8.125 12.9201 8.545 12.5001 9.0625 12.5001H10.9375C11.455 12.5001 11.875 12.9201 11.875 13.4376V17.5001H15.3125C15.83 17.5001 16.25 17.0801 16.25 16.5626V8.12506M6.875 17.5001H13.75"
                    stroke="#424242"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Typography className="mt-[3px] text-[#616161]" fontSize="h5">
                  Home
                </Typography>
              </div>
            </Link>

            {/* create post */}
            <Link href={"/create-post"}>
              {role && (
                <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0517 2.73913L14.4575 1.33246C14.7506 1.0394 15.148 0.874756 15.5625 0.874756C15.977 0.874756 16.3744 1.0394 16.6675 1.33246C16.9606 1.62553 17.1252 2.02301 17.1252 2.43746C17.1252 2.85192 16.9606 3.2494 16.6675 3.54246L7.81833 12.3916C7.37777 12.8319 6.83447 13.1556 6.2375 13.3333L4 14L4.66667 11.7625C4.8444 11.1655 5.16803 10.6222 5.60833 10.1816L13.0517 2.73913ZM13.0517 2.73913L15.25 4.93746M14 10.6666V14.625C14 15.1222 13.8025 15.5992 13.4508 15.9508C13.0992 16.3024 12.6223 16.5 12.125 16.5H3.375C2.87772 16.5 2.40081 16.3024 2.04917 15.9508C1.69754 15.5992 1.5 15.1222 1.5 14.625V5.87496C1.5 5.37768 1.69754 4.90077 2.04917 4.54914C2.40081 4.19751 2.87772 3.99996 3.375 3.99996H7.33333"
                      stroke="#424242"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Typography className="mt-[2px] text-[#616161]" fontSize="h5">
                    Create post
                  </Typography>
                </div>
              )}
            </Link>

            {/*favorite */}

            <Link href={"favorite"}>
              {!role && (
                <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 7.375C17.5 5.30417 15.7508 3.625 13.5933 3.625C11.9808 3.625 10.5958 4.56333 10 5.9025C9.40417 4.56333 8.01917 3.625 6.40583 3.625C4.25 3.625 2.5 5.30417 2.5 7.375C2.5 13.3917 10 17.375 10 17.375C10 17.375 17.5 13.3917 17.5 7.375Z"
                      stroke="#424242"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Typography className="mt-[2px] text-[#616161]" fontSize="h5">
                    Favorites
                  </Typography>
                </div>
              )}
            </Link>

            {/* notification */}

            <Link href={"/notification"}>
              <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3732 7.47443C5.63516 5.11685 7.62791 3.33325 10 3.33325V3.33325C12.3721 3.33325 14.3648 5.11685 14.6268 7.47443L14.8366 9.36295C14.9443 10.3317 15.2596 11.2659 15.7611 12.1018L16.2428 12.9046C16.5455 13.4091 16.6969 13.6614 16.7246 13.8647C16.7854 14.3105 16.5412 14.7419 16.1277 14.9191C15.939 14.9999 15.6448 14.9999 15.0565 14.9999H4.94353C4.35515 14.9999 4.06097 14.9999 3.87233 14.9191C3.45885 14.7419 3.21456 14.3105 3.27537 13.8647C3.30311 13.6614 3.45447 13.4091 3.75718 12.9046L4.23888 12.1018C4.74039 11.2659 5.05572 10.3317 5.16337 9.36295L5.3732 7.47443Z"
                    stroke="#424242"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.58519 15.3382C7.72762 15.9584 8.04149 16.5064 8.4781 16.8973C8.91471 17.2881 9.44966 17.5 10 17.5C10.5503 17.5 11.0853 17.2881 11.5219 16.8973C11.9585 16.5064 12.2724 15.9584 12.4148 15.3382"
                    stroke="#424242"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <Typography className="mt-[2px] text-[#616161]" fontSize="h5">
                  Notification
                </Typography>
              </div>
            </Link>
            {/* border */}
            <div className="w-[215px] h-[0.08px] bg-[#BDBDBD] mt-[15px] ml-[18px]"></div>

            {/*my profile  */}

            <Link href={"user-profile"}>
              <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1705 15.448C12.0998 16.2888 7.90027 16.2888 3.82963 15.448C4.26521 14.7099 4.93953 14.0409 5.81871 13.5162C7.00281 12.8095 8.47285 12.4167 10.0001 12.4167C11.5273 12.4167 12.9973 12.8095 14.1814 13.5162C15.0606 14.0409 15.7349 14.7099 16.1705 15.448Z"
                    stroke="#424242"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.4166 6.66667C13.4166 8.55364 11.8869 10.0833 9.99992 10.0833C8.11295 10.0833 6.58325 8.55364 6.58325 6.66667C6.58325 4.77969 8.11295 3.25 9.99992 3.25C11.8869 3.25 13.4166 4.77969 13.4166 6.66667Z"
                    stroke="#424242"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <Typography className="mt-[1px] text-[#616161]" fontSize="h5">
                  My Profile
                </Typography>
              </div>
            </Link>

            {/* my events */}

            <Link href={"/my-event"}>
              {role && (
                <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 10H10.625M7.5 12.5H10.625M7.5 15H10.625M13.125 15.625H15C15.4973 15.625 15.9742 15.4275 16.3258 15.0758C16.6775 14.7242 16.875 14.2473 16.875 13.75V5.09C16.875 4.14417 16.1708 3.34167 15.2283 3.26333C14.9167 3.23749 14.6047 3.21526 14.2925 3.19667M14.2925 3.19667C14.3478 3.3759 14.3751 3.56243 14.375 3.75C14.375 3.91576 14.3092 4.07473 14.1919 4.19194C14.0747 4.30915 13.9158 4.375 13.75 4.375H10C9.655 4.375 9.375 4.095 9.375 3.75C9.375 3.5575 9.40417 3.37167 9.45833 3.19667M14.2925 3.19667C14.0567 2.43167 13.3433 1.875 12.5 1.875H11.25C10.8494 1.87509 10.4593 2.00345 10.1369 2.24128C9.81448 2.47911 9.57669 2.81392 9.45833 3.19667M9.45833 3.19667C9.145 3.21583 8.83333 3.23833 8.52167 3.26333C7.57917 3.34167 6.875 4.14417 6.875 5.09V6.875M6.875 6.875H4.0625C3.545 6.875 3.125 7.295 3.125 7.8125V17.1875C3.125 17.705 3.545 18.125 4.0625 18.125H12.1875C12.705 18.125 13.125 17.705 13.125 17.1875V7.8125C13.125 7.295 12.705 6.875 12.1875 6.875H6.875ZM5.625 10H5.63167V10.0067H5.625V10ZM5.625 12.5H5.63167V12.5067H5.625V12.5ZM5.625 15H5.63167V15.0067H5.625V15Z"
                      stroke="#424242"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <Typography className="mt-[1px] text-[#616161]" fontSize="h5">
                    My Events
                  </Typography>
                </div>
              )}
            </Link>
            {/* dashboard*/}
            <Link href={"/applicantTable"}>
              {role && (
                <div className="gap-[22px] flex ml-[18px] pt-[15px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_6570_9465" fill="white">
                      <path d="M16.6667 3.33333V6.66667H11.6667V3.33333H16.6667ZM8.33333 3.33333V6.66667V10H3.33333V3.33333H8.33333ZM16.6667 10V16.6667H11.6667V10H16.6667ZM8.33333 13.3333V16.6667H3.33333V13.3333H8.33333ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z" />
                    </mask>
                    <path
                      d="M16.6667 3.33333V6.66667H11.6667V3.33333H16.6667ZM8.33333 3.33333V6.66667V10H3.33333V3.33333H8.33333ZM16.6667 10V16.6667H11.6667V10H16.6667ZM8.33333 13.3333V16.6667H3.33333V13.3333H8.33333ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z"
                      fill="#424242"
                    />
                    <path
                      d="M16.6667 3.33333H18.6667V1.33333H16.6667V3.33333ZM16.6667 6.66667V8.66667H18.6667V6.66667H16.6667ZM11.6667 6.66667H9.66667V8.66667H11.6667V6.66667ZM11.6667 3.33333V1.33333H9.66667V3.33333H11.6667ZM8.33333 3.33333H10.3333V1.33333H8.33333V3.33333ZM8.33333 10V12H10.3333V10H8.33333ZM3.33333 10H1.33333V12H3.33333V10ZM3.33333 3.33333V1.33333H1.33333V3.33333H3.33333ZM16.6667 10H18.6667V8H16.6667V10ZM16.6667 16.6667V18.6667H18.6667V16.6667H16.6667ZM11.6667 16.6667H9.66667V18.6667H11.6667V16.6667ZM11.6667 10V8H9.66667V10H11.6667ZM8.33333 13.3333H10.3333V11.3333H8.33333V13.3333ZM8.33333 16.6667V18.6667H10.3333V16.6667H8.33333ZM3.33333 16.6667H1.33333V18.6667H3.33333V16.6667ZM3.33333 13.3333V11.3333H1.33333V13.3333H3.33333ZM17.5 2.5H19.5V0.5H17.5V2.5ZM10.8333 2.5V0.5H8.83333V2.5H10.8333ZM10.8333 7.5H8.83333V9.5H10.8333V7.5ZM17.5 7.5V9.5H19.5V7.5H17.5ZM9.16667 2.5H11.1667V0.5H9.16667V2.5ZM2.5 2.5V0.5H0.5V2.5H2.5ZM2.5 10.8333H0.5V12.8333H2.5V10.8333ZM9.16667 10.8333V12.8333H11.1667V10.8333H9.16667ZM17.5 9.16667H19.5V7.16667H17.5V9.16667ZM10.8333 9.16667V7.16667H8.83333V9.16667H10.8333ZM10.8333 17.5H8.83333V19.5H10.8333V17.5ZM17.5 17.5V19.5H19.5V17.5H17.5ZM9.16667 12.5H11.1667V10.5H9.16667V12.5ZM2.5 12.5V10.5H0.5V12.5H2.5ZM2.5 17.5H0.5V19.5H2.5V17.5ZM9.16667 17.5V19.5H11.1667V17.5H9.16667ZM14.6667 3.33333V6.66667H18.6667V3.33333H14.6667ZM16.6667 4.66667H11.6667V8.66667H16.6667V4.66667ZM13.6667 6.66667V3.33333H9.66667V6.66667H13.6667ZM11.6667 5.33333H16.6667V1.33333H11.6667V5.33333ZM8.33333 8H3.33333V12H8.33333V8ZM5.33333 10V3.33333H1.33333V10H5.33333ZM3.33333 5.33333H8.33333V1.33333H3.33333V5.33333ZM14.6667 10V16.6667H18.6667V10H14.6667ZM16.6667 14.6667H11.6667V18.6667H16.6667V14.6667ZM13.6667 16.6667V10H9.66667V16.6667H13.6667ZM11.6667 12H16.6667V8H11.6667V12ZM6.33333 13.3333V16.6667H10.3333V13.3333H6.33333ZM8.33333 14.6667H3.33333V18.6667H8.33333V14.6667ZM5.33333 16.6667V13.3333H1.33333V16.6667H5.33333ZM3.33333 15.3333H8.33333V11.3333H3.33333V15.3333ZM17.5 0.5H10.8333V4.5H17.5V0.5ZM8.83333 2.5V7.5H12.8333V2.5H8.83333ZM10.8333 9.5H17.5V5.5H10.8333V9.5ZM19.5 7.5V2.5H15.5V7.5H19.5ZM9.16667 0.5H2.5V4.5H9.16667V0.5ZM0.5 2.5V10.8333H4.5V2.5H0.5ZM2.5 12.8333H9.16667V8.83333H2.5V12.8333ZM11.1667 10.8333V2.5H7.16667V10.8333H11.1667ZM17.5 7.16667H10.8333V11.1667H17.5V7.16667ZM8.83333 9.16667V17.5H12.8333V9.16667H8.83333ZM10.8333 19.5H17.5V15.5H10.8333V19.5ZM19.5 17.5V9.16667H15.5V17.5H19.5ZM9.16667 10.5H2.5V14.5H9.16667V10.5ZM0.5 12.5V17.5H4.5V12.5H0.5ZM2.5 19.5H9.16667V15.5H2.5V19.5ZM11.1667 17.5V12.5H7.16667V17.5H11.1667ZM6.33333 3.33333V6.66667H10.3333V3.33333H6.33333ZM6.33333 6.66667V10H10.3333V6.66667H6.33333Z"
                      fill="#424242"
                      mask="url(#path-1-inside-1_6570_9465)"
                    />
                  </svg>

                  <Typography className="mt-[1px] text-[#616161]" fontSize="h5">
                    Dashboard
                  </Typography>
                </div>
              )}
            </Link>
            {/* log out */}

            <div className="gap-[22px] flex ml-[18px] pt-[15px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66675 9.99992L1.0811 9.5314L0.706279 9.99992L1.0811 10.4684L1.66675 9.99992ZM9.16675 10.7499C9.58096 10.7499 9.91675 10.4141 9.91675 9.99992C9.91675 9.58571 9.58096 9.24992 9.16675 9.24992V10.7499ZM4.41443 5.36473L1.0811 9.5314L2.2524 10.4684L5.58573 6.30177L4.41443 5.36473ZM1.0811 10.4684L4.41443 14.6351L5.58573 13.6981L2.2524 9.5314L1.0811 10.4684ZM1.66675 10.7499H9.16675V9.24992H1.66675V10.7499Z"
                  fill="#E23636"
                />
                <path
                  d="M8.33325 6.77669V6.61406C8.33325 5.1012 8.33325 4.34477 8.75091 3.80447C8.78741 3.75726 8.826 3.71171 8.86657 3.66795C9.33084 3.16715 10.077 3.04279 11.5693 2.79408V2.79408C14.5987 2.28917 16.1134 2.03672 17.143 2.81546C17.2312 2.88215 17.3156 2.95366 17.3958 3.02967C18.3333 3.91721 18.3333 5.45282 18.3333 8.52404V11.4761C18.3333 14.5473 18.3333 16.083 17.3958 16.9705C17.3156 17.0465 17.2312 17.118 17.143 17.1847C16.1134 17.9634 14.5982 17.7109 11.5677 17.2058V17.2058C10.0772 16.9574 9.33189 16.8332 8.86785 16.3336C8.82638 16.289 8.78698 16.2424 8.74976 16.1942C8.33325 15.6543 8.33325 14.899 8.33325 13.3884V13.3884"
                  stroke="#E23636"
                  strokeWidth="1.5"
                />
              </svg>

              <Typography className="mt-[1px] " color="red" fontSize="h5">
                Log out
              </Typography>
            </div>
          </div>
          {/* border */}
          <div className="w-[215px] h-[0.08px] bg-[#BDBDBD] mt-[15px] ml-[18px]"></div>
          {/* about us */}
          <Link href={"/about-us"}>
            <Typography
              className="mt-[15px] text-[#616161] ml-[18px]"
              fontSize="h5"
            >
              About us
            </Typography>
          </Link>

          {/* contact  us */}
          <Link href={"/contact-us"}>
            <Typography
              className="mt-[15px] text-[#616161] ml-[18px]"
              fontSize="h5"
            >
              Conatct us
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Hamburger_detail;
