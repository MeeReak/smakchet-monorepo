import { Button, ButtonIcon, Typography, Map ,InputData} from "@/components";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-screen h-[589px] bg-[#EEF5FF] absolute"></div>
      <div className="w-[1024px] m-auto mt-[100px] relative pt-[90px]">
        {/* banner */}

        <div className="w-full flex justify-between mb-[90px]">
          <div className="w-[60%] flex flex-col my-auto space-y-20">
            <Typography fontSize="h1" fontWeight="bold" align="center">
              Get in touch !!
            </Typography>
            <Typography fontSize="h3" align="center">
              We&apos;d love to hear from you, Don&apos;t hesitate to ask questions or
              make comments.{" "}
            </Typography>
          </div>
          <div className=" w-[40%]">
            <Image
              src={"/assets/image/contactus.svg"}
              alt={"contact us"}
              width={353}
              height={323}
            ></Image>
          </div>
        </div>

        {/* contact */}

        <div className="w-full flex justify-between">
          <div className="w-[436px] h-[320px] bg-white p-5 drop-shadow-md flex flex-col items-center justify-center space-y-8">
            <ButtonIcon
              className=""
              icon={
                <svg
                  width="53"
                  height="55"
                  viewBox="0 0 53 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.30079 9.625C5.30079 8.53098 5.71958 7.48177 6.46504 6.70819C7.21049 5.9346 8.22155 5.5 9.27579 5.5H12.318C13.2229 5.49961 14.1008 5.81961 14.8067 6.40713C15.5126 6.99466 16.0042 7.81453 16.2002 8.73125L18.0976 17.5945C18.3169 18.6206 18.1506 19.6948 17.6325 20.5979C17.1143 21.501 16.2836 22.1648 15.3098 22.4538L12.8374 23.188C11.7509 23.5098 11.1334 24.7143 11.5654 25.8005C13.1026 29.6572 15.3577 33.1613 18.2015 36.1125C21.0453 39.0636 24.4221 41.4038 28.1385 42.999C29.1852 43.4473 30.3459 42.8065 30.656 41.679L31.3635 39.1133C31.642 38.1027 32.2817 37.2406 33.1519 36.703C34.0221 36.1653 35.0573 35.9927 36.0461 36.2203L44.587 38.1893C45.4704 38.3927 46.2605 38.9029 46.8266 39.6354C47.3928 40.3679 47.7012 41.279 47.7008 42.218V45.375C47.7008 46.469 47.282 47.5182 46.5365 48.2918C45.7911 49.0654 44.78 49.5 43.7258 49.5H39.7508C36.7059 49.5 33.7538 49.0875 30.9369 48.3175C25.0567 46.6972 19.6938 43.4925 15.3918 39.0282C11.0898 34.5638 8.00163 28.9986 6.44029 22.8965C5.68205 19.9114 5.29904 16.8371 5.30079 13.75V9.625Z"
                    fill="black"
                  />
                </svg>
              }
            ></ButtonIcon>
            <Typography align="center" fontWeight="bold">
              Call Center
            </Typography>
            <Typography align="center">
              Interested in Smakchet or got a problem with our Website contact
              us through this number
            </Typography>
            <div>
              <Typography>+855 67791524</Typography>
              <Typography>+855 85854469</Typography>
            </div>
          </div>
          <div className="w-[436px] h-[320px] bg-white p-5 drop-shadow-md flex flex-col items-center">
            <ButtonIcon
              className=""
              icon={
                <svg
                  width="53"
                  height="55"
                  viewBox="0 0 53 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28864 6.50375C14.1157 5.8339 18.9804 5.49857 23.8504 5.5C28.7873 5.5 33.6474 5.841 38.4121 6.50375C41.7167 6.963 44.1891 9.55075 44.8649 12.7408C44.3597 12.643 43.849 12.5796 43.3358 12.551C39.182 12.3155 35.0188 12.3155 30.8649 12.551C24.4572 12.914 19.8754 18.4993 19.8754 24.7445V30.9045C19.8754 34.7903 21.6509 38.4258 24.5394 40.7L16.6424 48.895C16.3644 49.1831 16.0105 49.3792 15.6252 49.4587C15.2398 49.5381 14.8405 49.4973 14.4775 49.3413C14.1146 49.1853 13.8043 48.9213 13.5859 48.5824C13.3675 48.2436 13.2507 47.8452 13.2504 47.4375V37.9693C11.9227 37.8373 10.6004 37.6778 9.28864 37.4963C5.38784 36.9545 2.65039 33.4455 2.65039 29.48V14.52C2.65039 10.5573 5.38784 7.0455 9.28864 6.50375Z"
                    fill="black"
                  />
                  <path
                    d="M37.0996 16.5C35.0803 16.5 33.0716 16.555 31.0815 16.6705C26.9157 16.907 23.8496 20.548 23.8496 24.7445V30.9045C23.8496 35.0817 26.8892 38.7118 31.0311 38.9757C31.5982 39.0115 32.1653 39.0417 32.7324 39.0693C33.2624 39.094 33.7527 39.3167 34.1051 39.6852L40.3326 46.1478C40.6107 46.436 40.9649 46.6322 41.3505 46.7115C41.7361 46.7909 42.1356 46.7498 42.4987 46.5935C42.8617 46.4372 43.172 46.1727 43.3902 45.8334C43.6084 45.4942 43.7248 45.0954 43.7246 44.6875V38.995C47.5751 38.4588 50.3496 34.9718 50.3496 30.9788V24.7445C50.3496 20.548 47.2836 16.907 43.1178 16.6705C41.1136 16.5569 39.1068 16.5 37.0996 16.5Z"
                    fill="black"
                  />
                </svg>
              }
            ></ButtonIcon>
            <Typography align="center" fontWeight="bold" className="mt-[40px]">
              Message Directly
            </Typography>
            <Typography align="center" className="mt-[30px]">
              Message us directly so we can discuss more detail.
            </Typography>
            <Button
              className="mt-[50px] border border-black"
              bgColor="primary"
              colorScheme="White"
            >
              Message
            </Button>
          </div>
        </div>

        {/* Find us here */}

        <div className="w-full mt-[50px]">
          <Typography
            align="center"
            fontWeight="bold"
            fontSize="h3"
            className="mb-[10px]"
          >
            Find us here!!
          </Typography>
          <div className="w-full h-[493px]">
            <Map
              classname="w-full h-[493px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3126568670227!2d104.92259197489524!3d11.601044088602363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951f3148296db%3A0x5b289f3f5cef444!2sSabaiCode!5e0!3m2!1skm!2skh!4v1709280237207!5m2!1skm!2skh"
            />
          </div>
        </div>
        <div className="w-full mt-[40px]">
          <Typography align="center" fontWeight="bold" fontSize="h3">
            CONTACT INFORMATION
          </Typography>
          <div className="w-full flex justify-between">
            <div className="w-[68%] py-6">
              <form action="">
                <label className="text-xl font-medium">Username</label><br/>
                <InputData type="text" className="w-[600px] h-[50px] mt-3 mb-6 bg-[#FFFBFB]"></InputData><br/>
                <label className="text-xl font-medium">Email</label><br/>
                <InputData type="text" className="w-[600px] h-[50px] mt-3 mb-6 bg-[#FFFBFB]"></InputData><br/>
                <label className="text-xl font-medium">Phone Number</label><br/>
                <InputData type="text" className="w-[600px] h-[50px] mt-3 mb-6 bg-[#FFFBFB]"></InputData><br/>
                <label className="text-xl font-medium">Message</label><br/>
                <textarea className="w-[600px] h-[154px] mt-3 mb-6 border border-black py-[15px] pl-[20px] rounded-[10px] outline-none bg-[#FFFBFB]"></textarea>
                <Button bgColor="primary" className="text-center py-3 px-4">Send</Button>
              </form>
            </div>
            <div className="w-[30%] flex justify-center items-center">
              <Image
                src={"/assets/image/con_info.svg"}
                alt={"con_info"}
                width={385}
                height={245}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
