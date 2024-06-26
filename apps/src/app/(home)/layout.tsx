import {  Navbar, SecondNarbar } from "@/components";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import ".././globals.css";
import { cookies } from "next/headers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Smakchet",
  description: `"SmakChet" is a Website that include all your needed about volunteers. We have process all of your detail about event, date mange users etc.`,
  // icons: "/icons/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const sigSession = cookieStore.get("session.sig");

  return (
    <html lang="en">
      <head>
        <title>Smakchet</title>
      </head>
      <body className={`bg-[#FAFAFA] max-h-full ${roboto.className}`}>
        {/* <Navbar session={session} sigSession={sigSession} /> */}
        {children}
        <SecondNarbar />

        {/* <Footer /> */}
      </body>
    </html>
  );
}
