import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import UserNavbar from "@/components/navbar/userNavbar";

export const metadata: Metadata = {
  title: "Competition",
  description: "Join Competition",
};

export default function CompetitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
        <UserNavbar/>
        {children}
    </div>
  );
}
