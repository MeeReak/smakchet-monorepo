"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function getData({ id }: { id: string }) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";

    const api = `${apiUrl}/v1/events?page=1&limit=1&id=${id}`;
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

async function getOrgData({ id }: { id: string }) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003";

    const api = `${apiUrl}/v1/user/info/${id}`;
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
    console.log(error.message);
  }
}

async function getSimilarData({ cate }: { cate: string }) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3004";

    const api = `${apiUrl}/v1/events?page=1&limit=3&cate=${cate}`;
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
    console.log(error.message);
  }
}

async function getUserData({
  session,
  sigSession,
}: {
  session: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003";

    if (session === undefined || sigSession === undefined) {
      session = { name: "", value: "" };
      sigSession = { name: "", value: "" };
    }

    const api = `${apiUrl}/v1/user`;
    const response = await fetch(api, {
      method: "GET",
      headers: {
        Cookie: `${session!.name}=${session!.value}; ${sigSession!.name}=${
          sigSession!.value
        }`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error: unknown | any) {
    console.error("Error fetching data:", error);
    console.log(error.message);
  }
}

export { getData, getOrgData, getSimilarData, getUserData };
