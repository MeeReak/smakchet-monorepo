"use server";

import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function getTrendingData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";
  const api = `${apiUrl}/v1/events/trending`;

  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    return await response.json();
  } catch (error) {
    throw new Error(
      "We’re experiencing some technical difficulties. Please check back soon."
    );
  }
}

async function getDataByCate({ cate }: { cate: string }) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";

    const api = `${apiUrl}/v1/events?page=1&limit=6&cate=${cate}`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    const result = await response.json();
    return result;
  } catch (error: unknown | any) {
    console.error("Error fetching data:", error);
    console.log(error.message);
  }
}

async function getUserInfo({
  session,
  sigSession,
}: {
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    const api = `${apiUrl}/v1/user`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
          sigSession!.value
        }`,
      },
      cache: "no-cache",
    });

    const result = await response.json();
    return result;
  } catch (error: unknown | any) {
    console.error("Error fetching data:", error);
    console.log(error.message);
  }
}

async function getUserProfile(
  session: RequestCookie | undefined,
  sigSession: RequestCookie | undefined
) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  if (session === undefined || sigSession === undefined) {
    session = { name: "", value: "" };
    sigSession = { name: "", value: "" };
  }

  const response = await axios.get(`${apiUrl}/v1/user`, {
    withCredentials: true,
    headers: {
      Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
        sigSession!.value
      }`,
    },
  });
  return response.data.data;
}

export { getTrendingData, getDataByCate, getUserInfo };
