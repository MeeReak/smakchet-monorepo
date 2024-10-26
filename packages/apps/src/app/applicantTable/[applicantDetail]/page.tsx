import { AppliedPanel, Typography } from "@/components";
import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function getAppliedData({
  id,
  session,
  sigSession,
}: {
  id: string;
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const api = `${apiUrl}/v1/application/${id}`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
          sigSession!.value
        }`,
      },
      cache: "no-cache",
    });
    return await response.json();
  } catch (error: unknown | any) {
    console.log("Error hz", error.message);
  }
}

const Applicant = async ({
  params,
}: {
  params: { applicantDetail: string };
}) => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");
  const appliedData = await getAppliedData({
    id: params.applicantDetail,
    session,
    sigSession,
  });
  return (
    <div className="bg-[#FAFAFA] flex justify-center">
      {/* marign left and right */}
      <div className="flex flex-col pt-[100px] w-[1024px]">
        {/* header */}
        <AppliedPanel data={appliedData.data} />
        {/* body */}
        <div className="pt-5 gap-x-5 flex justify-center">
          {/* left part */}
          <div className="border flex flex-col h-fit px-5 py-6  bg-white border-gray-200 rounded-[10px]">
            <Image
              src={"/../assets/image/profile.png"}
              width={150}
              height={150}
              alt="image logo"
              className="self-center rounded-full mb-5"
            />
            <div className="space-y-2">
              <div className="flex gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                    stroke="#207BFF"
                    strokeWidth="2"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="#207BFF"
                    strokeWidth="2"
                    stroke-linecap="round"
                  />
                </svg>
                <Typography fontSize="h4">
                  {appliedData.data.userInfo.name}
                </Typography>
              </div>
              <div className="flex gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="#207BFF"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                    stroke="#207BFF"
                    strokeWidth="2"
                  />
                </svg>

                <Typography fontSize="h4">
                  {appliedData.data.userInfo.email}
                </Typography>
              </div>
              <div className="flex gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                    stroke="#207BFF"
                    strokeWidth="2"
                  />
                </svg>

                <Typography fontSize="h4">
                  {appliedData.data.userInfo.phonenumber}
                </Typography>
              </div>
              <div className="flex gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.398 19.804L12.8585 20.6917L12.8585 20.6917L12.398 19.804ZM11.602 19.804L11.1415 20.6917L11.1415 20.6917L11.602 19.804ZM18 11C18 13.1458 16.9079 14.9159 15.545 16.2906C14.183 17.6644 12.6342 18.555 11.9376 18.9163L12.8585 20.6917C13.6448 20.2838 15.397 19.2805 16.9653 17.6987C18.5326 16.1178 20 13.8706 20 11H18ZM12 5C15.3137 5 18 7.68629 18 11H20C20 6.58172 16.4183 3 12 3V5ZM6 11C6 7.68629 8.68629 5 12 5V3C7.58172 3 4 6.58172 4 11H6ZM12.0624 18.9163C11.3658 18.555 9.81702 17.6644 8.45503 16.2906C7.09211 14.9159 6 13.1458 6 11H4C4 13.8706 5.46741 16.1178 7.03474 17.6987C8.60299 19.2805 10.3552 20.2838 11.1415 20.6917L12.0624 18.9163ZM11.9376 18.9163C11.9514 18.9091 11.9733 18.9023 12 18.9023C12.0267 18.9023 12.0486 18.9091 12.0624 18.9163L11.1415 20.6917C11.6831 20.9726 12.3169 20.9726 12.8585 20.6917L11.9376 18.9163ZM14 11C14 12.1046 13.1046 13 12 13V15C14.2091 15 16 13.2091 16 11H14ZM12 9C13.1046 9 14 9.89543 14 11H16C16 8.79086 14.2091 7 12 7V9ZM10 11C10 9.89543 10.8954 9 12 9V7C9.79086 7 8 8.79086 8 11H10ZM12 13C10.8954 13 10 12.1046 10 11H8C8 13.2091 9.79086 15 12 15V13Z"
                    fill="#207BFF"
                  />
                </svg>

                <Typography fontSize="h4">
                  {appliedData.data.userInfo.address}
                </Typography>
              </div>
            </div>
          </div>

          {/* right part */}

          <div className="border border-gray-200 bg-white rounded-[10px] !overflow-y-scroll scrollbar-default h-[70vh]">
            <div className="space-y-7 px-5 py-6">
              {appliedData.data.responses.map((item: any, index: number) => (
                <div key={index} className="flex flex-col ">
                  <Typography
                    fontSize="h4"
                    fontWeight="semibold"
                    className="text-gray-800 line-clamp-1"
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    fontSize="h4"
                    fontWeight="normal"
                    className="text-gray-600"
                  >
                    {item.answer}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
