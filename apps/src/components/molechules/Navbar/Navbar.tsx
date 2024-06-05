import React from "react";
import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { SubNarbar } from "./SubNarbar";

async function getUserProfile(
  session: RequestCookie | undefined,
  // gaSession: RequestCookie | undefined,
  sigSession: RequestCookie | undefined
) {
  if (!session || !sigSession) {
    return;
  }
  // ${gaSession?.name}=${gaSession!.value};
  const response = await axios.get("http://localhost:3000/v1/user/role", {
    withCredentials: true,
    headers: {
      Cookie: ` ${session!.name}=${
        session!.value
      }; ${sigSession!.name}=${sigSession!.value}`,
    },
  });
  console.log("response", response.data.data);
  return response.data.data;
}

const Navbar = async ({
  session,
  // gaSession,
  sigSession,
}: {
  session: RequestCookie | undefined;
  // gaSession: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) => {
  console.log("session", session);
  const role = await getUserProfile(session, sigSession);
  return (
    <>
      <SubNarbar role={role} />
    </>
  );
};

export { Navbar };
