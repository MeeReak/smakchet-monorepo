import React from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { SubNarbar } from "./SubNarbar";

const Navbar = async ({
  session,
  sigSession,
}: {
  session: RequestCookie | undefined;
  // gaSession: RequestCookie | undefined;
  sigSession: RequestCookie | undefined;
}) => {
  // const role = await getUserProfile(session, sigSession);
  return (
    <>
      <SubNarbar role={""} />
    </>
  );
};

export { Navbar };
