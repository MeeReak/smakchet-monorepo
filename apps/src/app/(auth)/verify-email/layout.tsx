import { Footer, Navbar, SecondNarbar } from "@/components";
import CardContext from "@/contexts/CardContext";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../.././globals.css";

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
  return (
    <html lang="en">
      <head>
        <title>Smakchet | verify email</title>
      </head>
      <body className={`bg-[#FAFAFA] max-h-full ${roboto.className}`}>
        {/* <Navbar /> */}
        <CardContext>{children}</CardContext>
        {/* <SecondNarbar /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
