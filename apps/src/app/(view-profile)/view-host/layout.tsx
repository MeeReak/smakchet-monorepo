import { Footer, Navbar, SecondNarbar } from "@/components";
import CardContext from "@/contexts/CardContext";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../.././globals.css";
import { cookies } from "next/headers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Smakchet | View",
  description: `"SmakChet" is a Website that include all your needed about volunteers. We have process all of your detail about event, date mange users etc.`,
  // icons: "/icons/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const session = cookieStore.get("session");
  const gaSesssion = cookieStore.get("_ga");
  const sigSession = cookieStore.get("session.sig");

  return (
    <html lang="en">
      <head>
        <title>Smakchet | View</title>
      </head>
      <body className={`bg-[#FAFAFA] max-h-full ${roboto.className}`}>
        <Navbar
          session={session}
          // gaSession={gaSesssion}
          sigSession={sigSession}
        />
        <CardContext>{children}</CardContext>
        <SecondNarbar />
        <Footer/>
      </body>
    </html>
  );
}
