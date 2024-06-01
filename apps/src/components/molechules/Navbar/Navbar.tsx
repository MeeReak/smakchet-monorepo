"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  InputSearch,
  Button,
  ButtonIcon,
  NotiDropdown,
  UserProfileDropdown,
} from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalStorage } from "@/utils/localStorage";
import Cookies from 'js-cookie';
import axios from "axios";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);

    // }// const cookieValue = Cookies.get('session');
    // if(cookieValue){
    //   setIsLogin(true);
    // }else{
    //   setIsLogin(false);
    // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/v1/user", {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${Cookies.get('session')}`
          }
        });
        alert("response have been send to backend");
        console.log("response", response);
      } catch (error) {
        alert("response have not been send to backend");
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const isDetailRoute = window.location.pathname.startsWith("/detail/");
      const isSmallScreen = window.innerWidth < 640; // Adjust breakpoint as needed
      setHideNavbar(isDetailRoute && isSmallScreen);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={hideNavbar ? "hidden" : ""}>
      <div className="fixed top-0 left-0 right-0 m-auto z-50 bg-opacity-50 backdrop-blur-md bg-white shadow-custom">
        <div className="h-[80px] flex flex-row justify-between aligns-center max-[1030px]:p-5 max-[1030px]:pl-[10px] max-w-[1024px] m-auto  ">
          <div className="flex flex-row justify-right items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                className="pb-2"
                src={"/assets/icons/smakchet-logo.svg"}
                alt="smakchet-logo"
                width={140}
                height={50}
              />
            </Link>
          </div>
          <div className=" flex flex-row items-center ">
            {isLogin == false ? (
              <>
                {/* Conditionally Render Search Bar */}
                {pathname !== "/search" && pathname !== "/create-post" && (
                  <Link href={"/search"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-gray-600 w-7 h-7 transform "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                )}

                <div className=" border-[1px] ml-5 mr-6 h-12"></div>
                <Link href="/login">
                  <Button
                    round="lg"
                    size="h4"
                    className="py-[13px] px-5 border-[1px] hover:bg-[#bdd8ff] hover:border-[#207BFF] hover:text-[#207BFF]"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/role-selection">
                  <Button
                    round="lg"
                    size="h4"
                    bgColor="primary"
                    colorScheme="White"
                    className="py-[13px] px-5 ml-[10px] border-[1px] rounded-[10px]"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {/* Create */}
                {pathname !== "/create-post" && (
                  <Link href={"/create-post"}>
                    <ButtonIcon
                      className="bg-gray-100 text-black rounded-full p-2 hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out hidden sm:flex"
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
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      }
                    />
                  </Link>
                )}

                {/* Favorite */}

                {pathname !== "/favorite" && (
                  <Link href={"/favorite"}>
                    <ButtonIcon
                      className="bg-gray-100 text-black rounded-full py-2 ml-[10px]  hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out"
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      }
                    />
                  </Link>
                )}

                {/* Notification */}

                {pathname !== "/notification" && (
                  <NotiDropdown
                    notiOpen={notiOpen}
                    setNotiOpen={setNotiOpen}
                    setIsOpen={setIsOpen}
                  />
                )}

                {/* Profile */}
                {pathname !== "" && (
                  <UserProfileDropdown
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setNotiOpen={setNotiOpen}
                  />
                )}

                {/* Hamburger Bar*/}
                <Link href={"/"}>
                  <ButtonIcon
                    className="bg-gray-100 text-black rounded-full p-2 ml-[10px]  hover:bg-[#bdd8ff] hover:text-[#207BFF] transition-all duration-300 ease-in-out flex sm:hidden"
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
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
