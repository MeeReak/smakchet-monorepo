import React from "react";
import Link from "next/link";
import { Typography, ButtonIcon } from "@/components";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 w-full bg-black text-white py-6">
        <div className=" container mx-auto w-[1024px]">
          <div className="flex flex-wrap text-left lg:text-left ">
            <div className="w-full lg:w-6/12 ">
              <Typography fontSize="h3" className="text-white">
                Smakchet
              </Typography>
              <Typography fontSize="h4" className="text-white">
                SmakChet is Cambodia&#39;s Volunteer seeking
              </Typography>
              <div className=" mt-6 lg:mb-0 mb-6 flex">
                <div className="group">
                  <ButtonIcon
                    icon={
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="blue"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-white duration-150"
                      >
                        <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" />
                      </svg>
                    }
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 group-hover:bg-blue-900 duration-150"
                  ></ButtonIcon>
                </div>
                <div className="group">
                  <ButtonIcon
                    icon={
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 2500 2500"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[5px]"
                      >
                        <defs>
                          <radialGradient
                            id="0"
                            cx="332.14"
                            cy="2511.81"
                            r="3263.54"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".09" stopColor=" " />
                            <stop offset=".78" stopColor="#d82d7e" />
                          </radialGradient>
                          <radialGradient
                            id="1"
                            cx="1516.14"
                            cy="2623.81"
                            r="2572.12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset=".64"
                              stopColor="#8c3aaa"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="#8c3aaa" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                          fill="url(#0)"
                        />
                        <path
                          d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                          fill="url(#1)"
                        />
                      </svg>
                    }
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 group-hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-150"
                  ></ButtonIcon>
                </div>
                <div className="group">
                  <ButtonIcon
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        fill="#29a1d5"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-white duration-150"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"></path>
                        </g>
                      </svg>
                    }
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 group-hover:bg-[#29a1d5] duration-150"
                  ></ButtonIcon>
                </div>
                <div className="group">
                  <ButtonIcon
                    icon={
                      <svg
                        width="27px"
                        height="27px"
                        viewBox="0 0 44 44"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#007EBB"
                        className="ml-[6px]"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>LinkedIn-color</title>{" "}
                          <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            {" "}
                            <g
                              id="Color-"
                              transform="translate(-702.000000, -265.000000)"
                              fill="#007EBB"
                              className="group-hover:fill-white duration-150"
                            >
                              {" "}
                              <path
                                d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                                id="LinkedIn"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    }
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 group-hover:bg-[#007EBB] duration-150"
                  ></ButtonIcon>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap justify-evenly">
                <div className="w-full lg:w-4/12 px-4">
                  <Typography fontSize="h4" className="text-white">
                    Company
                  </Typography>
                  <hr className="w-[90px] h-[5px] bg-red-500 border-0 mb-6 rounded-full" />
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about-us">
                        <Typography
                          fontSize="h4"
                          fontWeight="normal"
                          className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                        >
                          About us
                        </Typography>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/contact-us"}>
                        <Typography
                          fontSize="h4"
                          fontWeight="normal"
                          className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                        >
                          Contact us
                        </Typography>
                      </Link>
                    </li>
                    <li>
                      <Typography
                        fontSize="h4"
                        fontWeight="normal"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                      >
                        Our Service
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        fontSize="h4"
                        fontWeight="normal"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                      >
                        Privacy Policy
                      </Typography>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-8/12 px-4">
                  <Typography fontSize="h4" className="text-white">
                    Find Us
                  </Typography>
                  <hr className="w-[90px] h-[5px] rounded-full bg-red-500 border-0 mb-6" />
                  <ul className="list-unstyled">
                    <li>
                      <Typography
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                        fontWeight="normal"
                      >
                        1295 Aphiwat BLVO, Phnom Penh
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        fontSize="h4"
                        fontWeight="normal"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                      >
                        @SmakChet.co
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        fontSize="h4"
                        fontWeight="normal"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                      >
                        +885-465-876-43
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        fontSize="h4"
                        fontWeight="normal"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-150 ease cursor-pointer"
                      >
                        +885-465-876-43
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <Typography fontSize="h4" className="text-white">
                  Copyright © 2024 | By Smakchet
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
